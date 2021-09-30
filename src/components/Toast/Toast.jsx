import styled from "styled-components";
import "./toast.css"

export const Alert = styled.div`
    position: fixed;
    left: 20%;
    bottom: 0;
    transform: translateX(-50%);
    z-index:3;
    height: 3rem;
    width: 70%;
    transition: 350ms;
    .message{
        color: red;
        font-weight: bold;
    }
`
