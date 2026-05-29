// src/components/Layout.js
import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import "../styles/global.css"

// Google Fonts are loaded via gatsby-plugin-manifest / HTML head.
// Add this to gatsby-ssr.js if you need them injected server-side.

export default function Layout({ children }) {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark"
    setTheme(saved)
    document.documentElement.setAttribute("data-theme", saved)
  }, [])

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    localStorage.setItem("theme", next)
    document.documentElement.setAttribute("data-theme", next)
  }

  return (
    <>
      {/* ── Google Fonts ── */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@400;500&family=Geist:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* ── Nav ── */}
      <nav style={navStyle}>
        <Link to="/" style={logoStyle}>
          <span style={logoIconStyle}>✦</span>
          Nida
        </Link>

        <ul style={navLinksStyle}>
          {[
            { to: "/#blog",     icon: "🌐", label: "Blog" },
            { to: "/#notes",    icon: "📒",  label: "Notes" },
            { to: "/#projects", icon: "🔐",  label: "Projects" },
            { to: "/about",     icon: "ℹ️",  label: "About Me" },
          ].map(({ to, icon, label }) => (
            <li key={label}>
              <Link to={to} style={navLinkStyle}
                activeStyle={{ color: "var(--text)" }}>
                <span>{icon}</span> {label}
              </Link>
            </li>
          ))}
        </ul>

        <button onClick={toggleTheme} style={themeBtnStyle} aria-label="Toggle theme">
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* ── Page content ── */}
      <main>{children}</main>

      {/* ── Footer ── */}
      <footer style={footerWrapStyle}>
        <div style={footerStyle}>
          <p style={{ fontSize: 12, color: "var(--subtle)" }}>
            © {new Date().getFullYear()} Alex. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            {[
              { href: "https://github.com/yourusername", label: "GitHub" },
              { href: "https://twitter.com/yourusername", label: "Twitter" },
              { href: "/rss.xml", label: "RSS" },
              { href: "mailto:hello@example.com", label: "Email" },
            ].map(({ href, label }) => (
              <a key={label} href={href} style={footerLinkStyle}>{label}</a>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}

/* ── inline styles ── */
const navStyle = {
  position: "sticky", top: 0, zIndex: 100,
  background: "rgba(17,17,16,0.85)",
  backdropFilter: "blur(12px)",
  borderBottom: "1px solid var(--border)",
  display: "flex", alignItems: "center",
  justifyContent: "space-between",
  padding: "0 2rem", height: 52,
}
const logoStyle = {
  display: "flex", alignItems: "center", gap: 8,
  fontSize: 14, fontWeight: 500,
  color: "var(--text)", textDecoration: "none",
}
const logoIconStyle = {
  width: 26, height: 26,
  background: "linear-gradient(135deg,#e8715a,#c45a44)",
  borderRadius: 6,
  display: "flex", alignItems: "center", justifyContent: "center",
  fontSize: 13,
}
const navLinksStyle = {
  display: "flex", alignItems: "center", gap: 4, listStyle: "none",
}
const navLinkStyle = {
  display: "flex", alignItems: "center", gap: 6,
  padding: "5px 10px", borderRadius: 6,
  fontSize: 13, color: "var(--muted)", textDecoration: "none",
}
const themeBtnStyle = {
  width: 32, height: 32, borderRadius: "50%",
  background: "var(--bg3)", border: "1px solid var(--border2)",
  display: "flex", alignItems: "center", justifyContent: "center",
  cursor: "pointer", fontSize: 15,
}
const footerWrapStyle = {
  borderTop: "1px solid var(--border)",
}
const footerStyle = {
  maxWidth: "var(--max-w)", margin: "0 auto",
  padding: "2rem", display: "flex",
  alignItems: "center", justifyContent: "space-between",
  flexWrap: "wrap", gap: "1rem",
}
const footerLinkStyle = {
  fontSize: 12, color: "var(--muted)", textDecoration: "none",
}
