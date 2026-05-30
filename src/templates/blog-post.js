// src/templates/blog-post.js
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        description
      }
    }
  }
`

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const { title, date, description } = post.frontmatter

  return (
    <Layout>
      <article style={articleStyle}>
        <header style={{ marginBottom: "2.5rem" }}>
          <Link to="/blog" style={backStyle}>← All Posts</Link>
          <h1 style={h1Style}>{title}</h1>
          {description && <p style={descStyle}>{description}</p>}
          <div style={metaStyle}>
            <span>{date}</span>
            <span style={{ color: "var(--border2)" }}>·</span>
            <span>{post.timeToRead} min read</span>
          </div>
        </header>

        <div
          className="markdown-body"
          style={proseStyle}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <footer style={footerStyle}>
          <Link to="/blog" style={backStyle}>← Back to Blog</Link>
        </footer>
      </article>
    </Layout>
  )
}
const articleStyle = {
  width: "100%",
  maxWidth: "1020px",
  margin: "0 auto",
  padding: "4rem 1.5rem 6rem",
}
const backStyle = { fontSize: 13, color: "var(--muted)", textDecoration: "none", display: "inline-block", marginBottom: "1.5rem" }
const h1Style = { fontFamily: "var(--serif)", fontSize: "clamp(2.4rem,6vw,4.8rem)", fontWeight: 400, color: "var(--text)", lineHeight: 1.2, marginBottom: "0.75rem" }
const descStyle = { fontSize: 16, color: "var(--muted)", marginBottom: "1rem", lineHeight: 1.6 }
const metaStyle = { display: "flex", gap: 8, fontSize: 12, color: "var(--subtle)", fontFamily: "var(--mono)" }
const footerStyle = { marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }
const proseStyle = {
  color: "var(--muted)",
  lineHeight: 1.85,
  fontSize: 15,
  // Prose element styles applied via global.css / inline below won't affect
  // dangerouslySetInnerHTML children — add rules to global.css instead.
}
