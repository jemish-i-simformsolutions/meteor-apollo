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
    <div className="form">
      <Paper className="paper" variant="outlined">
        <h2>
          <center>🩸 Post Donation here 🩸</center>
        </h2>

        <form
          className="postdonation"
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
          <table className="formtable">
            <tbody>
              <tr>
                <td>
                  <label>
                    <pre>Type of Donation</pre>
                  </label>
                </td>
                <td>
                  {" "}
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
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    <pre>Address</pre>{" "}
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Address of Donation"
                    onChange={(event) =>
                      setAddressofDonation(event.target.value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    <pre>Pincode</pre>{" "}
                  </label>
                </td>
                <td>
                  {" "}
                  <input
                    type="number"
                    placeholder="Enter your area Pincode"
                    onChange={(event) => setPincode(event.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    <pre>Details of Donation</pre>
                  </label>
                </td>
                <td>
                  <input
                    type="number"
                    placeholder="Enter qauntity in KGs"
                    onChange={(event) =>
                      setQuantityofDonation(event.target.value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    <pre>Contact</pre>
                  </label>
                </td>
                <td>
                  {" "}
                  <input
                    type="number"
                    placeholder="Enter your contact detail "
                    onChange={(event) => setContact(event.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="addButton">
                  <center>
                    {" "}
                    <button type="submit">
                      <AddCircleOutlineIcon />
                    </button>{" "}
                    <b> Add Donation</b>
                  </center>
                </td>
              </tr>
            </tbody>
          </table>
          {console.log(data)}
        </form>
      </Paper>
    </div>
  );
};
