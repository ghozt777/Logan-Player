import {useTheme} from "../context/ThemeProvider"
import styled from "styled-components"
import {useSearch} from "../context/SearchProvider"
import {useVideos} from "../context/VideoProvider"

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
const SearchSVG = styled.svg`
    height: 20px;
    position:absolute;
    top:50%;
    right:4px;
    transform: translate(-50% ,-50%);
    color: ${props => props.theme==="dark" ? "white" : "black"};
    @media (max-width: 700px){
        height: 10px;
        position:absolute;
        top:60%;
        right:4px;
    }
`

const Div = styled.div`
position:relative;
margin: 1rem auto;
width: 50%;
`

export const SearchBar = () => {

    const {theme} = useTheme()
    const {searchDispatch : search} = useSearch()
    const {videos} = useVideos()
    function handleChange(e){
        search({type:"SEARCH",payload:{searchSpace:videos,searchStr:e.target.value}})
    }
    return(
        <Div>
            <Input type="text" placeholder="search from our collection" theme={theme} onChange={handleChange} />
            <SearchSVG theme={theme} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></SearchSVG>
        </Div>
    )
}