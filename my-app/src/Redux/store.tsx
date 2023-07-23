import { applyMiddleware, combineReducers, legacy_createStore, Store } from "redux";
import thunk from "redux-thunk";
import { reducer as cartReducer } from "./Cart_redux/reducer";
import { Cart_state } from "./Cart_redux/Types";
// import { Cart_actions, Cart_state, DispatchType, Target } from "./Cart_redux/Types";
import { reducer as productReducer } from "./ProductReducer/reducer";
import { product } from "./ProductReducer/reducer";
import {Auth_State, reducer as Authreducer} from './AuthReducer/reducer'
//let middlewear = [thunk]
export interface RootState 
  {
    productReducer: product;
    cartReducer: Cart_state;
    Authreducer:Auth_State;
  }

  const Rootreducer = combineReducers<RootState>
  ({
    Authreducer,
    productReducer,
    cartReducer,
  })


export const store = legacy_createStore(Rootreducer, applyMiddleware(thunk))