require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: "Italian Restaurant",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
  ],
};
