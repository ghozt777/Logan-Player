import styled from "styled-components"
import {useTheme} from "../context/ThemeProvider"
import Logo from "../images/monster-icons/SVG/logo.svg"
import Pizza from "../images/pizza-icons-01/svg/Pizza.svg"
const Card = styled.div`
    cursor:pointer;
    width: 300px;
    height: 300px;
    padding: 10px;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items:flex-start;
    border-style:none;
    @media (max-width:700px){
        margin:0;
        width: 160px;
        height: 180px;
    }
`

const Hero = styled.img`
    height: 80%;
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: ${props => props.theme==="dark" ? "0px 0px 0px 0px" : "0px 6px 6px -2px #9CA3AF"};
`
const CardInfo = styled.div`
    display:flex;
    width: 100%;
    margin-top: 1rem;
    height; 30%;
    flex-direction: row;
    justify-content:space-evenly;
    align-items:center;
`

const CardText = styled.small`
    color:${props => props.theme==="dark" ? "#D1D5DB" : "#374151"};
    font-size: 0.8rem;
    @media (max-width:700px){
        font-size: 0.6rem;
    }
`
const ChannelLogo = styled.div`
    width: 40px;
    @media (max-width:700px){
        width: 30px;
    }
`
const CardTitle = styled.h1`
    margin-top: 0.5rem;
    color:${props => props.theme==="dark" ? "white" : "black"};
    font-size: 1rem;
    @media (max-width: 700px){
        font-size: 0.6rem;
    }
`

export const VideoCard = (props) => {
    const {theme} = useTheme()
    return(
        <Card>
            <Hero src={props.url} alt="skate" theme={theme} />
            <CardTitle theme={theme}>{props.title}</CardTitle>
            <CardInfo>
                <ChannelLogo><img src={Logo} alt="logo"/></ChannelLogo>
                <CardText theme={theme}>{props.channelName}</CardText>
                <img src={Pizza} style={{width: "20px"}}alt="likes" />
                <CardText theme={theme}>Likes: {props.likes}</CardText>
            </CardInfo>
        </Card>
    )
}