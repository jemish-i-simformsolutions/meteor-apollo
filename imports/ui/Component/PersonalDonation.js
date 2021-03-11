import React from "react";
import { Donation } from "../../api/MeteorUserCollection";
import { Meteor } from "meteor/meteor";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { getPersonalDonation, deletePost } from "../Query/query";
export const PersonalDonation = () => {
  // const { data } = useQuery(getPersonalDonation, {
  //   variables: { uid: Meteor.userId() },
  // });
  const [deletedPost] = useMutation(deletePost);
  const { data, loading } = useQuery(getPersonalDonation, {
    variables: { uid: Meteor.userId() },
  });

  return (
    <>
      {console.log(data)}
      {Donation.find({ uid: Meteor.userId() })
        .fetch()
        .map((val, index) => {
          return (
            <li key={index}>
              {val.type}
              <button
                onClick={() => deletedPost({ variables: { _id: val._id } })}
              >
                Delete Donation
              </button>
            </li>
          );
        })}
    </>
  );
};
