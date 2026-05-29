// src/pages/about.js
import React from "react"
import Layout from "../components/Layout"

export default function About() {
  return (
    <Layout>
      <div style={wrapStyle}>
        <header style={headerStyle}>
          <div style={avatarStyle}>👩‍💻</div>
          <div>
            <h1 style={h1Style}>About Me</h1>
            <p style={roleStyle}>Computer Science Engineer · MTech Cyber Security</p>
          </div>
        </header>

        <div style={bodyStyle}>
          <p>
            Hey, I'm Nida, a Computer Science engineer from India with a strong interest in
            cybersecurity and digital security research.
          </p>
          <p>
          I'm currently pursuing a Master's degree in Cyber Security Engineering and have spent
          the last four years building my academic and practical foundation in the field. 
            Most of my time goes into learning, experimenting, and continuously improving my 
            skills across different areas of cyber security.
          </p>
          <p>
            I'm open to internship, freelance and consulting work. If you have something
            interesting in mind,{" "}
            <a href="mailto:nidafatima2645@gmail.com" style={linkStyle}>say hello</a>.
          </p>

          <h2 style={h2Style}>Skills</h2>
          <div style={skillsGridStyle}>
            {skills.map((group) => (
              <div key={group.label} style={skillGroupStyle}>
                <div style={skillLabelStyle}>{group.label}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {group.items.map((s) => (
                    <span key={s} style={tagStyle}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h2 style={h2Style}>Online</h2>
          <ul style={onlineListStyle}>
            {[
              { label: "GitHub", href: "https://github.com/Nida-18" },
              { label: "Twitter / X", href: "https://twitter.com/" },
              { label: "Email", href: "mailto:nidafatima2645@gmail.com" },
            ].map(({ label, href }) => (
              <li key={label}>
                <a href={href} style={linkStyle} target="_blank" rel="noreferrer">
                  {label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

const skills = [
  { label: "Languages", items: ["Python", "C++"] },
  { label: "Defensive Security", items: [""] },
  { label: "Penetration Testing", items: [""]},
  { label: "Reverse Engineering", items: [""]},
  { label: "Malware Analysis", items: [""]},
  { label: "Network Security", items: [""]},
  { label: "Linux Tools", items: [""]},
  { label: "Offensive Security", items:[""]},
  { label: "Privacy and Dark Web", items: [""]}
 ]

const wrapStyle = { maxWidth: "var(--max-w)", margin: "0 auto", padding: "4rem 2rem 6rem" }
const headerStyle = { display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "3rem" }
const avatarStyle = {
  width: 80, height: 80, borderRadius: "50%",
  background: "var(--bg3)", border: "1px solid var(--border2)",
  display: "flex", alignItems: "center", justifyContent: "center",
  fontSize: 38, flexShrink: 0,
}
const h1Style = {
  fontFamily: "var(--serif)", fontSize: "2.2rem",
  fontWeight: 400, color: "var(--text)", lineHeight: 1.2,
}
const roleStyle = { fontSize: 13, color: "var(--muted)", marginTop: 4, fontFamily: "var(--mono)" }
const bodyStyle = { display: "flex", flexDirection: "column", gap: "1.2rem", color: "var(--muted)", fontSize: 15, lineHeight: 1.8 }
const h2Style = { fontSize: "1rem", fontWeight: 500, color: "var(--text)", marginTop: "1rem" }
const linkStyle = { color: "var(--accent)", textDecoration: "underline", textDecorationColor: "rgba(232,113,90,0.4)", textUnderlineOffset: 2 }
const skillsGridStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 16 }
const skillGroupStyle = { background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 10, padding: "1rem 1.1rem", display: "flex", flexDirection: "column", gap: 8 }
const skillLabelStyle = { fontSize: 11, color: "var(--subtle)", fontFamily: "var(--mono)" }
const tagStyle = { fontSize: 11, fontFamily: "var(--mono)", color: "var(--muted)", background: "var(--bg3)", border: "1px solid var(--border)", padding: "2px 8px", borderRadius: 4 }
const onlineListStyle = { listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }
