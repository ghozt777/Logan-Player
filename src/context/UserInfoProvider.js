import {createContext,useContext,useEffect,useState} from "react"

const UserData = createContext()

export const useUser = () => useContext(UserData)

export const UserProvider = props => {

    const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")) ?? {})

    useEffect(() => {
        localStorage.setItem("user",JSON.stringify(user))
    },[user])

    return <UserData.Provider value={{user,setUser}}>{props.children}</UserData.Provider>
}