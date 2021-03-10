import { UserCollection } from "../../api/UserCollection";
import { useTracker } from "meteor/react-meteor-data";
export const typeDefs = `

type User{
  first_name:String!,
  last_name:String!,
  mail_id:String!,
  password:String!
  uid:String
}
type Mutation{
  addUser(first_name:String!,last_name:String!,mail_id:String!,password:String!,uid:String):User
}
 type Query{
    getUser:[User]
}
`;
export const resolvers = {
  Query: {
    getUser: () => {
      return useTracker(() => UserCollection.find({}).fetch());
    },
  },
  Mutation: {
    addUser: (parent, args) => {
      const new_user = {
        first_name: args.first_name,
        last_name: args.last_name,
        mail_id: args.mail_id,
        password: args.password,
        uid: args.uid,
      };
      UserCollection.insert({
        first_name: args.first_name,
        last_name: args.last_name,
        mail_id: args.mail_id,
        password: args.password,
        uid: args.uid,
      });
      return new_user;
    },
  },
};
console.log(UserCollection.find().fetch());
