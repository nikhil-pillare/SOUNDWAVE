import axios from 'axios';
import {act} from '../ProductReducer/reducer'
import { FAILED, GET_SUCCESS, REQUEST } from './actionTypes'

export type disType=(args:act)=>act


export const getData=(param:any)=>(dispatch:disType)=>{
dispatch({type:REQUEST});

axios.get(`https://jsonservertesting.onrender.com/products`,param).then((res)=>{
dispatch({type:GET_SUCCESS,payload:res.data as any});
console.log(res.data)
}).catch((err)=>{
    dispatch({type:FAILED})
})

}