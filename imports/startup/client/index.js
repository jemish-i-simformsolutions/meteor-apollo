import React from "react";
import { render } from "react-dom";
import { Meteor } from "meteor/meteor";
import App from "../../ui/App";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
const httplink = new HttpLink({
  uri: Meteor.absoluteUrl("graphql"),
});
const cache = new InMemoryCache();
const client = new ApolloClient({
  link: httplink,
  cache,
});
const Apollo = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

Meteor.startup(() => {
  render(<Apollo />, document.getElementById("app"));
});
