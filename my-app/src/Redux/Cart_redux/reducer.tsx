import axios from "axios";
import { Target } from "framer-motion";
import { ADD_TO_CART, CHANAGE_QUANTITY, GET_PRODUCT, REMOVE_FROM_CART, SET_TOTAL_AMOUNT } from "../actions_types";
import { Cart_actions, Cart_item, Cart_state } from "./Types";

const inti : Cart_state={
  cart:[],
  total_amount:0
}
export const reducer = (state:Cart_state = inti,action:Cart_actions)=>{
  switch(action.type){

    case GET_PRODUCT:{
      return {...state,cart : [...state.cart]}
    }

    case ADD_TO_CART:{
      axios.post(`https://nippy-flavour-backend.bhishree18.repl.co/cart/`,action.item)
      .then((res)=>{
        
      })
      .catch((error)=>{

      })
      
      return {...state,cart : [...state.cart,action.item]}
    }
    case REMOVE_FROM_CART:{
      axios.delete(`https://nippy-flavour-backend.bhishree18.repl.co/cart/${action.item.id}`)
      .then((res)=>{

      })
      .catch((error)=>{

      })
      const updated:Cart_item[] = state.cart.filter((item)=>action.item.id!=item.id)
      return {...state,cart:updated}
    }
    case SET_TOTAL_AMOUNT:{
      let total = 0
      if(state.cart.length>0){
        
        for(let i=0;i<state.cart.length;i++){
          //console.log(state.cart[i]['price'],state.cart[i].quantity)
          total = total + state.cart[i]['price']*(state.cart[i]['quantity']?state.cart[i]['quantity']:1)
        }
      }
      
      return {...state,total_amount:total}
    }
    case CHANAGE_QUANTITY:{
      axios.patch(`https://nippy-flavour-backend.bhishree18.repl.co/cart/${action.item.id}`,action.item)
      .then((res)=>{

      })
      .catch((error)=>{

      })
      const newstate = state.cart.map((item)=>{
        if(item.id == action.item.id){
          return action.item
        }
        else{
          return item
        }
      })
      return {...state,cart:newstate}
    }

    default : {
      return state
    }
  }
}