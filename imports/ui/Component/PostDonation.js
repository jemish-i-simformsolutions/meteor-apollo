import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { Link } from "react-router-dom";
import { addMutation, getPersonalDonation } from "../Query/query";
import { useMutation } from "@apollo/react-hooks";
export const PostDonation = () => {
  const [typeofDonation, setTypeofDonation] = useState(null);
  const [quantityofDonation, setQuantityofDonation] = useState(null);
  const [addressofDonation, setAddressofDonation] = useState(null);
  const [pincode, setPincode] = useState(null);
  const [contact, setContact] = useState(null);
  const [addPost, { data }] = useMutation(addMutation);

  return (
    <>
      <h2>Post Donation here</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // Meteor.call(
          //   "addDonation",
          //   typeofDonation,
          //   addressofDonation,
          //   qauntityofDonation,
          //   pincode,
          //   contact
          // );
          addPost({
            variables: {
              type: typeofDonation,
              address: addressofDonation,
              quantity: quantityofDonation,
              pincode: pincode,
              uid: Meteor.userId(),
              contact: contact,
            },
            refetchQueries: [
              {
                query: getPersonalDonation,
                variables: { uid: Meteor.userId() },
              },
            ],
          });
        }}
      >
        {console.log(data)}
        <label>
          {/* <input
            type="text"
            placeholder="Type of Donation"
            onChange={(event) => setTypeofDonation(event.target.value)}
          /> */}
          <select
            name="type"
            id="cars"
            onChange={(event) => setTypeofDonation(event.target.value)}
          >
            <option value="None">None</option>
            <option value="Financial">Financial</option>
            <option value="Food">Food</option>
            <option value="Blood">Blood</option>
            <option value="Clothes">Clothes</option>
            <option value="Others">Others</option>
          </select>
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
            onChange={(event) => setQuantityofDonation(event.target.value)}
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
