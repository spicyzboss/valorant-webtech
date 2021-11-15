import styled, { css } from "styled-components";

const PicContainer = styled.div`
    width: 40%;
    height: 281.18px;
    background: red;
    position: relative;
    overflow: hidden;
    &:before{
        content: "";
        position: absolute;
        width: 120%;
        height: 281.18px;
        background: #ff4655;
        transform: translateX(-110%) skewX(-10deg);
        transition: 1s;
        z-index: 1;
        mix-blend-mode: multiply;
    }
`
const Img = styled.img`
    height: 100%;
    position: absolute;
    aspect-ratio: auto 1920 / 1080;
`
const Topic = styled.h1`
    color: #383e3a;
`
const Content = styled.div`
    position: relative;
    margin-right: 2px;
    width: 36%;
    height: auto;
    padding-left: 6rem;
`
const Card = styled.a`
    position: relative;
    display: flex;
    margin-bottom: 10vh;
    transition: 1s;
    &:hover .hoverSlide:before{
        transform: translateX(-10%) skewX(-10deg);
    }
`

const NewsCard = ({ data }) => {
    const pic = `news_content/pic/news/N_${ data.ID }.jpeg`;
    return(
        <>
            <Card href={ data.LINK } target="_BLANK_" className="news-card">
                <PicContainer className="hoverSlide">
                    <Img src={ pic }/>
                </PicContainer>
                <Content>
                    <Topic>{ data.TOPIC }</Topic>
                    <p>{ data.DETAIL }</p>
                </Content>
            </Card>
        </>
        
    )
}
export default NewsCard;