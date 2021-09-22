import React from "react"
import styled from "styled-components"
import { Avatar } from "./Avatar"
import {useVideos} from "../context/VideoProvider"

const Wrapper = styled.div`
    height: max-content;
    position: relative;
    padding: 10px;
    width: 80%;
    margin: auto;
    cursor: pointer;
    transition: 300ms;
    background-color:${props => props.theme==="light" ? "#D1D5DB" : "#242526"};
    border-style:none;
    border-radius: 5px;
    box-shadow: ${props => props.theme==="dark" ? "0px 6px 8px -3px black " : "0px 6px 6px -2px #9CA3AF"};
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-evenly;
    @media (max-width:700px){
        width: 95%;
    }
    &:hover{
        transform: translateY(-5px) scale(1.1);
    }
`

const Details = styled.div`
    width: 80%;
    display:flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items:center;
    @media (max-width: 700px){
        width: 70%;
    }
`

const Time = styled.small`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
    font-size: 0.8rem;
    font-family: 'Roboto Mono', monospace;
    color: ${props => props.theme==="light" ? "black" : "white"};
`

const TimeWrapper = styled.div`
    height: 15%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content:flex-end;
`

const Comment = styled.div`
    height: 70%;
    width: 100%;
    font-size: 0.9rem;
    color: ${props => props.theme==="light" ? "black" : "white"};
`

const Divider = styled.div`
    height: 2.5px;
    width: 100%;
    border-style:none;
    border-radius: 4px;
    margin: 0.5rem 0;
    background-color:${props => props.theme==="dark" ? "#3A3B3C" : "#B0B3BC"};
`

const AvatarWrapper = styled.div`
    height: 100%;
    width: 20%;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;

`

const UserName = styled.small`
    margin-top: 4px;
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    font-family: 'Open Sans', sans-serif;
    font-size: 0.7rem;
    color: ${props => props.theme==="light" ? "black" : "white"};
`

export const Comments = (props) => {

    return(
        <Wrapper theme={props.theme}>
            <AvatarWrapper>
                <Avatar theme={props.theme} src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2874&q=80" alt="doggo"/>
                <UserName theme={props.theme} >{props.username}</UserName>
            </AvatarWrapper>
            <Details>
                <TimeWrapper><Time theme={props.theme} >{props.time}</Time></TimeWrapper>
                <Divider theme={props.theme}/>
                <Comment theme={props.theme} >{props.comment}</Comment>
            </Details>
        </Wrapper>
    )
}
