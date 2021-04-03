import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { connect } from "react-redux";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
const mapStateToProps = (state) => {
  return {
    status1: state.status1,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ setStatus }, dispatch);
// };

class Navbar extends React.Component {
  render() {
    return (
      <div className="justify justify-content-left   ">
        <List aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <Link
                to="/signup"
                className="btn btn-outline-primary text-white btn-sm   font-weight-bold"
                data-toggle="button"
                aria-pressed="false"
                autocomplete="off"
              >
                Sign Up
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Link
                to="/login"
                className="btn btn-outline-primary text-white btn-sm  font-weight-bold"
                data-toggle="button"
                aria-pressed="false"
                autocomplete="off"
              >
                Login here
              </Link>
            </ListItemIcon>
          </ListItem>
        </List>
        {this.props.status1 === true ? (
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItem button>
              <Link
                to="/post_donation"
                className="btn btn-outline-danger btn-sm h6 small text-white   font-weight-bold"
              >
                Doante here
              </Link>
            </ListItem>
            <ListItemLink href="#simple-list">
              <Link
                to="/find_donation"
                className="btn btn-outline-danger btn-sm h6 small text-white   font-weight-bold"
              >
                Find Donation
              </Link>
            </ListItemLink>
            <ListItemLink href="#simple-list">
              <Link
                to="personal_donations"
                className="btn btn-outline-danger btn-sm h6 small text-white   font-weight-bold"
              >
                Your Donations
              </Link>
            </ListItemLink>
            <ListItemLink href="#simple-list">
              <Link
                to="all_donations"
                className="btn btn-outline-danger btn-sm h6 small text-white   font-weight-bold"
              >
                All Donations
              </Link>
            </ListItemLink>
          </List>
        ) : (
          <span className="text-danger fade-in"> Please Login!</span>
        )}
      </div>
    );
  }
}
export default connect(mapStateToProps)(Navbar);
