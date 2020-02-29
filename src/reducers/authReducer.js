import { SetApiToken, LoginLoading,SetUserData } from "../actions/types";

const INITIAL_STATE = {
  log: "",
  userToken: "",
  loginLoading: false,
  currentUserData: {}
};

export default (state = INITIAL_STATE, action) => {
  console.log("user", state.user);

  switch (action.type) {
    case SetApiToken:
      console.log("User Data : ", action.payload.content.api_token);
      return { ...state, userToken: action.payload.content.api_token };
    case LoginLoading:
      return { ...state, loginLoading: action.payload };
    case SetUserData:
      console.log("Set User Data Called : ",action.payload);
      
      return {...state, currentUserData :action.payload}

    default:
      return state;
  }
};
