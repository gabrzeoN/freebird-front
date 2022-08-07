import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import "./../assets/css/reset.css";
// import "../assets/css/style.css";

import { UserProvider } from "../contexts/UserContext";
import { PageNavigationProvider } from "../contexts/PageNavigationContext";
import HomePage from "./pages/HomePage";
import NewLocationPage from "./pages/NewLocationPage"
import PrivateRoute from "./PrivateRoute";
export default function App() {

    return (
        <UserProvider>
            <PageNavigationProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/new-location" element={<PrivateRoute><NewLocationPage /></PrivateRoute>} />
                        {/* <Route path="/" element={<SignInPage/>} /> */}
                        {/* <Route path="/sign-up" element={<SignUp/>} /> */}
                        {/* <Route path='/hashtag/:hashtag' element={<TagPage />} /> */}
                        {/* <Route path="/user/:userId" element={<UserPage/>} /> */}
                    </Routes>
                </BrowserRouter>
            </PageNavigationProvider>
        </UserProvider>

    );
}

// npx serve -s build
// localStorage.setItem("freebirdwebsite_user", JSON.stringify(data)) aparentemente, armazena o usuario inteiro, com id, token, etc
//setUser(data)