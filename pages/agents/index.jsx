import { useRef } from "react";
import Slider from "react-slick";
import { useEffect, useState } from "react/cjs/react.development";
import styled, { css } from "styled-components";
import { Footer, Head, NavBar } from "../../components";
import Link from 'next/link'
import { useRouter } from "next/router";

const SLickStyle = styled(Slider)`
    *{
        user-select: none;
        z-index: 1;
    }
    .slick-list {
        overflow: ${(props) => (props.overflow ? "visible" : "hidden")};
    }
    .slick-slide{
        float: left;
        z-index: 0;
        user-select: none;
        transition: .5s;
    }
    .slick-track{
        color: #ece8e1;

    }
    .slick-slide:hover{
        transform: translateX(20px);
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
    top: 80px;
    width: 100vw;
    display: block;
    box-sizing: border-box;
    background: url("/project/g41playvalorant/agent_content/pic/background.jpg")
`
const AgentName = styled.div`
    cursor: pointer;
    font-size: 6vw;
    margin: 1px;
    font-weight: bold;
    position: relative;
    left: 10vw;
`
const AgentID = styled.div`
    cursor: pointer;
    font-size: 1rem;
    width: 25px;
    height: 10%;
    display: inline-block;
    position: absolute;
    top: 20%;;
    left: -2.5%;
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
const AgentGroup = styled.img`
    position: absolute;
    top: 10vh;
    left: 30vw;
`
const Agents = () => {
    const data = require("../../public/agent_content/contents.json");
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const slider1 = useRef(null);
    const slider2 = useRef(null);
    const router = useRouter();
    //i dont seem to need this

    const setting1 = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        centerMode: true,
        asNavFor: nav2,
        initialSlide: 1,
        focusOnSelect: true,
        afterChange: (e) => {
            let locale = `/agents/${ data[e].path }`;
            router.push(locale);
        }
    }

    return (
        <>

            <Head title="เอเจนท์ VALORANT: เอเจนท์ทั้งหมด และสกิลของแต่ละคน" />
            <NavBar />
            <style>{ Agent_Css }</style>
            <Box style={{ height: "100vh" }}>

                <SLickStyle ref={slider1} className="agent-name" {...setting1}>
                    {
                        data.map((agent, index)=>{
                            return (<AgentName key={ index } id={ agent.name } ><AgentID>{ agent.id }</AgentID>{ agent.name }</AgentName>)

                        })
                    }
                </SLickStyle>
                <AgentGroup src="/project/g41playvalorant/agent_content/pic/agent_group.png"/>
            </Box>
            <Footer />
        </>
    )
}

export default Agents;
