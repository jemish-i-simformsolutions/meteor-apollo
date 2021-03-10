import React from "react";
import { BrowserRouter, Link, Route, Router, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import Player from "./Player";
import { SignUpPage } from "./SignUpPage";
const FrontPage = () => {
  return (
    <>
      <BrowserRouter>
        <Link to="/signup">Signup</Link>
        <br />
        <Link to="/login">Login here</Link>
        <br />
        <Link to="/player">Player</Link>

        <Switch>
          {/* <Route path="/login"/> */}

          <Route path="/signup" component={SignUpPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/player" component={Player} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default FrontPage;
