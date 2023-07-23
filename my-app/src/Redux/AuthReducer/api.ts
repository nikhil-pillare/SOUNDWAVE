import axios,{AxiosResponse} from "axios"
import { Login_Failure, Login_Request, Login_Success, Signup_Success} from "./apiType"

import {Action, user } from "./reducer"
export type disType=(args:Action)=>Action
type GetUserFunction = (email: string, password: string) => (dispatch: disType) => Promise<any>;

export const getuser:GetUserFunction=(email:string,password:string)=>(dispatch:disType)=>{
  
   return new Promise((resolve, reject) => {
      axios.get('https://nippy-flavour-backend.bhishree18.repl.co/users')
        .then((res) => {
          const foundUser = res.data.find((user: any) => email === user.email && password === user.password);
          if (foundUser) {
            // Assuming you have defined the action types Login_Request and Login_Success
            dispatch({ type: Login_Request });
  
            // Dispatch the success action with the found user as payload
            dispatch({ type: Login_Success, payload: foundUser });
  
            // Resolve the Promise with the found user
            resolve(foundUser);
          } else {
            // Dispatch the failure action if user not found or invalid credentials
            dispatch({ type: Login_Failure });
  
            // Reject the Promise with an error
            reject(new Error('User not found or invalid credentials'));
          }
        })
        .catch((err) => {
          // Dispatch the failure action if an error occurs during the API call
          dispatch({ type: Login_Failure });
  
          // Reject the Promise with the caught error
          reject(err);
        });
    });
}



export const adduser=(newUser:user)=>(dispatch:disType)=>{
   dispatch({type:Login_Request})
    axios.post(`https://nippy-flavour-backend.bhishree18.repl.co/users`,newUser).then((res)=>{
      dispatch({type:Signup_Success,payload:res.data as any})
    })
    .catch((err)=>{
      dispatch({type:Login_Failure})
    })  
 }

 