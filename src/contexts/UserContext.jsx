import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("freebirdwebsite_user")));
    return(
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}