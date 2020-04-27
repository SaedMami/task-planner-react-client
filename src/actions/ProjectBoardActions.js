import axios from "axios";
import { GET_BACKLOG, GET_ERRORS } from "./types";

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

export const getProjectTasks = (projectCode) => async (dispatch) => {
  const res = await axios.get(`/api/backlog/${projectCode}/`);
  dispatch({ type: GET_BACKLOG, payload: res.data.tasks });
};
