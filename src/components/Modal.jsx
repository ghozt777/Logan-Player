import React from 'react'
import  ReactDOM  from 'react-dom'
import styled from "styled-components"
import {useUser} from "../context/UserInfoProvider"
import {useTheme} from "../context/ThemeProvider"

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
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
`

const Button = styled.button`
    border-style:none;
    border-radius: 10px;
    padding: 20px;
    cursor:pointer;
    color: ${props => props.theme==="light" ? "#fff" : "black"};
    background-color: ${props => props.theme==="light" ? "#141414" : "#6366F1"};
    
`
const Text = styled.h2`

`

export const Modal = (props) => {

    const { user } = useUser()
    const { theme } = useTheme()

    if(!props.show) return null
    return ReactDOM.createPortal(
        <ModalWrapper>
            <ModalElement>
                <Button theme={theme} onClick={props.close} >Modal Button</Button>
                <Text>Modal Text</Text>
            </ModalElement>
        </ModalWrapper>
    ,document.getElementById('portal'))
}
