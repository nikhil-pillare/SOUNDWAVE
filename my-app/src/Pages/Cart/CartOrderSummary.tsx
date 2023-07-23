import {
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import { FaArrowRight } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Cart_state } from '../../Redux/Cart_redux/Types'
  import { formatPrice } from './PriceTag'
  import {Link as PathLink} from 'react-router-dom'
  
  type OrderSummaryItemProps = {
    label: string
    value?: string
    children?: React.ReactNode
  }
  
  const OrderSummaryItem = (props: OrderSummaryItemProps) => {
    const { label, value, children } = props
    return (
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
          {label}
        </Text>
        {value ? <Text fontWeight="medium">{value}</Text> : children}
      </Flex>
    )
  }
  
  export const CartOrderSummary = () => {
    const amount : number = useSelector((store:any)=>store.cartReducer.total_amount)
    console.log(amount);
    
    return (
      <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
        <Heading size="md">Order Summary</Heading>
  
        <Stack spacing="6">
          <OrderSummaryItem label="Subtotal" value={amount.toFixed(2)} />
          <OrderSummaryItem label="Shipping + Tax">
            <Link href="#" textDecor="underline">
              Calculate shipping
            </Link>
          </OrderSummaryItem>
          <OrderSummaryItem label="Coupon Code">
            <Link href="#" textDecor="underline">
              Add coupon code
            </Link>
          </OrderSummaryItem>
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
              {/*formatPrice(amount)*/}
              ${amount.toFixed(2) }
              

            </Text>
          </Flex>
        </Stack>
        <PathLink to='/payment'>
        <Button colorScheme="blue" size="lg" fontSize="md" rightIcon={<FaArrowRight />}>
          Checkout
        </Button>
        </PathLink>
      </Stack>
    )
  }