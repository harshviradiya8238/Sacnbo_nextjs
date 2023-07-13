import API from "../../components/api/API";
import axios from "axios";
import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from "../constants";
import Notification from "../../components/notification/Notification";

export const registerAction = (data, signUpType) => async (dispatch) => {
  const passData = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    type: signUpType === "email" ? "email" : "mobile",
    routeName: "registration",
  };

  try {
    const res = await API.post("", passData, {
      headers: {
        encryptedkey: "U2FsdGVkX183zZX4dBohxl/jSCy1KP7O91W1G+ncMYk=",
      },
    });

    Notification("success", res?.message);
    console.log(res);
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: res.data.data,
    });
    //   localStorage.setItem('token', data?.data?.data?.token);
    //   localStorage.setItem('adminInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.data && error.data.data.message
          ? error.data.data.message
          : error.message,
    });
  }
};
