// src/pages/notes.js
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

export const query = graphql`
  query NotesPageQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/notes/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        fields { slug }
        frontmatter {
          title
          date(formatString: "MMM YYYY")
          tag
        }
      }
    }
  }
`

export default function Notes({ data }) {
  const notes = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div style={wrapStyle}>
        <header style={{ marginBottom: "3rem" }}>
          <h1 style={h1Style}>🗒️ Notes</h1>
          <p style={subStyle}>Life, music, projects, and everything else.</p>
        </header>

        <div style={gridStyle}>
          {notes.map((note) => (
            <Link key={note.fields.slug} to={note.fields.slug} style={cardStyle}>
              <div style={tagStyle}>{note.frontmatter.tag}</div>
              <div style={titleStyle}>{note.frontmatter.title}</div>
              <div style={dateStyle}>{note.frontmatter.date}</div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

const wrapStyle = { maxWidth: "var(--max-w)", margin: "0 auto", padding: "4rem 2rem 6rem" }
const h1Style = { fontFamily: "var(--serif)", fontSize: "2.2rem", fontWeight: 400, color: "var(--text)", marginBottom: 8 }
const subStyle = { fontSize: 13, color: "var(--subtle)" }
const gridStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 12 }
const cardStyle = { background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 10, padding: "1rem 1.1rem", textDecoration: "none", display: "block" }
const tagStyle = { fontSize: 11, color: "var(--subtle)", fontFamily: "var(--mono)", marginBottom: "0.4rem" }
const titleStyle = { fontSize: 13.5, color: "var(--text)", lineHeight: 1.45 }
const dateStyle = { fontSize: 11, color: "var(--subtle)", marginTop: "0.6rem", fontFamily: "var(--mono)" }
