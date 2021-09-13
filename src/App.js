import axios from "axios";
import {Routes,Route} from "react-router-dom"
import {useVideos} from "./context/VideoProvider"
import {useEffect} from "react"
import {LoginPage} from "./pages/Login.page"
import {MainPage} from "./pages/Main.page"
import {CreateAccount} from './pages/CreateAccount.page'

function App() {

  const {videoDispatch} = useVideos()

  useEffect(() => {
    (async() => {
      const response  = await axios.get("https://logan-player-backend.ghozt777.repl.co/videos")
      videoDispatch({type:"GET_VIDEOS",payload:response.data.videos})
    })()
  },[videoDispatch])

  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
  );
}

export default App;
