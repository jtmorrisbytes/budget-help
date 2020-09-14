import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as user from "./user";
import * as locales from "./locales";
export const store = createStore(
  combineReducers({ user: user.reducer, locales: locales.reducer }),
  applyMiddleware(thunk)
);

export default store;
