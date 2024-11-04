import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";

// Import your individual reducers
// import yourReducer from './yourReducer';

const rootReducer = combineReducers({
  alert,
  auth,
  profile,
  // Add your reducers here, e.g., yourReducer
});

export default rootReducer;
