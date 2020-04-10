module.exports = {
  siteMetadata: {
    title: `Jeff - Front-End Developer, UI/UX Designer`,
    description: `a design-minded & a full-stack javascript web developer focused on building beautiful interfaces & experiences`,
    author: `@jaeyholic`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure color of the scroll indicator
        color: "#ecc94b",
        // Configure paths where the scroll indicator will appear
        paths: ["/blog/**"],
        // Configure the z-index of the indicator element
        zIndex: 9999,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/jaey-logo-favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-chakra-ui",
      options: {
        /**
         * @property {boolean} [isResettingCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        isResettingCSS: false,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Merriweather`,
            subsets: [`latin`],
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-medium-feed",
      options: {
        userName: "@jaeyholic", // Medium user name
        name: "MediumFeed", // GraphQL query AllMediumFeed
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
