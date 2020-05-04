import axios from "axios";
import {
  GET_BACKLOG,
  GET_ERRORS,
  GET_PROJECT_TASK,
  DELETE_PROJECT_TASK,
} from "./types";

// a function that returns a function
export const createTask = (projectCode, task, history) => async (dispatch) => {
  try {
    await axios.post(`/api/backlog/${projectCode}/`, task);
    history.push(`/${projectCode}/board`);
  } catch (error) {
    // update the store by dispatching an action
    const action = { type: GET_ERRORS, payload: error.response.data };
    dispatch(action);
  }
};

export const getProjectTasks = (projectCode) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/backlog/${projectCode}/`);
    dispatch({ type: GET_BACKLOG, payload: res.data.tasks });
    dispatch({ type: GET_ERRORS, payload: {} });
  } catch (error) {
    dispatch({ type: GET_ERRORS, payload: error.response.data });
  }
};

export const updateTask = (projectCode, taskSequence, task, history) => async (
  dispatch
) => {
  try {
    await axios.patch(`/api/backlog/${projectCode}/${taskSequence}`, task);
    history.push(`/${projectCode}/board`);
  } catch (error) {
    // update the store by dispatching an action
    const action = { type: GET_ERRORS, payload: error.response.data };
    dispatch(action);
  }
};

export const getTask = (projectCode, taskSequence, history) => async (
  dispatch
) => {
  try {
    const res = await axios.get(`/api/backlog/${projectCode}/${taskSequence}`);
    dispatch({ type: GET_PROJECT_TASK, payload: res.data });
  } catch (error) {
    history.push(`/${projectCode}/board/`);
  }
};

export const deleteTask = (task) => async (dispatch) => {
  await axios.delete(
    `/api/backlog/${task.projectCode}/${task.projectSequence}`
  );
  dispatch({ type: DELETE_PROJECT_TASK, payload: task });
};
