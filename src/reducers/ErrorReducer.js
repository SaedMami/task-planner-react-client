import { GET_ERRORS } from "../actions/types";

const initialState = {};

// A reducer to update the error state

export default function (previousState = initialState, action) {
  var newState = previousState;

  if (action.type === GET_ERRORS) {
    newState = action.payload;
  }

  return newState;
}
