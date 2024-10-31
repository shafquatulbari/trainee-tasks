import { combineReducers } from "redux";
import alert from "./alert";

// Import your individual reducers
// import yourReducer from './yourReducer';

const rootReducer = combineReducers({
  alert,
  // Add your reducers here, e.g., yourReducer
});

export default rootReducer;
