
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-about-js": preferDefault(require("/home/nida/Documents/My-Portfolio/src/pages/about.js")),
  "component---src-pages-blog-js": preferDefault(require("/home/nida/Documents/My-Portfolio/src/pages/blog.js")),
  "component---src-pages-index-js": preferDefault(require("/home/nida/Documents/My-Portfolio/src/pages/index.js")),
  "component---src-pages-notes-js": preferDefault(require("/home/nida/Documents/My-Portfolio/src/pages/notes.js")),
  "component---src-pages-projects-js": preferDefault(require("/home/nida/Documents/My-Portfolio/src/pages/projects.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/home/nida/Documents/My-Portfolio/src/templates/blog-post.js")),
  "component---src-templates-note-js": preferDefault(require("/home/nida/Documents/My-Portfolio/src/templates/note.js")),
  "component---src-templates-project-js": preferDefault(require("/home/nida/Documents/My-Portfolio/src/templates/project.js"))
}

