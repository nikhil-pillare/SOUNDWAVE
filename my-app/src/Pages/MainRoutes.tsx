import { Route, Routes } from "react-router-dom";
import Landing from "./Landing/Landing";
import { ProductPage } from "./Product/ProductPage";

export default function MainRoutes(){
    return (
    <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/products" element={<ProductPage/>}></Route>
    </Routes>
    )
}