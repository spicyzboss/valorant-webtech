import { useRef } from "react";
import Slider from "react-slick";
import { useEffect, useState } from "react/cjs/react.development";
import styled, { css } from "styled-components";
import { Footer, Head, NavBar } from "../components";


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
        filter: brightness(70%)
        color: blue;
        
    }
    .slick-track .slick-current{
        filter: brightness(100%);
        color: red;
    }
    .slick-dots{
        position: absolute;
        left: -250px;
        top: 50px;
        width: 200px;
        height: 6px !important;
        display: flex;
        list-style-type: none;

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
const Box = styled.div`
    position: relative;
    width: 100vw;
    display: block;
    box-sizing: border-box;
`
const AgentName = styled.h1`
    cursor: pointer;
`
const AgentImg = styled.img`
    width: 100%;
`
const ImgContainer = styled.div`
    width: 100%;
    display: block;
    height: 100%;
    position: relative;
`

const Agent_Css = css`
    html,
    body {
        padding: 0;
        margin: 0;
        overflow-x: hidden;
        background-color: #ece8e1;
    }

    .condition {
        color: black;
        display: block;
        text-decoration: underline;
    }

    .condition:hover{
        color: white;
    }

    * {
    box-sizing: border-box;
    }
    .agent-img{
        position: absolute;
        left: 45vh;
        top: 0;
        width: 40%;
    }
`
const Label = styled.h4`
    
`
const Agents = () => {
    const data = require("../public/agent_content/contents.json");
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    //i dont seem to need this
    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, []);

    const setting1 = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        asNavFor: nav2,
        focusOnSelect: true
    }
    const setting2 = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        vertical: true,
        verticalSwiping: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: nav1

    }
    return (
        <>
            <Head title="เอเจนท์ VALORANT: เอเจนท์ทั้งหมด และสกิลของแต่ละคน" />
            <NavBar />
            <h1>Agents</h1>
            <style>{ Agent_Css }</style>
            <Box style={{ height: "100vh", background: "#ece8e1" }}> 
                <SLickStyle ref={slider1} className="agent-name" {...setting1}>
                    {
                        data.map((agent, index)=>{
                            return (<AgentName key={ index } id={ agent.name } >{ agent.name }</AgentName>)
                        })
                    }
                </SLickStyle>
                <SLickStyle ref={slider2} className="agent-img" {...setting2}>
                    {
                        data.map((agent, index)=>{
                            console.log(agent.imgpath)
                            return (<ImgContainer><AgentImg key={ index } src={ agent.imgpath } /></ImgContainer>)
                        })
                    }
                </SLickStyle>

            </Box>
            <Footer />
        </>
    )
}

export default Agents;
