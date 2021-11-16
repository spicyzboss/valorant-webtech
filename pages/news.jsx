import { Footer, Head, NavBar } from '../components'
import styles from '../styles/News.module.css'
import styled, { css, keyframes } from 'styled-components'
import Slider from 'react-slick';
//import { View, ScrollView } from 'react-native'

//components
import {Card, BlankCard, NewsCard, NewsFrame} from '../components/NewsComponents'
import TextBG from '../components/TextBg'
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
    color: #ece8e1;
    font-family: Kanit,sans-serif;
    font-weight: bold;
    text-indent: 7.5vw;
    padding-top: 30vh;
    margin: 0;
    animation: ${TitleUp} .5s ease;
    @media (max-width: 1024px){
        text-indent: 0;
    }
`

const HotNews = styled.div`
    width: 130vw;
    height: 80%;
    background: none;
    position: absolute;
    left: 20vw;
    overflow: visible;
    &:after{
        content: "";
        width: 100vw;
        height: 30vh;
        background: #0f1923;
        position: absolute;
        bottom: -20vh;
        z-index: 1;
    }
    @media (max-width: 1024px){
        position: relative;
        margin-top: 10vh;

        left: -8vw;
        display: block;
    }
`

const WrapNews = styled.div`
    position: absolute;
    height: 100%;
    left: 0;
    width: 100%;
    overflow-x: visible;
    transition: 1s;
    z-index: 1;
    @media (max-width: 1024px){
        left: 8vw;
    }
`
const SliderContainer = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1;
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
    .slick-track .slick-current{
        filter: brightness(100%);
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
    height: 400vh;
    display: block;
`
const NewsContainer = styled(NewsFrame)`
    border-left: none;
    width: 80%;
    .news-card:nth-child(even){
        left: 20%;
    }
`
const NewsCss = css`

    html,
    body {
    padding: 0;
    margin: 0;

    overflow-x: hidden;
    background-color: antiquewhite;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    box-sizing: border-box;
    }
`
const News = () => {
    const data = require("../public/news_content/contents.json");
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
          )
      };
    return (
        <>
            <Head title="ข่าวสาร VALORANT: อัปเดต วิดีโอ และบันทึกแพตช์ล่าสุด" />
            <NavBar />
            <style>{ NewsCss }</style>
            <Box style={{ height: "150vh" }}>
                <TextBG/>
                <NewsFrame style={{ height: '100vh' }}>
                    <Title className={ styles.resTitle }>แนะนำข่าวสาร</Title>
                    <NewsFrame id="Recomend" style={{  height: '140vh', left: -1 }}>
                        <HotNews>
                                <WrapNews>
                                    <SliderContainer>
                                        <SLickStyle {...settings}>
                                        {
                                            data.HOT_NEWS.map((card, index)=>{
                                            return  <Card key={ index } data={card}/>
                                            })
                                        }
                                            <BlankCard/>
                                        </SLickStyle>
                                    </SliderContainer>
                                </WrapNews>
                        </HotNews>
                    </NewsFrame>
                </NewsFrame>
            </Box>
            <Box>
                <NewsFrame style={{ borderLeft: "1px solid black"}}>
                    <NewsContainer>
                        <Title style={{ color: "black", paddingTop: "50vh", textIndent: "0" }}> ข่าวสาร</Title>
                        {
                            data.NEWS.map((card, index)=>{
                                return <NewsCard key={index} data={ card }/>
                            })
                        }

                    </NewsContainer>
                </NewsFrame>
            </Box>
            <Footer />
        </>
    )
}

export default News;
