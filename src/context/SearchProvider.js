import {createContext,useContext,useReducer,useEffect} from "react"
import {reducer} from "../reducer/searchReaducer"
import { useVideos } from "./VideoProvider"
const SearchData = createContext()

export const useSearch = () => useContext(SearchData)

export const SearchProvider = (props) => {
    const {videos} = useVideos()
    const [filteredVideos,searchDispatch] = useReducer(reducer,videos)
    useEffect(() => {
        searchDispatch({type:"INIT",payload:videos})
    },[videos])
    return(
        <SearchData.Provider value={{filteredVideos,searchDispatch}} >
            {props.children}
        </SearchData.Provider>
    )
}