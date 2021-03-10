import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import { Meteor } from "meteor/meteor";
import { ServiceConfiguration } from "meteor/service-configuration";
import { typeDefs, resolvers, person } from "./schema";
import { Accounts } from "meteor/accounts-base";
import { UserCollection } from "../../api/UserCollection";

// console.log(Meteor.users.find());
console.log(Meteor.isServer);
Meteor.publish("selectedPlayer", () =>
  UserCollection.find({ uid: Meteor.userId() })
);
const schema = makeExecutableSchema({ typeDefs, resolvers });
createApolloServer({ schema });
Meteor.startup(() => {
  Accounts.loginServiceConfiguration.remove({ service: "google" });
  Accounts.loginServiceConfiguration.insert({
    service: "google",
    clientId:
      "697818373172-mrsqqiracemiqu21i3ka4q4delnkbds7.apps.googleusercontent.com",
    secret: "UngisC2zzNppuF9TYFedawOD",
  });
});
