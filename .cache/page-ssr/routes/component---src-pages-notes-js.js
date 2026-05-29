exports.id = "component---src-pages-notes-js";
exports.ids = ["component---src-pages-notes-js"];
exports.modules = {

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.css */ "./src/styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_2__);
// src/components/Layout.js




// Google Fonts are loaded via gatsby-plugin-manifest / HTML head.
// Add this to gatsby-ssr.js if you need them injected server-side.

function Layout({
  children
}) {
  const {
    0: theme,
    1: setTheme
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("dark");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@400;500&family=Geist:wght@300;400;500;600&display=swap",
    rel: "stylesheet"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    style: navStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    style: logoStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: logoIconStyle
  }, "\u2726"), "Nida"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    style: navLinksStyle
  }, [{
    to: "/blog",
    icon: "🌐",
    label: "Blog"
  }, {
    to: "/notes",
    icon: "📒",
    label: "Notes"
  }, {
    to: "/projects",
    icon: "🔐",
    label: "Projects"
  }, {
    to: "/about",
    icon: "ℹ️",
    label: "About Me"
  }].map(({
    to,
    icon,
    label
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: label
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: to,
    style: navLinkStyle,
    activeStyle: {
      color: "var(--text)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, icon), " ", label)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: toggleTheme,
    style: themeBtnStyle,
    "aria-label": "Toggle theme"
  }, theme === "dark" ? "☀️" : "🌙")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    style: footerWrapStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: footerStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: 12,
      color: "var(--subtle)"
    }
  }, "\xA9 ", new Date().getFullYear(), " Alex. All rights reserved."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      gap: 16
    }
  }, [{
    href: "https://github.com/yourusername",
    label: "GitHub"
  }, {
    href: "https://twitter.com/yourusername",
    label: "Twitter"
  }, {
    href: "/rss.xml",
    label: "RSS"
  }, {
    href: "mailto:hello@example.com",
    label: "Email"
  }].map(({
    href,
    label
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    key: label,
    href: href,
    style: footerLinkStyle
  }, label))))));
}

/* ── inline styles ── */
const navStyle = {
  position: "sticky",
  top: 0,
  zIndex: 100,
  background: "rgba(17,17,16,0.85)",
  backdropFilter: "blur(12px)",
  borderBottom: "1px solid var(--border)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 2rem",
  height: 52
};
const logoStyle = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  fontSize: 14,
  fontWeight: 500,
  color: "var(--text)",
  textDecoration: "none"
};
const logoIconStyle = {
  width: 26,
  height: 26,
  background: "linear-gradient(135deg,#e8715a,#c45a44)",
  borderRadius: 6,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 13
};
const navLinksStyle = {
  display: "flex",
  alignItems: "center",
  gap: 4,
  listStyle: "none"
};
const navLinkStyle = {
  display: "flex",
  alignItems: "center",
  gap: 6,
  padding: "5px 10px",
  borderRadius: 6,
  fontSize: 13,
  color: "var(--muted)",
  textDecoration: "none"
};
const themeBtnStyle = {
  width: 32,
  height: 32,
  borderRadius: "50%",
  background: "var(--bg3)",
  border: "1px solid var(--border2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontSize: 15
};
const footerWrapStyle = {
  borderTop: "1px solid var(--border)"
};
const footerStyle = {
  maxWidth: "var(--max-w)",
  margin: "0 auto",
  padding: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "1rem"
};
const footerLinkStyle = {
  fontSize: 12,
  color: "var(--muted)",
  textDecoration: "none"
};

/***/ }),

/***/ "./src/pages/notes.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/notes.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Notes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
// src/pages/notes.js



const query = "3882856795";
function Notes({
  data
}) {
  const notes = data.allMarkdownRemark.nodes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: wrapStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    style: headerStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    style: h1Style
  }, "\uD83D\uDDD2\uFE0F Notes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: subStyle
  }, "Life, music, projects, and everything else.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: gridStyle
  }, notes.map(note => {
    const tags = Array.isArray(note.frontmatter.tag) ? note.frontmatter.tag : (note.frontmatter.tag || "").split(",");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      key: note.fields.slug,
      to: note.fields.slug,
      style: cardStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: tagRowStyle
    }, tags.map(t => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      key: t,
      style: tagStyle
    }, t.trim()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: titleStyle
    }, note.frontmatter.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: dateStyle
    }, note.frontmatter.date));
  }))));
}

/* ================= STYLES ================= */

const wrapStyle = {
  maxWidth: "var(--max-w)",
  margin: "0 auto",
  padding: "4rem 1.5rem 6rem"
};

/* HEADER */
const headerStyle = {
  marginBottom: "2.5rem"
};
const h1Style = {
  fontFamily: "var(--serif)",
  fontSize: "clamp(2rem, 4vw, 2.6rem)",
  fontWeight: 400,
  color: "var(--text)",
  marginBottom: 6
};
const subStyle = {
  fontSize: 14,
  color: "var(--subtle)",
  lineHeight: 1.6
};

/* GRID */
const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
  gap: 14
};

/* CARD */
const cardStyle = {
  background: "var(--bg2)",
  border: "1px solid var(--border)",
  borderRadius: 12,
  padding: "1.1rem",
  textDecoration: "none",
  display: "block",
  transition: "transform 0.15s ease, border 0.15s ease"
};

/* TAGS */
const tagRowStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: 6,
  marginBottom: "0.7rem"
};
const tagStyle = {
  fontSize: 11,
  color: "var(--muted)",
  background: "var(--bg3)",
  border: "1px solid var(--border)",
  padding: "3px 8px",
  borderRadius: 6,
  fontFamily: "var(--mono)"
};

/* TEXT */
const titleStyle = {
  fontSize: 15,
  color: "var(--text)",
  lineHeight: 1.5,
  marginBottom: "0.5rem"
};
const dateStyle = {
  fontSize: 12,
  color: "var(--subtle)",
  fontFamily: "var(--mono)"
};

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ (() => {



/***/ })

};
;
//# sourceMappingURL=component---src-pages-notes-js.js.map