module.exports = {
  siteMetadata: {
    title: `Uçaklar`,
    description: `Makine`,
    author: `kevseroz`,
  },

  plugins: [

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/content/post`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/content/album`,
      },
    },
    
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins:[
      
          {
            resolve:`gatsby-remark-images`,
            options: {
              maxWidth: 600,
              wrapperStyle: `margin: 20px;`
            },
          },
          `remark-image-attributes`,
          {
            resolve: `gatsby-remark-image-attributes`,
            options: {
              styleAttributes: [`display`, `width`, `height`, `margin`, `align-items`],
              dataAttributes: true
            },
          },
         
        ],
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
         icon: `src/images/airplane.png`, // This path is relative to the root of the site.
      },
      
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
  ],

}

