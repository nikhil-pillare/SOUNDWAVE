import { useRef } from "react"

export const useDebounce=()=>{

    let id = useRef<number | undefined>()

     
 const debounce=(e:React.ChangeEvent<HTMLInputElement>,func:(arg:string)=>void,delay:number)=>{
    if(id.current){
        clearTimeout(id.current)
    }
    if(!e.target.value){
        clearTimeout(id.current)
        return
    }
    
    id.current=setTimeout(()=>{
        func(e.target.value)
    },delay)as any;
 }   

 return debounce
}