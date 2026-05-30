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

        <header style={headerStyle}>
          <h1 style={h1Style}>🗒️ Notes</h1>
          <p style={subStyle}>
            Life, music, projects, and everything else.
          </p>
        </header>

        <div style={gridStyle}>
          {notes.map((note) => {
             return (
              <Link key={note.fields.slug} to={note.fields.slug} style={cardStyle}>

      
                <div style={titleStyle}>
                  {note.frontmatter.title}
                </div>

                <div style={dateStyle}>
                  {note.frontmatter.date}
                </div>

              </Link>
            )
          })}
        </div>

      </div>
    </Layout>
  )
}

/* ================= STYLES ================= */

const wrapStyle = {
  maxWidth: "var(--max-w)",
  margin: "0 auto",
  padding: "4rem 1.5rem 6rem",
}

/* HEADER */
const headerStyle = {
  marginBottom: "2.5rem",
}

const h1Style = {
  fontFamily: "var(--serif)",
  fontSize: "clamp(2rem, 4vw, 2.6rem)",
  fontWeight: 400,
  color: "var(--text)",
  marginBottom: 6,
}

const subStyle = {
  fontSize: 14,
  color: "var(--subtle)",
  lineHeight: 1.6,
}

/* GRID */
const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
  gap: 14,
}

/* CARD */
const cardStyle = {
  background: "var(--bg2)",
  border: "1px solid var(--border)",
  borderRadius: 12,
  padding: "1.1rem",
  textDecoration: "none",
  display: "block",
  transition: "transform 0.15s ease, border 0.15s ease",
}



/* TEXT */
const titleStyle = {
  fontSize: 15,
  color: "var(--text)",
  lineHeight: 1.5,
  marginBottom: "0.5rem",
}

const dateStyle = {
  fontSize: 12,
  color: "var(--subtle)",
  fontFamily: "var(--mono)",
}
