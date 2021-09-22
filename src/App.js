import axios from "axios";
import styled from "styled-components"
import {Routes,Route} from "react-router-dom"
import {useVideos} from "./context/VideoProvider"
import {useEffect} from "react"
import {LoginPage} from "./pages/Login.page"
import {MainPage} from "./pages/Main.page"
import {CreateAccount} from './pages/CreateAccount.page'
import {NavBar} from "./components/NavBar"
import {VideoPlayer} from "./pages/VideoPlayer.page"
import VideoPlayerTest from "./pages/VideoPlayerTest"

const Wrapper = styled.div`
  position:relative;
  height: max-content;
  width: 100vw;
`

function App() {

  const {videoDispatch} = useVideos()

  useEffect(() => {
    (async() => {
      try{
        const response  = await axios.get("https://logan-player-backend.ghozt777.repl.co/videos")
        console.log(response.data)
        videoDispatch({type:"GET_VIDEOS",payload:response.data.videos})
      }catch(err){
        console.error(err.message)
      }
    })()
  },[videoDispatch])

  return (
    <Wrapper>
        <NavBar />
          <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/:videoId" element={<VideoPlayerTest />} />
        </Routes>
      </Wrapper>
  );
}

export default App;
