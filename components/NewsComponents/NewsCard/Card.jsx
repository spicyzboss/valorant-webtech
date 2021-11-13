import styled, { css } from 'styled-components'
import Text from './Text'
import BlankCard from './BlankCard'

const NewsCard = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: #0f1923;
    left: 0;
`
const CardContent = styled.div`
    width: 80%;
    height: 34vh;
    button: 0;
    margin-left: 20%;
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid grey;
    @media (max-width: 1024px){
        width: 100%;
        margin: 0;
    }
`
const RecomendImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Picture = styled.div`
    border: 1px solid #ece8e1;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    &:before{
        content: "";
        width: 120%;
        height: 100%;
        background: #ff4655;
        position: absolute;
        display:block;
        transform: translateX(-110%) skewX(-10deg);
        transition: 1s;
        mix-blend-mode: multiply;
    }
`
const ContentText = styled.div`
    height:auto;
    width: 45%;
    margin-right: 20px;
    float: left;
    @media (max-width: 1024px){
        width: 100%;
        margin: 0;
        float: none;
    }
`

const DetailCss = css`
    margin: 0;
    width: 50;
    @media (max-width: 1024px){
        width: 100%;
    }
`
const ContentNumber = styled.div`
    color: #ece8e1;
    font-size: 1.5rem;
    width: 20px;
    height: 20px;
    position: absolute;
    left: 0;
    transform: translate(-7.5px, 10vh) rotate(.75turn);
    &:before{
        content: "";
        width: 5px;
        height: 5px;
        background: #ff4655;
        position: absolute;
        left: -10vh;
        top: 7px;
        z-index: -1;
    }

`

const Card = ({ data }) => {
    const pic = `news_content/pic/hot_news/${ data.ID }.jpeg`
    return (
        <>
        <BlankCard>
            <NewsCard>
                <Picture className="hoverSlide">
                    <RecomendImg src={pic} ></RecomendImg>
                </Picture>
                <ContentNumber>{ data.ID }</ContentNumber>
                <div style={{ height: '8vh'}}/>
                <CardContent>
                        <Text style={{ display: 'block' }}>{ data.DATE }</Text>
                        <ContentText><Text>{ data.TOPIC }</Text></ContentText>
                        <ContentText style={{ DetailCss }}><Text>{ data.DETAIL }</Text></ContentText>
                        <div style={{ width: '5px', height: '3px', background: '#ece8e1', bottom: '0', position: 'absolute'}}/>
                </CardContent>
             </NewsCard>
        </BlankCard>
        </>
    )
}


export default Card;


