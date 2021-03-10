import React from "react";
import { Donation } from "../../api/MeteorUserCollection";
import { Meteor } from "meteor/meteor";
export const PersonalDonation = () => {
  return (
    <>
      {Donation.find({ uid: Meteor.userId() })
        .fetch()
        .map((val, index) => {
          return (
            <>
              <li key={index}>{val.typeOfDonation}</li>
              <button onClick={() => Meteor.call("removeDonation", val._id)}>
                Delete Donation
              </button>
            </>
          );
        })}
    </>
  );
};
