import axios from "axios";
import { ADD_TO_CART, REMOVE_FROM_CART, SET_TOTAL_AMOUNT } from "../actions_types";
import { Cart_item, DispatchType } from "./Types";



export function Add_to_cart( item:Cart_item)
    {
    return (dispatch : DispatchType)=>{
        dispatch({type:ADD_TO_CART,item:item})
        dispatch({type:SET_TOTAL_AMOUNT,item:item})
    }
    }   
export function Remove_from_cart(item:Cart_item){
    return (dispatch:DispatchType)=>{
        dispatch({type:REMOVE_FROM_CART,item:item})
        dispatch({type:SET_TOTAL_AMOUNT,item:item})
    }
}
export function Get_produts(){
    return (dispatch:DispatchType)=>{
        axios.get(`https://nippy-flavour-backend.bhishree18.repl.co/cart`)
        .then((res)=>{

            console.log(res);
            
        })
        .catch((error)=>{
            
            console.log(error);
            
        })
    }
}