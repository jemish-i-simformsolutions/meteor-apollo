import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Link } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Badge, Box } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    backgroundColor: grey[900],
  },
}));
const defaultProps = {
  bgcolor: "background.paper",

  borderColor: "white",
  m: 1,
  border: 1.5,
  style: { width: "5rem", height: "5rem" },
};

function Navbar() {
  const status1 = useSelector((state) => state.status1);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <>
      {status1 === true ? (
        <List aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <Box borderRadius="50%" {...defaultProps}>
                <StyledBadge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  variant="dot"
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    className={classes.large}
                  />
                </StyledBadge>
              </Box>
            </ListItemIcon>
          </ListItem>
        </List>
      ) : (
        <>
          <List aria-label="main mailbox folders">
            <ListItem button>
              <ListItemIcon>
                <Link
                  to="/signup"
                  className="btn btn-outline-primary text-white btn-sm   "
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
                  className="btn btn-outline-primary text-white btn-sm  "
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                >
                  Login here
                </Link>
              </ListItemIcon>
            </ListItem>
          </List>
        </>
      )}

      {status1 === true ? (
        <List component="nav" aria-label="secondary mailbox folders">
          <table className="table">
            <tbody>
              <tr>
                <Link
                  to="/post_donation"
                  className="btn btn-outline-danger btn-sm   text-white   "
                >
                  Doante here
                </Link>
              </tr>
              <tr>
                <Link
                  to="/find_donation"
                  className="btn btn-outline-danger btn-sm  text-white   "
                >
                  Find Donation
                </Link>
              </tr>
              <tr>
                <Link
                  to="personal_donations"
                  className="btn btn-outline-danger btn-sm text-white   "
                >
                  Your Donations
                </Link>
              </tr>
              <tr>
                <Link
                  to="all_donations"
                  className="btn btn-outline-danger btn-sm  text-white  "
                >
                  All Donations
                </Link>
              </tr>
              <tr>
                <button
                  className="btn  btn-outline-danger btn-sm text-white "
                  onClick={() => {
                    Meteor.logout(() =>
                      dispatch(
                        { type: "LOGINISNOTSUCCESSFULL", data: false },
                        () => setFlag(false)
                      )
                    );
                  }}
                >
                  Log out
                </button>
              </tr>
            </tbody>
          </table>
        </List>
      ) : (
        <span className="text-danger fade-in"> Please Login!</span>
      )}
    </>
  );
}
export default Navbar;
