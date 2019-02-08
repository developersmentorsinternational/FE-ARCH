import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middlewares = [thunk, logger];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);

export default store;
