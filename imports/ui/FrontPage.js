import React from "react";
import { BrowserRouter, Link, Route, Router, Switch } from "react-router-dom";
import { AllDonation } from "./Component/AllDoantion";
import { FindDonation } from "./Component/FindDonation";
import { PersonalDonation } from "./Component/PersonalDonation";
import { PostDonation } from "./Component/PostDonation";
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
        <br />
        <Link to="/post_donation">Doante here</Link>
        <br />
        <Link to="/find_donation">Find Donation</Link>

        <Switch>
          {/* <Route path="/login"/> */}

          <Route path="/signup" component={SignUpPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/player" component={Player} />
          <Route path="/post_donation" component={PostDonation} />
          <Route path="/personal_donations" component={PersonalDonation} />
          <Route path="/all_donations" component={AllDonation} />
          <Route path="/find_donation" component={FindDonation} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default FrontPage;
