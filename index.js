
const {ApolloServer,gql}= require("apollo-server")

const weatherData = [
  {
    city: 'New York',
    temperature: 25.5,
    humidity: 70,
    description: 'Sunny',
  },
  {
    city: 'London',
    temperature: 18.2,
    humidity: 80,
    description: 'Cloudy',
  },
];
const typeDefs=gql`

  type Query{
     weatherData: [Weather!]!
     weather(city: String): Weather
  }

  type Weather{
    city: String!
    temperature: Float!
    humidity: Float!
    description: String!
  }

`

const resolvers={
  Query:{
    weatherData:()=> weatherData ,
    weather: (parent, { city },context) => {
      const weather = weatherData.find((data) => data.city === city);
      return weather || null;
    },
  }
}

const server= new ApolloServer({
  typeDefs,
  resolvers
})



server.listen().then(({ url }) => {
  console.log("server is ready at " + url);
});
