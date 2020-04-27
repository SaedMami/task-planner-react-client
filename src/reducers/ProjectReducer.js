import { GET_PROJECTS, GET_PROJECT, DELETE_PROJECT } from "../actions/types";

const initialState = {
  allProjects: [],
  currentProject: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        allProjects: action.payload,
      };

    case GET_PROJECT:
      return {
        ...state,
        currentProject: action.payload,
      };

    case DELETE_PROJECT:
      return {
        ...state,
        allProjects: state.allProjects.filter(
          (element) => element.projectCode !== action.payload
        ),
      };
    default:
      return state;
  }
}
