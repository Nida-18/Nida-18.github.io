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

  const tags =
    Array.isArray(tag)
      ? tag
      : (tag || "").split(",")

  return (
    <Layout>
      <article style={articleStyle}>

        <Link to="/notes" style={backStyle}>
          ← All Notes
        </Link>

        {/* TAGS */}
        <div style={tagRowStyle}>
          {tags.map((t) => (
            <span key={t} style={tagStyle}>
              {t.trim()}
            </span>
          ))}
        </div>

        <h1 style={h1Style}>{title}</h1>

        <div style={metaStyle}>
          {date}
        </div>

        {/* CONTENT */}
        <div
          className="markdown-body"
          style={contentStyle}
          dangerouslySetInnerHTML={{ __html: note.html }}
        />

        <footer style={footerStyle}>
          <Link to="/notes" style={backStyle}>
            ← Back to Notes
          </Link>
        </footer>

      </article>
    </Layout>
  )
}

/* ================= STYLES ================= */

const articleStyle = {
  maxWidth: 720,
  margin: "0 auto",
  padding: "4rem 1.5rem 6rem",
}

/* NAV */
const backStyle = {
  fontSize: 13,
  color: "var(--muted)",
  textDecoration: "none",
  display: "inline-block",
  marginBottom: "1.2rem",
}

/* TAGS */
const tagRowStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: 6,
  marginBottom: "1rem",
}

const tagStyle = {
  fontSize: 11,
  color: "var(--muted)",
  background: "var(--bg3)",
  border: "1px solid var(--border)",
  padding: "3px 8px",
  borderRadius: 6,
  fontFamily: "var(--mono)",
}

/* TITLE */
const h1Style = {
  fontFamily: "var(--serif)",
  fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
  fontWeight: 400,
  color: "var(--text)",
  lineHeight: 1.2,
  marginBottom: "0.5rem",
}

/* META */
const metaStyle = {
  fontSize: 12,
  color: "var(--subtle)",
  fontFamily: "var(--mono)",
  marginBottom: "2rem",
}

/* CONTENT (IMPORTANT UPGRADE) */
const contentStyle = {
  color: "var(--muted)",
  fontSize: 16,
  lineHeight: 1.85,
}

/* FOOTER */
const footerStyle = {
  marginTop: "3rem",
  paddingTop: "2rem",
  borderTop: "1px solid var(--border)",
}
