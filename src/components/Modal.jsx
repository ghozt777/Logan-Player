import React from 'react'
import  ReactDOM  from 'react-dom'
import styled from "styled-components"
import {useUser} from "../context/UserInfoProvider"
import {useTheme} from "../context/ThemeProvider"
import { BsFillMusicPlayerFill } from "react-icons/bs"

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
    padding: 10px;
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
    grid-row-gap: 10px;
    grid-column-gap: 7px;
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

export const Modal = (props) => {

    const { user } = useUser()
    const { theme } = useTheme()

    if(!props.show) return null
    return ReactDOM.createPortal(
        <ModalWrapper>
            <ModalElement theme={theme}>
                <HeadeWrapper>
                <BsFillMusicPlayerFill color={`${theme==="light" ? "#EC4899" : "#7C3AED"}`} size="2rem" />
                <Button theme={theme} onClick={props.close} >close</Button>
                </HeadeWrapper>
                {
                    user&&user.playlist&&user.playlist.length>0 ? (
                        <PlayListWrapper theme={theme}>
                            <PlayList theme={theme}>
                                <Title theme={theme}>Test</Title>
                                <input type="checkbox" name="add-to-pl" id="" onChange={e => alert(e.target.checked)}/>
                            </PlayList>
                        </PlayListWrapper>
                    ) : (
                        <small>no playlist found</small>
                    )
                }
            </ModalElement>
        </ModalWrapper>
    ,document.getElementById('portal'))
}
