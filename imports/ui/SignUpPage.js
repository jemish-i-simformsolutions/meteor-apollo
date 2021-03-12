import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { useTracker } from "meteor/react-meteor-data";
import { BrowserRouter, NavLink, Router } from "react-router-dom";

export const SignUpPage = () => {
  const [mail, setMail] = useState(null);
  const [password, setPassword] = useState(null);
  const [flag, setFlag] = useState(false);
  const [loginmail, setLoginmail] = useState(null);
  const [loginpassword, setLoginpassword] = useState(null);

  return (
    <>
      {/* {Meteor.subscribe()} */}
      <h2>Register here</h2>
      <form
        className="form2"
        onSubmit={(event) => {
          event.preventDefault();
          if (Meteor.isClient) {
            Accounts.createUser(
              {
                email: mail,
                password: password,
              },
              (err) => console.log(err)
            );
            setFlag(true);
            //  {console.log(Meteor.users.find().fetch())}
          }
        }}
      >
        <label>
          <input
            type="text"
            onChange={(event) => {
              setMail(event.target.value);
            }}
            placeholder="enter email here"
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            placeholder="enter password here"
          />
        </label>
        <br />
        <label>
          <input type="submit" />
        </label>
      </form>
      {flag === false ? (
        "login please"
      ) : (
        <button
          onClick={() => {
            Meteor.logout();
            setFlag(false);
          }}
        >
          logout
        </button>
      )}
    </>
  );
};
//697818373172-mrsqqiracemiqu21i3ka4q4delnkbds7.apps.googleusercontent.com
//UngisC2zzNppuF9TYFedawOD
//https://console.developers.google.com/apis/credentials/oauthclient/${697818373172-mrsqqiracemiqu21i3ka4q4delnkbds7.apps.googleusercontent.com}?project=${UngisC2zzNppuF9TYFedawOD}
//
