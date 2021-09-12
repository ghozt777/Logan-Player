import { createContext,useContext,useReducer} from "react"
import { reducer } from "../reducer/videoReducer"
const VideoData = createContext()

export const useVideos = () => useContext(VideoData)

export const VideoProvider = ({children}) => {
    
    const [videos,videoDispatch] = useReducer(reducer,{test:"test",arr:[1,2,3,4]})
    return(
        <VideoData.Provider value={{videos,videoDispatch}}>
            {children}
        </VideoData.Provider>
    )
} 