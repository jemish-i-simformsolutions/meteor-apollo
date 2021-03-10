import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import { Meteor } from "meteor/meteor";
import { ServiceConfiguration } from "meteor/service-configuration";
import { typeDefs, resolvers, person } from "./schema";
import { Accounts } from "meteor/accounts-base";
import { UserCollection } from "../../api/UserCollection";
import { Donation } from "../../api/MeteorUserCollection";

// console.log(Meteor.users.find());
console.log(Meteor.isServer);
// Meteor.userId()!==null?
Meteor.publish("selectedPlayer", () =>
  UserCollection.find({ uid: Meteor.userId() })
);
Meteor.publish("Donation", () => {
  if (Meteor.userId == null) {
    return Donation.find({ uid: null });
  }
  return Donation.find({});
});

Meteor.methods({
  addDonation: (type, address, qauntity, pincode, contact) => {
    Donation.insert({
      typeOfDonation: type,
      addressOfDonation: address,
      qauntityOfDonation: qauntity,
      pincodeOfDonation: pincode,
      uid: Meteor.userId(),
      contact: contact,
    });
  },
  removeDonation: (_id) => {
    Donation.remove({ _id: _id });
  },
});
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
console.log(Donation.find().fetch());

//when there are multiple publish and and multiple subscription then there is merge occur among them
