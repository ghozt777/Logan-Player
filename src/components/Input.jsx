import styled from 'styled-components'

const Input = styled.input`
width: 100%;
border-style: none;
border-radius: 0.3rem;
padding: 0.5rem 1rem;
transition: 350ms;
font-size: 0.8rem;
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
export const InputField = ({theme}) => <Input theme={theme} /> 
