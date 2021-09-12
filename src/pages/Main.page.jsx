import styled from "styled-components"
import {useTheme} from "../context/ThemeProvider"
import {Videos} from  "../components/Videos"
import { SearchBar } from "../components/SearchBar";
import { Carousel } from "../components/Carousel";
import {NavBar} from "../components/NavBar"

const Wrapper = styled.div`
  background-color: ${props => props.theme==="dark" ? "#07080e" : "white"};
  position:relative;
  height:100vh;
  width:100vw;
  `

export const MainPage = () => {
    const {theme} = useTheme()
    return(
        <Wrapper theme={theme}>
            <NavBar />
            <Carousel />
            <SearchBar />
            <Videos />
        </Wrapper>
    )
}