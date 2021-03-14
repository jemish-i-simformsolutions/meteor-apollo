import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { bindActionCreators } from "redux";
import { setStatus } from "../Actions/Actions";
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
      <div>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <Link to="/signup">Signup</Link>
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Link to="/login">Login here</Link>
            </ListItemIcon>
          </ListItem>
        </List>
        <Divider />
        {this.props.status1 === true ? (
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItem button>
              <Link to="/post_donation">Doante here</Link>
            </ListItem>
            <ListItemLink href="#simple-list">
              <Link to="/find_donation">Find Donation</Link>
            </ListItemLink>
            <ListItemLink href="#simple-list">
              <Link to="personal_donations">Your Donations</Link>
            </ListItemLink>
            <ListItemLink href="#simple-list">
              <Link to="all_donations">All Donations</Link>
            </ListItemLink>
          </List>
        ) : (
          "Please Login"
        )}
      </div>
    );
  }
}
export default connect(mapStateToProps)(Navbar);
