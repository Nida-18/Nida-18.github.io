exports.id = "component---src-pages-blog-js";
exports.ids = ["component---src-pages-blog-js"];
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

/***/ "./src/pages/blog.js?export=default":
/*!******************************************!*\
  !*** ./src/pages/blog.js?export=default ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Blog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
// src/pages/blog.js



const query = "3879444943";
function Blog({
  data
}) {
  const posts = data.allMarkdownRemark.nodes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: wrapStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    style: {
      marginBottom: "3rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    style: h1Style
  }, "\uD83C\uDF10 Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: subStyle
  }, "Guides, references, and tutorials \u2014 ", posts.length, " posts.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    style: {
      listStyle: "none"
    }
  }, posts.map(post => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: post.fields.slug,
    style: itemStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: metaStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: dateStyle
  }, post.frontmatter.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: readStyle
  }, post.timeToRead, " min read")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 4
    }
  }, post.frontmatter.isNew && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: badgeStyle
  }, "New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: post.fields.slug,
    style: titleStyle
  }, post.frontmatter.title)), post.frontmatter.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: descStyle
  }, post.frontmatter.description)))))));
}
const wrapStyle = {
  maxWidth: "var(--max-w)",
  margin: "0 auto",
  padding: "4rem 2rem 6rem"
};
const h1Style = {
  fontFamily: "var(--serif)",
  fontSize: "2.2rem",
  fontWeight: 400,
  color: "var(--text)",
  marginBottom: 8
};
const subStyle = {
  fontSize: 13,
  color: "var(--subtle)"
};
const itemStyle = {
  display: "flex",
  gap: "1.5rem",
  padding: "1.2rem 0",
  borderBottom: "1px solid var(--border)",
  alignItems: "flex-start"
};
const metaStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
  minWidth: 88
};
const dateStyle = {
  fontSize: 13,
  color: "var(--subtle)",
  fontFamily: "var(--mono)"
};
const readStyle = {
  fontSize: 12,
  color: "var(--subtle)",
  fontFamily: "var(--mono)"
};
const titleStyle = {
  fontSize: 17,
  color: "var(--text)",
  textDecoration: "none",
  fontWeight: 400
};
const descStyle = {
  fontSize: 15,
  color: "var(--muted)",
  marginTop: 2,
  lineHeight: 1.6
};
const badgeStyle = {
  fontSize: 10,
  fontWeight: 500,
  padding: "2px 8px",
  borderRadius: 20,
  background: "linear-gradient(90deg,#e8715a,#c45a9f)",
  color: "#fff"
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
//# sourceMappingURL=component---src-pages-blog-js.js.map