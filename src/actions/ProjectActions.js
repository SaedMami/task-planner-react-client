import axios from "axios";
import { GET_ERRORS } from "./types";

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
