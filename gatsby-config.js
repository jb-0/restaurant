module.exports = {
  siteMetadata: {
    title: "Italian Restaurant",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "EQRtnAKzM55lTJFcoT3KjI2A7lZsNw-xlKBkwzUyK4k",
        spaceId: "cxvvhkxf8v3j",
      },
    },
  ],
};
