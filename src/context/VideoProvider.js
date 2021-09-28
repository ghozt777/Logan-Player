import { createContext,useContext,useReducer,useEffect} from "react"
import { reducer } from "../reducer/videoReducer"
import axios from "axios"
const VideoData = createContext()

export const useVideos = () => useContext(VideoData)

export const VideoProvider = ({children}) => {
    
    const [videos,videoDispatch] = useReducer(reducer,[])

    useEffect(() => {
        (async() => {
          try{
            const response  = await axios.get("https://logan-player-backend.ghozt777.repl.co/videos")
            videoDispatch({type:"GET_VIDEOS",payload:response.data.videos})
          }catch(err){
            console.error(err.message)
          }
        })()
      },[videoDispatch])

    return(
        <VideoData.Provider value={{videos,videoDispatch}}>
            {children}
        </VideoData.Provider>
    )
} 