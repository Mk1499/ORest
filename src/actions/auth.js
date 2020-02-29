import { SetApiToken, SetUserData } from "./types";
import Cookies from "js-cookie";
import { apiUrl } from "../config/global";
import { useHistory } from "react-router-dom";
import history from "../Services/history";
import jwtDecode from "jwt-decode";

export const login = userData => async dispatch => {
  await fetch(`${apiUrl}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify(userData)
  })
    .then(res => {
      console.log("RESPONSE : ", res);
      console.log("Status : ", res.status);

      return res.json();
      
    })
    .then(res => {
      if (res.error) alert(res.error); 
      else {

        Cookies.set("orestToken", res.token);
        dispatch({
          type: SetUserData,
          payload: res
        });
        history.push("/");
      } 
    })
    .catch(err => alert(err));
};

export const signUp = (userData) => async dispatch => {
  await fetch(`${apiUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(res => res.json())
    .then(res => {
      if (res.error) alert(res.err)
      else {
        console.log("RES : ", res)
        Cookies.set("orestToken", res.token);
        dispatch({
          type: SetUserData,
          payload: res
        });
        history.push("/");
        alert("Account Created Successfully")
      }
    })
    .catch(err => console.log("ERR : ", err));
}

export const authEntry = (userType,errMsg) => dispatch => {
  let userToken = Cookies.get("orestToken");
  if (userToken != undefined) {
    let decoded = jwtDecode(userToken);
    let tokenType = decoded.userData.type;
    if (tokenType !== userType) history.push("/");
  } else {
    alert(errMsg)
    history.push("/signin");
  }
};

export const checkUser = () => dispatch => {
  let userToken = Cookies.get("orestToken");
  if (userToken != undefined) {
    let decoded = jwtDecode(userToken);
    console.log("User Data Decoded : ", decoded);
    dispatch({
      type: SetUserData,
      payload: decoded.userData
    });
  } else {
    history.push("/");
  }
};

export const logout = () => dispatch => {
  Cookies.remove("orestToken");
  dispatch({
    type: SetUserData,
    payload: {}
  });
  history.push("/");
};
