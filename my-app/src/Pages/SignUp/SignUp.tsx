import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    Input,
    FormLabel,useToast,Switch,
    Modal,
    ModalOverlay,
    ModalContent,Box, Button
  } from "@chakra-ui/react";
  import {
    Flex,
    Stack,
    Heading,
    Text,
    Container,
  } from '@chakra-ui/react';
  
  import axios from 'axios'
  import { useEffect, useState } from "react";
  import {useLocation, useNavigate} from 'react-router-dom'
  
  import * as yup from "yup";
 import OTP from "../../Components/SignUp/PinInput";
 import Footer from "../../Components/LandingSections/Footer";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Signup_Success } from "../../Redux/AuthReducer/apiType";

 
  
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required("First name is required")
      .min(3, "First name should be at least 3 characters"),
    lastName: yup
      .string()
      .required("Last name is required")
      .min(3, "Last name should be at least 3 characters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email address"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password should be at least 8 characters")
      .max(20, "Password should not exceed 20 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password should contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
      ),
    confirm: yup
      .string()
      .oneOf([yup.ref("password"), ""], "Passwords must match")
      .required("Confirm password is required")
  });
  
  function SignUpForm() {
    const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    // Set isLoading to true when the button is clicked to simulate loading state
    setIsLoading(true);

    // Simulate an asynchronous action, like fetching data or making an API call
    setTimeout(() => {
      // After the asynchronous action is complete, set isLoading back to false
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading delay
  };
    useEffect(()=>{
      window.scrollTo(0, 0);
    },[])
    const [details, setDetails] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm: ""
    });
    const dispatch = useDispatch()
    const location= useLocation()
    const toast = useToast()
    const [submitStatus, setSubmitStatus]=useState(false)
    const [errors, setErrors] = useState<any>({});
    const [generatedOTP,setgeneratedOTP]=useState<number>(0)
    const [postSuccess,setPostSuccess]=useState(false)
    const [misMatch,setMisMatch]=useState(false)
    const navigate=useNavigate()

    // const {setAuth,userData,setUserData}=useContext(AuthContext)
    const {isAuth,userData,errorMessage}=useSelector((store:any)=>{return {
      isAuth:store.authReducer.isAuth,
      userData:store.authReducer.userData,
      errorMessage:store.authReducer.errorMessage
    }},shallowEqual)

    function generateOTP(){
      return Math.floor(1000 + Math.random() * 9000)
    }
  
    const handleChange = (e:React.ChangeEvent<HTMLInputElement> ) => {
      const { name, value } = e.target;
      setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  
      if (name === 'password') {
        schema
          .validateAt(name, { [name]: value })
          .then(() => {
            setErrors((prevErrors:any) => ({ ...prevErrors, [name]: '' }));
          })
          .catch((err) => {
            setErrors((prevErrors:any) => ({ ...prevErrors, [name]: err.message }));
          });
      }
    };
  
    const isConfirmPasswordDisabled = !details.password || !!errors.password;
  
  
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      schema
        .validate(details, { abortEarly: false })
        .then(() => {
          // Validation passed, do something here like submitting the form
          // console.log("Form submitted successfully");
          handleClick()
          setSubmitStatus(true)
          setgeneratedOTP(generateOTP())
        })
        .catch((err) => {
          type FieldErrors = {
            [key: string]: string;
          };
          const fieldErrors:FieldErrors = {};
  
          err.inner.forEach((error:any) => {
            fieldErrors[error.path]= error.message;
          });
  
          setErrors(fieldErrors);
        });
        
    };
  
    const handleOTPVerification = (enteredOTP:string) => {
    
      if (+enteredOTP === generatedOTP) {
        // OTP matches, perform the desired action
        // console.log('OTP matched');
        
        postUserDetails()
        //call post axios 
  
      } else {
        // OTP does not match, handle the error
        console.log('OTP mismatch');
        //show pop up
        console.log(+enteredOTP,generateOTP)
  
        setMisMatch(true)
        toast({
          title: "Incorrect OTP",
          description: "OTP doesn't match",
          status: "error",
          duration: 2000,
        });
        
        //invoke generated again and show the new one
        setgeneratedOTP(generateOTP())
  
        //reset pin
        //passing mismatch value to pininput
      }
    };
    
    const postUserDetails=()=>{
      //loader here
      axios.post("https://nippy-flavour-backend.bhishree18.repl.co/users",{
        "name":details.firstName+" "+details.lastName,
        "email":details.email,
        "password":details.password
      }).then((res)=>{
        console.log(res.data)
   
        setPostSuccess(true)

       dispatch({type:Signup_Success, payload:res.data})
       
         if(!location.state|| location.state==="/signup"||location.state==="/login"){
         
          navigate("/",{replace:true})
          }else{
            navigate(location.state, {replace:true})
          }
    
       
  

       
        toast({
               title: 'Account created.',
               description: "We've created your account for you.",
               status: 'success',
               duration: 2000,
              });
            
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  
  
    //https://cdn.dribbble.com/users/614757/screenshots/1656954/media/3e206047cc5efd5009f35b2358911a5a.gif
    //

      return (
        <Box position={'relative'} backgroundSize={"cover"} backgroundRepeat={"no-repeat"} backgroundAttachment={"fixed"} backgroundImage={`url(https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1500&q=60)`}>
          <Container
            // as={SimpleGrid}
            
            maxW={'7xl'}
            // columns={{ base: 1, md: 2 }}
            // spacing={{ base: 10, lg: 32 }}
            py={{ base: 10, sm: 20, lg: 20 }}
            >
            <Stack
            margin={"auto"}
              bg={'gray.50'}
              rounded={'xl'}
              p={{ base: 4, sm: 6, md: 8 }}
              spacing={{ base: 8 }}
              maxW={{ lg: 'lg' }}>
              <Stack spacing={4}>
                <Heading
                  color={'gray.800'}
                  lineHeight={1.1}
                  fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                  Discover Your Perfect Headphones
                  <Text
                    as={'span'}
                    bgGradient="linear(to-r, #01d5a1, #053d4c)"
                    bgClip="text">
                    !
                  </Text>
                  
                </Heading>
                <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                Let us help you find your perfect sound companion
                </Text>
              </Stack>
             
     
              <Box mt={-5} as={'form'} onSubmit={handleSubmit}>
                <Stack spacing={4}>
                <FormControl isInvalid={!!errors.firstName}>
              <FormLabel>First Name</FormLabel>
                  <Input
                    placeholder="Firstname"
                    bg={'gray.100'}
                    border={0}
                    color={'gray.500'}
                    _placeholder={{
                      color: 'gray.500',
                    }}
                    type="text"
                name="firstName"
                value={details.firstName}
                onChange={handleChange}
                onFocus={() => setErrors({})}
                  />
                  {errors.firstName && (
                <FormErrorMessage>{errors.firstName}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={!!errors.lastName}>
              <FormLabel>Last Name</FormLabel>
                  <Input
                    placeholder="Lastname"
                    bg={'gray.100'}
                    border={0}
                    color={'gray.500'}
                    _placeholder={{
                      color: 'gray.500',
                    }}
                    type="text"
                name="lastName"
                value={details.lastName}
                onChange={handleChange}
                onFocus={() => setErrors({})}
                  />
                   {errors.lastName && (
                <FormErrorMessage>{errors.lastName}</FormErrorMessage>
              )}
                  </FormControl>
                  <FormControl isInvalid={!!errors.email}>
              <FormLabel>Email address</FormLabel>
              <Input
              placeholder="Enter Email"
              bg={'gray.100'}
              border={0}
              color={'gray.500'}
              _placeholder={{
                color: 'gray.500',
              }}
                type="email"
                name="email"
                value={details.email}
                onChange={handleChange}
                onFocus={() => setErrors({})}
              />
               <FormHelperText>We'll never share your email.</FormHelperText>
              {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
              placeholder="Enter password"
              bg={'gray.100'}
              border={0}
              color={'gray.500'}
              _placeholder={{
                color: 'gray.500',
              }}
                type="password"
                name="password"
                value={details.password}
                onChange={handleChange}
                onFocus={() => setErrors({})}
              />
              {errors.password && (
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              isInvalid={!!errors.confirm}
              isDisabled={isConfirmPasswordDisabled}
            >
              <FormLabel>Confirm Password</FormLabel>
              <Input
             placeholder="Confirm password"
             bg={'gray.100'}
             border={0}
             color={'gray.500'}
             _placeholder={{
               color: 'gray.500',
             }}
                type="password"
                name="confirm"
                onChange={handleChange}
                value={details.confirm}
                onFocus={() => setErrors({})}
              />
              {errors.confirm && (
                <FormErrorMessage>{errors.confirm}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl display='flex' alignItems='center'>
        <FormLabel htmlFor='email-alerts' mb='0'>
          Enable email alerts?
        </FormLabel>
        <Switch id='email-alerts' />
      </FormControl>
                  
                </Stack>
                <Button 
                type="submit" value="Submit"
                  fontFamily={'heading'}
                  
                  w={'full'}
                  isLoading={isLoading} _hover={{backgroundColor:"black"}} backgroundColor={"#003d29"} borderRadius={"20px"} color={"white"} size={'md'} fontSize={'md'} fontWeight={"bold"}  border={"2px solid #003d29"}
                 >Sign Up</Button>
                  
              </Box>
          
          
            </Stack>
          </Container>
          {/* <Blur
            position={'absolute'}
            top={-10}
            left={-10}
            style={{ filter: 'blur(70px)' }}
          /> */}
              <Modal isOpen={submitStatus} onClose={()=>{}}>
          <ModalOverlay />
          
          <ModalContent style={{
            display: 'flex',
            flexDirection:'column',
            padding:"20px",
            justifyContent: 'center',
            backgroundColor:"black",
            color:"white",
            alignItems:'center', height:"200px", width:"300px"}}>
          <Box >
          <OTP
          key={Math.random()+Date.now()}
          generatedOTP={generatedOTP}
          handleOTPVerification={handleOTPVerification}
          misMatch={misMatch}
          />
          </Box>
            </ModalContent>
            
          </Modal>
           <Footer/>
        </Box>
      );
    
  }
  
  // export const Blur = (props) => {
  //   return (
  //     <Icon
  //       width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
  //       zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
  //       height="560px"
  //       viewBox="0 0 528 560"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //       {...props}>
  //       <circle cx="71" cy="61" r="111" fill="#348976" />
  //       <circle cx="244" cy="106" r="139" fill="#348976" />
  //       <circle cy="291" r="139" fill="#348976" />
  //       <circle cx="80.5" cy="189.5" r="101.5" fill="#01d5a1" />
  //       <circle cx="196.5" cy="317.5" r="101.5" fill="#01d5a1" />
  //       <circle cx="70.5" cy="458.5" r="101.5" fill="#01d5a1" />
  //       <circle cx="426.5" cy="-0.5" r="101.5" fill="#01d5a1" />
  //     </Icon>
  //   );
  // };

  export default SignUpForm;
  