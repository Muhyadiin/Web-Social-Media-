#!/usr/bin/env node
// ------------------------------------------------------------------
// Social Media Management — lightweight post scheduler
//
// Reads a list of planned posts and reports which are due, upcoming,
// or already published. A starting point you can wire to real
// platform APIs (X, Instagram, LinkedIn, etc.).
//
// Usage:
//   node scheduler.js [path-to-posts.json]
// ------------------------------------------------------------------
"use strict";

const fs = require("fs");
const path = require("path");

const PLATFORMS = ["twitter", "instagram", "linkedin", "facebook", "tiktok"];

/**
 * Load posts from a JSON file.
 * @param {string} file
 * @returns {Array<object>}
 */
function loadPosts(file) {
  if (!fs.existsSync(file)) {
    throw new Error(`Posts file not found: ${file}`);
  }
  const raw = fs.readFileSync(file, "utf8");
  const posts = JSON.parse(raw);
  if (!Array.isArray(posts)) {
    throw new Error("Posts file must contain a JSON array.");
  }
  return posts;
}

/**
 * Validate a single post object.
 * @param {object} post
 * @param {number} index
 * @returns {string[]} list of error messages (empty if valid)
 */
function validatePost(post, index) {
  const errors = [];
  if (!post.platform || !PLATFORMS.includes(post.platform)) {
    errors.push(`post[${index}]: platform must be one of ${PLATFORMS.join(", ")}`);
  }
  if (!post.content || typeof post.content !== "string") {
    errors.push(`post[${index}]: content is required`);
  }
  if (!post.scheduledAt || isNaN(Date.parse(post.scheduledAt))) {
    errors.push(`post[${index}]: scheduledAt must be a valid ISO date`);
  }
  if (post.platform === "twitter" && post.content && post.content.length > 280) {
    errors.push(`post[${index}]: twitter content exceeds 280 characters`);
  }
  return errors;
}

/**
 * Categorise posts relative to now.
 * @param {Array<object>} posts
 * @param {Date} now
 */
function categorise(posts, now) {
  const due = [];
  const upcoming = [];
  const published = [];

  for (const post of posts) {
    const when = new Date(post.scheduledAt);
    if (post.published) {
      published.push(post);
    } else if (when <= now) {
      due.push(post);
    } else {
      upcoming.push(post);
    }
  }

  upcoming.sort((a, b) => new Date(a.scheduledAt) - new Date(b.scheduledAt));
  return { due, upcoming, published };
}

function formatPost(post) {
  const when = new Date(post.scheduledAt).toLocaleString();
  const preview = post.content.length > 60 ? post.content.slice(0, 57) + "..." : post.content;
  return `  [${post.platform.padEnd(9)}] ${when} — ${preview}`;
}

function main() {
  const file = process.argv[2] || path.join(__dirname, "posts.sample.json");
  let posts;
  try {
    posts = loadPosts(file);
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
  }

  // Validate
  const allErrors = posts.flatMap((p, i) => validatePost(p, i));
  if (allErrors.length) {
    console.error("Validation failed:");
    allErrors.forEach((e) => console.error("  - " + e));
    process.exit(1);
  }

  const now = new Date();
  const { due, upcoming, published } = categorise(posts, now);

  console.log(`\nSocial Media Scheduler — ${now.toLocaleString()}`);
  console.log("=".repeat(52));
  console.log(`\nDue now (${due.length}):`);
  due.forEach((p) => console.log(formatPost(p)));
  console.log(`\nUpcoming (${upcoming.length}):`);
  upcoming.forEach((p) => console.log(formatPost(p)));
  console.log(`\nAlready published (${published.length}):`);
  published.forEach((p) => console.log(formatPost(p)));
  console.log("");
}

// Export for testing; run when invoked directly.
module.exports = { loadPosts, validatePost, categorise, PLATFORMS };

if (require.main === module) {
  main();
}
