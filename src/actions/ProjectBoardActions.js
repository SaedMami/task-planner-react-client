import axios from "axios";
import { GET_PROJECT_TASK, GET_ERRORS } from "./types";

// a function that returns a function
export const createTask = (projectCode, task, history) => async (dispatch) => {
  try {
    await axios.post(`/api/backlog/${projectCode}/`, task);
    history.push(`/${projectCode}/board`);
    //dispatch({ type: GET_PROJECT_TASK, payload: {currentProjectTask: task} });
  } catch (error) {
    // update the store by dispatching an action
    const action = { type: GET_ERRORS, payload: error.response.data };
    dispatch(action);
  }
};
