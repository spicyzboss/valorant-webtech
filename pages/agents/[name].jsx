import { useRouter } from "next/router";
import { useRef } from "react";
import Slider from "react-slick";
import { useEffect, useState } from 'react';
import styled, { css } from "styled-components";
import { Button, Footer, Head, NavBar } from "../../components";


const SLickStyle = styled(Slider)`
    .slick-list {
        overflow: ${(props) => (props.overflow ? "visible" : "hidden")};
    }
    .slick-slide{
        float: left;
        z-index: 0;
        user-select: none;
    }
    .slick-track{
        color: #ece8e1;

    }
    .slick-track .slick-current{
        color: #ff4655;
    }
`
const SkillBar = styled(Slider)`
.slick-slide{
    float: left;
    z-index: 0;
    user-select: none;
}
.slick-current{
    filter: brightness(0);
}
`


const Box = styled.div`
    position: relative;
    top: 80px;
    width: 100vw;
    display: block;
    box-sizing: border-box;
    background: url("/project/g41playvalorant/agent_content/pic/background_name.JPG");
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
    position: relative;
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
        left: 32.5vw;
        top: 5vh;
        width: 35%;
    }
`
const Detail = styled.div`
    width: 22.5vw;
    position: absolute;
    right: 5vw;
    top: 15%;
    color: #ece8e1;
    border-bottom: 1px solid #ece8e1;
    h1{
    font-size: 5v;

    }
`
const SkillContainer = styled(Detail)`
    left: 7.5vw;
    color: #768079;
    width: 60vh;
    position:relative;
    h1{
        color: black;
    }
    h2{
        color: #383e3a
    }
    ul{
        display: flex;
        list-style: none;
    }
    img{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .active{
        filter: brightness(0);
    }
`


const SkillFrame = styled.button`
    position: relative;
    width: 6vw;
    margin: 10px;
    height: 10vh;
    border: 2px solid #ece8e1;
    background: none;
    filter: brightness(70%);
    cursor: pointer;
    img{
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
    }
`
const Agents = ({ req, res }) => {
    const data = require("../../public/agent_content/contents.json");
    const convert = {
        "jett": 0, "raze": 1, "breach": 2, "omen": 3, "brimstone": 4,
        "phoenix": 5, "sage": 6, "sova": 7, "viper": 8, "cypher": 9,
        "reyna": 10, "killjoy": 11, "skye": 12, "yoru": 13, "astra": 14,
        "kay\-o": 15
    }
    const slider1 = useRef(null);
    const slider2 = useRef(null);
    const router = useRouter();
    const { name } = router.query;
    const [selected, setSelect] = useState(convert[name]);
    const [currentSkill, setCurrent] = useState(0);


    useEffect(()=> {

        slider1.current.slickGoTo(selected)

    }, [selected])
    useEffect(()=> {

        slider1.current.slickGoTo(convert[name])

    }, [router.asPath])
    const setting1 = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        centerMode: true,
        asNavFor: slider2.current,
        focusOnSelect: true,
        initialSlide: convert[name],
        afterChange: (e) => {
            let locale = `/agents/${ data[e].path }`;
            router.push(locale, locale, {scroll: false});
            if(e !== "NAN"){
                setSelect(e)

            }
        }
    }
    const setting2 = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        vertical: true,
        verticalSwiping: false,
        initialSlide: convert[name],
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: slider1.current,
        fade: true

    }
    var settings = {
        dots: false,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        afterChange: (e) => {
            let current = document.getElementsByClassName("skill")[0].getElementsByClassName("slick-current")[0];
            setCurrent(current.dataset.index)
        }
      };

    return (
        <>
            <Head title="เอเจนท์ VALORANT: เอเจนท์ทั้งหมด และสกิลของแต่ละคน" />
            <NavBar />
            <style>{ Agent_Css }</style>
            <Box style={{ height: "120vh" }}>
                <SLickStyle ref={slider1} className="agent-name" {...setting1}>
                    {
                        data.map((agent, index)=>{
                            return (<AgentName key={ index } id={ agent.name } ><AgentID>{ agent.id }</AgentID>{ agent.name }</AgentName>)
                        })
                    }
                </SLickStyle>
                <SLickStyle ref={slider2} className="agent-img" {...setting2}>
                    {
                        data.map((agent, index)=>{
                            return (<ImgContainer key={ index }><AgentImg key={ index } src={ agent.imgpath } /></ImgContainer>)
                        })
                    }
                </SLickStyle>
                <Detail>
                    <p>// หน้าที่</p>
                    <h1>{ data[convert[name]]?(data[convert[name]].job):("") }</h1>
                    <p>// ชีวประวัติ</p>
                    <p>{ data[convert[name]]?(data[convert[name]].bio):("") }</p>
                    <br/>
                    <br/>
                </Detail>
            </Box>
            <Box style={{ height: "120vh", background: "#ece8e1" }}>
                <SkillContainer>
                    <h1>ทักษะพิเศษ</h1>
                    <SkillBar className="skill" {...settings}>
                    {
                        data[convert[name]]?(data[convert[name]].skill.map((skill, index)=>{
                               return <div key={ index }><SkillFrame isWhite><img src={ skill.img }/></SkillFrame></div>
                         })):("")
                    }
                    </SkillBar>
                    <div className="skill_detail">
                        <h2>{data[convert[name]]?(data[convert[name]].skill[currentSkill].name):("")}</h2>
                        <p>{data[convert[name]]?(data[convert[name]].skill[currentSkill].discription):("")}</p>
                    </div>
                </SkillContainer>
            </Box>

            <Footer />
        </>
    )
}

export default Agents;
