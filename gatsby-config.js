module.exports = {
  siteMetadata: {
    title: `pokedex`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-mysql`,
      options: {
        connectionDetails: {
          host: 'mysql-free.csp0unojwphx.eu-west-3.rds.amazonaws.com',
          port: '3306',
          user: 'admin',
          password: 'jamstack',
          database: 'pokedex'
        },
        queries: [
          
        ]
      }
    }
  ],
}
