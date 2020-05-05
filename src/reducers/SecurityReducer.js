import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
  currentUser: {},
  validToken: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return {
        ...state,
        validToken: action.payload ? true : false,
        currentUser: action.payload,
      };
    }
    default:
      return state;
  }
}
