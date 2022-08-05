import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function PrivateRoute({ children }){
    const {user} = useContext(UserContext);
    if(!user){
        alert("You are not signed in. Redirecting to sign in page!");
        return <Navigate to="/" />
    }
    return children;
}