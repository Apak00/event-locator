import { createStore } from "redux";
import {
  activityLocatorReducer,
  ActivityLocatorReducerState
} from "../main/reducer";

// Export global redux state ,which is defined as intersection of reducer types, so we can access from components
export type GlobalState = ActivityLocatorReducerState;

// We could add saga thunk or some other middleware to handle async actions here, leaving it for now cause we wont need in this locator app.
// We could also use combineReducers for multiple reducers.
const store = createStore(activityLocatorReducer);

export default store;
