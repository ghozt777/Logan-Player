import React , { useRef, useState } from 'react'
import  ReactDOM  from 'react-dom'
import styled from "styled-components"
import {useUser} from "../context/UserInfoProvider"
import {useTheme} from "../context/ThemeProvider"
import { BsFillMusicPlayerFill } from "react-icons/bs"
import { Checkbox } from '@material-ui/core'
import { BsBookmark } from "react-icons/bs"
import { useAuth } from "../context/AuthProvider"
import { Alert } from "../components/Toast/Toast"
import { RiPlayListAddFill } from "react-icons/ri"


const InputField = styled.input`
width: 80%;
border-style: none;
border-radius: 0.3rem;
padding: 0.5rem 1rem;
transition: 350ms;
font-size: 0.8rem;
height: 2rem;
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

const ModalWrapper = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color: rgba(0,0,0,0.7);
    z-index:1000;
`

const ModalElement = styled.section`
    z-index:1000;
    position:fixed;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    border-style:none;
    border-radius: 10px;
    background-color: ${props => props.theme==="light" ? "#121212" : "#fff"};
    padding: 20px 10px;
    height:50%;
    width: 50%;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
`
const HeadeWrapper = styled.div`
    height:max-content;
    width: 100%;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
`

const Button = styled.button`
    border-style:none;
    width:60%;
    border-radius: 7px;
    padding: 10px 7px;
    cursor:pointer;
    color: ${props => props.theme==="light" ? "black" : "#fff"};
    background-color: ${props => props.theme==="light" ? "white" : "#141414"};
    
`
const PlayListWrapper = styled.div`
    height: 88%;
    width: 100%;
    margin-top: 20px;
    overflow-y:scroll;
    padding: 10px;
    display: grid;
    row-gap: 10px;
    column-gap: 7px;
    align-items:center;
    justify-items:center;
    grid-template-columns: repeat(auto-fit , minmax(120px, 1fr));
    &::-webkit-scrollbar{
        width: 5px;
    }
    &::-webkit-scrollbar-track {
        background: ${props => props.theme==="dark" ? "#111827" : "#D1D5DB"};
    }
    &::-webkit-scrollbar-thumb {
        background: ${props => props.theme==="dark" ? "#7C3AED" : "#1F2937"};
    }
    &::-webkit-scrollbar-thumb:hover {
        background: ${props => props.theme==="dark" ? "#A78BFA" : "#4B5563"};
    }
`

const PlayList = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
    border-style:none;
    border-radius: 4px;
    background-color: ${({theme}) => theme==="light" ? "#282828" : "#D1D5DB"};
    height: 4rem;
    width: 98%;
`

const Title = styled.small`
    font-size: 1.1rem;
    color: ${props => props.theme==="light" ? "white" : "black"};
    @media (max-width:700px){
        font-size:0.9rem;
    }
`

const CreatePLWrapper = styled.div`
    height: max-content;
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    margin-top: 1rem;
`

export const Modal = (props) => {

    const { user , handleAddToPlayList , createPlayList } = useUser()
    const { theme } = useTheme()
    const alertRef = useRef()
    const successRef = useRef()
    const {token} = useAuth()
    const [showToast,setShowToast] = useState("hide")
    const [showSuccessToast,setShowSuccessToast] = useState("hide")
    const [plName,setPlName] = useState("")



    async function clickHandler(playListId){
        if(token&&token.accessToken&&token.refreshToken){
            try{
                const message = await handleAddToPlayList(playListId,props.videoId)
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
    }

    async function handleCreatePL(){
        if(plName==="") {
            return alert("cant create a playlist with no name ")
        }
        if(token&&token.accessToken&&token.refreshToken){
            try{
                const message = await createPlayList(plName)
                setShowSuccessToast("show")
                successRef.current.innerText = message
                setTimeout(() => setShowToast("hide"),2000)
            }catch(e){
                console.error(e.message)
                setShowToast("show")
                alertRef.current.innerText = e.message
                setTimeout(() => setShowToast("hide"),2000)
            }
        }
    }

    if(!props.show) return null
    return ReactDOM.createPortal(
        <ModalWrapper>
            <Alert className={`alert alert-warning ${showToast}`}>
                <div ref={alertRef} className="message"></div>
            </Alert>
            <Alert className={`alert alert-success ${showSuccessToast}`}>
                <div ref={successRef} className="success-message"></div>
            </Alert>
            <ModalElement theme={theme}>
                <HeadeWrapper>
                <BsFillMusicPlayerFill color={`${theme==="light" ? "#EC4899" : "#7C3AED"}`} size="2rem" />
                <Button 
                    theme={theme} 
                    onClick={props.close} 
                >
                    close
                </Button>
                </HeadeWrapper>
                <CreatePLWrapper>
                    <RiPlayListAddFill 
                        size="1.5rem"
                        className="pl-btn"
                        color={`${theme==="light" ? "white" : "#EC4899"}`}
                        style={{cursor:"pointer"}}
                        onClick={() => handleCreatePL()}
                    />
                    <InputField
                        placeholder="create playlist"
                        theme={theme}
                        value={plName}
                        onChange={e => setPlName(e.target.value )}
                        onFocus={() => setPlName("")}
                    />
                </CreatePLWrapper>
                {
                    user&&user.playlist&&user.playlist.length>0 ? (
                        <PlayListWrapper theme={theme}>
                            <PlayList>
                                <Title theme={theme}>Watch Later</Title>
                                <Checkbox  
                                    onClick={() => alert('wacth later')}
                                    color="secondary"
                                    icon={<BsBookmark color={theme==="light" ? "white" : "black"}/>}
                                    checkedIcon={<BsBookmark />}
                                />
                            </PlayList>
                            {
                                user.playlist.map(pl => {
                                    return(
                                        <PlayList theme={theme}>
                                            <Title theme={theme}>{pl.name}</Title>
                                            <Checkbox  
                                                onClick={() => clickHandler(pl._id)}
                                                color="secondary"
                                                icon={<BsBookmark color={theme==="light" ? "white" : "black"}/>}
                                                checkedIcon={<BsBookmark />}
                                            />
                                        </PlayList>
                                    )
                                })
                            }
                        </PlayListWrapper>
                    ) : (
                        <small>no playlist found</small>
                    )
                }
            </ModalElement>
        </ModalWrapper>
    ,document.getElementById('portal'))
}
