import styled from "styled-components"
import {useState,useEffect} from "react"
import {useNavigate , NavLink} from "react-router-dom"
import { useTheme } from "../context/ThemeProvider"
import { TextField } from "@material-ui/core"
import {HiOutlineEmojiHappy} from "react-icons/hi"
import { FaKey ,FaUserAstronaut} from "react-icons/fa"
import {SiMailDotRu} from "react-icons/si"
import {Fade} from "react-reveal"
import axios from "axios"
import {Formik} from "formik"


const Wrapper = styled.div`
    overflow-x:hidden;
    width: 100vw;
    height: 100vh;
    position:relative;
    padding:0;
    margin:0;
    display:flex;
    flex-direction:row;
    @media (max-width: 700px){
        flex-direction:column;
    }
`

const Art = styled.div`
    position:relative;
    height: 100%;
    width:45%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    box-shadow: ${props => props.theme==="dark" ? "0px 0px 0px 0px" : "6px 0px 6px -2px #D1D5DB"};
    background-color:${props => props.theme==="dark" ? "#18191a" : "#F3F4F6"};
    svg{
        filter: grayscale(1)
    }
    &:hover{
        svg{
            filter: grayscale(0);
        }
    }
    @media (max-width:700px){
        box-shadow: ${props => props.theme==="dark" ? "0px 0px 0px 0px" : "0px 6px 6px -2px #D1D5DB"};
        width:100%;
        height: 40%;
        border-style:none;
        border-bottom-left-radius: 0.4rem;
        border-bottom-right-radius: 0.4rem;
        svg{
            filter: grayscale(0);
        }
    }
`

const MavSVG = styled.svg`
    transition: 350ms;
    max-height: 200px;
    @media (max-width:700px){
        max-height:70px;
    }
`
const Quote = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');
    font-size:1.2rem;
    font-family: 'Space Mono', monospace;
    color: ${props => props.theme==="dark" ? "white" : "black"};
    @media (max-width:700px){
        font-size: 0.8rem;
    }
`

const QuoteWrapper = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin: 0 auto;
    width:60%;
`
const QuoteLegend = styled.small`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
    margin-top: 0.4rem;
    padding-left: 50%;
    color: ${props => props.theme==="dark" ? "white" : "black"};
    @media (max-width:700px){
        font-size: 0.6rem;
    }
`
const Logo = styled.div`
    height: 10%;
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content: space-evenly;
    align-items:center;
    @keyframes logo-animation {
        0% {transform: rotate(0deg);} 
        100% {transform: rotate(360deg);} 
    }
    svg{
        animation: logo-animation 5s infinite alternate;
    }

`
const PizzaSVG = styled.svg`
    color: ${props => props.theme==="dark" ? "white" : "black"};
    width: 40px;
    @media (max-width:700px){
        max-width: 25px;
    }
`

const LoginSection = styled.div`
    height: 90%;
    margin: auto;
    width: 55%;
    display: flex;
    flex-direction:column;
    justify-content-space-evenly;
    align-items:center;
    background-color: white;
    @media (max-width: 700px){
        border-style:none;
        border-radius: 0.4rem;
        width: 100%;
        height: 50%;
    }
`
const TextFieldWrapper = styled.div`
    display:flex;
    width: 60%;
    height: 20%;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
    .text-field{
        width: 90%;
    }
    @media (max-width:700px){
        width: 70%;
        .text-field{
            width: 80%;
        }
    }
`
const Extras = styled.div`
    display:flex;
    margin-left: 3rem;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    .link{
        font-size: 1rem;
        margin-left: 1rem;
        text-decoration:none;
        color: ${props => props.theme==="dark" ? "white" : "black"};
        &:hover{
            font-weight:bold;
        }
    }
    @media (max-width:700px){
        .link{
            font-size: 0.7rem;
        }
    }
`

const Button = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Cabin&display=swap');
    font-family: 'Cabin', sans-serif;
    height: 35px;
    width: 30%;
    margin-left: 3rem;
    border-style:none;
    border-radius: 0.4rem;
    cursor:pointer;
    font-weight: bold;
    background-color: ${props => props.theme==="dark" ? "#E5E7EB" : "#4B5563"};
    color: ${props => props.theme==="dark" ? "black" : "white"};
    transition: 350ms;
    &:hover{
        background-color: ${props => props.theme==="dark" ? "#9CA3AF" : "#1F2937"};
    }
    &:disabled{
        background-color: #FF4646;
        opacity: 0.2;
    }
    @media (max-width:700px){
        height: 40px;
        width: 20%;
        border-radius: 0.2rem;
    }
`
const Form = styled.form`
    height: 100%;
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content-space-evenly;
    align-items:center;

`

export const CreateAccount = () => {
    const {theme} = useTheme()
    const navigate = useNavigate()

    function handleFormSubmit(data,{setSubmitting}){
        setSubmitting(true)
        // make the async call
        console.log(data)
        setSubmitting(false)
    }

    function handleValidate(values){
        const errors = {}
        if(values.password.length<8){
            errors.password = "create a strong password"
        }
        if(values.password!==values.confirmPassword){
            errors.password="passwords dont match"
        }
        return errors
    }

    return(
        <Wrapper>
            <Art theme={theme}>
                <QuoteWrapper>
                    <Quote theme={theme}>
                        <Fade duration="4000">I'm a maverick.</Fade>
                    </Quote>
                    <QuoteLegend theme={theme}>
                      <Fade duration="3000">  - Logan Paul </Fade>
                    </QuoteLegend>
                </QuoteWrapper>
                <MavSVG xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="512px" height="512px"><linearGradient id="cKfn~3H6YC~iSu8EMlBWea" x1="32" x2="32" y1="5" y2="58" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#cKfn~3H6YC~iSu8EMlBWea)" d="M55,9.4V7c0-0.88-0.58-1.66-1.42-1.91C53.39,5.03,53.19,5,53,5c-0.66,0-1.29,0.33-1.67,0.89 L34.34,31.51C33.97,31.18,33.5,31,33,31h-2c-0.5,0-0.97,0.18-1.34,0.51L12.67,5.89C12.29,5.33,11.66,5,11,5 c-0.19,0-0.39,0.03-0.58,0.09C9.58,5.34,9,6.12,9,7v2.4c0,0.33,0.09,0.67,0.25,0.96l2.33,4.23H11c-0.76,0-1.45,0.42-1.79,1.1 c-0.34,0.67-0.27,1.48,0.18,2.09L11,19.95c-0.59,0.36-0.95,1-0.95,1.7v1.99c0,0.58,0.25,1.13,0.69,1.51l1.69,1.47 c-0.27,0.45-0.35,1.01-0.21,1.53l0.52,2c0.12,0.46,0.4,0.86,0.8,1.13l1.99,1.38l-0.91,1.28c-0.37,0.52-0.47,1.18-0.27,1.78 c0.2,0.61,0.67,1.08,1.28,1.28l0.73,0.24c-0.06,0.49,0.07,1,0.36,1.41l1.05,1.47c0.38,0.52,0.98,0.84,1.63,0.84h0.1v1.19 c0,0.69,0.35,1.32,0.93,1.69c0.22,0.14,0.47,0.24,0.73,0.28c0.22,0.22,0.49,0.38,0.79,0.47l1.09,0.34c0.37,0.51,0.97,0.82,1.61,0.82 h0.74c0.15,0.14,0.32,0.26,0.51,0.35c0.09,0.03,0.17,0.07,0.26,0.09l-0.22,0.55c-0.21,0.53-0.18,1.12,0.07,1.62l0.52,1.07 c0.19,0.37,0.48,0.68,0.85,0.87v0.78c0,0.64,0.31,1.25,0.83,1.63L29,53.27V56c0,0.62,0.28,1.2,0.77,1.58C30.12,57.85,30.56,58,31,58 c0.16,0,0.32-0.02,0.49-0.06l2-0.5C34.38,57.22,35,56.42,35,55.5v-2.23l0.79-0.56c0.52-0.38,0.83-0.99,0.83-1.63V50.3 c0.37-0.19,0.66-0.5,0.85-0.87l0.52-1.07c0.25-0.5,0.28-1.09,0.07-1.62l-0.22-0.55c0.09-0.02,0.17-0.06,0.26-0.09 c0.19-0.09,0.36-0.21,0.51-0.35h0.74c0.64,0,1.24-0.31,1.61-0.82l1.09-0.34c0.3-0.09,0.57-0.25,0.79-0.47 c0.26-0.04,0.51-0.14,0.73-0.28c0.58-0.37,0.93-1,0.93-1.69v-1.19h0.1c0.65,0,1.25-0.32,1.63-0.84l1.05-1.47 c0.29-0.41,0.42-0.92,0.36-1.41L48.37,37c0.61-0.2,1.08-0.67,1.28-1.28c0.2-0.6,0.1-1.26-0.27-1.78l-0.91-1.28l1.99-1.38 c0.4-0.27,0.68-0.67,0.8-1.13l0.52-2c0.14-0.52,0.06-1.08-0.21-1.53l1.69-1.47c0.44-0.38,0.69-0.93,0.69-1.51v-1.99 c0-0.7-0.36-1.34-0.95-1.7l1.61-2.17c0.45-0.61,0.52-1.42,0.18-2.09c-0.34-0.68-1.03-1.1-1.79-1.1h-0.58l2.33-4.23 C54.91,10.07,55,9.73,55,9.4z M53,9.4l-7.35,13.31l5.38-6.12H53l-6.3,8.52l5.25-3.46v1.99l-6.3,5.46l4.2-1.46l-0.53,2l-5.77,3.99 h3.15l1.05,1.47l-5.25,1.73l3.15,0.66l-1.05,1.47h-4.2l2.1,1.19v2l-3.15-1.47l2.1,2l-1.7,0.54l-1.05-0.41l0.65,0.94H38.3l-1.05-0.53 v1.06l-0.79-0.66l-0.66,0.66l-1.7-2.13l2.1,5.33l-0.52,1.06l-1.06-1.06v3.6l-0.92,0.66L33,48.5v7L31,56v-7l-0.7,2.74l-0.92-0.66 v-3.6l-1.06,1.06l-0.52-1.06l2.1-5.33l-1.7,2.13l-0.66-0.66l-0.79,0.66v-1.06l-1.05,0.53h-1.05l0.65-0.94l-1.05,0.41l-1.7-0.54 l2.1-2l-3.15,1.47v-2l2.1-1.19h-4.2l-1.05-1.47l3.15-0.66l-5.25-1.73l1.05-1.47h3.15l-5.77-3.99l-0.53-2l4.2,1.46l-6.3-5.46v-1.99 l5.25,3.46L11,16.59h1.97l5.38,6.12L11,9.4V7l18.38,27.7L31,33h2l1.62,1.7L53,7V9.4z"/><linearGradient id="cKfn~3H6YC~iSu8EMlBWeb" x1="42.5" x2="42.5" y1="7" y2="55.75" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#cKfn~3H6YC~iSu8EMlBWeb)" d="M53 9.4L45.65 22.71 51.03 16.59 53 16.59 46.7 25.11 51.95 21.65 51.95 23.64 45.65 29.1 49.85 27.64 49.32 29.64 43.55 33.63 46.7 33.63 47.75 35.1 42.5 36.83 45.65 37.49 44.6 38.96 40.4 38.96 42.5 40.15 42.5 42.15 39.35 40.68 41.45 42.68 39.75 43.22 38.7 42.81 39.35 43.75 38.3 43.75 37.25 43.22 37.25 44.28 36.46 43.62 35.8 44.28 34.1 42.15 36.2 47.48 35.68 48.54 34.62 47.48 34.62 51.08 33.7 51.74 33 48.5 33 55.5 32 55.75 32 33 33 33 34.62 34.7 53 7z"/></MavSVG>
                <Logo>
                <PizzaSVG theme={theme} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pizza-slice" class="svg-inline--fa fa-pizza-slice fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M158.87.15c-16.16-1.52-31.2 8.42-35.33 24.12l-14.81 56.27c187.62 5.49 314.54 130.61 322.48 317l56.94-15.78c15.72-4.36 25.49-19.68 23.62-35.9C490.89 165.08 340.78 17.32 158.87.15zm-58.47 112L.55 491.64a16.21 16.21 0 0 0 20 19.75l379-105.1c-4.27-174.89-123.08-292.14-299.15-294.1zM128 416a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm48-152a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm104 104a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"></path></PizzaSVG>
                </Logo>
            </Art>
            <LoginSection theme={theme}>
                <Formik initialValues={{username:"",email:"",password:"",confirmPassword:""}} onSubmit={handleFormSubmit} validate={handleValidate} >
                    {({values,isSubmitting,handleChange,handleBlur,handleSubmit,errors}) => {
                        return(
                            <Form onSubmit={handleSubmit} >
                                <TextFieldWrapper>
                                    <FaUserAstronaut />
                                    <TextField 
                                        className="text-field" 
                                        name="username" 
                                        type="text" 
                                        label="username" 
                                        variant="outlined"
                                        value={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </TextFieldWrapper>
                                <TextFieldWrapper>
                                    <SiMailDotRu />
                                    <TextField 
                                        className="text-field" 
                                        name="email" 
                                        type="email" 
                                        label="Email" 
                                        variant="outlined"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </TextFieldWrapper>
                                <TextFieldWrapper>
                                    <FaKey />
                                    <TextField 
                                        className="text-field" 
                                        name="password" 
                                        type="password" 
                                        label="password" 
                                        variant="outlined"
                                        value={values.password}
                                        onChange={handleChange}
                                        error={errors.password}
                                        helperText={errors.password}
                                    />
                                </TextFieldWrapper>
                                <TextFieldWrapper>
                                    <FaKey />
                                    <TextField 
                                        className="text-field" 
                                        name="confirmPassword" 
                                        type="password" 
                                        label="confirm password" 
                                        variant="outlined"
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                    />
                                </TextFieldWrapper>
                                <Button 
                                    type="submit"
                                    disabled={isSubmitting||errors.password}
                                >
                                    Create Account
                                </Button>
                            </Form>
                        )
                    }}
                </Formik>
            </LoginSection>
        </Wrapper>
    )
}