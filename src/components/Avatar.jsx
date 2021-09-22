import React from 'react'
import styled from "styled-components"

const AvatarImage = styled.img`
    width: 50px;
    height: 50px;
    border-style:solid;
    border-width: 2px;
    border-color: ${props => props.theme==="dark" ? "#6366F1" : "#FB8D62"};
    border-radius: 50%;
    @media (max-width: 700px){
        width: 40px;
        height: 40px; 
    }
`

export const Avatar = props => <AvatarImage src={props.src} alt={props.alt} theme={props.theme}/> 

