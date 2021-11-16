import styled from "styled-components"
import {Txt, TextBgContainer} from '../TextBg'
import styles from '../../styles/media.module.css'

const Box = styled.div`
position: relative;
width: 100vw;
display: block;
box-sizing: border-box;
`
const MediaHeader = styled.div`
width: 60vw;
height: 90vh;
background: #ff4655;
position: relative;

&:after{
    content: "";
    width: 90%;
    position: absolute;
    height: 7.5vh;
    background: #ece8e1;
    bottom: 0;
    transform: translateX(-10%) skewX(50deg);
}
`
const MediaTopicContianer = styled.div`
position: absolute;
height: 60%;
width: 90%;
right: 0;
bottom: 20%;
border-top: 1px solid white;
z-index: 1;
&:before{
    content: "";
    position: absolute;
    width: 20px;
    height: 20%;
    border-left: 1px solid white;
    bottom: -20%;
}

`
const MediaTopic = styled.h1`
font-size: 10vh;
color: white;
position: relative;
margin-top: 30px;
margin-bottom: 30px;
overflow: hidden;
`
const MediaTopicContent = styled.div`
width: 55%;
color: white;
font-size: 2.5vh;
margin-bottom: 3vh;
overflow: hidden;
`
const MediaHeaderImg = styled.span`
background: url("/project/g41playvalorant/media_content/pic/Media_Header.jpg");
background-size: cover;
width: 52.75vw;
height: 74.5vh;
position: absolute;
right: 7.5%;
bottom: -1px;
z-index: 1;
transform-origin: bottom;
&:before{
    content: "";
    width: 50px;
    height: 50px;
    background: #ff4655;
    position: absolute;
}
&:after{
    content: "";
    position: absolute;
    background: #ece8e1;
    width: 6vw;
    height: 10vh;
    bottom: 0;
    transform: skewX(40deg) translateX(-4vw);
}
`
const BotLeftImg = styled.div`
position: absolute;
width: 100px;
height: 100px;
border: 1px solid white;
opacity: .5;
bottom: 0;
right: 0;
&:before{
    content: "";
    position: absolute;
    width: 50%;
    height: 50%;
    right: -7.5px;
    top: 25%;
    transform: skewX(-45deg);
    border-left: 3px solid white;
}
&:after{
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    bottom: 0;
    background: white;
}
`
const Line = styled.div`
    position: absolute;
    width: 33.6313vw;
    height: 10px;
    bottom: 0;
    border-bottom: 1px solid white;
    &:after{
        content: "";
        position: absolute;
        width: 20%;
        border-top: 1px solid #ff4655;
        bottom: -1px;
        left: 10%;
    }

`

const MediaHead = () => {
    return (
        <>
            <Box style={{ height: "92.5vh", overflow: "hidden"}}>
            <TextBgContainer style={{ background: "none", zIndex: 1, top: "35vh"}}>
                <Txt className={ styles.textBackground, styles.stroke } style={{ fontSize: "15vw"}}>VALORANT</Txt>
            </TextBgContainer>
            <MediaHeader>
                <MediaTopicContianer>
                    <MediaTopic><div className="MoveUp">สื่อ</div></MediaTopic>
                    <MediaTopicContent><div className="MoveUp">งานของเราคือการเล่นของคุณ ไม่ว่าคุณจะเป็นสื่อ คอนเทนต์ครีเอเตอร์ หรือทั้งสอง คุณสามารถใช้ทุกอย่างที่คุณเห็นที่นี่ได้เลย</div></MediaTopicContent>
                    <MediaTopicContent><div className="MoveUp">โปรดอย่าลืมแท็ก @PlayVALORANT บนโซเชียลมีเดียหากคุณได้สร้างผลงานด้วยไฟล์นี้ เราอดใจรอแทบไม่ไหวที่จะได้รับชมสิ่งที่คุณสร้างขึ้นมา แต่อย่าลืมเกี่ยวกับ<a className="condition" href="#">เงื่อนไขการใช้งาน ของเราล่ะ</a></div></MediaTopicContent>
                    <Line/>
                </MediaTopicContianer>
            </MediaHeader>
            <MediaHeaderImg className="MoveUp"><BotLeftImg/></MediaHeaderImg>

        </Box>
    </>

    )
}
export default MediaHead;
