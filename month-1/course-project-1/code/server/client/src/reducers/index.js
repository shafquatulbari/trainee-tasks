import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import post from "./post";

// Import your individual reducers
// import yourReducer from './yourReducer';

const rootReducer = combineReducers({
  alert,
  auth,
  profile,
  post,
  // Add your reducers here, e.g., yourReducer
});

export default rootReducer;
