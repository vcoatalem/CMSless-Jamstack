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
          host: process.env.DB_HOST,
          port: process.env.DB_PORT,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
        },
        queries: [
          {
              statement: 'SELECT * FROM pokemon',
              idFieldName: 'name',
              name: 'pokemons'
          }
        ]
      }
    }
  ],
}
