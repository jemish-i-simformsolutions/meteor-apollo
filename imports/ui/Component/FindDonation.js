import React from "react";
import { Donation } from "../../api/MeteorUserCollection";
import { Meteor } from "meteor/meteor";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
export const FindDonation = () => {
  return (
    <>
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
