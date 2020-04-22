import axios from "axios";
import { GET_ERRORS, GET_PROJECTS } from "./types";

// a function that returns a function
export const createProject = (project, history) => async (dispatch) => {
  try {
    await axios.post("http://localhost:8080/api/project", project);
    history.push("/dashboard");
  } catch (error) {
    // update the store by dispatching an action
    var action = { type: GET_ERRORS, payload: error.response.data };
    dispatch(action);
  }
};

export const getProjects = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8080/api/project");
    var action = { type: GET_PROJECTS, payload: res.data };
    dispatch(action);
  } catch (error) {}
};
