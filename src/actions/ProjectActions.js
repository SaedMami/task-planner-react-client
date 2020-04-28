import axios from "axios";
import { GET_ERRORS, GET_PROJECTS, GET_PROJECT, DELETE_PROJECT } from "./types";

// a function that returns a function
export const createProject = (project, history) => async (dispatch) => {
  try {
    await axios.post("/api/project", project);
    history.push("/dashboard");
    dispatch({ type: GET_ERRORS, payload: {} });
  } catch (error) {
    // update the store by dispatching an action
    const action = { type: GET_ERRORS, payload: error.response.data };
    dispatch(action);
  }
};

export const getProjects = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/project");
    const action = { type: GET_PROJECTS, payload: res.data };
    dispatch(action);
    dispatch({ type: GET_ERRORS, payload: {} });
  } catch (error) {}
};

export const getProjectByCode = (projectCode, history) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/project/${projectCode}`);
    const action = { type: GET_PROJECT, payload: res.data };
    dispatch(action);
    dispatch({ type: GET_ERRORS, payload: {} });
  } catch (error) {
    history.push("/dashboard");
  }
};

export const deleteProjectByCode = (projectCode) => async (dispatch) => {
  try {
    await axios.delete(`/api/project/${projectCode}`);
    dispatch({ type: DELETE_PROJECT, payload: projectCode });
  } catch (error) {}
};
