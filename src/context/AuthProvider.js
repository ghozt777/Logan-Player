import {useState,useEffect,createContext,useContext} from "react"

const AuthData = createContext();

export const useAuth = () => useContext(AuthData);

export const AuthProvider = props => {
    const [isLoggedIn,setIsLoggedIn] = useState(localStorage.getItem("login") ? JSON.parse(localStorage.getItem("login")) : false)
    const [token,setToken] = useState(localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : {})

    useEffect(() => {
        if(token){
            localStorage.setItem("token",JSON.stringify(token))
        }else{
            localStorage.setItem("token" , JSON.stringify(null))
        }
        localStorage.setItem("login",JSON.stringify(isLoggedIn))
    },[token,isLoggedIn])
    return <AuthData.Provider value={{isLoggedIn,setIsLoggedIn,token,setToken}} >{props.children}</AuthData.Provider>
}