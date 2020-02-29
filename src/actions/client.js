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
import moment from "moment";

export const bookTable = (
  tableId,
  noOfPersons,
  bookingDateStart,
  bookingDateEnd
) => async dispatch => {
  let bookData = {
    tableId,
    noOfPersons,
    bookingDateStart: moment(bookingDateStart).format("YYYY-MM-DD HH:mm:ss"),
    bookingDateEnd: moment(bookingDateEnd).format("YYYY-MM-DD HH:mm:ss"),
    creationDate: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
  };

  console.log("Book Table Called with Date : ", bookData);

  await fetch(`${apiUrl}/book`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + Cookies.get("orestToken")
    },
    mode: "cors",
    body: JSON.stringify(bookData)
  })
    .then(res => {
      console.log("RESPONSE : ", res);
      console.log("Status : ", res.status);

      return res.json();
    })
    .then(res => {
        console.log("RR : ",res);
        
      if (res.error) alert(res.error);
      else {
        if (  alert("Your Reservation Success"))
            history.push("/myBooks")
        }
    })
    .catch(err => console.log("ERR : ", err));
};

export const getReservations = (userId) => async dispatch => {
    dispatch({
      type: Loading
    });
  
    console.log("Action user id : ", userId);
  
    await fetch(`${apiUrl}/book/userBooks/${userId}`, {
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
  