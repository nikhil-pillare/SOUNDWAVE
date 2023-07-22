import { Clear_Error, Logout_Success } from "./apiType"

 export type State={
    isLoading:boolean,
    isError:boolean,
    isAuth:boolean,
    userData:[],
    errorMessage:string
}

export interface user{
    name?:string,
    email:string,
    password:string
}

const initialState:State={
    isLoading:false,
    isError:false,
    isAuth:false,
    userData:[],
    errorMessage:""
}

export type Action={
    type:string,
    payload?:any
}

    export const reducer=(state=initialState,{type,payload}:Action)=>{
        switch (type) {
            case "Login_Request":
                return {...state,isLoading:true}
                case "LOGOUT_REQ":
                return {...state,isAuth:false}
            case "Login_Success":
                return {...state,isLoading:false,isAuth:true,userData:payload}
            case "Signup_Success":
                return {...state,isLoading:false,isAuth:true,userData:payload}
            case "Login_Failure":
                return {...state,isError:true, errorMessage:payload}
                case Logout_Success:
                    return {...state,isAuth:false,userData:[]}
            case Clear_Error: 
            return {...state, errorMessage:""}
            default:
                return state;
        }
    }
   