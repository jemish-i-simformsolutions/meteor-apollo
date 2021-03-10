import React, { useState } from "react";

import { GoogleOutlined } from "@ant-design/icons";
const LoginPage = () => {
  const [flag, setFlag] = useState(Meteor.userId() === null ? false : true);
  const [loginmail, setLoginmail] = useState(null);
  const [loginpassword, setLoginpassword] = useState(null);
  return (
    <>
      <br />
      <br />

      {flag === false ? (
        <button
          onClick={() => {
            Meteor.loginWithGoogle({
              requestPermissions: ["email"],
              loginStyle: "popup",
              redirectUrl: "https://localhost:3000/_oauth/google?close",
            });
            setFlag(true);
          }}
        >
          Login with <GoogleOutlined />
        </button>
      ) : (
        <>
          "already login"
          <button
            onClick={() => {
              Meteor.logout();
              setFlag(false);
            }}
          >
            Log out
          </button>
        </>
      )}
      <br />
      <form
        className="loginform"
        onSubmit={(event) => {
          event.preventDefault();
          Meteor.loginWithPassword(loginmail, loginpassword, (err) =>
            console.log(err)
          );
          setFlag(true);
        }}
      >
        <input
          type="text"
          placeholder="email"
          onChange={(event) => setLoginmail(event.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="password"
          onChange={(event) => setLoginpassword(event.target.value)}
        />
        <br />
        <input type="submit" />
        <br />

        {/* <BrowserRouter>         <NavLink to="/_oauth/google">click here to login with google</NavLink>
       
       
          </BrowserRouter> */}
      </form>
      <br />
      <button
        onClick={() => {
          console.log(Meteor.users.find().fetch());
        }}
      >
        click to show current user
      </button>
    </>
  );
};
export default LoginPage;
