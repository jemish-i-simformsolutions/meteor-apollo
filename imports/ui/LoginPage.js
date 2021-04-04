import React, { useState } from "react";

import { GoogleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
const LoginPage = () => {
  const [flag, setFlag] = useState(Meteor.userId() === null ? false : true);
  const [loginmail, setLoginmail] = useState(null);
  const [loginpassword, setLoginpassword] = useState(null);
  const dispatch = useDispatch();
  const signal = useSelector((state) => state.status1);
  return (
    <div className="d-flex align-items-center justify-content-center mt-5">
      {signal === false ? (
        <div>
          <form
            className="form card p-2  "
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
            <button
              className="form-control bg-primary"
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
              <GoogleOutlined className="text-warning col-1  " />
              <span className="col-2 text-danger font-weight-bold">
                Login with Google!
              </span>
            </button>
            <br />

            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(event) => setLoginmail(event.target.value)}
            />
            <br />
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setLoginpassword(event.target.value)}
            />
            <br />
            <center>
              {" "}
              <input
                type="submit"
                value="Login"
                className="  btn  btn-outline-success text-success font-weight-bolder bg-white"
              />
            </center>
            <br />

            {/* <BrowserRouter>         <NavLink to="/_oauth/google">click here to login with google</NavLink>
       
       
          </BrowserRouter> */}
          </form>
        </div>
      ) : (
        <>
          <h6 className="text-white"> Already login</h6>
          <CheckCircleOutlined style={{ color: "white" }} />
          <br />
        </>
      )}
      <br />
      <br />
    </div>
  );
};
export default LoginPage;
