import React from "react"
import { useUser } from "../context/UserInfoProvider"
import { useTheme } from "../context/ThemeProvider"
import styled from "styled-components"
import { images } from "../db/images.db"
import { NavLink } from "react-router-dom"
import { VideoCard } from "../components/VideoCard";
import { Grid } from "../components/Videos"

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    margin:0;
    padding:0;
    display:grid;
    grid-template-columns:1fr;
    grid-row-gap: 4rem;
    background-color: ${props => props.theme==="light" ? "white" : "#100c08"};
    overflow-y: scroll;
    overflow-x: hidden;
`

const PlayListWrapper = styled.div`
    height: 90vh;
    width: 94%;
    padding: 10px;
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items:center;
    margin-left: 5rem;
    @media (max-width:700px){
        width: 100%;
        margin-left: 0;
    }
`
const Header = styled.h1`
    margin 1rem 0;
    font-size: 1rem;
    color : ${props => props.theme==="light" ? "black" : "white"};
`

const IMAGE_STYLE_LIGHT={
    height: "30%",
    maxWidth: "500px",
    width: "100%",
    borderStyle: "none",
    borderRadius: "10px",
    boxShadow : "0px 10px 8px -2px #9CA3AF",
}

const IMAGE_STYLE_DARK={
    height: "30%",
    maxWidth: "500px",
    width: "100%",
    borderStyle: "none",
    borderRadius: "10px",
    boxShadow : "0px 10px 8px -2px #020302",
}

export const Playlist = () => {
    const {user} = useUser()
    const {theme} = useTheme()
    return(
        <Wrapper theme={theme}>
            {
                user ? (
                    <div>
                        {
                            user.playlist&&user.playlist.length > 0 ? (
                                <PlayListWrapper>
                                    {
                                        user.playlist.map((pl,index) => {
                                            return(
                                                <>      <img style={theme==="light" ? IMAGE_STYLE_LIGHT : IMAGE_STYLE_DARK} src={images[index%images.length].url} alt={images[index%images.length].alt}/>
                                                        <Header theme={theme}>
                                                            {pl.name}
                                                        </Header>
                                                        <Grid>
                                                            {
                                                                pl.videos.map(video => {
                                                                    return(
                                                                        <NavLink style={{textDecoration:"none"}} key={video._id} to={`/${video._id}`} ><VideoCard  url={video.thumbnail} title={video.title} channelName="ghozt TV" likes={video.likeCount ?? 0}/></NavLink>
                                                                    )
                                                                })
                                                            }
                                                        </Grid>
                                                </>
                                            )
                                        })
                                    }
                                </PlayListWrapper>
                            ) : (
                                <h1> No playlists .... </h1>
                            )
                        }
                    </div>
                ) : (
                    <h1> Please Sign In to create a playlist</h1>
                )
            }
        </Wrapper>
    )
}