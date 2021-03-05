import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
var person = [
  { name: "roghuge", age: 18 },
  { name: "pilip", age: 33 },
  { name: "dilema", age: 35 },
  { name: "mark", age: 17 },
];
var user = [
  {
    first_name: "jemish",
    last_name: "italiya",
    mail_id: "italiya99@gmail.com",
    password: "Tw@1331j2344",
  },
  {
    first_name: "akash",
    last_name: "ramij",
    mail_id: "123@gmail.com",
    password: "58712",
  },
];
const typeDefs = `
type Person{
    name:String!
    age:Int!
}
type User{
  first_name:String!,
  last_name:String!,
  mail_id:String!,
  password:String!
}
type Mutation{
  addUser(first_name:String!,last_name:String!,mail_id:String!,password:String!):User
}
 type Query{
    users:[Person]
    
}
`;
const resolvers = {
  Query: {
    users: () => {
      return person;
    },
  },
  Mutation: {
    addUser: (parent, args) => {
      const new_user = {
        first_name: args.first_name,
        last_name: args.last_name,
        mail_id: args.mail_id,
        password: args.password,
      };
      let tempuser = user;
      user = [...tempuser, new_user];
      return new_user;
    },
  },
};
const schema = makeExecutableSchema({ typeDefs, resolvers });
createApolloServer({ schema });
