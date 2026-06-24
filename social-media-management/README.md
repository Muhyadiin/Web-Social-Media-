# Social Media Management

A lightweight, dependency-free post scheduler and content planner. It reads a
list of planned posts, validates them, and reports which are **due**,
**upcoming**, or already **published**.

Use it as a content calendar today, and as the foundation for real platform
integrations (X/Twitter, Instagram, LinkedIn, Facebook, TikTok) tomorrow.

## Requirements

- [Node.js](https://nodejs.org/) 16 or newer (no npm dependencies needed).

## Usage

```bash
# Run against the bundled sample data
node scheduler.js

# Or point it at your own posts file
node scheduler.js path/to/posts.json
```

## Post format

Posts are a JSON array. Each post:

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `platform` | string | yes | one of `twitter`, `instagram`, `linkedin`, `facebook`, `tiktok` |
| `content` | string | yes | the post body; Twitter is capped at 280 chars |
| `scheduledAt` | string | yes | ISO 8601 date-time |
| `published` | boolean | no | mark `true` once posted |

See [`posts.sample.json`](./posts.sample.json) for an example.

## Roadmap

- [ ] Persist post state to `posts.json`
- [ ] Real publishing adapters per platform
- [ ] CLI flags for filtering by platform / date range
- [ ] Analytics summary (engagement per post)

## Extending

`scheduler.js` exports its core functions (`loadPosts`, `validatePost`,
`categorise`) so they can be unit-tested or reused. Add a publishing adapter
that consumes the `due` list returned by `categorise()` and calls the relevant
platform API.
