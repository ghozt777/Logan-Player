import {useState,useEffect} from "react"
import styled from "styled-components"
import { Fade , Zoom } from "react-reveal"

const CarouselWrapper = styled.div`
    margin-left:5rem;
    height: 40%;
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    @media (max-width:700px){
        margin-left:0;
        height: 25%;
    }
    `

    const CarouselCard = styled.div`
    position:relative;
    height: 100%;
    width: 100%;
    cursor:pointer;
    `

    const CarouselCardHeader = styled.h1`
    font-size: 1.5rem;
    color: white;
    top: 50%;
    z-index:2;
    width: max-content;
    left: 10%;
    margin:auto;
    position: absolute;
    @media (max-width: 700px){
        font-size: 1rem;
    }
    `
    const CarouselCardHero = styled.div`
        background-image: url(${props => props.url ?? "https://images.unsplash.com/photo-1586737294603-81a0bf20a6ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2872&q=80"});
        background-size:cover;
        background-color:transparent;
        border-style:none;
        border-bottom-left-radius: 0.4rem;
        border-bottom-right-radius: 0.4rem;
        background-position:center;
        background-repeat:no-repeat;
        height: 100%;
        opacity: 0.7;
        max-width: 100%;
    `

export const Carousel = () => {
    
    

    const cards = [
        <CarouselCard onClick={() => window.location.assign("https://www.youtube.com/premium")}>
            <CarouselCardHeader>
                    <Fade duration={2000}>YouTube is Junk</Fade>
            </CarouselCardHeader>
            <CarouselCardHero url={"https://images.unsplash.com/photo-1533282960533-51328aa49826?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80"}></CarouselCardHero>
        </CarouselCard>,
        <CarouselCard>
            <CarouselCardHeader>
            <Fade duration={2000}>Its a complete waste of time</Fade>
            </CarouselCardHeader>
            <CarouselCardHero></CarouselCardHero>
        </CarouselCard>,
        <CarouselCard>
            <CarouselCardHeader>
            <Fade duration={2000}>Instead slip into some PJs </Fade>
            </CarouselCardHeader>
            <CarouselCardHero url={"https://images.unsplash.com/photo-1611107875582-684c70574042?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}></CarouselCardHero>
        </CarouselCard>,
        <CarouselCard>
            <CarouselCardHeader>
            <Fade duration={2000}>and just Chill on Logan Player</Fade>
            </CarouselCardHeader>
            <CarouselCardHero url={"https://images.unsplash.com/photo-1502067523538-fc62572c4952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"} ></CarouselCardHero>
        </CarouselCard>,
    ]

    const [current,setCurrent] = useState(3)
    
    useEffect(() => {
        function handleNext() {
            setCurrent(prev => prev===cards.length - 1 ? 0 : prev+1)
        }
        const timer = setInterval(handleNext,6000)
        return () => clearInterval(timer)
    },[cards.length])

    return(
        <CarouselWrapper>
            {
                cards.map((card,index) => {
                    if(index===current){
                        return <Fade><div  style={{height:"100%",width:"100%"}}>{card}</div></Fade>
                    }else return <div></div>
                })
            }
        </CarouselWrapper>
    ) 
    
}