import {
  DO_LOGIN_FAILED,
  DO_LOGIN_IN_PROGRESS,
  DO_LOGIN_REQUEST,
  DO_LOGIN_SUCCESS,
} from "../constants";


const doLogin = (payload) => ({
  type: DO_LOGIN_REQUEST,
  payload,
});

const doLoginInProgress = () => ({
  type: DO_LOGIN_IN_PROGRESS,
});

const doLoginSuccess = (result) => ({
  type: DO_LOGIN_SUCCESS,
  result,
});

const doLoginFailed = (error) => ({
  type: DO_LOGIN_FAILED,
  error,
});

export  {
  doLogin,
  doLoginInProgress,
  doLoginSuccess,
  doLoginFailed,
};
