import {useParams} from "react-router-dom" 
import YouTube from 'react-youtube';
import React from "react"
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

const Input = styled.input`
    width: 100%;
    height: 100%;
    border-style: none;
    border-radius: 0.3rem;
    padding: 0.5rem 1rem;
    transition: 350ms;
    font-size: 0.8rem;
    color: ${props => props.theme==="dark" ? "white" : "black"};
    background-color:${props => props.theme==="dark" ? "#333456" : "#EEEEEE"};
    &::placeholder{
        color:${props => props.theme==="dark" ? "white" : "black"};
        font-size: 0.9rem;
    }
    &:focus{
        outline:none;
        background-color:${props => props.theme==="dark" ? "#F037A5" : "#CCA8E9"};
    }

    @media (max-width:700px){
        padding: 0.4rem 0.7rem;
        margin:0;
        font-size: 0.6rem;
        &::placeholder{
            font-size: 0.65rem;
        }
}
`

const InputField = styled.div`
    display:flex;
    height: 20%;
    width: 80%;
    flex-direction:column;
    align-items:flex-start;

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
    justify-content:space-around;
    align-items:center;
`

const VideoWrapper = styled.div`
    height: 90%;
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
    @media (max-width:1000px){
        flex-direction:column;
        height: 70%;
    }
`

const CommentsWrapper = styled.div`
    max-height: 40%;
    width: 40%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    overflow-y:scroll;
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
        width:100%;
        max-height:30%;
        border:none;
    }
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

const ContentWrapper = styled.div`
    height: 70%;
    width: 50%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    @media (max-width:700px){
        width: 100%;
        height: 90%;
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
                !isReady&&<Loader><HashLoader color={`${theme==="dark" ? "white" : "#121212"}`} /></Loader>
            }  
            {
                video&&(
                    <PlayerWrapper>
                        <Title theme={theme}>{video.title}</Title>
                        <VideoWrapper>
                            <ContentWrapper>
                            <Fade><YouTube videoId={`${video.watchId}`} className="player" onReady={() => setIsReady(true)}/></Fade>
                                <InputField>
                                    <Small theme={theme}>add comments</Small> 
                                    <Input
                                        type="text"
                                        theme={theme}
                                        className="comment-input"
                                    />
                                </InputField>
                            </ContentWrapper>
                                <CommentsWrapper theme={theme} >
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
                        </VideoWrapper>
                    </PlayerWrapper>
                )
            }
        </Wrapper>
    )
}
