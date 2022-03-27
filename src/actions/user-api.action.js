import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "../actions/types";
import UserAPIservice from "../services/user-api.service";

export const register = (username, email, password) => (dispatch) => {
  return UserAPIservice.register(username, email, password).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: { user: response},
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: REGISTER_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
export const login = (email, password) => (dispatch) => {
  return UserAPIservice.login(email, password).then(
    (response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: response },
      });
      return Promise.resolve();
    },
    (error) => {
      let message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      if (error.response.status === 400) {
        message = "Неправильный логин или пароль"
      }
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
export const logout = () => (dispatch) => {
  UserAPIservice.logout().then(() => {
    dispatch({
      type: LOGOUT,
    });
    return Promise.resolve();
  },
  (error) => {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
    return Promise.reject();
  });
};