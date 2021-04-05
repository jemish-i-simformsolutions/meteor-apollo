import React from "react";
import { BrowserRouter, Link, Route, Router, Switch } from "react-router-dom";
import { AllDonation } from "./Component/AllDoantion";
import { FindDonation } from "./Component/FindDonation";
import { PersonalDonation } from "./Component/PersonalDonation";
import { PostDonation } from "./Component/PostDonation";
import LoginPage from "./LoginPage";
import { SignUpPage } from "./SignUpPage";
import Navbar from "./Component/Navbar";
import { Provider } from "react-redux";
import { ConfigureStore } from "./Redux/ConfigureStore";
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const FrontPage = () => {
  const store = ConfigureStore();
  return (
    <div className="app">
      <BrowserRouter>
        <div className="navbar1 ">
          <Provider store={store}>
            <Navbar />
          </Provider>
        </div>

        <Switch>
          {/* <Route path="/login"/> */}
          <div className="container1">
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

            <Route path="/post_donation" component={PostDonation} />
            <Route path="/personal_donations" component={PersonalDonation} />

            <Route path="/all_donations" component={AllDonation} />

            <Route path="/find_donation" component={FindDonation} />
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default FrontPage;
