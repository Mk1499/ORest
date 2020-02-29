import {
  SetUsers,
  SetTables,
  SetAvailTables,
  SetReservations,
  Loading
} from "../actions/types";

const INITIAL_STATE = {
  allusers: [],
  allTables: [],
  availableTables: [],
  reservations: [],
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  console.log("user", state.user);

  switch (action.type) {
    case SetUsers:
      return { ...state, allusers: action.payload, loading: false };
    case SetTables:
      return { ...state, allTables: action.payload, loading: false };
    case SetAvailTables:
      return { ...state, availableTables: action.payload, loading: false };
    case SetReservations:
      return { ...state, reservations: action.payload, loading: false };
    case Loading:
      return { ...state, loading: action.payload ? action.payload : true };

    default:
      return state;
  }
};
