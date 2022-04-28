import {
  DO_LOGIN_FAILED,
  DO_LOGIN_IN_PROGRESS,
  DO_LOGIN_REQUEST,
  DO_LOGIN_SUCCESS,
} from "../constants";

const initialState = {
  login_inProgress: false,
  loggedUser: null,
  login_error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case DO_LOGIN_REQUEST:
      return { ...state, loggedUser: null };
    case DO_LOGIN_IN_PROGRESS:
      return { ...state, login_inProgress: true };
    case DO_LOGIN_SUCCESS:
      return { state, loggedUser: action.result };
    case DO_LOGIN_FAILED:
      return { state, login_error: action.result };

      default:
        return state;
  }
};

export default loginReducer;