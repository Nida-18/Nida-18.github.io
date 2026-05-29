const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

// Add a slug field to every Markdown node
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: "content",
    })

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

// Create individual pages
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      blog: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }

      notes: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/notes/" } }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }

      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/projects/" } }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error building pages", result.errors)
    return
  }

  // Blog pages
  const blogTemplate = path.resolve("src/templates/blog-post.js")

  result.data.blog.nodes.forEach((node) => {
    createPage({
      path: node.fields.slug,
      component: blogTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })

  // Note pages
  const noteTemplate = path.resolve("src/templates/note.js")

  result.data.notes.nodes.forEach((node) => {
    createPage({
      path: node.fields.slug,
      component: noteTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })

  // Project pages
  const projectTemplate = path.resolve("src/templates/project.js")

  result.data.projects.nodes.forEach((node) => {
    createPage({
      path: node.fields.slug,
      component: projectTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
