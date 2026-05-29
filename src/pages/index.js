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
          tag
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
      {/* ── HERO ── */}
      <dev style={heroStyle}>
        <div style={heroTextStyle}>
          <h1 style={h1Style}>Hello there, this is Nida!</h1>
          <h2 style={h2Style} >Welcome to my Tech Corner</h2>
          <p style={heroDescStyle}>
            I'm a Compter Science Engineer with a special interest in making the digital world a teensy bit more secure. This page is to 
            document the journey through Cyber Security learnings and {" "}
            <a href="/blog" style={inlineLinkStyle}>writing about it</a> along the way.
          </p>
          <p style={heroNoteStyle}>This page does not contain content written by AI.</p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link to="/about" style={btnStyle}>
              <span>ℹ️</span> About Me
            </Link>
            {/* <a href="#newsletter" style={btnStyle}> */}
            {/* <span>🔖</span> Newsletter */}
            
           </div>
        
        </div>
        <div style={avatarStyle}>👧🏻</div>
      </dev>

      {/* ── CONTENT ── */}
      <div style={contentStyle}>

        {/* BLOG */}
        <section style={sectionStyle} id="blog">
          <SectionHeader title=" 🌐Blog" sub="Guides, references, and tutorials." linkTo="/blog" linkLabel="All Posts →" />
          <ul style={{ listStyle: "none" }}>
            {posts.map((post) => (
              <li key={post.fields.slug} style={postItemStyle}>
                <span style={postDateStyle}>{post.frontmatter.date}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
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
        <section style={sectionStyle} id="notes">
          <SectionHeader title=" 📒Notes" sub="Life, music, projects, and everything else." linkTo="/notes" linkLabel="All Notes →" />
          <div style={notesGridStyle}>
            {notes.map((note) => (
              <Link key={note.fields.slug} to={note.fields.slug} style={noteCardStyle}>
                <div style={noteTagStyle}>{note.frontmatter.tag}</div>
                <div style={noteTitleStyle}>{note.frontmatter.title}</div>
                <div style={noteDateStyle}>{note.frontmatter.date}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
      
        <section style={sectionStyle} id="projects">
        <SectionHeader title=" 🔐Projects" sub="Things I've built and shipped." linkTo="/projects" linkLabel="All Projects →"/>

        <ul style={{ listStyle: "none" }}>
          {projects.map((p) => (
            <li key={p.fields.slug} style={projectItemStyle}>
              <div style={{ flex: 1 }}>
                <a href={p.frontmatter.url} style={projectNameStyle} target="_blank"  rel="noreferrer" >
                {p.frontmatter.title}
                <span style={{ fontSize: 12, color: "var(--subtle)" }}>
                  ↗
                </span>
                </a>

                <p style={{ fontSize: 13, color: "var(--muted)" }}>
                  {p.frontmatter.description}
                </p>

                <div style={{display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8,}}>
                  {p.frontmatter.tags?.map((t) => (
                    <span key={t} style={tagStyle}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div style={starsStyle}>
                <span style={{ color: "#c9a227" }}>★</span>
                {p.frontmatter.stars}
              </div>
            </li>
           ))}
        </ul>
        </section> 
      </div>
    </Layout>
  )
}

/* ── Shared sub-component ── */
function SectionHeader({ title, sub, linkTo, linkLabel }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.3rem" }}>
      <div>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 500, color: "var(--text)", marginBottom: 4 }}>{title}</h2>
        <p style={{ fontSize: 13, color: "var(--subtle)", marginBottom: "1.8rem" }}>{sub}</p>
      </div>
      <Link to={linkTo} style={allLinkStyle}>{linkLabel}</Link>
    </div>
  )
}

/* ── Styles ── */
const heroStyle = {
  maxWidth: "var(--max-w)", margin: "0 auto",
  padding: "5rem 2rem 4rem",
  display: "grid", gridTemplateColumns: "1fr auto",
  gap: "2rem", alignItems: "start",
}
const heroTextStyle = { animation: "none" }
const h1Style = {
  fontFamily: "var(--serif)",
  fontSize: "clamp(2.2rem,5vw,3rem)",
  fontWeight: 400, lineHeight: 1.15,
  marginBottom: "1.2rem", color: "var(--text)",
}
const h2Style = {
  fontFamily: "var(--serif)",
  fontSize: "clamp(2.1rem ,5vw,3rem",
  fondtWeight: 350, lineHeight: 1.0,
  marginBottom: "1.1rem", color: "var(--text)"
}
const heroDescStyle = {
  color: "var(--muted)", fontSize: 15,
  lineHeight: 1.75, maxWidth: 480, marginBottom: "0.8rem",
}
const heroNoteStyle = { fontSize: 13, color: "var(--subtle)", marginBottom: "1.8rem" }
const inlineLinkStyle = {
  color: "var(--accent)",
  textDecoration: "underline",
  textDecorationColor: "rgba(232,113,90,0.4)",
  textUnderlineOffset: 2,
}
const btnStyle = {
  display: "inline-flex", alignItems: "center", gap: 7,
  padding: "7px 16px", borderRadius: 8, fontSize: 13,
  border: "1px solid var(--border2)", background: "var(--bg3)",
  color: "var(--text)", textDecoration: "none",
}
const avatarStyle = {
  width: 88, height: 88, borderRadius: "50%",
  background: "var(--bg3)", border: "1px solid var(--border2)",
  display: "flex", alignItems: "center", justifyContent: "center",
  fontSize: 42, flexShrink: 0, marginTop: "0.5rem",
}
const contentStyle = { maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 2rem 6rem" }
const sectionStyle = { borderTop: "1px solid var(--border)", padding: "3rem 0" }
const postItemStyle = {
  display: "flex", alignItems: "baseline", gap: "1.5rem",
  padding: "0.85rem 0", borderBottom: "1px solid var(--border)",
}
const postDateStyle = {
  fontSize: 12, color: "var(--subtle)",
  fontFamily: "var(--mono)", whiteSpace: "nowrap", minWidth: 88,
}
const postTitleStyle = { fontSize: 14, color: "var(--text)", textDecoration: "none" }
const badgeStyle = {
  fontSize: 10, fontWeight: 500,
  padding: "2px 8px", borderRadius: 20,
  background: "linear-gradient(90deg,#e8715a,#c45a9f)",
  color: "#fff", whiteSpace: "nowrap",
}
const notesGridStyle = {
  display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 12,
}
const noteCardStyle = {
  background: "var(--bg2)", border: "1px solid var(--border)",
  borderRadius: 10, padding: "1rem 1.1rem", textDecoration: "none", display: "block",
}
const noteTagStyle = { fontSize: 11, color: "var(--subtle)", fontFamily: "var(--mono)", marginBottom: "0.4rem" }
const noteTitleStyle = { fontSize: 13.5, color: "var(--text)", lineHeight: 1.45 }
const noteDateStyle = { fontSize: 11, color: "var(--subtle)", marginTop: "0.6rem", fontFamily: "var(--mono)" }
const projectItemStyle = {
  display: "flex", alignItems: "flex-start",
  justifyContent: "space-between", gap: "1rem",
  padding: "1rem 0", borderBottom: "1px solid var(--border)",
}
const projectNameStyle = {
  fontSize: 14, fontWeight: 500, color: "var(--text)",
  textDecoration: "none", display: "flex", alignItems: "center",
  gap: 6, marginBottom: "0.25rem",
}
const tagStyle = {
  fontSize: 11, fontFamily: "var(--mono)", color: "var(--muted)",
  background: "var(--bg3)", border: "1px solid var(--border)",
  padding: "2px 8px", borderRadius: 4,
}
const starsStyle = {
  display: "flex", alignItems: "center", gap: 5,
  fontSize: 12, color: "var(--subtle)",
  fontFamily: "var(--mono)", whiteSpace: "nowrap", marginTop: 4,
}
const allLinkStyle = {
  fontSize: 13, color: "var(--muted)", textDecoration: "none",
  display: "flex", alignItems: "center", gap: 4,
  padding: "5px 12px", borderRadius: 6,
  border: "1px solid var(--border2)", background: "var(--bg3)",
  whiteSpace: "nowrap",
}
