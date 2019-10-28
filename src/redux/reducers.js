import { combineReducers } from "redux";
import { connectRouter, LOCATION_CHANGE } from "connected-react-router/immutable";
import layoutReducer from "./layout/layoutReducer";
import authReducer from "./auth/authReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    layoutReducer,
    authReducer
  });
