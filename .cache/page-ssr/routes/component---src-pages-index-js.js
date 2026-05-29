exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
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
    to: "/#blog",
    icon: "🌐",
    label: "Blog"
  }, {
    to: "/#notes",
    icon: "📒",
    label: "Notes"
  }, {
    to: "/#projects",
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

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
// src/pages/index.js



const query = "2961418343";
function Home({
  data
}) {
  const posts = data.blog.nodes;
  const notes = data.notes.nodes;
  const projects = data.projects.nodes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: heroStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: heroTextStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    style: h1Style
  }, "Hello there, this is Nida!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: h2Style
  }, "Welcome to my Tech Corner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: heroDescStyle
  }, "I'm a Compter Science Engineer with a special interest in making the digital world a teensy bit more secure. This page is to document the journey through Cyber Security learnings and ", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/blog",
    style: inlineLinkStyle
  }, "writing about it"), " along the way."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: heroNoteStyle
  }, "This page does not contain content written by AI."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/about",
    style: btnStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u2139\uFE0F"), " About Me"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: avatarStyle
  }, "\uD83D\uDC67\uD83C\uDFFB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: contentStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: sectionStyle,
    id: "blog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionHeader, {
    title: " \uD83C\uDF10Blog",
    sub: "Guides, references, and tutorials.",
    linkTo: "/blog",
    linkLabel: "All Posts \u2192"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    style: {
      listStyle: "none"
    }
  }, posts.map(post => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: post.fields.slug,
    style: postItemStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: postDateStyle
  }, post.frontmatter.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      flex: 1
    }
  }, post.frontmatter.isNew && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: badgeStyle
  }, "New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: post.fields.slug,
    style: postTitleStyle
  }, post.frontmatter.title)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: sectionStyle,
    id: "notes"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionHeader, {
    title: " \uD83D\uDCD2Notes",
    sub: "Life, music, projects, and everything else.",
    linkTo: "/notes",
    linkLabel: "All Notes \u2192"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: notesGridStyle
  }, notes.map(note => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    key: note.fields.slug,
    to: note.fields.slug,
    style: noteCardStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: noteTagStyle
  }, note.frontmatter.tag), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: noteTitleStyle
  }, note.frontmatter.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: noteDateStyle
  }, note.frontmatter.date))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: sectionStyle,
    id: "projects"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionHeader, {
    title: " \uD83D\uDD10Projects",
    sub: "Things I've built and shipped.",
    linkTo: "/projects",
    linkLabel: "All Projects \u2192"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    style: {
      listStyle: "none"
    }
  }, projects.map(p => {
    var _p$frontmatter$tags;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: p.fields.slug,
      style: projectItemStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: p.frontmatter.url,
      style: projectNameStyle,
      target: "_blank",
      rel: "noreferrer"
    }, p.frontmatter.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        fontSize: 12,
        color: "var(--subtle)"
      }
    }, "\u2197")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        fontSize: 13,
        color: "var(--muted)"
      }
    }, p.frontmatter.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        flexWrap: "wrap",
        marginTop: 8
      }
    }, (_p$frontmatter$tags = p.frontmatter.tags) === null || _p$frontmatter$tags === void 0 ? void 0 : _p$frontmatter$tags.map(t => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      key: t,
      style: tagStyle
    }, t)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: starsStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        color: "#c9a227"
      }
    }, "\u2605"), p.frontmatter.stars));
  })))));
}

/* ── Shared sub-component ── */
function SectionHeader({
  title,
  sub,
  linkTo,
  linkLabel
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      marginBottom: "0.3rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      fontSize: "1.1rem",
      fontWeight: 500,
      color: "var(--text)",
      marginBottom: 4
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--subtle)",
      marginBottom: "1.8rem"
    }
  }, sub)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: linkTo,
    style: allLinkStyle
  }, linkLabel));
}

/* ── Styles ── */
const heroStyle = {
  maxWidth: "var(--max-w)",
  margin: "0 auto",
  padding: "5rem 2rem 4rem",
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gap: "2rem",
  alignItems: "start"
};
const heroTextStyle = {
  animation: "none"
};
const h1Style = {
  fontFamily: "var(--serif)",
  fontSize: "clamp(2.2rem,5vw,3rem)",
  fontWeight: 400,
  lineHeight: 1.15,
  marginBottom: "1.2rem",
  color: "var(--text)"
};
const h2Style = {
  fontFamily: "var(--serif)",
  fontSize: "clamp(2.1rem ,5vw,3rem)",
  fontWeight: 350,
  lineHeight: 1.0,
  marginBottom: "1.1rem",
  color: "var(--text)"
};
const heroDescStyle = {
  color: "var(--muted)",
  fontSize: 15,
  lineHeight: 1.75,
  maxWidth: 480,
  marginBottom: "0.8rem"
};
const heroNoteStyle = {
  fontSize: 13,
  color: "var(--subtle)",
  marginBottom: "1.8rem"
};
const inlineLinkStyle = {
  color: "var(--accent)",
  textDecoration: "underline",
  textDecorationColor: "rgba(232,113,90,0.4)",
  textUnderlineOffset: 2
};
const btnStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: 7,
  padding: "7px 16px",
  borderRadius: 8,
  fontSize: 13,
  border: "1px solid var(--border2)",
  background: "var(--bg3)",
  color: "var(--text)",
  textDecoration: "none"
};
const avatarStyle = {
  width: 88,
  height: 88,
  borderRadius: "50%",
  background: "var(--bg3)",
  border: "1px solid var(--border2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 42,
  flexShrink: 0,
  marginTop: "0.5rem"
};
const contentStyle = {
  maxWidth: "var(--max-w)",
  margin: "0 auto",
  padding: "0 2rem 6rem"
};
const sectionStyle = {
  borderTop: "1px solid var(--border)",
  padding: "3rem 0"
};
const postItemStyle = {
  display: "flex",
  alignItems: "baseline",
  gap: "1.5rem",
  padding: "0.85rem 0",
  borderBottom: "1px solid var(--border)"
};
const postDateStyle = {
  fontSize: 12,
  color: "var(--subtle)",
  fontFamily: "var(--mono)",
  whiteSpace: "nowrap",
  minWidth: 88
};
const postTitleStyle = {
  fontSize: 14,
  color: "var(--text)",
  textDecoration: "none"
};
const badgeStyle = {
  fontSize: 10,
  fontWeight: 500,
  padding: "2px 8px",
  borderRadius: 20,
  background: "linear-gradient(90deg,#e8715a,#c45a9f)",
  color: "#fff",
  whiteSpace: "nowrap"
};
const notesGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
  gap: 12
};
const noteCardStyle = {
  background: "var(--bg2)",
  border: "1px solid var(--border)",
  borderRadius: 10,
  padding: "1rem 1.1rem",
  textDecoration: "none",
  display: "block"
};
const noteTagStyle = {
  fontSize: 11,
  color: "var(--subtle)",
  fontFamily: "var(--mono)",
  marginBottom: "0.4rem"
};
const noteTitleStyle = {
  fontSize: 13.5,
  color: "var(--text)",
  lineHeight: 1.45
};
const noteDateStyle = {
  fontSize: 11,
  color: "var(--subtle)",
  marginTop: "0.6rem",
  fontFamily: "var(--mono)"
};
const projectItemStyle = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "1rem",
  padding: "1rem 0",
  borderBottom: "1px solid var(--border)"
};
const projectNameStyle = {
  fontSize: 14,
  fontWeight: 500,
  color: "var(--text)",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: 6,
  marginBottom: "0.25rem"
};
const tagStyle = {
  fontSize: 11,
  fontFamily: "var(--mono)",
  color: "var(--muted)",
  background: "var(--bg3)",
  border: "1px solid var(--border)",
  padding: "2px 8px",
  borderRadius: 4
};
const starsStyle = {
  display: "flex",
  alignItems: "center",
  gap: 5,
  fontSize: 12,
  color: "var(--subtle)",
  fontFamily: "var(--mono)",
  whiteSpace: "nowrap",
  marginTop: 4
};
const allLinkStyle = {
  fontSize: 13,
  color: "var(--muted)",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: 4,
  padding: "5px 12px",
  borderRadius: 6,
  border: "1px solid var(--border2)",
  background: "var(--bg3)",
  whiteSpace: "nowrap"
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
//# sourceMappingURL=component---src-pages-index-js.js.map