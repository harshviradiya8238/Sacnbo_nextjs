import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from "../constants";

const INIT_STATE = {
  currentUser: "",
  forgotUserMail: "",
  newPassword: "",
  resetPasswordCode: "",
  loading: false,
  error: "",
  success: "",
};
const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        error: "",
      };
    case USER_REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default authReducer;
