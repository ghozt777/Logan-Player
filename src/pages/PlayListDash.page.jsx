import styled from "styled-components"
import { useParams  , NavLink} from "react-router-dom"
import { useUser } from "../context/UserInfoProvider"
import { HashLoader } from "react-spinners"
import { useTheme } from "../context/ThemeProvider"
import { VideoCard } from "../components/VideoCard"
import PlayListImg from "../images/pl.svg"

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
    margin: 4rem 0;
    border-style:none;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-end;
    position: relative;
    border-radius: 10px;
    @media (max-width:700px){
        padding: 0 1rem;
        margin: 4rem 13px 2rem 0rem;
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

const Loader = styled.div`
    position: fixed;
    top:50%;
    left: 50%;
    transform:translate(-50% -50%);
`

export const Dash = () => {

    const { playlistId } = useParams()
    const { user } = useUser()
    const { theme } = useTheme()

    const foundPl = user.playlist.find(playlist => playlist._id===playlistId)

    return(
        foundPl ? (
            <Wrapper theme={theme}>
                <HeaderWrapper theme={theme} >
                    <Icon src={PlayListImg} alt="playlist-icon" />
                    <Header theme={theme} > {foundPl.name} </Header>
                </HeaderWrapper>
                {
                    foundPl.videos.length>0 ? (
                        <Grid>
                            {
                                foundPl.videos.map((data,index) => 
                                <div key={data._id} style={CARD_STYLE} >
                                        <NavLink style={{textDecoration:"none"}} to={`/${data._id}`} >
                                            <VideoCard  url={data.thumbnail} title={data.title} channelName="ghozt TV" likes={"10"}/>
                                        </NavLink>
                                </div>
                                )
                            }
                        </Grid>
                    ) : (
                        <h1 style={{color:`${theme==="light" ? "black" : "white"}`,marginTop:"50%"}}>No videos in Playlist...</h1>
                    )
                }
            </Wrapper>
        ) : (
            <Loader>
                <HashLoader color={theme==="light" ? "black" : "#FF4C29"} />
            </Loader>
        )
    )
}