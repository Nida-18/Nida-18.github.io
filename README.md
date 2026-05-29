# Nida — Gatsby Portfolio

A dark, minimal personal portfolio built with Gatsby 5, Markdown, and GraphQL.

## Project Structure

```
gatsby-portfolio/
├── content/
│   ├── blog/          ← Blog posts (.md files)
│   └── notes/         ← Notes (.md files)
├── src/
│   ├── components/
│   │   └── Layout.js  ← Nav + Footer wrapper
│   ├── pages/
│   │   ├── index.js   ← Homepage (Blog + Notes + Projects)
│   │   ├── blog.js    ← Full blog list
│   │   ├── notes.js   ← Full notes list
│   │   └── about.js   ← About Me page
│   ├── templates/
│   │   ├── blog-post.js ← Individual blog post page
│   │   └── note.js      ← Individual note page
│   └── styles/
│       └── global.css   ← CSS variables + global resets
├── gatsby-config.js   ← Plugins + site metadata
├── gatsby-node.js     ← Programmatic page creation
└── package.json
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run develop
# → Open http://localhost:8000

# 3. Build for production
npm run build

# 4. Preview production build
npm run serve
```

## Adding Content

### New blog post

Create a file in `content/blog/my-post-title.md`:

```md
---
title: "My Post Title"
date: "2025-06-01"
description: "A short description shown in the list."
isNew: true
---

Your content here. Markdown is fully supported.
```

### New note

Create a file in `content/notes/my-note.md`:

```md
---
title: "My Note Title"
date: "2025-06-01"
tag: "life"
---

Your note content here.
```

## Customisation

| What | Where |
|------|-------|
| Your name | `src/components/Layout.js` → nav logo + footer |
| Social links | `src/components/Layout.js` → footer links |
| Projects list | `src/pages/index.js` → `const projects = [...]` |
| Bio text | `src/pages/about.js` |
| Skills | `src/pages/about.js` → `const skills = [...]` |
| Colours / fonts | `src/styles/global.css` → `:root` variables |
| Site metadata | `gatsby-config.js` → `siteMetadata` |

## Deployment

Works out of the box with **Netlify**, **Vercel**, or **Gatsby Cloud**:

```bash
# Netlify
netlify deploy --build

# Vercel
vercel
```

Both detect Gatsby automatically. Build command: `gatsby build`. Publish dir: `public/`.
