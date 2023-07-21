import { applyMiddleware, combineReducers, legacy_createStore, Store } from "redux";
import thunk from "redux-thunk";
import { reducer as cartReducer } from "./Cart_redux/reducer";
// import { Cart_actions, Cart_state, DispatchType, Target } from "./Cart_redux/Types";
import { reducer as productReducer } from "./ProductReducer/reducer";
let middlewear = [thunk]
const Rootreducer = combineReducers({
productReducer,cartReducer
})
// export const store :Store<Cart_state,Cart_actions> & {dispatch : DispatchType} 
// = legacy_createStore(Rootreducer,applyMiddleware(...middlewear))

export const store = legacy_createStore(Rootreducer, applyMiddleware(...middlewear))