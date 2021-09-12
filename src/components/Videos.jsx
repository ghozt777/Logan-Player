import { VideoCard } from "./VideoCard";
import {useTheme} from "../context/ThemeProvider"
import styled from "styled-components";

const Grid = styled.div`
  width: 75%;
  max-height: 50%;
  overflow-y:scroll;
  display: grid;
  margin: auto;
  gap: 4em;
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
    width: 100%;
    max-height: 60%;
    grid-template-columns: repeat(2 ,1fr);
      margin:0;
      gap: 1rem;
  }
`

export const Videos = () => {
    const {theme} = useTheme()
    return(
        <Grid theme={theme}>
            <VideoCard url={"https://images.unsplash.com/photo-1513297887119-d46091b24bfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"} title={"monkey thows poop at grandma"} likes={"12"} channelName={"logan's balls"}/>
            <VideoCard url={"https://images.unsplash.com/photo-1502136969935-8d8eef54d77b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"} title={"fun day at carnival"} likes={"21"} channelName={"logan's balls"}/>
            <VideoCard url={"https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"} title={"a new era with ARM"} likes={"1"} channelName={"logan's balls"}/>
            <VideoCard url={"https://images.unsplash.com/photo-1513297887119-d46091b24bfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"} title={"monkey thows poop at grandma"} likes={"12"} channelName={"logan's balls"}/>
            <VideoCard url={"https://images.unsplash.com/photo-1513297887119-d46091b24bfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"} title={"monkey thows poop at grandma"} likes={"12"} channelName={"logan's balls"}/>
            <VideoCard url={"https://images.unsplash.com/photo-1513297887119-d46091b24bfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"} title={"monkey thows poop at grandma"} likes={"12"} channelName={"logan's balls"}/>
            <VideoCard url={"https://images.unsplash.com/photo-1513297887119-d46091b24bfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"} title={"monkey thows poop at grandma"} likes={"12"} channelName={"logan's balls"}/>
            <VideoCard url={"https://images.unsplash.com/photo-1513297887119-d46091b24bfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"} title={"monkey thows poop at grandma"} likes={"12"} channelName={"logan's balls"}/>
            <VideoCard url={"https://images.unsplash.com/photo-1513297887119-d46091b24bfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"} title={"monkey thows poop at grandma"} likes={"12"} channelName={"logan's balls"}/>
            <VideoCard url={"https://images.unsplash.com/photo-1513297887119-d46091b24bfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"} title={"monkey thows poop at grandma"} likes={"12"} channelName={"logan's balls"}/>
            <VideoCard url={"https://images.unsplash.com/photo-1513297887119-d46091b24bfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"} title={"monkey thows poop at grandma"} likes={"12"} channelName={"logan's balls"}/>
            <VideoCard url={"https://images.unsplash.com/photo-1513297887119-d46091b24bfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"} title={"monkey thows poop at grandma"} likes={"12"} channelName={"logan's balls"}/>
        </Grid>
    )
}