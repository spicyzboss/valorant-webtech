import styled, { css, keyframes } from 'styled-components'
import { Footer, Head, NavBar } from '../components'
import styles from '../styles/News.module.css'
import Slider from 'react-slick'


//components
import {Card, BlankCard, NewsCard} from '../components/NewsComponents'
import TextBG from '../components/TextBg'
import { Map_Card } from '../components/MapComponent'
import { useEffect } from 'react'

const TitleUp = keyframes`
    from {
        transform: translateY(30px);
    }
    to{
        transform: translateY(0);
    }
`


const Title = styled.p`
    font-size: 4.5vw;
    color: black;
    font-family: Kanit,sans-serif;
    font-weight: bold;
    text-indent: 7.5vw;
    padding-top: 20vh;
    margin: 0;
    animation: ${TitleUp} .5s ease;
    @media (max-width: 1024px){
        text-indent: 0;
    }
`

const SetLocation = styled.div`
width: 180vw;
height: 100%;
position: absolute;
overflow: visible;
&:before{
    content: "";
    position: absolute;
    width: 7.5vw;
    height: 100%;
    border-right: 1px solid white;
}
&:after{
    content: "";
    position: absolute;
    width: 1px;
    height: 100%;
    border-left: 1px solid white;
    top: 0;
    left: 90vw;
    z-index: 1;
}
`
const WrapSlider = styled.div`
position: absolute;
left: 0;
width: 100%;
overflow-x: visible;
transition: 1s;
z-index: 1;
&:before{
    content: "";
    position: absolute;
    width: 7.5vw;
    height: 100%;
    border-right: 1px solid white;
}
`

const Box = styled.div`
    position: relative;
    width: 100vw;
    display: block;
    box-sizing: border-box;
`
const SliderContainer = styled.div`
    width: 85%;
    height: 100%;
    margin: auto;
    display: block;
`
const SLickStyle = styled(Slider)`
    .slick-list {
        overflow: ${(props) => (props.overflow ? "visible" : "hidden")};
    }    
    .slick-slide{
        float: left;
        z-index: 0;
        user-select: none;
    }
    .slick-track .slick-active{
        filter: brightness(150%)
    }
    .slick-track .slick-current{
        filter: brightness(100%);
    }
    .slick-dots{
        position: relative;
        width: 200px;
        height: 6px !important;
        display: flex;
        list-style-type: none; 
        top: -10vh;
        z-index: 10;
    }
    .dot-custom{
        width: 40px;
        height: 6px;
        margin-right: 10px;
        position: relative;
        background: none;
        border: .1px solid white;
        cursor: pointer;
        transition: .5s;
    }
    .slick-dots .slick-active{
        width: 40px;
        height: 100%;
        margin-right: 10px;
    }
    .slick-active .dot-custom, .dot-custom:hover{
        background: #ff4655;
        border:  1px solid #ff4655;
    }
`

const MapCss = css`

    html,
    body {
    padding: 0;
    margin: 0;
    
    overflow-x: hidden;
    background-color: #ece8e1;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    box-sizing: border-box;
    }
`
const LeftBot = styled.div`
    position: absolute;
    width: 15vw;
    height: 15vw;
    background: #ece8e166;
    bottom: 0;
    left: 7.5vw;
    z-index: 10;
    &:before{
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 45%;;
        background: #ece8e1;
    }
    &:after{
        content: "";
        position: absolute;
        right: 4.5vw;
        bottom: 0;
        width: 30%;
        height: 70%;
        background: #ece8e1;
    }
`
const RightBot = styled.div`
    position: absolute;
    width: 72%;
    height: 13vw;
    background: #ece8e166;
    bottom: 0;
    right: 0;
    z-index: 10;
    &:before{
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        width: 104%;
        height: 65%;;
        background: #ece8e166;
    }
    &:after{
        content: "";
        position: absolute;
        right: 4.5vw;
        bottom: 0;
        width: 92.5%;
        height: 65%;
        background: #ece8e1;
    }
`
const Maps = () => {
    var settings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
            <div className="dot-custom">
            </div>
          ),
          afterChange: (e)=>{
              let info = data.members[e];
            Detail.innerHTML = `<div>${ info.id }</div><h1>${ info.map }</h1><p>${ info.detail }</p><br></br>`
          } 
    };
   const MapDetail = styled.div`
        position: absolute;
        background: #8b978f;
        z-index: 10;
        width: 25vw;
        left: 61vw;
        bottom: 0;
        text-indent: 30px;
        color: white;
        transition: 1s;
        p{
            margin-left: 40px;
            width: 77.5%;
            font-size: .75vw;
            padding-bottom: 5px;
        }
        h1{
            font-size: 1.5vw;
            padding-top: 30px;
        }
        div{
            position: absolute;
            transform: rotate(-90deg);
            font-size: 1.5rem;
            top: 0;
            left: 0;
            font-weight: bold;
            text-indent: 0;
        }
        &:before{
            content: "";
            position: absolute;
            width: 10vh;
            height: 3vh;
            background: #ece8e1;
            bottom: 0;
            left: 0;
            transform: skewX(45deg) translateX(-90%);
        }
      `
    let data = require("../public/map_content/contents.json");

    return (
        <>
            <Head title="แผนที่ VALORANT: สำรวจ Icebox, Bind, Haven, Split และ Ascent" />
            <NavBar />
            <style>{ MapCss }</style>
            <Box style={{ height: "150vh" }}>
                
                        <SetLocation>
                            <Title className={ styles.resTitle }>แผนที่</Title>
                                <WrapSlider>
                                    <LeftBot/>
                                    <RightBot/>
                                    <SliderContainer>
                                        <SLickStyle className="mapSlider" {...settings}>
                                            {
                                                data.members.map((card, index)=>{
                                                    return (<Map_Card key={ index } data={ card } />)
                                                })
                                            }
                                                <BlankCard/>
                                        </SLickStyle>
                                        <MapDetail id="Detail" className="Detail">
                                            <div>{ data.members[0].id}</div>
                                            <h1>{ data.members[0].map }</h1>
                                            <p>{ data.members[0].detail }</p>
                                            <br></br>
                                        </MapDetail>
                                    </SliderContainer>
                                    
                                </WrapSlider>
                        </SetLocation>
            </Box>

            <Footer />
        </>
    )
}

export default Maps;
