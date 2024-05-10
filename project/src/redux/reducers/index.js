import { combineReducers } from "redux";

import eventReducer from "./eventReducer";
import objectReducer from "./objectReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  event: eventReducer,
  object: objectReducer,
  user: userReducer,
});

export default rootReducer;