import {Redux} from "./redux";
import {createStore,applyMiddleware} from 'redux'
import thunk from "redux-thunk";

const Store =createStore(Redux,applyMiddleware(thunk))

export default Store