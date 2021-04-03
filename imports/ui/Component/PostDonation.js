import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { Link } from "react-router-dom";
import { addMutation, getPersonalDonation } from "../Query/query";
import { useMutation } from "@apollo/react-hooks";
import { Paper, ThemeProvider } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
export const PostDonation = () => {
  const [typeofDonation, setTypeofDonation] = useState(null);
  const [quantityofDonation, setQuantityofDonation] = useState(null);
  const [addressofDonation, setAddressofDonation] = useState(null);
  const [pincode, setPincode] = useState(null);
  const [contact, setContact] = useState(null);
  const [addPost, { data }] = useMutation(addMutation);

  return (
    <div className="d-flex align-items-center justify-content-center mt-5 ">
      <form
        className="form card p-2 mt-5 shadow p-3 mb-5 bg-white rounded"
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
        <center>
          <button className="btn btn-sm btn-outline-primary bg-success text-white font-weight-bold">
            Post Donation here
          </button>
        </center>
        <br />
        <table>
          <tbody>
            <tr>
              <td>
                {" "}
                <select
                  className="form-control mt-1"
                  name="type"
                  id="cars"
                  onChange={(event) => setTypeofDonation(event.target.value)}
                >
                  <option value="Type of Donation">None</option>
                  <option value="Financial">Financial</option>
                  <option value="Food">Food</option>
                  <option value="Blood">Blood</option>
                  <option value="Clothes">Clothes</option>
                  <option value="Others">Others</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="form-control mt-1"
                  type="text"
                  placeholder="Enter Address of Donation"
                  onChange={(event) => setAddressofDonation(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input
                  className="form-control mt-1"
                  type="number"
                  placeholder="Enter your area Pincode"
                  onChange={(event) => setPincode(event.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="form-control mt-1"
                  type="text"
                  placeholder="Enter details of donation"
                  onChange={(event) =>
                    setQuantityofDonation(event.target.value)
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input
                  className="form-control mt-1"
                  type="tel"
                  placeholder="Enter Contact detail"
                  onChange={(event) => setContact(event.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <center>
          <button
            className="btn btn-sm btn-outline-primary btn-primary text-white font-weight-bold mt-2 "
            type="submit"
          >
            Add donation
          </button>{" "}
        </center>
        {console.log(data)}
      </form>
    </div>
  );
};
