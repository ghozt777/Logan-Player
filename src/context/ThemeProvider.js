import { createContext,useState,useContext,useLayoutEffect,useEffect } from "react";

const ThemeData = createContext();

export const useTheme = () => useContext(ThemeData)

export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState("light")
    useLayoutEffect(() => {
        const savedTheme = localStorage.getItem("theme")
        if(savedTheme){
            setTheme(JSON.parse(savedTheme))
        }
    },[])
    
    useEffect(() => {
        localStorage.setItem("theme",JSON.stringify(theme))
    },[theme])
    

    
    return(
        <ThemeData.Provider value={{theme,setTheme}}>
            {children}
        </ThemeData.Provider>
    )
}