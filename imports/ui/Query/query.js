import { gql } from "@apollo/client/core";
import { useQuery } from "@apollo/react-hooks";

export const getAllDonation = gql`
  {
    getAllDonation {
      type
      address
      quantity
      pincode
      uid
      contact
    }
  }
`;
export const findDonation = gql`
  query($uid: String!) {
    findDonation(uid: $uid) {
      type
      address
      quantity
      pincode
      uid
      contact
    }
  }
`;
export const getPersonalDonation = gql`
  query($uid: String!) {
    getPersonalDonation(uid: $uid) {
      type
      address
      quantity
      pincode
      uid
      contact
      _id
    }
  }
`;
export const addMutation = gql`
  mutation(
    $type: String!
    $address: String!
    $quantity: String!
    $pincode: String!
    $uid: String
    $contact: String!
  ) {
    addDonation(
      type: $type
      address: $address
      quantity: $quantity
      pincode: $pincode
      uid: $uid
      contact: $contact
    ) {
      type
      address
      quantity
      pincode
      uid
      contact
    }
  }
`;
export const deletePost = gql`
  mutation($_id: String!) {
    removePost(_id: $_id) {
      type
      address
      quantity
      pincode
      uid
      contact
    }
  }
`;
