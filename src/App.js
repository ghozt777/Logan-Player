import styled from "styled-components"
import {NavBar} from "./components/NavBar"
import {Routes,Route} from "react-router-dom"
import {LoginPage} from "./pages/Login.page"
import {MainPage} from "./pages/Main.page"
import {CreateAccount} from './pages/CreateAccount.page'
import {Message} from "./pages/Message.page"
import { History } from "./pages/History.page"
import VideoPlayer from "./pages/VideoPlayer/VideoPlayer"
import { Playlist } from "./pages/PlayList/Test"
import { LikedVids } from "./pages/LikedVideos.page"
import { WatchLater } from "./pages/WatchLater.page"
import { NotFound } from "./pages/NotFound.page"

const Wrapper = styled.div`
  position:relative;
  height: max-content;
  width: 100vw;
`

function App() {

  return (
    <Wrapper>
        <NavBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/message" element={<Message />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/history" element={<History />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/liked-videos" element={<LikedVids />} />
            <Route path="/watch-later" element={<WatchLater />} />
            <Route path="/:videoId" element={<VideoPlayer />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Wrapper>
  );
}

export default App;
