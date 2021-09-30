import "./playList.css"
import styled from "styled-components"
import React , { useRef , useState } from "react"
import { useUser } from "../../context/UserInfoProvider"
import { useTheme } from "../../context/ThemeProvider"
import { images } from "../../db/images.db"
import { useNavigate } from "react-router-dom"
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Fade from 'react-reveal/Fade';
import Minion from "../../images/minion.png"
import { AiOutlineDelete } from "react-icons/ai"
import { BiVideo } from "react-icons/bi"
import { Alert } from "../../components/Toast/Toast"

const groupProps = {
    appear: false,
    enter: true,
    exit: true,
}

const Wrapper = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    overflow-y: scroll;
    overflow-x: hidden;
    margin-left: 5rem;
    background-color: ${props => props.theme==="light" ? "white" : "#100c08"};
    @media (max-width:700px){
        margin-left: 0rem;
    }
`
const Text = styled.h1`
    color:${props => props.theme==="light" ? "black" : "white"};
    font-size: 1rem;
    text-align:center;
`

export const Playlist = () => {

    const {theme} = useTheme()
    const {user,deletePlaylist} = useUser()
    const alertRef = useRef()
    const successRef = useRef()
    const [showToast,setShowToast] = useState("hide")
    const [showSuccessToast,setShowSuccessToast] = useState("hide")
    const navigate = useNavigate()
    const clickHandler = async (id) => {
        try{
            const message = await deletePlaylist(id)
            setShowSuccessToast("show")
            successRef.current.innerText = message
            setTimeout(() => setShowSuccessToast("hide"),2000)  
        }catch(e){
            console.error(e.message)
            setShowToast("show")
            alertRef.current.innerText = e.message
            setTimeout(() => setShowToast("hide"),2000)
        }
    }

    return(
        <>
            {
                user ? (
                    <Wrapper theme={theme}>
                        <Alert className={`alert alert-warning ${showToast}`}>
                            <div ref={alertRef} className="message"></div>
                        </Alert>
                        <Alert className={`alert alert-success ${showSuccessToast}`}>
                            <div ref={successRef} className="success-message"></div>
                        </Alert>
                        {
                            user.playlist ? (
                                <TransitionGroup {...groupProps} style={{height:"100%" , width:"100%"}} >
                                    {
                                        user.likedVideos && (
                                            <div className="card__container" onClick={() => navigate('/liked-videos')} >
                                                <Fade>
                                                    <div className={`card ${theme}`}>
                                                        <img className={`card-hero ${theme}`} src={images[3].url} alt={images[3].alt}/>
                                                        <div className="card-details">
                                                            <div className="card-details-wrapper">
                                                                <img className="card-icon" src={Minion} alt="minion" />
                                                                <div className={`card-text ${theme}`}>liked videos</div>
                                                            </div>
                                                            <div className="card-details-wrapper">
                                                                <div className={`card-text ${theme}`}>
                                                                    {
                                                                        user.likedVideos.length > 0 ? user.likedVideos.length ===1 ? "1 video" : `${user.likedVideos.length} videos` : "no videos yet..."
                                                                    }
                                                                </div>
                                                                <BiVideo  
                                                                    size="1.3rem"
                                                                    color={`red`}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Fade>
                                            </div>
                                        )
                                    }
                                    {
                                        user.watchLater && (
                                            <div className="card__container" onClick={() => navigate('/watch-later')}>
                                                <Fade>
                                                    <div className={`card ${theme}`}>
                                                        <img className={`card-hero ${theme}`} src={images[4].url} alt={images[4].alt}/>
                                                        <div className="card-details">
                                                            <div className="card-details-wrapper">
                                                                <img className="card-icon" src={Minion} alt="minion" />
                                                                <div className={`card-text ${theme}`}>watch later</div>
                                                            </div>
                                                            <div className="card-details-wrapper">
                                                                <div className={`card-text ${theme}`}>
                                                                    {
                                                                        user.watchLater.length > 0 ? user.watchLater.length ===1 ? "1 video" : `${user.watchLater.length} videos` : "no videos yet..."
                                                                    }
                                                                </div>
                                                                <BiVideo  
                                                                    size="1.3rem"
                                                                    color={`red`}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Fade>
                                            </div>
                                        )
                                    }
                                    {
                                        user.playlist.length===0 ? (
                                            <Fade><Text theme={theme}>No Playlists are created</Text></Fade>
                                        ) : (
                                            <div className="card__container">
                                                {
                                                    user.playlist.map((pl,index) => {
                                                        return(
                                                            <Fade key={pl._id}>
                                                                <div className={`card ${theme}`}>
                                                                    <img className={`card-hero ${theme}`} src={images[index%images.length].url} alt={images[index%images.length].alt}/>
                                                                    <div className="card-details">
                                                                        <div className="card-details-wrapper">
                                                                            <img className="card-icon" src={Minion} alt="minion" />
                                                                            <div className={`card-text ${theme}`}>{pl.name}</div>
                                                                        </div>
                                                                        <div className="card-details-wrapper">
                                                                            <div className={`card-text ${theme}`}>
                                                                                {
                                                                                    pl.videos.length > 0 ? pl.videos.length ===1 ? "1 video" : `${pl.videos.length} videos` : "no videos yet..."
                                                                                }
                                                                            </div>
                                                                            <BiVideo  
                                                                                size="1.3rem"
                                                                                color={`red`}
                                                                            />
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    <AiOutlineDelete 
                                                                        onClick={() => clickHandler(pl._id)} 
                                                                        size="2rem"
                                                                        color={`${theme==="light" ? "#6D28D9" : "#FF5733"}`}
                                                                        style={{cursor:"pointer"}}
                                                                    />
                                                                </div>
                                                            </Fade>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    }
                                </TransitionGroup>
                            ) : (
                                <Text theme={theme}>No saved Playlists....</Text>
                            )
                        }
                    </Wrapper>
                ) : (
                    <Text theme={theme}> Please Sign In to create a playlist</Text>
                )
            }
        </>
    )
}