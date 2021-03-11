import React from "react";
import { Donation } from "../../api/MeteorUserCollection";
import { Meteor } from "meteor/meteor";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { getAllDonation } from "../Query/query";

export const FindDonation = () => {
  const { data, loading } = useQuery(getAllDonation);
  return (
    <>
      {loading === false ? console.log(data) : "empty"}

      {Meteor.userId() !== null ? (
        Donation.find({})
          .fetch()
          .map((val, index) => {
            return <li key={index}>{val.typeOfDonation}</li>;
          })
      ) : (
        <>
          <br />
          <Link to="/login">please login</Link>
        </>
      )}
    </>
  );
};
