import { createContext,useState,useContext } from "react";

const ThemeData = createContext();

export const useTheme = () => useContext(ThemeData)

export const ThemeProvider = ({children}) => {
    
    const [theme,setTheme] = useState("dark")
    
    return(
        <ThemeData.Provider value={{theme,setTheme}}>
            {children}
        </ThemeData.Provider>
    )
}