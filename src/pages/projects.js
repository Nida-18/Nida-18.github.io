// src/pages/blog.js
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

export const query = graphql`
  query BlogPageQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/projects/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        fields { slug }
        timeToRead
        frontmatter {
          title
          date(formatString: "MMM D, YYYY")
          description
          isNew
        }
      }
    }
  }
`

export default function Project({ data }) {
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div style={wrapStyle}>
        <header style={{ marginBottom: "3rem" }}>
          <h1 style={h1Style}> 🔐Project</h1>
          <p style={subStyle}> — {projects.length} projects</p>
        </header>

        <ul style={{ listStyle: "none" }}>
          {projects.map((project) => (
            <li key={project.fields.slug} style={itemStyle}>
              <div style={metaStyle}>
                <span style={dateStyle}>{project.frontmatter.date}</span>
                <span style={readStyle}>{project.timeToRead} min read</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  {project.frontmatter.isNew && <span style={badgeStyle}>New</span>}
                  <Link key={project.fields.slug} to={project.fields.slug} style={titleStyle}>
                    {project.frontmatter.title}
                  </Link>
                </div>
                {project.frontmatter.description && (
                  <p style={descStyle}>{project.frontmatter.description}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

const wrapStyle = { maxWidth: "var(--max-w)", margin: "0 auto", padding: "4rem 2rem 6rem" }
const h1Style = { fontFamily: "var(--serif)", fontSize: "2.2rem", fontWeight: 400, color: "var(--text)", marginBottom: 8 }
const subStyle = { fontSize: 13, color: "var(--subtle)" }
const itemStyle = { display: "flex", gap: "1.5rem", padding: "1.2rem 0", borderBottom: "1px solid var(--border)", alignItems: "flex-start" }
const metaStyle = { display: "flex", flexDirection: "column", gap: 4, minWidth: 88 }
const dateStyle = { fontSize: 12, color: "var(--subtle)", fontFamily: "var(--mono)" }
const readStyle = { fontSize: 11, color: "var(--subtle)", fontFamily: "var(--mono)" }
const titleStyle = { fontSize: 15, color: "var(--text)", textDecoration: "none", fontWeight: 400 }
const descStyle = { fontSize: 13, color: "var(--muted)", marginTop: 2, lineHeight: 1.6 }
const badgeStyle = { fontSize: 10, fontWeight: 500, padding: "2px 8px", borderRadius: 20, background: "linear-gradient(90deg,#e8715a,#c45a9f)", color: "#fff" }
