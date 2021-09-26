import {useState,useEffect,createContext,useContext} from "react"

const AuthData = createContext();

export const useAuth = () => useContext(AuthData);

export const AuthProvider = props => {
    const [isLoggedIn,setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("token")))
    const [token,setToken] = useState(JSON.parse(localStorage.getItem("login")))

    useEffect(() => {
        localStorage.setItem("token",JSON.stringify(token))
        localStorage.setItem("login",JSON.stringify(isLoggedIn))
    },[token,isLoggedIn])

    return <AuthData.Provider value={{isLoggedIn,setIsLoggedIn,token,setToken}} >{props.children}</AuthData.Provider>
}