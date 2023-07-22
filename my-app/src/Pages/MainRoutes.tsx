import { Route, Routes } from "react-router-dom";
import Landing from "./Landing/Landing";
import { ProductPage } from "./Product/ProductPage";
import { AdminLogin } from "./Admin/AdminLogin";
import { AdminSide } from "./Admin/Adminside";
import Login from "./Login/Login";
import SignUpForm from "./SignUp/SignUp";
import { SingleProductPage } from "./Product/SingleProductPage";

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
    </Routes>
    )
}