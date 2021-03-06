module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Homepage",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "ntxl1vt6",
        dataset: "production",
        overlayDrafts: true,
        token:
          "ski0K5HMDkuCjTlO9t8d48q9509FJ3v3PmCMgskznBWYuRLyti3pCWDfIS2OAOXqsGSr9hjFh3txm5KmOIuWY4ePtLaDJ5EKvA7KVkiUVcgSWP8DiPix6rqsplN4gc6azBFeNgzKOrCJWz9eqxQYJYXAdLoNEheH4UecnKJ4STpYtTHQWmEc",
        watchMode: true,
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
