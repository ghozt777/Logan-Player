import React from 'react'
import styled from "styled-components"
import { VideoCard } from '../components/VideoCard'
import { useTheme } from '../context/ThemeProvider'
import { useUser } from "../context/UserInfoProvider"
import { NavLink } from "react-router-dom"
import history from "../images/history.svg"

const Wrapper = styled.div`
    min-height: 100vh;
    width:100vw;
    max-height: max-content;
    margin-left: 3rem;
    padding:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: flex-start;
    background-color:${props => props.theme==="light" ? "white" : "#18191A"};
    @media (max-width:700px){
        margin-left: 0;
    }
`

const HeaderWrapper = styled.div`
    background-color: ${props => props.theme==="light" ? "#DDD6FE" : "#6D28D9"};
    box-shadow: ${props => props.theme==="light" ? "0px 10px 8px -2px #A78BFA" : "0px 10px 8px -3px black"};
    height: 5rem;
    width:80%;
    padding: 0 5rem;
    margin: 3rem 0;
    border-style:none;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-end;
    position: relative;
    border-radius: 10px;
    @media (max-width:700px){
        padding: 0 1rem;
        margin: 3rem 13px 2rem 0rem;
    }
`

const Icon = styled.img`
    position: absolute;
    bottom:0px;
    left: 40px;
    max-height: 8rem;
    max-width: 8rem;
    @media (max-width:700px){
        left:10px;
    }
`

const Header = styled.h1`
    font-size: 1.3rem;
    color:${props => props.theme==="light" ? "black" : "white"};
    @media (max-width:700px){
        font-size: 1rem;
    }
`

const Grid = styled.div`
  width: 80%;
  height: max-content;
  padding-bottom: 5rem;
  margin-top: 10rem;
  display: grid;
  grid-row-gap: 4em;
  grid-column-gap: 2rem;
  align-items:center;
  justify-items:center;
  grid-template-columns: repeat(auto-fit , minmax(240px, 1fr));

    &::-webkit-scrollbar{
        width: 5px;
    }
    &::-webkit-scrollbar-track {
        background: ${props => props.theme==="dark" ? "#111827" : "#D1D5DB        "};
    }
    &::-webkit-scrollbar-thumb {
        background: ${props => props.theme==="dark" ? "#7C3AED" : "#1F2937        "};
    }
    &::-webkit-scrollbar-thumb:hover {
        background: ${props => props.theme==="dark" ? "#A78BFA" : "#4B5563        "};
    }

  @media (max-width:700px){
    width: 90%;
    margin-right: 14px;
    margin-top: 2.5rem;
    grid-row-gap: 1em;
    grid-column-gap: 1rem;
    grid-template-columns: repeat(2 ,1fr);
  }
`

const CARD_STYLE = {
    height:'max-content',
    borderStyle:"none",
    padding: '10px'
}

const Button = styled.button`
    position: absolute;
    top:6rem;
    left: 0rem;
    padding: 10px;
    right: 10%;
    border-style: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 350ms;
    font-weight: bold;
    background-color: ${props => props.theme==="light" ? "#111827" : "#8B5CF6"};
    color: ${props => props.theme==="light" ? "white" : "black"};
    &:hover{
        background-color: ${props => props.theme==="light" ? "#374151" : "#C4B5FD"};
    }
    &:disabled{
        filter: brightness(50%);
    }
`

export const History = () => {

    const {theme} = useTheme()
    const {user,clearHistory} = useUser()


    return (
        <Wrapper theme={theme}>
            <HeaderWrapper theme={theme} >
                <Icon src={history} alt="history-icon" />
                <Header theme={theme} > History </Header>
            <Button 
                theme={theme} 
                disabled={(user&&user.history&&user.history.length===0) || !user}
                onClick={() => clearHistory()}
                >
                clear history
            </Button>
            </HeaderWrapper>
            {
                user&&user.history&&user.history.length>0 ? (
                    <Grid>
                        {
                            user.history.map((data,index) => 
                               <div key={data.video._id} style={CARD_STYLE} >
                                    <NavLink style={{textDecoration:"none"}} to={`/${data.video._id}`} >
                                        <VideoCard  url={data.video.thumbnail} title={data.video.title} channelName="ghozt TV" likes={"10"}/>
                                    </NavLink>
                                    <small  style={{fontWeight:'bold',color:`${theme==="light" ? "black" : "white"}`}} theme={theme}><span style={{fontSize:'11px'}} >Date Watched</span>: {data.time}</small>
                               </div>
                            )
                        }
                    </Grid>
                ) : (
                    <h1 style={{color:`${theme==="light" ? "black" : "white"}`,marginTop:"10rem"}}>No recent history...</h1>
                )
            }
        </Wrapper>
    )   
}

