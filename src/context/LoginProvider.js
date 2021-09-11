import {createContext,useContext,useState} from "react"

const LoginData = createContext()

export const useLogin = () => useContext(LoginData)

export const LoginProvider = ({children}) => {
    const [isLoggedIn,setIsLoggedIn] = useState(true)
    return(
        <LoginData.Provider value={{isLoggedIn,setIsLoggedIn}}>
            {children}
        </LoginData.Provider>
    )
}