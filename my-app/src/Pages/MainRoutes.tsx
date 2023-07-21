import { Route, Routes } from "react-router-dom";
import Landing from "./Landing/Landing";

export default function MainRoutes(){
    return (
    <Routes>
        <Route path="/" element={<Landing/>}></Route>
    </Routes>
    )
}