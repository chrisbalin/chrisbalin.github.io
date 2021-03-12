/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: 'http://chrisbalin.com'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-cname',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-36577662-1", // Google Analytics / GA
        ],
      },
    },
  ],
}
