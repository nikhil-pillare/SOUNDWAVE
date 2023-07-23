import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
    InputRightElement,
    Image,
    Divider,
    SimpleGrid
  } from "@chakra-ui/react";
  
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    StarIcon
  } from "@chakra-ui/icons";
  import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
  import {
    Input,
    InputGroup,
  } from "@chakra-ui/react";
  import {MdAccountCircle,MdCall} from "react-icons/md"
  import {AiOutlineShoppingCart} from "react-icons/ai"
  import { Search2Icon } from "@chakra-ui/icons"
  import axios, { AxiosResponse } from 'axios'
  import { useEffect, useState } from "react"
import { useDebounce } from "../../hooks/useDebounce";
import { useLocation, useSearchParams } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
 import { Link as PathLink } from "react-router-dom";
  
  interface APIobj{
    id: number;
    brand: string;
    type: string;
    wireless: boolean;
    "Release Date": string;
    microphone: boolean;
    "Driver Type": string;
    "Driver Size": number;
    "Number of Drivers": number;
    "Water Resistant": boolean;
    Weight: number;
    "Battery Life": number;
    "noise-cancellation": string;
    name: string;
    price: number;
    rating: number;
    description: string;
    colors: {
      id: number;
      label: string;
      name: string;
      image: string;
    }[];
    selectedColorId: number;
    cartImage: string;
  }
  export default function NavBar() {
    const [searchParams,setSearchParams]=useSearchParams()
    const location = useLocation()
    
    const { isOpen, onToggle } = useDisclosure();
    const [inp, setInp] = useState(searchParams.get("search")|| "");
    const [data, setData] = useState([]);
    const debounce=useDebounce()

    const {isAuth,userData}=useSelector((store:any)=>{return {
      isAuth:store.authReducer.isAuth,
      userData:store.authReducer.userData
    }},shallowEqual)

    // console.log(isAuth,userData)
    useEffect(()=>{
      const paramobj:{search?:string}={
        
      }
      if(inp){
        paramobj.search=inp
      }
      setSearchParams(paramobj)
    },[inp])

    const fetchData = (value:string) => {
      // console.log(value);
     
        axios
          .get(
            `https://nippy-flavour-backend.bhishree18.repl.co/products?name_like=${value}`
          )
          .then((res: AxiosResponse) => {
            // console.log(res.data)
            setData(res.data)
          })
          .catch((error:string) => {
            console.log(error);
          });
      
    };
  
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setInp(e.target.value)
      if(!e.target.value){
        setData([])
      }
      // Open the menu when the input value is not empty
      ;
      debounce(e,fetchData,500)
      
    };
  
  
    return (
      <>
      <Flex fontSize={"xs"} direction={{base:"column",sm:"column",md:"row"}} justifyContent={"space-between"} alignItems={"center"} paddingLeft={20} paddingRight={20} bg={"#003d29"} color={"white"}>
        <Flex alignItems={"center"} gap={1}>
        <MdCall/>
        <Text>+001234567890</Text>
        </Flex>
        <Flex alignItems={"center"} display={{base:"none",sm:"flex",md:"flex"}}>
        <Text>
      Get 50% Off on Selected Items
      <Box as="span" mx={2}>|</Box>
      Shop Now
    </Text>
        </Flex>
        <Flex alignItems={"center"} gap={10}>
        <Menu>
  <MenuButton as={Button} size={"sm"} variant={"unstyled"} rightIcon={<ChevronDownIcon />}>
    English
  </MenuButton>
  <MenuList>
    <MenuItem>Bangla</MenuItem>
    <MenuItem>Arabic</MenuItem>
    <MenuItem>Urdu</MenuItem>
  </MenuList>
</Menu>
<Menu>
  <MenuButton as={Button} size={"sm"} variant={"unstyled"} rightIcon={<ChevronDownIcon />}>
    Location
  </MenuButton>
  <MenuList>
    <MenuItem>Dhaka</MenuItem>
    <MenuItem>USA</MenuItem>
    <MenuItem>India</MenuItem>
  </MenuList>
</Menu>
        </Flex>
      </Flex>
      <Box padding={1} paddingLeft={{base:0, sm:5, md:10}} paddingRight={{base:0, sm:5, md:10}}  boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.1)">
        <Flex
          bg={"white"}
          color={"black"}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <PathLink to={"/"}><Image display={{ base: "inline", md:"inline" }} width={"90px"} height={"35px"} src="https://res.cloudinary.com/dsixdct6o/image/upload/v1689975917/soundWave_2_rhhzwj.png"/></PathLink> 
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
            color={"black"}
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }} alignItems={"center"}>

          
            <Flex display={{ base: "none", md: "flex" }}>
              <DesktopNav />
            </Flex>
          </Flex>
          {location.pathname ==="/cart" || location.pathname==="/payment" ? <></>
          :          <Flex
          direction={"column"}
          mr={{base:"0",sm:"0",md:"0",lg:"300px"}}
          width={"25%"}
          display={{ base: "none", sm: "none", md: "flex" }}
          align={"center"}
          justify={"center"}
        >          
        <InputGroup width={"100%"} size="sm">
            <InputRightElement
              pointerEvents="none"
              children={<Search2Icon color="gray.600" />}
            />
            <Input
              type="text"
              placeholder="Search..."
              border="1px solid #949494"
              borderRadius="10px"
              value={inp}
              onChange={handleInputChange}
            />
          </InputGroup>
          {data.length > 0 && (
            <Flex
              direction={"column"}
              width={"600px"}
              mr={{base:0, sm:0,md:0,lg:"-250px"}}
              bg={"white"}
              maxHeight={"400px"}
              overflowY={"scroll"}
              pos={"absolute"}
              zIndex={3}
              mt={"480px"}
              borderRadius={"5px"}
              
            >
              {data.map((ele:APIobj, ind) => (
                <>
                  <Flex
                    key={ind}
                    width={"100%"}
                    justifyContent={"space-between"}
                    padding={5}
                    alignItems={"center"}
                    color={"black"}
                    height={"100px"}
                  >
                    <Image
                      align={"center"}
                      width={"50px"}
                      height={"50px"}
                      src={ele.cartImage}
                      bg={"#f5f6f6"}
                    />
                   <Box width={"40%"}>
                    <Text align={"left"}>{ele.name}</Text>
                    </Box>
                    <Box mt={-2} alignItems="center" alignSelf={"center"}>
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      width={"13px"}
                      color={i < ele.rating ? "#08ac0a" : "grey"}
                    />
                  ))}
                <Box as="span" ml="2" color="black" fontSize="sm">
                  ({121})
                </Box>
              </Box>
                    <Text align={"center"} fontWeight={"bold"} fontSize={"xs"}>${ele.price}</Text>
                   
                  </Flex>
                  <Divider width={"90%"} maxH={2} bg={"#7b7e7e"}margin={"auto"}/>
                </>
              
              ))}
          
            </Flex>
          )}
        </Flex>
          }

  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
          <Flex alignItems={"center"} gap={3}>
          <MdAccountCircle/>
          <Link _hover={{textDecoration:"none"}} className="hover-underline-animation">
            {isAuth? <Text>
              Account
            </Text>: 
            <PathLink state={location.pathname} replace={true} to={"/userlogin"}>
            <Text>
              Login
            </Text>
            </PathLink>
            }
            
            </Link>
            </Flex>
            <Flex alignItems={"center"} gap={3}>
            <AiOutlineShoppingCart/>
            <Link _hover={{textDecoration:"none"}} className="hover-underline-animation">
            <PathLink to='/cart'>
            <Text>
              Cart
            </Text>
            </PathLink>
            </Link>
            
           
            </Flex>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
      </>
    );
  }
  
  const DesktopNav = () => {
    const linkColor:string = "black";
    const linkHoverColor = "black";
    
  
    return (
      <Stack direction={"row"} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                className="hover-underline-animation"
                  p={2}
                  href={"#"}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={"#ffffff"}
                  p={4}
                  rounded={"xl"}
                  width={"800px"}
                >
                  <Text fontSize={"2xl"} fontWeight={"700"} textAlign={"left"}>Popular Categories</Text>
                  <Divider mt={3} color={"#7b7e7e"} height={"2px"}/>
                  <SimpleGrid mt={7} columns={2} spacing={5} width={"100%"}>
                    {navItem.children.map((child,ind) => (
                      ind ===4 ? <PathLink to={"/products"}><DesktopSubNav key={child.label} {...child} /></PathLink>:

                      
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </SimpleGrid>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, img, subLabel }: NavItem) => {
    return (
      <Stack bg={"#f5f6f6"} borderRadius={"5px"}>
      <Link
        href={"#"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{"color":"#003d29"}}
      >
        <Flex direction={"row"} gap={20}  alignItems={"center"}>
          <Image src={img} width={"70px"} height={"70px"} />
          <Stack
            direction={"column"}
            justifyContent={"space-between"}
            textAlign={"left"}
          >
            <Text fontWeight={700}>{label}</Text>
            <Text width={"100%"}>{subLabel}</Text>
          </Stack>
        </Flex>
      </Link>
      </Stack>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg="white"
        p={4}
        color={"black"}
        display={{ md: "none" }}
      >
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, img }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={"#"}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none"
          }}
        >
          <Text
            fontWeight={600}
            color="black"
          >
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            align={"start"}
          >
            {children &&
              children.map((child,ind) => (
                ind === 4 ?<PathLink to={"/products"}><Link key={child.label} py={2} href={"#"}>
                {child.label}
              </Link></PathLink>:
                <Link key={child.label} py={2} href={"#"}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    img?:string;
    children?: Array<NavItem>;
    
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: "Category",
      children: [
        {
          label: "Furniture",
          subLabel: "240 Items Available",
          img:
            "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052dc39b839500c1f8a_Rectangle%201436.png"
        },
        {
          label: "Shoe",
          subLabel: "240 Items Available",
          img:
            "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052f0ed215b864af96e_Rectangle%201436-1.png"
        },
        {
          label: "Laptop",
          subLabel: "240 Items Available",
          img:
            "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052f3741a4f87af0f6d_Rectangle%201436-2.png"
        },
        {
          label: "HandBag",
          subLabel: "240 Items Available",
          img:
            "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec605386e48004f02ee6a8_Rectangle%201436-4.png"
        },
        {
          label: "Headphones",
          subLabel: "240 Items Available",
          img:
            "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6053e5b15cfafd550cbb_Rectangle%201436-3.png"
        },
        {
          label: "Book",
          subLabel: "240 Items Available",
          img:
            "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec622235f3f730c0de8c3f_Rectangle%201436-5.png"
        }
      ]
    },{
      label:"Deals"
    },
    {
      label:"What's New"
    },
    {
      label:"Delivery"
    }
  ];
  