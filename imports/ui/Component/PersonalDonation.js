import React from "react";
import { Donation } from "../../api/MeteorUserCollection";
import { Meteor } from "meteor/meteor";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { getPersonalDonation, deletePost } from "../Query/query";
export const PersonalDonation = () => {
  const [deletedPost] = useMutation(deletePost);
  const { data, loading } = useQuery(getPersonalDonation, {
    variables: { uid: Meteor.userId() },
  });

  return (
    <>
      {console.log(data)}
      {loading === false
        ? data.getPersonalDonation.map((val, index) => {
            return (
              <li key={index}>
                {val.type} {val._id}
                <button
                  onClick={() =>
                    deletedPost({
                      variables: { _id: val._id },
                      refetchQueries: [
                        {
                          query: getPersonalDonation,
                          variables: { uid: Meteor.userId() },
                        },
                      ],
                    })
                  }
                >
                  Delete Donation
                </button>
              </li>
            );
          })
        : "loading"}
    </>
  );
};
