import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART, SET_TOTAL_AMOUNT } from '../../Redux/actions_types'
import { Cart_item, Cart_state } from '../../Redux/Cart_redux/Types'
import { store } from '../../Redux/store'
//import { store } from '../Redux/store'
import { CartItem } from '../../Components/Cart/CartItem'
import { CartOrderSummary } from './CartOrderSummary'
import {Link as PathLink} from 'react-router-dom'
import { Get_produts } from '../../Redux/Cart_redux/action'
import axios from 'axios'
import { text } from 'stream/consumers'
function MainPage()
{
  //const products:[] = []
  const test :Cart_item[] = useSelector((store:any)=>store.cartReducer.cart)
  const amount : number = useSelector((store:any)=>store.cartReducer.total_amount)
  const dispatch = useDispatch()

  

  useEffect(()=>{

    axios.get(`https://jsonservertesting.onrender.com/cart`)
      .then((res)=>{

          let total = res.data
          let flag = false
          for(let i = 0 ;i<total.length;i++){
           // console.log(total[i]);
           flag = true
            for(let j=0;j<test.length;j++){
              if(test[j].id == total[i].id){
                flag = false
                break
              }
            }
            if(flag){
              dispatch({type:ADD_TO_CART,item:total[i]})
            }
            
            

          }

          dispatch({type:SET_TOTAL_AMOUNT})

          
      })
      .catch((error)=>{

          console.log(error);
          
      })
      

  },[])
  console.log(test,amount);
  ////////QUANTITY HANDLER/////////////
  
  /////////////////////
  return(
    <Box
      maxW={{ base: '3xl', lg: '7xl' }}
      mx="auto"
      px={{ base: '4', md: '8', lg: '12' }}
      py={{ base: '6', md: '8', lg: '12' }}
    >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        align={{ lg: 'flex-start' }}
        spacing={{ base: '8', md: '16' }}
      >
        <Stack spacing={{ base: '8', md: '10' }} flex="2">
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart ({test.length} items)
          </Heading>
  
          <Stack spacing="6">
            { test.length>0  && test.map((item) => (

              
              <CartItem key={item.id} {...item} />
            ))}
          </Stack>
        </Stack>
  
        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <PathLink to='/'>
            <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
            </PathLink>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  )
}
export default MainPage