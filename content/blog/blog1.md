---
title: "Getting Started with React Server Components"
date: "2025-01-14"
description: "A practical introduction to RSC — what they are, how they work, and when to use them."
isNew: true
---

React Server Components (RSC) represent one of the biggest shifts in how we build React apps. Instead of shipping all your component logic to the browser, RSC lets you run components on the server and stream the result to the client.

## What's the difference?

A **Server Component** runs only on the server. It can:

- Directly access databases or file systems
- Keep sensitive logic and API keys off the client
- Reduce the JavaScript bundle sent to the browser

A **Client Component** works the same as components always have — they run in the browser and can use hooks like `useState` and `useEffect`.

```jsx
// This is a Server Component (no "use client" directive)
async function BlogPost({ slug }) {
  const post = await db.posts.findOne({ slug })
  return <article>{post.content}</article>
}
```

## When should you use them?

Use server components for anything that needs data but doesn't need interactivity. Use client components for anything with user interaction, browser APIs, or real-time state.

The mental model is simple: fetch on the server, interact on the client.
