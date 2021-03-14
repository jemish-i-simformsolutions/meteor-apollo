import React from "react";
import { BrowserRouter, Link, Route, Router, Switch } from "react-router-dom";
import { AllDonation } from "./Component/AllDoantion";
import { FindDonation } from "./Component/FindDonation";
import { PersonalDonation } from "./Component/PersonalDonation";
import { PostDonation } from "./Component/PostDonation";
import LoginPage from "./LoginPage";
import Player from "./Player";
import { SignUpPage } from "./SignUpPage";
import Navbar from "./Component/Navbar";
import { Provider } from "react-redux";
import { ConfigureStore } from "./Redux/ConfigureStore";
const FrontPage = () => {
  const store = ConfigureStore();
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <div className="navbar">
            <Provider store={store}>
              <Navbar />
            </Provider>
          </div>

          <Switch>
            {/* <Route path="/login"/> */}
            <div className="container">
              <Route path="/signup">
                <Provider store={store}>
                  <SignUpPage />
                </Provider>
              </Route>
              <Route path="/login">
                <Provider store={store}>
                  <LoginPage />
                </Provider>
              </Route>

              <Route path="/player" component={Player} />
              <Route path="/post_donation" component={PostDonation} />
              <Route path="/personal_donations" component={PersonalDonation} />
              <Route path="/all_donations" component={AllDonation} />
              <Route path="/find_donation" component={FindDonation} />
            </div>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};
export default FrontPage;
