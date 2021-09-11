import {NavBar} from "./components/NavBar"
import styled from "styled-components";
import {useTheme} from "./context/ThemeProvider"
import {Routes,Route} from "react-router-dom"
import { Carousel } from "./components/Carousel";
function App() {
  const {theme} = useTheme()
  const App = styled.div`
  background-color: ${theme==="dark" ? "#07080e" : "white"};
  position:relative;
  height:100vh;
  width:100vw;
  `
  
  return (
    <App>
      <NavBar />
      <Carousel />
    </App>
  );
}

export default App;
