import { gql } from "@apollo/client/core";
import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { Donation } from "../../api/MeteorUserCollection";

export const AllDonation = () => {
  return (
    <>
      {Donation.find({})
        .fetch()
        .map((val, index) => {
          return <li key={index}>{val.type}</li>;
        })}
    </>
  );
};
