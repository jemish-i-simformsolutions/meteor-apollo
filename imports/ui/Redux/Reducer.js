import { Meteor } from "meteor/meteor";
export const initialState = {
  status1: Meteor.userId() !== null ? true : false,
};
export const Reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "SETSTATUS":
      return { ...state, status1: actions.data };
    case "LOGINSUCCESSFULL":
      return { ...state, status1: actions.data };
    case "LOGINISNOTSUCCESSFULL":
      return { ...state, status1: actions.data };

    default:
      return state;
  }
};
//106.77.93.1
