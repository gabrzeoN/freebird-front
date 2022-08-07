import { createContext, useState } from "react";

export const PageNavigationContext = createContext();

export function PageNavigationProvider({ children }){
    const [page, setPage] = useState(0);
    return(
        <PageNavigationContext.Provider value={{ page, setPage }}>
            {children}
        </PageNavigationContext.Provider>
    );
}