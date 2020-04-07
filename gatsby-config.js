module.exports = {
  siteMetadata: {
    title: `MuseMasters`,
    siteUrl: `https://muzemasters.com`,
    description: `Learn music from carefully selected videos.`,
    author: `Stan Clarke, Jr.`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MuseMasters`,
        short_name: `MMasters`,
        categories: [`education`, `entertainment`, `music`, `social`],
        description: `Learn music from carefully selected videos.`,
        start_url: `/`,
        background_color: `#161b40`,
        theme_color: `#161b40`,
        display: `minimal-ui`,
        icon: `src/images/musemasters-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
