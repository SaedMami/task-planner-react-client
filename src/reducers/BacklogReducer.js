import {
  GET_BACKLOG,
  GET_PROJECT_TASK,
  DELETE_PROJECT_TASK,
} from "../actions/types";

const initialState = {
  projectTasks: [],
  currentProjectTask: {},
};

export default function (previousState = initialState, action) {
  switch (action.type) {
    case GET_BACKLOG:
      return {
        ...previousState,
        projectTasks: action.payload,
      };

    case GET_PROJECT_TASK:
      return {
        ...previousState,
        currentProjectTask: action.payload,
      };

    case DELETE_PROJECT_TASK:
      const newProjectTasks = previousState.projectTasks.filter(
        (t) => t.projectSequence !== action.payload.projectSequence
      );
      return {
        ...previousState,
        projectTasks: newProjectTasks,
      };

    default:
      return previousState;
  }
}
