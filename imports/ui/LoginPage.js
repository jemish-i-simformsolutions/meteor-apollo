import React, { useState } from "react";

import { GoogleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
const LoginPage = () => {
  const [flag, setFlag] = useState(Meteor.userId() === null ? false : true);
  const [loginmail, setLoginmail] = useState(null);
  const [loginpassword, setLoginpassword] = useState(null);
  const dispatch = useDispatch();
  const signal = useSelector((state) => state.status1);
  return (
    <>
      <br />
      <br />
      {signal === false ? (
        <>
          <button
            onClick={() => {
              Meteor.loginWithGoogle(
                {
                  requestPermissions: ["email"],
                  loginStyle: "popup",
                  redirectUrl: "https://localhost:3000/_oauth/google?close",
                },
                () =>
                  dispatch({ type: "LOGINSUCCESSFULL", data: true }, () =>
                    setFlag(true)
                  )
              );
            }}
          >
            Login with <GoogleOutlined />
          </button>
          <form
            className="loginform"
            onSubmit={(event) => {
              event.preventDefault();
              Meteor.loginWithPassword(
                loginmail,
                loginpassword,
                (err) => console.log(err),
                () => dispatch({ type: "LOGINSUCCESSFUL", data: true })
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
        </>
      ) : (
        <>
          "already login"
          <button
            onClick={() => {
              Meteor.logout(() =>
                dispatch({ type: "LOGINISNOTSUCCESSFULL", data: false }, () =>
                  setFlag(false)
                )
              );
            }}
          >
            Log out
          </button>
        </>
      )}
      <br />
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
