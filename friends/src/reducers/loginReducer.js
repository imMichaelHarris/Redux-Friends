import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED } from "../actions";

const initialState = {
  error: "",
  loggingIn: false
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: ""
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loggingIn: false,
        error: `Something went wrong - ${action.payload}`
      };
    default:
      return state;
  }
};
