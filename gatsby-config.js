module.exports = {
  siteMetadata: {
    title: 'Andrew Croftcheck, Project Manager',
    author: 'Andrew Croftcheck',
    description: 'Andrew is a Project Manager, PSM I, and M.B.A.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Andrew Croftcheck, Project Manager',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.ico', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
