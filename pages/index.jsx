
import { Head, NavBar, Footer, Button, Title, ExitButton } from "../components";
import styled, { css, keyframes } from 'styled-components'
import {Card, BlankCard, NewsCard, TextBG, NewsFrame} from '../components/NewsComponents'
import Slider from 'react-slick'
import Data from '../public/news_content/contents.json'
import styles from '../styles/News.module.css'
import logo from '../public/img/video_1.jpg'
import {useState} from 'react'
// import sample from './sample.mp4';
const TitleUp = keyframes`
    from {
        transform: translateY(30px);
    }
    to{
        transform: translateY(0);
    }
`
const StyleTitle = styled(Title)`
    animation: ${TitleUp} .5s ease;
`

const Section = styled.section`
    display: flex;
    color:white;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
    position:absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`

const Videos = styled.video`
    width:100%;
    z-index:-1;
`
const Cen = styled.div`
    margin-bottom:50px;
`
const Cen2 = styled.div`
    position:absolute;
    top:260px;
`
const Cen3 = styled.div`
    text-align: center;
    width: 100%;
`
const Content = styled.div`
    background-color:#ebe8e1;
    position:relative;
`
const Content03 = styled.div`
    background-color:#ebe8e1;
    position:relative;
    display: block;
`
const BackgroundText = styled.div`
    position: absolute;
    top: -250px;
    left: -144px;
    bottom: 0;
    right: 0;
    z-index: 0;
    overflow: hidden;
`
const Container = styled.div`
    width:100vw;
    position: relative;
    margin-left:144px;
    margin-top:170px;
`

const Text01 = styled.div`
    width:19vw;
    opacity:0.9;
    position: relative;
    margin-left:144px;
    margin-top:100px;
`
const Content01 = styled.div`
    display:flex;

`
const Content02 = styled.div`
     background-color:#f84754;
     width:100%;
     height:auto;
`

const Video01 = styled.div`
    width:47vw;
    position: relative;
    margin-left:144px;
    margin-top:100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Svideo = styled.div`
    position:fixed;
    width:100vw;
    height:100vh;
    display:${props=>props.show?'flex':'none'};
    background: ${props => props.show ? "#00000088" : "none"};
    z-index:15000;
    flex-direction: column;
    top: 0;
`

const ExampleText =styled.p`
    &:hover {
        color:black;
    }
    color:#f84754;
    cursor:pointer;
    transition: all .1s ease-in-out;
`

const ContentBG1 =styled.div`
    background-image: url("/project/g41playvalorant/img/agents.jpeg");
    z-index: 5;
    width:100%;
    height:100vh;
    background-repeat: no-repeat;
`
const ContentBG2 =styled.div`
    position:relative;
    background-image: url("/project/g41playvalorant/img/maps.png");
    background-size: cover;
    width:80vw;
    height:100vh;
    bottom:100px;
    left:400px;
    background-repeat:none;
`
const Text02 =styled.div`
    color:white;
    width:100%;
    height:100vh;
    position:absolute;
`
const Text_all =styled.div`
    color:white;
    width:30vw;
    height:100vh;
    position:absolute;
    right:10vw;
`
const Margin = styled.div`
    padding-top:100px;
`

const StyledFrame = styled.iframe`
    position: absolute;
    bottom: 1rem;
    width: 100%;
    height: 90%;
`
const Hidden = styled.div`
    overflow-x: hidden;
    overflow-y: hidden;
    height: 100%;
    position: relative;
`

const About = styled.div`
    background: #ece8e1;
    height: 100%;
    margin-left:auto;
    font-weight: 600;
    font-size: 15px;
    margin:4px;

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
        filter: brightness(70%)
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
const StyledPlayBtn = styled.svg`
    z-index: 200;
    transition: all .2s ease-in-out;
    position: absolute;
    top: 40%;
    width: 72px;
    height: 72px;
    background: #f84754;
    border: 1px solid #ece8e1;
    cursor: pointer;

    ${Video01}:hover & {
        scale: 1.1;
        background: black;
    }
`

const PlayBtn = () => (
    <StyledPlayBtn viewBox="0 0 72 72">
        <path fill="none" stroke="#ece8e1" d="M33.5 34.5v-5l8 6v2l-8 6v-5m28-29l-7 7m-38 38l-7 7" />
    </StyledPlayBtn>
)

const Simg = styled.img`
    width: 100%;
    height: auto;
    opacity: 1;
    cursor: pointer;
    margin-bottom: 150px;
`

export default function Home() {
    const [showVideo, setShowVideo] = useState(false);
    let settings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
            <div className="dot-custom">
            </div>
        )
    };
    return (
        <>


            <Head title="VALORANT: เกมยิงปืนจาก Riot Games ในรูปแบบ 5v5 ที่ขับเคลื่อนโดยตัวละครนักยิงปืนผู้มากความสามารถ" />
            <NavBar />
            <Hidden>
            <div style={{
                borderLeft: '1px solid gray' ,
                opacity:"0.5",
                position:"absolute",
                height:"100%",
                left:"9.2vw",
                zIndex:"150",
                color:"white"
            }}></div>
            <div style={{
                borderLeft: '1px solid gray' ,
                opacity:"0.4",
                height:"100%",
                left:"90vw",
                zIndex:"0",
                color:"white"
            }}></div>
            <Content>
                <Videos className='videoTag' autoPlay loop muted>
                    <source src="/project/g41playvalorant/video/retake-hero-desktop.mp4" type='video/mp4' />
                </Videos>
                <Section>
                    <p style={{fontSize:"1rem"}}>เกมยิงปืนในรูปแบบ 5v5 ที่ขับเคลื่อนโดยเหล่าเอเจนทร์ผู้มากความสามารถ</p>
                    <Cen>
                        <Title fontSize="9rem">VALORANT</Title>
                    </Cen>
                    <Cen2>
                        <Button>เล่นฟรี</Button>
                    </Cen2>
                </Section>
                <Container>
                    <BackgroundText>
                        <h2 className={ styles.stroke } style={{opacity:0.2}} >
                            <p  style={{
                                fontSize:"20rem",
                                position:"absolute",
                                top:"-344px"

                                }}>WE ARE</p>
                            <p style={{
                                fontSize:"20rem",
                                position:"absolute",
                                top:"-80px",

                                right:"150px"

                                }}>VALORA</p>

                        </h2>
                    </BackgroundText >
                    <StyleTitle textColor="#f84754" fontSize="6.5rem">ข่าวสารล่าสุด</StyleTitle>
                    <About>
                        <h1>เนื้อหาที่เกี่ยวข้อง</h1>
                        <SLickStyle {...settings}>{Data.NEWS.map((newsitem, index) => {
                            return <Card data={newsitem} key={index} width="40%" height="40%">

                            </Card>
                        })}
                        </SLickStyle>

                    </About>
                    <hr style={{ width:"70vw" ,position:"absolute",left:"10%",margin:"0"}}></hr>
                    <Title fontSize="5.6rem" width="100%">พวกเราคือ VALORANT</Title>
                    <Content01>
                    <Text01>
                        <h3>ก้าวข้ามทุกขีดจำกัด</h3>
                        <br></br>
                        <p>ผสมผสานสไตล์และประสบการณ์ของคุณบนเวทีการแข่งขันระดับโลก คุณมีโอกาสในการเล่น 13 รอบเพื่อโจมตีและป้องกันทีมของคุณด้วยการยิงที่เฉียบคมและความสามารถทางยุทธวิธี และคุณจะต้องตัดสินใจให้เร็วกว่าคู่ต่อสู้หากคุณต้องการเอาชีวิตรอดด้วยชีวิตเดียวที่มีอยู่ สังหารศัตรูในโหมดแข่งขันและโหมดไม่จัดอันดับ เช่นเดียวกันกับโหมด Deathmatch และ Spike Rush</p>
                        <br></br>
                        <ExampleText  onClick={()=>setShowVideo(true)}>ดูตัวอย่างเกมเพลย์ที่นี่</ExampleText>
                    </Text01>

                    <Video01>
                        <Simg onClick={()=>setShowVideo(true)} src="/project/g41playvalorant/img/gameplay-preview.jpeg" alt="preview-gameplay" />
                        <PlayBtn />
                    </Video01>

                    </Content01>
                </Container>
            </Content>
            <Svideo show={showVideo}>
                <ExitButton onClick={()=>setShowVideo(false)} />
                <StyledFrame src="https://www.youtube.com/embed/6A_XP5NynCQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></StyledFrame>
            </Svideo>
            <Content02 style={{paddingTop:"50px"}}>
                <Text_all>
                    <hr style={{opacity:"0.3"}}></hr>
                    <Title fontSize="5rem" width="100%">เอเจนท์ของคุณ</Title>
                    <Text02>
                        <br></br>
                        <h4>ความคิดสร้างสรรค์คืออาวุธที่แข็งแกร่งที่สุดของคุณ</h4>
                        <br></br>
                        <p>เกมนี้ไม่ได้มีเพียงแค่ปืนหรือกระสุน คุณจะได้เลือกเอเจนท์ที่มาพร้อมอาวุธและความสามารถที่ยืดหยุ่น รวดเร็ว และรุนแรง ซึ่งความสามารถเหล่านี้จะช่วยฉายแสงให้ทักษะการยิงปืนของคุณเปล่งประกายยิ่งขึ้น ไม่มีเอเจนท์ไหนที่มีสไตล์การเล่นที่เหมือนกัน เช่นเดียวกับการที่ไม่มีไฮไลท์ใดที่เหมือนกัน</p>
                        <br></br>
                        <Button isWhite style={{}}>ดูเอเจนท์ทั้งหมด</Button>
                    </Text02>
                </Text_all>
                <ContentBG1></ContentBG1>
            </Content02>
            <Content03>
                <Margin>
                    <BackgroundText style={{
                        top:"0px",
                    }}>
                        <h2 className={ styles.stroke } style={{opacity:0.2}} >
                            <p  style={{
                                fontSize:"20rem",
                                position:"absolute",
                                margin:0
                                ,left:"150px"

                                }}>PLACE</p>


                        </h2>
                    </BackgroundText>
                    <Text_all style={{
                        zIndex:"1",
                        left:"200px",
                        top:"100px",
                        color:"black"
                    }}>
                    <hr></hr>
                        <Title fontSize="6rem" width="100%">แผนที่ของคุณ</Title>
                        <Text02 style={{

                        color:"black"
                    }}>
                            <br></br>
                            <h4 style={{opacity:"0.8"}}>ต่อสู้รอบโลก</h4>
                            <br></br>
                            <p style={{opacity:"0.5"}}>แผนที่แต่ละอันคือพื้นที่จัดแสดงความคิดสร้างสรรค์ของคุณ แผนการของทีมที่มีจุดมุ่งหมาย การเล่นที่น่าตื่นเต้น และช่วงเวลาที่น่ากังวล เล่นให้เป็นตำนานจนคนอื่นต้องตามรอย</p>
                            <br></br>
                            <Button>แสดงแผนที่ทั้งหมด</Button>
                        </Text02>
                    </Text_all>
                    <ContentBG2></ContentBG2>
                </Margin>
            </Content03>
        </Hidden>
            <Footer />

        </>
    )
}
