import { createContext,useContext,useReducer} from "react"
import { reducer } from "../reducer/videoReducer"
const VideoData = createContext()

export const useVideos = () => useContext(VideoData)

export const VideoProvider = ({children}) => {
    
    const [videos,videoDispatch] = useReducer(reducer,[])
    return(
        <VideoData.Provider value={{videos,videoDispatch}}>
            {children}
        </VideoData.Provider>
    )
} 