import { createStore, applyMiddleware } from "redux";
import sagas from "./sagas";
import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
let middlewaresToApply = [sagaMiddleware];          // Can potentially have addiontal middlewares here

export default createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewaresToApply))
);

sagaMiddleware.run(sagas);
