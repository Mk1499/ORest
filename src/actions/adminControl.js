import {
  SetUsers,
  SetTables,
  SetAvailTables,
  SetReservations,
  Loading
} from "./types";
import Cookies from "js-cookie";
import { apiUrl } from "../config/global";
import { useHistory } from "react-router-dom";
import history from "../Services/history";
import jwtDecode from "jwt-decode";

export const getAllUsers = () => async dispatch => {
  dispatch({
    type: Loading
  });
  await fetch(`${apiUrl}/users`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + Cookies.get("orestToken")
    }
  })
    .then(res => res.json())
    .then(res => {
      console.log("USERs :", res);
      let clients = res.filter(item => {
        if (item.email !== "admin@mail.com") return item;
      });
      dispatch({
        type: SetUsers,
        payload: clients
      });
    })
    .catch(err => console.log("e : ", err));
};

export const getAllTables = () => async dispatch => {
  await fetch(`${apiUrl}/tables`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + Cookies.get("orestToken")
    }
  })
    .then(res => res.json())
    .then(res => {
      console.log("tables :", res);

      dispatch({
        type: SetTables,
        payload: res
      });
    })
    .catch(err => console.log("e : ", err));
};

export const getAvailableTables = () => async dispatch => {
  console.log("Token : ", Cookies.get("orestToken"));

  await fetch(`${apiUrl}/tables/available`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + Cookies.get("orestToken")
    }
  })
    .then(res => res.json())
    .then(res => {
      console.log("tables :", res);

      dispatch({
        type: SetAvailTables,
        payload: res
      });
    })
    .catch(err => console.log("e : ", err));
};

export const addTable = tableDate => async dispatch => {
  await fetch(`${apiUrl}/tables`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + Cookies.get("orestToken")
    },
    mode: "cors",
    body: JSON.stringify(tableDate)
  })
    .then(res => {
      console.log("RESPONSE : ", res);
      console.log("Status : ", res.status);

       return res.json();
    })
    .then(res => {
      if(res.error) alert(res.error);
      else  {
        alert("Table Added Successfully"); 
        // window.location.reload();
        history.push("/tables")
      }
    })
    .catch(err => console.log("ERR : ", err));
};

export const deleteTable = id => async dispatch => {
  await fetch(`${apiUrl}/tables/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + Cookies.get("orestToken")
    }
  })
    .then(res => res.json())
    .then(res => {
      console.log("Del Reservations :", res);
      if (res.error) alert(res.error);
      else if (res.message) {
        alert(res.message);
        // window.location.reload();
        history.push("/");
      }
      // history.replace("/reservations");
    })
    .catch(err => console.log("e : ", err));
};

export const getReservations = (date = "") => async dispatch => {
  dispatch({
    type: Loading
  });

  console.log("Action Date : ", date);

  await fetch(`${apiUrl}/book/${date}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + Cookies.get("orestToken")
    }
  })
    .then(res => res.json())
    .then(res => {
      console.log("Reservations :", res);

      dispatch({
        type: SetReservations,
        payload: res
      });
    })
    .catch(err => console.log("e : ", err));
};

export const deleteReservation = id => async dispatch => {
  await fetch(`${apiUrl}/book/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + Cookies.get("orestToken")
    }
  })
    .then(res => res.json())
    .then(res => {
      console.log("Del Reservations :", res);
      if (res.error) alert(res.error);
      else if (res.message) {
        alert(res.message);
        // window.location.reload();
        history.push("/");
      }
      // alert(res.message);
    })
    .catch(err => console.log("e : ", err));
};
