import {NavBar} from "./components/NavBar"
import styled from "styled-components";
import {useTheme} from "./context/ThemeProvider"
import {Routes,Route} from "react-router-dom"
import { Carousel } from "./components/Carousel";
import {useVideos} from "./context/VideoProvider"
import {useEffect} from "react"
import {Videos} from "./components/Videos"
import axios from "axios";
import { SearchBar } from "./components/SearchBar";
function App() {
  const {theme} = useTheme()
  const App = styled.div`
  background-color: ${theme==="dark" ? "#07080e" : "white"};
  position:relative;
  height:100vh;
  width:100vw;
  `
  const {videoDispatch} = useVideos()

  useEffect(() => {
    (async() => {
      const response  = await axios.get("https://logan-player-backend.ghozt777.repl.co/videos")
      videoDispatch({type:"GET_VIDEOS",payload:response.data.videos})
    })()
  },[videoDispatch])

  return (
    <App>
      <Routes>

      </Routes>
      <NavBar />
      <Carousel />
      <SearchBar />
      <Videos />
    </App>
  );
}

export default App;
