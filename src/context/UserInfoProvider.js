import {createContext,useContext,useEffect,useState} from "react"
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
                console.error(e.message)
            }
        })()
    }

    async function handleAddToPlayList(playListId,videoId){
        try{
            const {data} = await axios.post(`https://logan-player-backend.ghozt777.repl.co/user/${playListId}`,{
            token:token.refreshToken,
            videoId,
            userId:user._id
            },{
                headers:{
                    authorization: `Bearer ${token.accessToken}`
                    }
                }
            )
            setToken(data.tokens)
            setUser(data.savedUser)
            return new Promise((res,rej) => res("successfuly added to playlist"))
        }catch(e){
            console.error(e.message)
            return new Promise((res,rej) => rej(e))
        }

    }

    async function addToLikedVideos(videoId){
        try{
            const {data} = await axios.post(`https://logan-player-backend.ghozt777.repl.co/user?type=add-to-likedVideos`,{
            token:token.refreshToken,
            videoId,
            userId:user._id
            },{
                headers:{
                    authorization: `Bearer ${token.accessToken}`
                    }
                }
            )
            setToken(data.tokens)
            setUser(data.savedUser)
            return new Promise((res,rej) => res("add to playlist"))
        }catch(e){
            console.error(e.message)
            return new Promise((res,rej) => rej(e))
        }
    }

    async function deletePlaylist(playListId){
        try{
            const {data} = await axios.post(`https://logan-player-backend.ghozt777.repl.co/user?type=delete-playlist`,{
            token:token.refreshToken,
            userId:user._id,
            playListId
            },{
                headers:{
                    authorization: `Bearer ${token.accessToken}`
                    }
                }
            )
            setToken(data.tokens)
            setUser(data.savedUser)
            return new Promise((res,rej) => res("successfuly deleted playlist"))
        }catch(e){
            console.error(e.message)
            return new Promise((res,rej) => rej(e))
        }
    }

    async function clearHistory(){
        try{
            const {data} = await axios.post(`https://logan-player-backend.ghozt777.repl.co/user?type=clear-history`,{
            token:token.refreshToken,
            userId:user._id
            },{
                headers:{
                    authorization: `Bearer ${token.accessToken}`
                }
            })
            setUser(data.savedUser)
            setToken(data.tokens)
            return new Promise((res,rej) => res("playlist deleted successfully"))
        }catch(e){
            console.error(e.message)
            return new Promise((res,rej) => rej(e))
        }
    }

    async function createPlayList(plName){
        try{
            const {data} = await axios.post(`https://logan-player-backend.ghozt777.repl.co/user?type=create-playlist`,{
            token:token.refreshToken,
            userId:user._id,
            name:plName
            },{
                headers:{
                    authorization: `Bearer ${token.accessToken}`
                }
            })
            setUser(data.savedUser)
            setToken(data.tokens)
            return new Promise((res,rej) => res("playlist created"))
        }catch(e){
            console.error(e.message)
            return new Promise((res,rej) => rej(e))
        }
    }

    useEffect(() => localStorage.setItem("user",JSON.stringify(user)),[user])

    return <UserData.Provider value={{user,setUser,addToHistory,handleAddToPlayList,clearHistory,addToLikedVideos,createPlayList,deletePlaylist}}>
                {props.children}
            </UserData.Provider>
}