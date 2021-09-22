import "./css/videoPlayer.page.css"
import React from 'react'
import YouTube from "react-youtube"
import Fade from 'react-reveal/Fade';
import styled from "styled-components"
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Tomato from "../images/pizza-icons-01/svg/Tomato.svg"
import SweetChiliSauce from "../images/pizza-icons-01/svg/SweetChiliSauce.svg"
import { useParams } from "react-router-dom"
import { Comments } from '../components/Comments'
import { ClimbingBoxLoader } from "react-spinners"
import { useTheme } from "../context/ThemeProvider"
import { useVideos } from "../context/VideoProvider"

const Input = styled.input`
width: 90%;
height: 5rem;
border-style: none;
border-radius: 0.3rem;
padding: 0.5rem 1rem;
transition: 350ms;
font-size: 0.8rem;
color: ${props => props.theme==="dark" ? "white" : "black"};
background-color:${props => props.theme==="dark" ? "#242424" : "#EEEEEE"};
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
    font-size: 0.6rem;
    &::placeholder{
        font-size: 0.65rem;
    }
}
`

const Header = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
    font-family: 'Ubuntu', sans-serif;
    color: ${props => props.theme==="light" ? "black" : "white"};
    font-size: 1.4rem;
    @media (max-width: 700px){
        font-size: 1rem;
    }
`

const Small = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
    font-family: 'Space Mono', monospace;
    color: ${props => props.theme==="light" ? "black" : "white"};
    font-size: 0.8rem;
`


const VideoPlayerTest = () => {

    const {theme} = useTheme()
    const {videoId} = useParams()
    const {videos} = useVideos()
    const groupProps = {
            appear: false,
            enter: true,
            exit: true,
    }

    let foundVideo = videos.find(video => video._id===videoId)
    return(
        <div className="content-wrapper">
            {
                foundVideo ? (
                    <div className={`wrapper ${theme}`}>

                        <div className="player">
                            <Fade>
                                <YouTube videoId={`${foundVideo.watchId}`} className="player" />
                            </Fade>
                        </div>

                        <div className="controls">
                            <div className={`control-wrapper ${theme}`}>
                                <img src={SweetChiliSauce} className="control-icon" alt="like" />
                                <Small theme={theme}>like 👍</Small>
                            </div>
                            <div className={`control-wrapper ${theme}`}>
                                <img src={Tomato} className="control-icon" alt="add-to-playlist" />
                                <Small theme={theme}>add to playlist 🎧</Small>
                            </div>
                        </div>

                        <div className="comment-input__container">
                            <Input theme={theme} placeholder="say something I'm givin up on you ... "/>
                        </div>

                        {/* add commet button here */}

                        <div className="header">
                            <Header theme={theme} >Comments</Header>
                        </div>

                        <TransitionGroup {...groupProps} style={{height:"100%" , width:"100%"}} >
                            {
                                <div className="comments-wrapper">
                                    {
                                        foundVideo.comments.map(comment => {
                                            return(
                                                <Fade key={comment._id} ><Comments theme={theme} username={comment.user.username} time={comment.content.time} comment={comment.content.description} /></Fade>
                                            )
                                        })
                                    }
                                </div>
                            }
                        </TransitionGroup>
                    </div>
                ) : (
                    <div className="loader">
                        <ClimbingBoxLoader color={theme==="light" ? "black" : "#FF4C29"}  />
                    </div>
                )
            }
        </div>
    )
}


export default VideoPlayerTest
