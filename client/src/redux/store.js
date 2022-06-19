import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "./reducer";
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;