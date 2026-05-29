
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/nida/Documents/gatsby-portfolio/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/home/nida/Documents/gatsby-portfolio/src/pages/about.js")),
  "component---src-pages-blog-js": preferDefault(require("/home/nida/Documents/gatsby-portfolio/src/pages/blog.js")),
  "component---src-pages-index-js": preferDefault(require("/home/nida/Documents/gatsby-portfolio/src/pages/index.js")),
  "component---src-pages-notes-js": preferDefault(require("/home/nida/Documents/gatsby-portfolio/src/pages/notes.js")),
  "component---src-pages-projects-js": preferDefault(require("/home/nida/Documents/gatsby-portfolio/src/pages/projects.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/home/nida/Documents/gatsby-portfolio/src/templates/blog-post.js")),
  "component---src-templates-note-js": preferDefault(require("/home/nida/Documents/gatsby-portfolio/src/templates/note.js")),
  "component---src-templates-project-js": preferDefault(require("/home/nida/Documents/gatsby-portfolio/src/templates/project.js"))
}

