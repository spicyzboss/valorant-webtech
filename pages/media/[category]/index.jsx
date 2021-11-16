import { Footer, Head, NavBar } from '../../../components'
import styled, { css, keyframes } from 'styled-components'
import { useRouter } from 'next/router'
import React, { useState } from "react";
import {MediaHead, CategoryBar} from '../../../components/MediaComponent';
const Box = styled.div`
    padding-top: 10vh;
    position: relative;
    width: 100vw;
    display: block;
    background: antiquewhite;
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
const MediaCategory = () => {
    let data = require("../../../public/media_content/contents.json")
    const router = useRouter();
    const { category } = router.query;
    const size = [["20vw","20vw" ], ["20vw", "30vw"], ["30vw", "30vw"]];
    if(category == "wallpaper"){
        data = data.wallpaper;
    }
    else if(category == "video"){
        data = data.video;
    }
    else if(category == "screenshot"){
        data = data.screenshot;
    }
    else if(category == "artwork"){
        data = data.artwork;
    }
    else if(category == "logo"){
        data = data.logo;
    }
    else if(category == "content_creator"){
        data = data.content_creator;
    }
    else{
        data = data.wallpaper.concat(data.video, data.screenshot, data.artwork, data.logo, data.content_creator);

    }

    return (
        <>
            <Head title="VALORANT: เกมยิงปืนจาก Riot Games ในรูปแบบ 5v5 ที่ขับเคลื่อนโดยตัวละครนักยิงปืนผู้มากความสามารถ" />
            <NavBar />
            <style>{ Media_Css }</style>
            <style>{ ImgCss }</style>
            <MediaHead/>
            <Box>

                <CategoryBar/>
                <div className="GalContainer">
                    {
                        data.map(( image, index )=>{
                            let imgSize = size[Math.floor(Math.random()*3)]
                            return (<div key={ index } className="imgGallery" style={{ background: `url(${image.path})`, width: `${imgSize[0]}`, height: `${imgSize[1]}`}} ></div>)
                        })
                    }
                    <DontHave style={{ display: `${data.length == 0?"block": "none"}`}}>กลับมาตรวจสอบใหม่อีกครั้งในภายหลัง!</DontHave>

                </div>
            </Box>
            <Footer />
        </>
    )
}

export default MediaCategory;
