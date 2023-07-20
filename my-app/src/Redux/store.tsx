import { applyMiddleware, combineReducers, legacy_createStore, Store } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./Cart_redux/reducer";
import { Cart_actions, Cart_state, DispatchType, Target } from "./Cart_redux/Types";

let middlewear = [thunk]
const Rootreducer = combineReducers({

})
export const store :Store<Cart_state,Cart_actions> & {dispatch : DispatchType} 
= legacy_createStore(reducer,applyMiddleware(...middlewear))