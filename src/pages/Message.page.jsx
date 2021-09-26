import {useState,useLayoutEffect} from "react"
import { useTheme } from "../context/ThemeProvider"
import {useUser} from "../context/UserInfoProvider"
import bg from "../images/bgMobile.jpg"
import bgLandscape from "../images/bg4.jpg"
import koala from "../images/koala.png"
import bear from "../images/bear.png"
import balloon from "../images/balloon.png"
import styled from "styled-components"


const Wrapper = styled.div`
    padding:0;
    position: relative;
    margin:0;    
    height:100vh;
    width: 100vw;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: ${props => props.theme==="light" ? "white" : "#18191A"};
    background-image: url(${bgLandscape});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @media (max-width:700px){
        background-image: url(${bg});
    }
`

const UserCard = styled.section`
    height:70%;
    width: 70%;
    border-style:none;
    display: flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    border-radius: 10px;
    background: linear-gradient(to right bottom,rgba(255,255,255,0.8),rgba(255,255,255,0.5));
    margin-left: 5rem;
    @media (max-width: 700px){
        margin-left: 0;
    }
`

const Animal = styled.img`
    max-width: 10rem;
    max-height: 10rem;
    position: absolute;
    z-index: 3;
    top: 10%;
    left: 18%;
    @media (max-width: 700px){
        left: 10%;
    }
`

const Balloon = styled.img`
    max-width: 10rem;
    max-height: 10rem;
    position: absolute;
    z-index: 3;
    bottom: 10%;
    right: 10%;
`

const HeadWrapper = styled.div`
    height: max-content;
    width: 80%;
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items:center;
`

const Header = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    @media (max-width:700px){
        font-size: 1rem;
    }
`


export const Message = () => {

    const {theme} = useTheme()
    const [width,setWidth] = useState()
    const {user} = useUser()
    const handleResize = () => setWidth(window.innerWidth)

    useLayoutEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize',handleResize)
    })

    const greeting = <Header >{user&&user.username ? ` Hello ${user.username}` : "Hello the one who must not be named ⚡️ "}</Header>

    return(
        <Wrapper theme={theme}>
            {
                width&&width>=700 ? <Animal src={koala} alt="koala" /> : <Animal src={bear} alt="bear" />
            }
            <Balloon src={balloon} alt="balloon" />
            <UserCard >
                <HeadWrapper>{greeting}</HeadWrapper>
                <small style={{padding:"0 1rem"}} >
                    Logan Player is a fun and interactive video player designed by ghozt777 using React 💜. U can follow me on <a href="https://github.com/ghozt777" style={{textDecoration:"none" , color:"red"}} ><b>GitHub</b></a> or on instagram <a href="https://www.instagram.com/dontsleeponcustard/" style={{textDecoration:"none" , color:"red"}} ><b>Instagram</b></a> 
                </small>
                <b>Hope that u like it : ) </b>
            </UserCard>
        </Wrapper>
    )
}