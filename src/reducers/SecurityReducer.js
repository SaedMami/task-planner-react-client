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
        validToken: Object.keys(action.payload).length === 0 ? false : true,
        currentUser: action.payload,
      };
    }
    default:
      return state;
  }
}
