import { CloseButton, color, Flex, Link, Select, SelectProps, useColorModeValue } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { CHANAGE_QUANTITY, REMOVE_FROM_CART, SET_TOTAL_AMOUNT } from '../../Redux/actions_types'

import { CartProductMeta } from '../../Pages/Cart/CartProductMeta'
import { PriceTag } from '../../Pages/Cart/PriceTag'
export interface colors {
  id:number,
  label:any,
  name:string,
  image:any
}
export type CartItemProps = {
  isGiftWrapping?: boolean
  name: string
  
  description: string
  quantity: number
  colors : colors[]
  price: number
  currency?: string
  cartImage: string
  SelectedColorId : number
 
  onChangeQuantity?: (quantity: number) => void
  onClickGiftWrapping?: () => void
  onClickDelete?: () => void
}

const QuantitySelect = (props: SelectProps) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
      {...props}
      
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  )
}

export const CartItem = (props: CartItemProps) => {
  const {
  
    name,
    description,
    quantity,
    cartImage,
    price,
    SelectedColorId,
    colors
  
  } = props
//console.log(colors[0].label,selectedColorId);
console.log(props);

  const dispatch = useDispatch()

  function handlechange(e:React.ChangeEvent<HTMLSelectElement>){
    dispatch({type:CHANAGE_QUANTITY,item:{...props,quantity:+e.target.value}})
    dispatch({type:SET_TOTAL_AMOUNT})
    //console.log(e.target.name,e.target.value); 
  }
  function handleclick(e:React.MouseEvent<HTMLButtonElement>){
    e.preventDefault()
    dispatch({type:REMOVE_FROM_CART , item:props})
    dispatch({type:SET_TOTAL_AMOUNT})
  }
 
  let image = ''
  //if(colors[selectedColorId].label){
    //lable = colors[selectedColorId].label
  //}
  //if(colors[selectedColorId].image){
    //image = colors[selectedColorId].image
  //}
  let lable = colors.filter((item)=>{
    if(item.image===cartImage){
      return true
    }
    else{
      return false
    }
  })
  return (
    <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
      <CartProductMeta
        name={name}
        description={lable[0].label}
        image={cartImage}

      />

      {/* Desktop */}
      <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>
        <QuantitySelect
          value={quantity}
          onChange={handlechange}
        />
        <h3>${props.price}</h3>
        <CloseButton onClick={handleclick} aria-label={`Delete ${name} from cart`}  />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: 'flex', md: 'none' }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantitySelect
          value={quantity}
          onChange={handlechange}

        />
        <PriceTag price={price}  />
      </Flex>
    </Flex>
  )
}