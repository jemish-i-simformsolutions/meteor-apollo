import { UserCollection } from "../../api/UserCollection";
import { useTracker } from "meteor/react-meteor-data";
import { Donation } from "../../api/MeteorUserCollection";
import { Meteor } from "meteor/meteor";
import { deletePost } from "../../ui/Query/query";
const donationData = Donation.find({}).fetch();

export const typeDefs = `

type User{
  first_name:String!,
  last_name:String!,
  mail_id:String!,
  password:String!
  uid:String
}
type Donation{
  type:String!,
  address:String!,
  quantity:String!,
  pincode:String!,
  uid:String,
  contact:String!,
  _id:String!
}
type Mutation{
  addUser(first_name:String!,last_name:String!,mail_id:String!,password:String!,uid:String):User,
  addDonation( type:String!,
  address:String!,
  quantity:String!,
  pincode:String!,
  uid:String,
  contact:String!):Donation,
  removePost(_id:String!):Donation
}
 type Query{
    getUser:[User]
    getAllDonation:[Donation]
    getPersonalDonation(uid:String!):[Donation]
    findDonation(uid:String!):[Donation]
   
    
}`;
export const resolvers = {
  Query: {
    getUser: () => {
      return useTracker(() => UserCollection.find({}).fetch());
    },
    getAllDonation: () => {
      return donationData;
    },
    getPersonalDonation: (parents, args) => {
      return Donation.find({ uid: args.uid }).fetch();
    },
    findDonation: (parents, args) => {
      return Donation.find({})
        .fetch()
        .filter((val) => val.uid != args.uid);
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
    addDonation: (parents, args) => {
      const newDonation = {
        type: args.type,
        address: args.address,
        quantity: args.quantity,
        pincode: args.pincode,
        uid: args.uid,
        contact: args.contact,
      };
      Donation.insert({
        type: args.type,
        address: args.address,
        quantity: args.quantity,
        pincode: args.pincode,
        uid: args.uid,
        contact: args.contact,
      });
      return newDonation;
    },
    removePost: (parents, args) => {
      Donation.remove({ _id: args._id });
    },
  },
};
console.log(donationData);
