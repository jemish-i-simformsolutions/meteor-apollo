import gql from "graphql-tag";
import React from "react";

import { graphql } from "react-apollo";
const addUser = gql`
  mutation(
    $first_name: String!
    $last_name: String!
    $mail_id: String!
    $password: String!
  ) {
    addUser(
      first_name: $first_name
      last_name: $last_name
      mail_id: $mail_id
      password: $password
    ) {
      first_name
      last_name
      mail_id
      password
    }
  }
`;
class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: null,
      lname: null,
      mail: null,
      password: null,
    };
  }
  render() {
    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(this.props);
            this.props.addUser({
              variables: {
                first_name: this.state.fname,
                last_name: this.state.lname,
                mail_id: this.state.mail,
                password: this.state.password,
              },
            });
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
      </>
    );
  }
}
export default graphql(addUser, { name: "addUser" })(SignupPage);
