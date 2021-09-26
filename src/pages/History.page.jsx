import React from 'react'
import styled from "styled-components"
import { VideoCard } from '../components/VideoCard'
import { useTheme } from '../context/ThemeProvider'
import { useUser } from "../context/UserInfoProvider"
import { NavLink } from "react-router-dom"

const Wrapper = styled.div`
    min-height: 100vh;
    width:100vw;
    max-height: max-content;
    margin-left: 3rem;
    padding:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-evenly;
    background-color:${props => props.theme==="light" ? "white" : "#18191A"};
    @media (max-width:700px){
        margin-left: 0;
    }
`

const HeaderWrapper = styled.div`
    height: 5rem;
    width:80%;
`

const Grid = styled.div`
  width: 80%;
  height: max-content;
  padding-bottom: 5rem;
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
    grid-row-gap: 1em;
    grid-column-gap: 1rem;
    grid-template-columns: repeat(2 ,1fr);
  }
`

export const History = () => {

    const {theme} = useTheme()
    const {user} = useUser()

    return (
        <Wrapper theme={theme}>
            {
                user.history&&user.history.length>0 ? (
                    <Grid>
                        {
                            user.history.map(({video}) => 
                                <NavLink style={{textDecoration:"none"}} key={video._id} to={`/${video._id}`} ><VideoCard  url={video.thumbnail} title={video.title} channelName="ghozt TV" likes={"10"}/></NavLink>
                            )
                        }
                    </Grid>
                ) : (
                    <h1>No recent history...</h1>
                )
            }
        </Wrapper>
    )   
}

