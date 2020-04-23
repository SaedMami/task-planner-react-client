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
      // payload will have the delete project code, just remove that from the list of all projects
      const updatedProjects = state.allProjects.filter(
        (element) => element.projectCode !== action.payload
      );
      return {
        ...state,
        allProjects: updatedProjects,
      };
    default:
      return state;
  }
}
