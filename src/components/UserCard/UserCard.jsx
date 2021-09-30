import React from 'react'
import styled from "styled-components"
import Cat from "../../images/cat.jpeg"
import "./card.css"

const CardWrapper = styled.div`
    height: 70%;
    width: 80%;
    border-style:none;
    border-radius: 20px;
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items:center;
    box-shadow: ${props => props.theme==="light" ? "0px 10px 4px -4px #6B7280" : "0px 10px 4px -4px #1F2937"};
    background-color: ${props => props.theme==="light" ? "#E5E7EB" : "#1E1D2B"};
    margin-bottom: 1rem;
    @media (max-width:700px){
        height: 60%;
    }
`

const Avatar = styled.img`
    height: 80px;
    width: 80px;
    border-style:solid;
    border-width: 2px;
    border-color: #10B981;
    border-radius: 50%;
    @media (max-width:700px){
        height: 55px;
        width: 55px;
    }
`

const AvatarWrapper = styled.div`
    width: 80%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-start;
`

const Divider = styled.div`
    width: 80%;
    height: 5px;
    border-style:none;
    background-color: ${props => props.theme==="light" ? "black" : "#4B5563"};
    border-radius: 10px;
`

export const UserCard = (props) => {
    return (
        <CardWrapper theme={props.theme} >
            <AvatarWrapper>
                <Avatar src={Cat} alt="cat"/>
                <h1 className={`user ${props.theme}`}>{props.username}</h1>
            </AvatarWrapper>
            <Divider theme={props.theme}></Divider>
            <div className="details">
                <small className={`card-text ${props.theme}`}>Email: {props.email}</small>
                <small className={`card-text ${props.theme}`}>Liked Videos: {props.likedVideosLength}</small>
                <small className={`card-text ${props.theme}`}>WatchLater Videos: {props.watchLaterLength}</small>
                <small className={`card-text ${props.theme}`}>Playlists: {props.playListLength}</small>
            </div>
        </CardWrapper>
    )
}

