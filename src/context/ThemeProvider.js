import { createContext,useState,useContext,useEffect } from "react";

const ThemeData = createContext();

export const useTheme = () => useContext(ThemeData)

export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState((JSON.parse(localStorage.getItem("theme"))) ?? "light")
    
    useEffect(() => {
        localStorage.setItem("theme",JSON.stringify(theme))
    },[theme])
    
    
    return(
        <ThemeData.Provider value={{theme,setTheme}}>
            {children}
        </ThemeData.Provider>
    )
}