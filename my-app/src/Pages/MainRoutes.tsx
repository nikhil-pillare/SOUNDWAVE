import { Route, Routes } from "react-router-dom";
import Landing from "./Landing/Landing";
import { ProductPage } from "./Product/ProductPage";
import { AdminLogin } from "./Admin/AdminLogin";
import { AdminSide } from "./Admin/Adminside";
import Login from "./Login/Login";
import SignUpForm from "./SignUp/SignUp";
import { SingleProductPage } from "./Product/SingleProductPage";
import MainPage from "./Cart/MainPage";
import Payment from "./Payment/Payment";
import CartPageTemplate from "../Components/CartPageTemplate";

export default function MainRoutes(){
    return (
    <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/products" element={<ProductPage/>}></Route>
        <Route path='/admin' element={<AdminSide/>} />
   <Route path='/login' element={<AdminLogin />} />
   <Route path="/userlogin" element={<Login/>}/>
   <Route path="/signup" element={<SignUpForm/>}/>
   <Route path="/products/:id" element={<SingleProductPage/>}></Route>
   <Route path="/cart" element={<MainPage/>}></Route>
   <Route path="/payment" element={<Payment/>}></Route>
   <Route path="/cart2" element={<CartPageTemplate/>}/>
    </Routes>
    )
}