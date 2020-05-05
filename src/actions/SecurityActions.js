import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import { setTokenInHeader } from "./../securityUtils/setTokenInHeader";
import jwt_decode from "jwt-decode";

export const createNewUser = (newUser, history) => async (dispatch) => {
  try {
    await axios.post("/api/users/register/", newUser);
    history.push("/login");
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (error) {
    dispatch({ type: GET_ERRORS, payload: error.response.data });
  }
};

export const loginUser = (loginRequest, history) => async (dispatch) => {
  try {
    const res = await axios.post("/api/users/login/", loginRequest);
    console.log(res.data);
    const { token } = res.data;
    localStorage.setItem("jwtToken", token);
    setTokenInHeader(token);
    const decoded = jwt_decode(token);
    dispatch({ type: SET_CURRENT_USER, payload: decoded });
    dispatch({ type: GET_ERRORS, payload: {} });
    history.push("/dashboard");
  } catch (error) {
    dispatch({ type: GET_ERRORS, payload: error.response.data });
  }
};
