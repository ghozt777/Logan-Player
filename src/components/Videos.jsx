import { VideoCard } from "./VideoCard";
import {useTheme} from "../context/ThemeProvider"
import styled from "styled-components";
import {NavLink} from "react-router-dom"
import {HashLoader} from "react-spinners"
import {useSearch} from "../context/SearchProvider"

const Grid = styled.div`
  width: 80%;
  max-height: 50%;
  overflow-y:scroll;
  display: grid;
  margin:auto;
  gap: 4em;
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
    width: 100%;
    max-height: 60%;
    margin:0;
    grid-template-columns: repeat(2 ,1fr);
      margin:0;
      gap: 1rem;
  }
`

const Loader = styled.div`
    position:absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50% , -50%);
`

export const Videos = () => {
    const {theme} = useTheme()
    const {filteredVideos:videos} = useSearch()
    return(
            <Grid theme={theme}>
                {
                    !videos || videos.length===0 ? <Loader><HashLoader  color={`${theme==="dark" ? "white" : "#121212"}`} /></Loader> : videos.map(video => <NavLink style={{textDecoration:"none"}} key={video._id} to={`/${video._id}`} ><VideoCard  url={video.thumbnail} title={video.title} channelName="ghozt TV" likes={video.likeCount ?? 0}/></NavLink>)
                }  
            </Grid>
    )
}