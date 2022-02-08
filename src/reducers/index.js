import counterReducer from "./counter";
import userReducer from "./user";
import { combineReducers } from "redux";

export default combineReducers({
  counter: counterReducer,
  user: userReducer,
});
