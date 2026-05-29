/**
 * gatsby-config.js
 * Central config — plugins, metadata, filesystem sources.
 */
module.exports = {
  siteMetadata: {
    title: "Nida",
    description: "Cyber Security ",
    siteUrl: "https://Nida-18.gitub.io",
    social: {
      github: "https://github.com/Nida-18",
      twitter: "https://twitter.com/yourusername",
      email: "nidafatima2645@gmail.com",
    },
  },
  plugins: [
    // Read Markdown files from content/blog
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "blog", path: `${__dirname}/content/blog` },
    },
    // Read Markdown files from content/notes
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "notes", path: `${__dirname}/content/notes` },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {name: "projects", path: `${__dirname}/content/projects`},
    },
    // Transform Markdown → HTML
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: { maxWidth: 720, quality: 85 },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: { classPrefix: "language-", inlineCodeMarker: null },
          },
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Nida— Portfolio",
        short_name: "Nida",
        start_url: "/",
        background_color: "#705549",
        theme_color: "#e8715a",
        display: "minimal-ui",
        icon: "static/favicon.png",
      },
    },
  ],
}
