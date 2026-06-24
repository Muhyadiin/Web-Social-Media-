/* ==================================================================
   Eng. Muhiadin Ali — site interactions & integrations
   ------------------------------------------------------------------
   EDIT THIS BLOCK ONCE — values propagate across every page.
   ================================================================== */
window.SITE_CONFIG = {
  // WhatsApp number in international format, digits only (no "+", spaces or dashes).
  whatsapp: "252634916263",
  // Default pre-filled WhatsApp message.
  whatsappMessage: "Hello Eng. Muhiadin, I'd like to discuss a project (BOQ / takeoff / structural / cost estimation).",
  email: "muxiyadiinali@gmail.com",
  // ⚠️ Optional: paste your Formspree endpoint to receive form submissions by email.
  //    Get one free at https://formspree.io  (e.g. "https://formspree.io/f/abcdwxyz")
  //    Leave empty ("") to fall back to opening the visitor's email client.
  formEndpoint: ""
};

(function () {
  "use strict";
  var cfg = window.SITE_CONFIG;

  /* ---- Build all WhatsApp links from config ---- */
  function waHref(customMsg) {
    var msg = encodeURIComponent(customMsg || cfg.whatsappMessage);
    return "https://wa.me/" + cfg.whatsapp + "?text=" + msg;
  }
  document.querySelectorAll(".js-wa").forEach(function (a) {
    a.setAttribute("href", waHref(a.getAttribute("data-msg")));
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
  });
  document.querySelectorAll(".js-email").forEach(function (a) {
    a.setAttribute("href", "mailto:" + cfg.email);
  });
  document.querySelectorAll(".js-email-text").forEach(function (el) {
    el.textContent = cfg.email;
  });

  /* ---- Mobile nav ---- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { links.classList.remove("open"); }
    });
  }

  /* ---- Active nav link (by current page) ---- */
  var path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) a.classList.add("active");
  });

  /* ---- Footer year ---- */
  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  /* ---- Lead / contact forms ---- */
  document.querySelectorAll("form.js-lead").forEach(function (form) {
    var status = form.querySelector(".form-status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var name = (data.get("name") || "").toString().trim();
      var email = (data.get("email") || "").toString().trim();
      var message = (data.get("message") || "").toString().trim();
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !emailOk || !message) {
        setStatus(status, "Please enter your name, a valid email, and a message.", "err");
        return;
      }

      if (cfg.formEndpoint) {
        // Send via Formspree (or compatible) endpoint.
        setStatus(status, "Sending…", "");
        fetch(cfg.formEndpoint, {
          method: "POST",
          headers: { "Accept": "application/json" },
          body: data
        }).then(function (res) {
          if (res.ok) {
            setStatus(status, "Thank you, " + name + "! Your message has been sent. I'll reply within 1 business day.", "ok");
            form.reset();
          } else {
            fallbackMailto(name, email, data);
            setStatus(status, "Opening your email app to complete sending…", "ok");
          }
        }).catch(function () {
          fallbackMailto(name, email, data);
          setStatus(status, "Opening your email app to complete sending…", "ok");
        });
      } else {
        // No endpoint configured: open the user's email client pre-filled.
        fallbackMailto(name, email, data);
        setStatus(status, "Thanks, " + name + "! Opening your email app to send your request…", "ok");
        form.reset();
      }
    });
  });

  function setStatus(el, msg, cls) {
    if (!el) return;
    el.textContent = msg;
    el.className = "form-status" + (cls ? " " + cls : "");
  }

  function fallbackMailto(name, email, data) {
    var service = data.get("service") || "";
    var phone = data.get("phone") || "";
    var message = data.get("message") || "";
    var subject = "Project inquiry" + (service ? " — " + service : "") + " (" + name + ")";
    var body =
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      (phone ? "Phone/WhatsApp: " + phone + "\n" : "") +
      (service ? "Service: " + service + "\n" : "") +
      "\n" + message + "\n";
    window.location.href = "mailto:" + cfg.email +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
  }

  /* ---- Reveal on scroll (progressive enhancement) ---- */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.style.opacity = 1; en.target.style.transform = "none"; io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      el.style.opacity = 0; el.style.transform = "translateY(16px)"; el.style.transition = "opacity .5s ease, transform .5s ease";
      io.observe(el);
    });
  }
})();
