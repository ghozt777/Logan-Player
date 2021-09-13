import React from "react"
import {useParams} from "react-router-dom" 
import YouTube from 'react-youtube';
import {useVideos} from "../context/VideoProvider"
import {HashLoader} from "react-spinners"
import {useTheme} from "../context/ThemeProvider"
import styled from "styled-components"
import {Fade} from "react-reveal"
import Pizza from "../images/pizza-icons-01/svg/Pizza.svg"
import Tomato from "../images/pizza-icons-01/svg/Tomato.svg"


const Wrapper = styled.div`
background-color: ${props => props.theme==="dark" ? "#181818" : "white"};
    height: 100vh;
    width: 100vw;
    margin:0;
    padding:0;
    position: relative;
    .player{
        border-style:none;
        border-radius: 1rem;
    }
    @media (max-width:700px){
        .player-wrapper{
        }
        .player{
            width:100%;
            height: 300px;
        }
    }
`
const Loader = styled.div`
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
`

const PlayerWrapper = styled.div`
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
`

const CommentsWrapper = styled.div`
    max-height: 30%;
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    overflow-y:scroll;
`

const Comment = styled.div`
    width: 80%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    background-color:#404040;
    border-style:none;
    border-radius: 0.4rem;
    @media (max-width:700px){
        height: 5rem;
        width: 95%;
    }
`

const CommentText = styled.small`   
    color: ${props => props.theme==="dark" ? "white" : "#11182"};
`

const CommentTextWrapper = styled.div`
    width: 80%;
    height: 50px;
`

const CommentDetails = styled.div`
    height: 50%;
    width: 100%;
    background-color:#121212;
    box-shadow: 0px -8px 6px -2px #282828;
    border-style:none;
    border-radius: 0.4rem;
    display:flex;
    flex-drection:row;
    justify-content:flex-end;
    align-items:center;
`

const DetailsWrapper = styled.div`
    height: 100%;
    width: 25%;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    @media (max-width:700px){
        width: 30%;
    }
`

const Title = styled.h1`
    font-size: 1.2rem;
    color: ${props => props.theme==="dark" ? "white" : "#11182"};
    @media (max-width:700px){
        font-size: 1rem;
    }
`

const Small = styled.small`
    color: ${props => props.theme==="dark" ? "white" : "#11182"};
    @media (max-width:700px){
        font-size: 0.7rem;
    }
`


export const VideoPlayer = () => {
    const {videoId} = useParams()
    const {videos} = useVideos()
    const {theme} = useTheme()
    const [isReady,setIsReady] = React.useState(false)
        const video = videos.find(video => video._id===videoId)
    return(
        <Wrapper theme={theme} >
            {   
                !isReady&&<Loader><HashLoader className="loader" color={`${theme==="dark" ? "white" : "#121212"}`} /></Loader>
            }  
            {
                video&&(
                <PlayerWrapper>
                    <Title theme={theme}>{video.title}</Title>
                    <div>
                        <Fade><YouTube videoId={`${video.watchId}`} className="player" onReady={() => setIsReady(true)}/></Fade>
                    </div>
                    <CommentsWrapper>
                        {
                            video.comments.map(comment => {
                                return(
                                    <Comment>
                                        <CommentTextWrapper>
                                            <CommentText theme={theme} >{comment.content.description}</CommentText>
                                        </CommentTextWrapper>
                                        <CommentDetails>
                                            <DetailsWrapper>
                                                <Small theme={theme} >{comment.user.username}</Small>
                                                <img src={Pizza} alt="likes" style={{height: "30px"}}/>
                                            </DetailsWrapper>
                                            <DetailsWrapper>
                                                <Small theme={theme} >{comment.content.time}</Small>
                                                <img src={Tomato} alt="likes" style={{height: "30px"}}/>
                                            </DetailsWrapper>
                                        </CommentDetails>
                                    </Comment>
                                )
                            })
                        }
                    </CommentsWrapper>
                </PlayerWrapper>
                )
            }
        </Wrapper>
    )
}
