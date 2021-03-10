import gql from "graphql-tag";
import React from "react";
import { UserCollection } from "../api/UserCollection";
import { graphql } from "react-apollo";
import { Meteor } from "meteor/meteor";

const addUser = gql`
  mutation(
    $first_name: String!
    $last_name: String!
    $mail_id: String!
    $password: String!
    $uid: String
  ) {
    addUser(
      first_name: $first_name
      last_name: $last_name
      mail_id: $mail_id
      password: $password
      uid: $uid
    ) {
      first_name
      last_name
      mail_id
      password
      uid
    }
  }
`;
class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: null,
      lname: null,
      mail: null,
      password: null,
      uid: null,
    };
  }
  render() {
    return (
      <>
        <h2>Add Player here</h2>
        <form
          className="form1"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.addUser({
              variables: {
                first_name: this.state.fname,
                last_name: this.state.lname,
                mail_id: this.state.mail,
                password: this.state.password,
                uid: Meteor.userId(),
              },
            });

            // UserCollection.insert({ first_name: this.state.fname,
            //   last_name: this.state.lname,
            //   mail_id: this.state.mail,
            //   password: this.state.password
            // });
          }}
        >
          <label>
            <input
              placeholder="first name"
              onChange={(event) => this.setState({ fname: event.target.value })}
            />
          </label>

          <br />
          <label>
            <input
              placeholder="last name"
              onChange={(event) => this.setState({ lname: event.target.value })}
            />
          </label>
          <br />
          <label>
            <input
              placeholder="mail id"
              onChange={(event) => this.setState({ mail: event.target.value })}
            />
          </label>
          <br />
          <label>
            <input
              placeholder="password"
              onChange={(event) =>
                this.setState({ password: event.target.value })
              }
            />
          </label>
          <br />
          <label>
            <button type="submit">Submit</button>
          </label>
        </form>
        <h2>List of Player</h2>
        <div>
          {console.log(UserCollection.find().fetch())}
          {UserCollection.find()
            .fetch()
            .map((val, index) => {
              console.log(val);
              return <li key={index}>{val.first_name}</li>;
            })}
        </div>
        <br />
      </>
    );
  }
}
export default graphql(addUser, { name: "addUser" })(Player);
