// src/templates/note.js
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

export const query = graphql`
  query NoteQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM YYYY")
        tag
      }
    }
  }
`

export default function Note({ data }) {
  const note = data.markdownRemark
  const { title, date, tag } = note.frontmatter

  return (
    <Layout>
      <article style={articleStyle}>
        <Link to="/notes" style={backStyle}>← All Notes</Link>
        <div style={tagStyle}>{tag}</div>
        <h1 style={h1Style}>{title}</h1>
        <div style={metaStyle}>{date}</div>

        <div
          style={{ color: "var(--muted)", lineHeight: 1.85, fontSize: 15, marginTop: "2rem" }}
          dangerouslySetInnerHTML={{ __html: note.html }}
        />

        <footer style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
          <Link to="/notes" style={backStyle}>← Back to Notes</Link>
        </footer>
      </article>
    </Layout>
  )
}

const articleStyle = { maxWidth: 660, margin: "0 auto", padding: "4rem 2rem 6rem" }
const backStyle = { fontSize: 13, color: "var(--muted)", textDecoration: "none", display: "inline-block", marginBottom: "1.5rem" }
const tagStyle = { fontSize: 11, color: "var(--subtle)", fontFamily: "var(--mono)", marginBottom: 8 }
const h1Style = { fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,4vw,2.4rem)", fontWeight: 400, color: "var(--text)", lineHeight: 1.2, marginBottom: "0.5rem" }
const metaStyle = { fontSize: 12, color: "var(--subtle)", fontFamily: "var(--mono)" }
