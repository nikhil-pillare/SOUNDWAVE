import { Avatar, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Image, Input, InputGroup, InputRightElement, Stack, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../Components/LandingSections/Footer";
import { Link as ChakraLink } from "@chakra-ui/react";
import { getuser } from "../../Redux/AuthReducer/api";
import { user } from "../../Redux/AuthReducer/reducer";
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { disType } from "../../Redux/ProductReducer/action";
import { Clear_Error, Login_Failure, Login_Request, Login_Success } from "../../Redux/AuthReducer/apiType";
import { error } from "console";
export default function Login(){


    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")

    const [show, setShow] = useState(false)
    const [valid,setValid]=useState(false)
    const toast = useToast()
    const navigate = useNavigate()
    const location = useLocation()


    const dispatch:disType = useDispatch()

    const {isAuth,userData,errorMessage}=useSelector((store:any)=>{return {
      isAuth:store.authReducer.isAuth,
      userData:store.authReducer.userData,
      errorMessage:store.authReducer.errorMessage
    }},shallowEqual)

    useEffect(()=>{
      if(errorMessage){
        toast({
          title: errorMessage,
          status: 'error',
          isClosable: true,
        });
        dispatch({type:Clear_Error})
      }
    },[errorMessage])

    const handleReset=()=>{
        setEmail("")
        setPass("")

    }
    const handleClick = () => setShow(!show)

    const getReq=(email:string,pass:string)=>{
        dispatch({ type: Login_Request })
        axios.get('https://nippy-flavour-backend.bhishree18.repl.co/users').then((res)=>{
          let flag=false
            res.data.forEach((ele:user)=>{
                if(email===ele.email && pass===ele.password){
                    //dispatch
                    flag=true
                  dispatch({type:Login_Success,payload:ele})
                  toast({
                    title: `Welcome Back, ${ele.name}!`,
                    status: 'success',
                    duration:2000,
                    isClosable: true,
                  })
                  setTimeout(()=>{
                    if(!location.state|| location.state==="/login"|| location.state==="/signup"){
                      
                      navigate("/",{replace:true})
                      }else{
                        navigate(location.state, {replace:true})
                      }
                  },2000)
                 
                }else if(ele.email===email && ele.password!==pass){
                  setValid(true)
                  dispatch({type:Login_Failure,payload:"Invalid Credentials."})
                }
            })
            // if(flag){
            //   //dispatch error to reducer showing invalid credentials OR email not found
            // }
            if(!flag){
              dispatch({type:Login_Failure, payload:"We don't have your Email Registered. Would you like to Sign Up?"})
             
           
            }
        }).catch((error)=>{
            //dispatch
            dispatch({type:Login_Failure,payload:"Network Error.Please Try Again."})
           
            
        })
        }
    
    const handleSubmit=()=>{
       
        if(!email||!pass){
            setValid(true)
        }
        else{
          getReq(email,pass)
        }
        handleReset()
    }

    
    return (
        <>
    
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}
    backgroundImage={`url(https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1500&q=60)`}
    >
      <Flex color={"black"} p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"} mt={10} padding={10} backgroundColor={"white"} borderRadius={"10px"}>
          <Heading fontSize={"2xl"} color={"#003d29"}>SIGN IN TO YOUR ACCOUNT</Heading>
          <Avatar alignSelf={"center"} bg="#003d29" />
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input borderColor={"black"} type="email" value={email} onChange={(e)=>{setEmail(e.target.value); setValid(false)}} isInvalid={valid}
    errorBorderColor='red.300'/>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input borderColor={"black"} type={show ? 'text' : 'password'}
        placeholder='Enter password'
        value={pass}
        onChange={(e)=>{setPass(e.target.value); setValid(false)}}
        isInvalid={valid}
    errorBorderColor='red.300'/>
    <InputRightElement width='4.5rem'>
        <Button bg={"#f1f4f4"} color={"black"} h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
        </InputRightElement>
        </InputGroup>
          </FormControl>

          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox border={"black"} colorScheme="black">Remember me</Checkbox>
              <Link to="/signup" state={location.state} replace={true}>
              <ChakraLink color="#003d29">Not a User? Sign Up Here</ChakraLink>
              </Link>
            </Stack>
            <Button _hover={{backgroundColor:"black"}} backgroundColor={"#003d29"} borderRadius={"20px"} color={"white"} size={'md'} fontSize={'xs'} fontWeight={"bold"}  border={"2px solid #003d29"}  onClick={handleSubmit}>
              Login
            </Button>
          </Stack>
        </Stack>
      </Flex>
      
    </Stack>
    <Footer/>
    </>
    )

}