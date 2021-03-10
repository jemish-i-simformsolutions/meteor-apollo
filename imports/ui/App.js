import React from "react";
import { useTracker } from "meteor/react-meteor-data";

import { UserCollection } from "../api/UserCollection";
import FrontPage from "./FrontPage";

const App = () => {
  const allUser = useTracker(() => UserCollection.find({}).fetch());

  return (
    <>
      <FrontPage />
    </>
  );
};
export default App;
