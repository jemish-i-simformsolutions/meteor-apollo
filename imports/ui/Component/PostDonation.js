import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { Link } from "react-router-dom";
export const PostDonation = () => {
  const [typeofDonation, setTypeofDonation] = useState(null);
  const [qauntityofDonation, setQauntityofDonation] = useState(null);
  const [addressofDonation, setAddressofDonation] = useState(null);
  const [pincode, setPincode] = useState(null);
  const [contact, setContact] = useState(null);
  return (
    <>
      <h2>Post Donation here</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          Meteor.call(
            "addDonation",
            typeofDonation,
            addressofDonation,
            qauntityofDonation,
            pincode,
            contact
          );
        }}
      >
        <label>
          <input
            type="text"
            placeholder="Type of Donation"
            onChange={(event) => setTypeofDonation(event.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            placeholder="Address of Donation"
            onChange={(event) => setAddressofDonation(event.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="number"
            placeholder="Enter your area Pincode"
            onChange={(event) => setPincode(event.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="number"
            placeholder="Enter qauntity in KGs"
            onChange={(event) => setQauntityofDonation(event.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="number"
            placeholder="Enter your contact detail "
            onChange={(event) => setContact(event.target.value)}
          />
        </label>
        <br />
        <label>
          <button type="submit">Add donation here</button>
        </label>
      </form>
      <Link to="personal_donations">Your Donations</Link>
      <br />
      <Link to="all_donations">All Donations</Link>
    </>
  );
};
