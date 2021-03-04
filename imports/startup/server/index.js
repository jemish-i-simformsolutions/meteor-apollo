import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
var user = [
  { name: "roghuge", age: 18 },
  { name: "pilip", age: 33 },
  { name: "dilema", age: 35 },
  { name: "mark", age: 17 },
];
const typeDefs = `
type Person{
    name:String!
    age:Int!
}
 type Query{
    users:[Person]
    
}
`;
const resolvers = {
  Query: {
    users: () => {
      return user;
    },
  },
};
const schema = makeExecutableSchema({ typeDefs, resolvers });
createApolloServer({ schema });
