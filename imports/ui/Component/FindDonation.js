import React from "react";
import { Donation } from "../../api/MeteorUserCollection";
import { Meteor } from "meteor/meteor";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { findDonation, getAllDonation } from "../Query/query";

export const FindDonation = () => {
  const { data, loading } = useQuery(findDonation, {
    variables: { uid: Meteor.userId() },
  });
  return (
    <>
      {loading === false
        ? data.findDonation.map((val, index) => {
            return <li key={index}>{val.type}</li>;
          })
        : "empty"}
    </>
  );
};
