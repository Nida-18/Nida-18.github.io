// src/pages/index.js
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

export const query = graphql`
  query HomePageQuery {
    blog: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      sort: { frontmatter: { date: DESC } }
      limit: 5
    ) {
      nodes {
        fields { slug }
        frontmatter {
          title
          date(formatString: "MMM D, YYYY")
          isNew
        }
      }
    }

    notes: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/notes/" } }
      sort: { frontmatter: { date: DESC } }
      limit: 4
    ) {
      nodes {
        fields { slug }
        frontmatter {
          title
          date(formatString: "MMM YYYY")
 
        }
      }
    }

    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/projects/" } }
      sort: { frontmatter: { date: DESC } }
      limit: 4
    ) {
      nodes {
        fields { slug }
        frontmatter {
          title
          description
          tags
          stars
          url
        }
      }
    }
  }
`

export default function Home({ data }) {
  const posts = data.blog.nodes
  const notes = data.notes.nodes
  const projects = data.projects.nodes

  return (
    <Layout>

      {/* HERO */}
      <div style={heroStyle}>
        <div>
          <h1 style={h1Style}>Hello there, this is Nida!</h1>
          <h2 style={h2Style}>Welcome to my Tech Corner</h2>

          <p style={heroDescStyle}>
            I'm a Computer Science Engineer interested in making the digital world more secure.
            This page documents my Cyber Security journey and{" "}
            <a href="/blog" style={inlineLinkStyle}>writing about it</a>.
          </p>

          <p style={heroNoteStyle}>
            This page does not contain content written by AI.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link to="/about" style={btnStyle}>
              ℹ️ About Me
            </Link>
          </div>
        </div>

        <div style={avatarStyle}>👧🏻</div>
      </div>

      {/* CONTENT */}
      <div style={contentStyle}>

        {/* BLOG */}
        <section style={sectionStyle}>
          <SectionHeader
            title="🌐 Blog"
            sub="Tutorials, Steps and Thoughts"
            linkTo="/blog"
            linkLabel="All Posts →"
          />

          <ul style={{ listStyle: "none" }}>
            {posts.map((post) => (
              <li key={post.fields.slug} style={postItemStyle}>
                <span style={postDateStyle}>
                  {post.frontmatter.date}
                </span>

                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {post.frontmatter.isNew && <span style={badgeStyle}>New</span>}
                  <Link to={post.fields.slug} style={postTitleStyle}>
                    {post.frontmatter.title}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* NOTES */}
        <section style={sectionStyle}>
          <SectionHeader
            title="📒 Notes"
            sub="Theory, Concepts, Everything in one place"
            linkTo="/notes"
            linkLabel="All Notes →"
          />

          <div style={notesGridStyle}>
            {notes.map((note) => {

              return (
                <Link key={note.fields.slug} to={note.fields.slug} style={noteCardStyle}>

                 
                  <div style={noteTitleStyle}>
                    {note.frontmatter.title}
                  </div>

                  <div style={noteDateStyle}>
                    {note.frontmatter.date}
                  </div>

                </Link>
              )
            })}
          </div>
        </section>

        {/* PROJECTS */}
        <section style={sectionStyle}>
          <SectionHeader
            title="🔐 Projects"
            sub="Showcase of Theory to Practical"
            linkTo="/projects"
            linkLabel="All Projects →"
          />

          <ul style={{ listStyle: "none" }}>
            {projects.map((p) => (
              <li key={p.fields.slug} style={projectItemStyle}>
                <div style={{ flex: 1 }}>

                  <a
                    href={p.frontmatter.url}
                    style={projectNameStyle}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {p.frontmatter.title}
                    <span style={{ fontSize: 12, color: "var(--subtle)" }}>↗</span>
                  </a>

                  <p style={projectDescStyle}>
                    {p.frontmatter.description}
                  </p>

                  {/* PROJECT TAGS */}
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8 }}>
                    {p.frontmatter.tags?.map((t) => (
                      <span key={t} style={tagStyle}>
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

                <div style={starsStyle}>
                  ★ {p.frontmatter.stars}
                </div>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </Layout>
  )
}

/* ================= COMPONENT ================= */

function SectionHeader({ title, sub, linkTo, linkLabel }) {
  return (
    <div style={sectionHeaderStyle}>
      <div>
        <h2 style={sectionTitleStyle}>{title}</h2>
        <p style={sectionSubStyle}>{sub}</p>
      </div>
      <Link to={linkTo} style={allLinkStyle}>{linkLabel}</Link>
    </div>
  )
}

/* ================= STYLES ================= */

/* HERO */
const heroStyle = {
  maxWidth: "var(--max-w)",
  margin: "0 auto",
  padding: "6rem 2rem 4rem",
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gap: "2.5rem",
  alignItems: "start",
}

const h1Style = {
  fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
  fontWeight: 400,
  lineHeight: 1.05,
  marginBottom: "1rem",
  color: "var(--text)",
}

const h2Style = {
  fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
  fontWeight: 300,
  marginBottom: "1rem",
  color: "var(--muted)",
}

const heroDescStyle = {
  color: "var(--muted)",
  fontSize: "clamp(16px, 1.1vw, 18px)",
  lineHeight: 1.75,
  maxWidth: 650,
  marginBottom: "1rem",
}

const heroNoteStyle = {
  fontSize: 13,
  color: "var(--subtle)",
  marginBottom: "1.5rem",
}

const inlineLinkStyle = {
  color: "var(--accent)",
  textDecoration: "underline",
  textUnderlineOffset: 2,
}

const btnStyle = {
  display: "inline-flex",
  alignItems: "center",
  padding: "8px 16px",
  borderRadius: 8,
  fontSize: 14,
  border: "1px solid var(--border2)",
  background: "var(--bg3)",
  color: "var(--text)",
  textDecoration: "none",
}

const avatarStyle = {
  width: 90,
  height: 90,
  borderRadius: "50%",
  background: "var(--bg3)",
  border: "1px solid var(--border2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 42,
}

/* CONTENT */
const contentStyle = {
  maxWidth: "var(--max-w)",
  margin: "0 auto",
  padding: "0 2rem 6rem",
}

const sectionStyle = {
  borderTop: "1px solid var(--border)",
  padding: "3rem 0",
}

/* HEADER */
const sectionHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: "1.2rem",
}

const sectionTitleStyle = {
  fontSize: "1.2rem",
  fontWeight: 500,
  marginBottom: 4,
  color: "var(--text)",
}

const sectionSubStyle = {
  fontSize: 14,
  color: "var(--subtle)",
}

/* BLOG */
const postItemStyle = {
  display: "flex",
  gap: "1rem",
  padding: "1rem 0",
  borderBottom: "1px solid var(--border)",
}

const postDateStyle = {
  fontSize: 13,
  color: "var(--subtle)",
  fontFamily: "var(--mono)",
  minWidth: 95,
}

const postTitleStyle = {
  fontSize: 15,
  color: "var(--text)",
  textDecoration: "none",
  lineHeight: 1.4,
}

const badgeStyle = {
  fontSize: 10,
  padding: "2px 8px",
  borderRadius: 20,
  background: "linear-gradient(90deg,#e8715a,#c45a9f)",
  color: "#fff",
}

/* NOTES */
const notesGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
  gap: 12,
}

const noteCardStyle = {
  background: "var(--bg2)",
  border: "1px solid var(--border)",
  borderRadius: 10,
  padding: "1.2rem",
  textDecoration: "none",
}



const noteTitleStyle = {
  fontSize: 15,
  color: "var(--text)",
  lineHeight: 1.5,
}

const noteDateStyle = {
  fontSize: 12,
  color: "var(--subtle)",
  marginTop: "0.6rem",
}

/* PROJECTS */
const projectItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "1rem",
  padding: "1rem 0",
  borderBottom: "1px solid var(--border)",
}

const projectNameStyle = {
  fontSize: 15,
  fontWeight: 500,
  color: "var(--text)",
  textDecoration: "none",
  display: "flex",
  gap: 6,
  marginBottom: "0.3rem",
}

const projectDescStyle = {
  fontSize: 14,
  color: "var(--muted)",
  lineHeight: 1.6,
}

const tagStyle = {
  fontSize: 7,
  color: "var(--muted)",
  background: "var(--bg3)",
  border: "1px solid var(--border)",
  padding: "3px 8px",
  borderRadius: 6,
}

const starsStyle = {
  fontSize: 13,
  color: "var(--subtle)",
  whiteSpace: "nowrap",
}

/* LINK */
const allLinkStyle = {
  fontSize: 13,
  color: "var(--muted)",
  textDecoration: "none",
  padding: "6px 12px",
  border: "1px solid var(--border2)",
  borderRadius: 6,
  background: "var(--bg3)",
}
