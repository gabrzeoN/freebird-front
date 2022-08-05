import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// import "./../assets/css/reset.css";
// import "../assets/css/style.css";
import UserContext from "../contexts/UserContext";

import Home from "./pages/HomePage";

export default function App(){

    return(
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<Home/>} />
                        {/* <Route path="/" element={<SignInPage/>} />
                        <Route path="/sign-up" element={<SignUp/>} />
                        <Route path="/timeline" element={<Timeline/>} />
                        <Route path='/hashtag/:hashtag' element={<TagPage />} />
                        <Route path="/user/:userId" element={<UserPage/>} /> */}
                </Routes>
            </BrowserRouter>

    );
}

// npx serve -s build
// localStorage.setItem("freebirdwebsite_user", JSON.stringify(data)) aparentemente, armazena o usuario inteiro, com id, token, etc
//setUser(data)