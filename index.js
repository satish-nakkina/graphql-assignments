
const {ApolloServer,gql}= require("apollo-server")

const typeDefs=gql`

  type Query{
    
  }

`

const server= new ApolloServer({
  typeDefs,
  resolvers
})