import {useNavigate} from "react-router-dom"
import Fade from 'react-reveal/Fade';
import {useTheme} from '../context/ThemeProvider'
import {useAuth} from "../context/AuthProvider"
import styled from "styled-components"


const Nav = styled.nav`
    z-index: 3;
    display:flex;
    flex-direction:column;
    height:100%;
    align-itmes:center;
    width:5em;
    left:0;
    position:fixed;
    border-style:none;
    background-color: ${props => props.theme==="dark" ? "#191b30" : "#F3F4F6"};
    transition: 350ms;
    .follow{
        margin-top: auto;
    }

    &:hover{
        width: 13em;
    }

    &:hover .nav-text{
        display:block;
    }


    @media (max-width:700px){
        flex-direction:row;
        bottom:0;
        height: 4em;
        width:100%;

        &:hover{
            width: 100%;
            height: 7em;
        }
        .nav-text{
            font-size: 0.6em;
        }
        .follow{
            margin: 0;
        }
    }
    `
    const NavItem = styled.div`
    display:flex;
    width:90%;
    transition: 350ms;
    margin: 1rem auto;
    padding: 0.3rem;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
    border-style:none;
    border-radius: 0.5rem;
    svg{
        height: 35px;
    }

    &:hover{
        background-color: ${props => props.theme==="light" ? "#D1D5DB" : "#0f101d"};
        cursor:pointer;
    }

    @media (max-width: 700px){
        width: 100%;
        flex-direction: column;
        svg{
            height:25px;
        }
    }

    `
    const NavText = styled.h1`
    font-size: 0.8em;
    display:none;
    .desktop{
        display:block;
    }
    .mobile{
        display:none;
    }
    color: ${props => props.theme==="light"? "black" : "white"}; 
    @media(max-width:700px){
        .desktop{
            display:none;
        }
        .mobile{
            display:block;
        }
    }
    `
    const YoutubeSVG = styled.svg`
    color:red;
    `

    const HomeSVG = styled.svg`
    color:${props => props.theme==="light"? "black" : "white"};;
    `

    const HistorySVG = styled.svg`
    color:${props => props.theme==="dark"? "#EF4444" : "#2563EB"};
    `

    const InstaSVG = styled.svg`
    color: #A78BFA;
    `

    const DarkThemeSVG = styled.svg`
    color: #0183ff; 
    `

    const LightThemeSVG = styled.svg`
    color:#EF4444;
    `

    const TrendingSVG = styled.svg`
    color: #FF6700;    
    `

    const KeySVG = styled.svg`
    color: #FBBF24;
    `

    const LockSVG = styled.svg`
    color: #24E500;
    `

export const NavBar = () => {

    const {theme,setTheme} = useTheme()
    const {isLoggedIn} = useAuth()
    const navigate = useNavigate()


    const themeSVG = theme==="dark" ? (
        <DarkThemeSVG aria-hidden="true" focusable="false" data-prefix="far" data-icon="moon" class="svg-inline--fa fa-moon fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 28.999-80.788-15.022-88.919A257.936 257.936 0 0 0 279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.689 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z"></path></DarkThemeSVG>
    ):(
        <LightThemeSVG aria-hidden="true" focusable="false" data-prefix="far" data-icon="sun" class="svg-inline--fa fa-sun fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M494.2 221.9l-59.8-40.5 13.7-71c2.6-13.2-1.6-26.8-11.1-36.4-9.6-9.5-23.2-13.7-36.2-11.1l-70.9 13.7-40.4-59.9c-15.1-22.3-51.9-22.3-67 0l-40.4 59.9-70.8-13.7C98 60.4 84.5 64.5 75 74.1c-9.5 9.6-13.7 23.1-11.1 36.3l13.7 71-59.8 40.5C6.6 229.5 0 242 0 255.5s6.7 26 17.8 33.5l59.8 40.5-13.7 71c-2.6 13.2 1.6 26.8 11.1 36.3 9.5 9.5 22.9 13.7 36.3 11.1l70.8-13.7 40.4 59.9C230 505.3 242.6 512 256 512s26-6.7 33.5-17.8l40.4-59.9 70.9 13.7c13.4 2.7 26.8-1.6 36.3-11.1 9.5-9.5 13.6-23.1 11.1-36.3l-13.7-71 59.8-40.5c11.1-7.5 17.8-20.1 17.8-33.5-.1-13.6-6.7-26.1-17.9-33.7zm-112.9 85.6l17.6 91.2-91-17.6L256 458l-51.9-77-90.9 17.6 17.6-91.2-76.8-52 76.8-52-17.6-91.2 91 17.6L256 53l51.9 76.9 91-17.6-17.6 91.1 76.8 52-76.8 52.1zM256 152c-57.3 0-104 46.7-104 104s46.7 104 104 104 104-46.7 104-104-46.7-104-104-104zm0 160c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z"></path></LightThemeSVG>
    )

    const loginSVG = isLoggedIn ? (
        <LockSVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="unlock" class="svg-inline--fa fa-unlock fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></LockSVG>
    ):(
        <KeySVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="key" class="svg-inline--fa fa-key fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"></path></KeySVG>
    )

    return(
        <Nav theme={theme}>
            <NavItem className="first-element" onClick={() => navigate("/message")} theme={theme}>
                <YoutubeSVG aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" class="svg-inline--fa fa-youtube fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></YoutubeSVG>
                <NavText className="nav-text" theme={theme} ><Fade> <span className="desktop">Logan Player</span> <span className="mobile">Logang4Life</span> </Fade></NavText>
            </NavItem>
            <NavItem theme={theme} onClick={() => navigate("/")} >
                <HomeSVG theme={theme} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="campground" class="svg-inline--fa fa-campground fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M624 448h-24.68L359.54 117.75l53.41-73.55c5.19-7.15 3.61-17.16-3.54-22.35l-25.9-18.79c-7.15-5.19-17.15-3.61-22.35 3.55L320 63.3 278.83 6.6c-5.19-7.15-15.2-8.74-22.35-3.55l-25.88 18.8c-7.15 5.19-8.74 15.2-3.54 22.35l53.41 73.55L40.68 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM320 288l116.36 160H203.64L320 288z"></path></HomeSVG>
                <NavText className="nav-text" theme={theme} ><Fade>Home </Fade></NavText>
            </NavItem>
            <NavItem theme={theme}>
                <TrendingSVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="fire" class="svg-inline--fa fa-fire fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"></path></TrendingSVG>
                <NavText className="nav-text" theme={theme} ><Fade>Playlist</Fade></NavText>
            </NavItem>
            <NavItem theme={theme} onClick={() => navigate('/history')} >
                <HistorySVG theme={theme} aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" class="svg-inline--fa fa-clock fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></HistorySVG>
                <NavText className="nav-text" theme={theme} ><Fade>History</Fade></NavText>
            </NavItem>
            <NavItem theme={theme} onClick={() => setTheme(prevTheme => prevTheme==="dark" ? "light" : "dark")} >
                {themeSVG}
                <NavText className="nav-text" theme={theme} ><Fade>theme: {theme}</Fade></NavText>
            </NavItem>
            <NavItem theme={theme} onClick={() => navigate('/login')}>
                {loginSVG}
                <NavText className="nav-text" theme={theme} ><Fade>{isLoggedIn ? "logout" : "login"}</Fade></NavText>
            </NavItem>
            <NavItem theme={theme} className="follow" onClick={() => window.location.assign("https://www.instagram.com/dontsleeponcustard/")}>
                <InstaSVG aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" class="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></InstaSVG>
                <NavText className="nav-text" theme={theme} ><Fade>Follow Me</Fade></NavText>
            </NavItem>
        </Nav>
    )
}