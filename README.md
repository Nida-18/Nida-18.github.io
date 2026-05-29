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




