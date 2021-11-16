import { Footer, Head, NavBar } from '../../components'
import styled, { css, keyframes } from 'styled-components'
import {Txt, TextBgContainer} from '../../components/TextBg'

import React from "react";
import Link from 'next/link'
import { useRouter } from 'next/router';
import { MediaHead, FilterDropbox, CategoryBar} from '../../components/MediaComponent'


const Box = styled.div`
    position: relative;
    width: 100vw;
    display: block;
    box-sizing: border-box;
`

const Media_Css = css`
    html,
    body {
        padding: 0;
        margin: 0;
        overflow-x: hidden;
        background-color: antiquewhite;
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

`
const ImgCss = css`

.imgGallery{
    float: left;
    margin: 10px;
}

.GalContainer{
    width: 90%;
    margin: auto;
    display: block;
    padding-top: 10vh;
}
.categoryContainer{
    display: block;
}
`
const DontHave = styled.h1`
    font-size: 4rem;
    display: block;

`

const StyledDiv = styled.div`
    background-size: "cover";
    background: ${props => props.background};
    height: ${props => props.height};
    width: ${props => props.width};
`

const Media = () => {
    let data = require("../../public/media_content/contents.json");
    data = data.wallpaper.concat(data.video, data.screenshot, data.artwork, data.logo, data.content_creator);
    const size = [["20vw","20vw" ], ["20vw", "30vw"], ["30vw", "30vw"]];
    const router = useRouter();
    return (
        <>
            <Head title="VALORANT: เกมยิงปืนจาก Riot Games ในรูปแบบ 5v5 ที่ขับเคลื่อนโดยตัวละครนักยิงปืนผู้มากความสามารถ" />
            <NavBar />
            <style>{ Media_Css }</style>
            <style>{ ImgCss }</style>
            <MediaHead></MediaHead>
            <Box>
                <CategoryBar/>
                <div className="GalContainer">
                    <DontHave style={{ display: `none`}}>กลับมาตรวจสอบใหม่อีกครั้งในภายหลัง!</DontHave>
                    {
                        data.map(( image, index )=>{
                            let imgSize = size[Math.floor(Math.random()*3)]
                            return (<StyledDiv key={ index } className="imgGallery" background={`url(${image.path})`} width={imgSize[0]} height={imgSize[1]}></StyledDiv>)
                        })
                    }
                </div>
            </Box>
            <Footer />
        </>
    )
}

export default Media;
