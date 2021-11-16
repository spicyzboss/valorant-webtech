
import { Head, NavBar, Footer, Button, Title } from "../components";
import styled, { css, keyframes } from 'styled-components'
import {Card, BlankCard, NewsCard, TextBG, NewsFrame} from '../components/NewsComponents'
import styles from '../styles/News.module.css'
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
    /* height: 100vh; */
    // background-color: wheat;
    display: flex;
    color:white;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    
`

const Videos = styled.video`
    width:100%;
    z-index:-1;
    
    

    
    }
`
const Cen = styled.div`
    margin-bottom:50px;
    
    

    
    }
`
const Cen2 = styled.div`
    position:absolute;
    top:260px;
    
    

    
    }
`
const Content = styled.div`
    background-color:#ebe8e1;
    
    

    
    }
`
const BackgroundText = styled.div`
    position: absolute;
    top: -250px;
    left: -144px;
    bottom: 0;
    right: 0;
    z-index: 0;
    overflow: hidden;
    
    

    
    }
`
const Container = styled.div`
    width:100vw;
    position: relative;
    margin-left:144px;
    margin-top:170px;

    // z-index:2000;
`

export default function Home() {
    return (
        <>
            <Head title="VALORANT: เกมยิงปืนจาก Riot Games ในรูปแบบ 5v5 ที่ขับเคลื่อนโดยตัวละครนักยิงปืนผู้มากความสามารถ" />
            <NavBar />
            <Content>
                <Videos 
                    className='videoTag' autoPlay loop muted>
                <source src="https://playvalorant.com/assets/video/Retake-hero-desktop.mp4" type='video/mp4' />
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
                            {/* <TextBG className={ styles.textBackground1 }>WE ARE</TextBG>
                            <TextBG className={ styles.textBackground2 }>Valona</TextBG> */}
                        </h2>
                    </BackgroundText>
                    <StyleTitle textColor="#f84754" fontSize="6.5rem">ข่าวสารล่าสุด</StyleTitle>
                    <hr style={{ width:"50vw" }}></hr>
                    <Title fontSize="5.6rem">พวกเราคือ VALORANT</Title>
                </Container>
            </Content>
            <Footer />
        </>
    )
}
