import {createContext,useContext,useEffect,useState,useCallback} from "react"
import { useAuth } from "./AuthProvider"
import axios from "axios"

const UserData = createContext()


export const useUser = () => useContext(UserData)

export const UserProvider = props => {

    const [user,setUser] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {})

    const {token,setToken} = useAuth()
    
    function addToHistory(videoId){
        (async() => {
            try{
                const {data} = await axios.post(`https://logan-player-backend.ghozt777.repl.co/user?type=add-to-history`,{
                token:token.refreshToken,
                videoId,
                userId:user._id
                },{
                    headers:{
                        authorization: `Bearer ${token.accessToken}`
                    }
                })
                setUser(data.savedUser)
                setToken(data.tokens)
            }catch(e){
                alert("history" + e.message)
                console.error(e.message)
            }
        })()
    }

    function updateUserInfo(){
        
    }

    useEffect(() => {
        if(token&&token.accessToken&&token.refreshToken){
            (async() => {
                try{
                    const {data} = await axios.post(`https://logan-player-backend.ghozt777.repl.co/user?type=get-user-info`,{
                    token:token.refreshToken,
                    userId:user._id
                    },{
                        headers:{
                            authorization: `Bearer ${token.accessToken}`
                        }
                    })
                    setUser(data.savedUser)
                    setToken(data.token)
                }catch(e){
                    alert("update" + e.message)
                    console.error(e.message)
                }
            })()
        }
    },[])

    updateUserInfo()

    useEffect(() => localStorage.setItem("user",JSON.stringify(user)),[user])

    return <UserData.Provider value={{user,setUser,addToHistory,updateUserInfo}}>{props.children}</UserData.Provider>
}