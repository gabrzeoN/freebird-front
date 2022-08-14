import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./../assets/css/reset.css";
import "../assets/css/style.css";

import { UserProvider } from "../contexts/UserContext";
import { PageNavigationProvider } from "../contexts/PageNavigationContext";
import HomePage from "./pages/HomePage";
import LocationPage from "./pages/LocationPage";
import NewLocationPage from "./pages/NewLocationPage";
import MyLocationsPage from "./pages/MyLocationsPage";
import PrivateRoute from "./PrivateRoute";

export default function App() {

    return (
        <UserProvider>
            <PageNavigationProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/location/:id" element={<LocationPage />} />
                        <Route path="/new-location" element={<PrivateRoute><NewLocationPage /></PrivateRoute>} />
                        <Route path="/my-locations" element={<PrivateRoute><MyLocationsPage /></PrivateRoute>} />
                    </Routes>
                </BrowserRouter>
            </PageNavigationProvider>
        </UserProvider>

    );
}

// npx serve -s build
// localStorage.setItem("freebirdwebsite_user", JSON.stringify(data)) aparentemente, armazena o usuario inteiro, com id, token, etc
//setUser(data)