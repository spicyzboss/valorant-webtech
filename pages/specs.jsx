import styled from 'styled-components'
import { Footer, Head, NavBar, Title } from '../components'

const TopSection = styled.div`
    height: 60vh;
    width: 100%;
    background: #0f1923;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        height: 50%;
        width: 50%;
        transform: translateX(50%) rotate(-45deg);
        background: #ece8e1;
    }
`

const TopWrapper = styled.div`
    width: 65%;
    height: 100%;
    position: relative;
`

const TextWrapper = styled.div`
    margin-top: 25vh;
    border-top: 1px solid #fff;
`

const Image = styled.img`
    position: absolute;
    top: 0;
    height: 100%;
    right: 0;
`

const BgText = styled.p`
    position: absolute;
    font-size: 17rem;
    opacity: .1;
    margin: 0;
    top: 0;
    font-weight: bold;
    font-family: 'Kanit', sans-serif;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
`

const BottomSection = styled.div`
    width: 100%;
    background: #ece8e1;
    padding: 10vh 15vw;
`

const TopTable = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-top: 5vh;
`

const Col1 = styled.div`
    background: ${props => props.background ? props.background : "#ff4655"};
    padding: 1rem;
    border: 1px solid ${props => props.black ? "black" : "#bdbcb7"};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Col = styled.div`
    grid-column: auto/span 2;
    background: ${props => props.background ? props.background : "#0f1923"};
    border: 1px solid ${props => props.black ? "black" : "#bdbcb7"};
    color: ${props => props.color ? props.color : "#bdbcb7"};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${props => props.direction ? "row" : "column"};
    column-gap: 1rem;
    row-gap: 1rem;
    padding: 1rem;
`

const Line = styled.div`
    width: 60%;
    opacity: .3;
    background-color: #bdbcb7;
    height: 1px;
`

const ComputerSvg = () => (
    <svg viewBox="0 0 14 14" height="5rem" fill="#fff">
        <path d="M1.9 10.8h5.4v.6H1.9zm7.3-1.5V5.4c0-.5-.4-.9-.9-.9H.9c-.5.1-.9.5-.9.9v3.9c0 .5.4.9.9.9h7.4c.5 0 .9-.4.9-.9zm-.3 0c0 .3-.2.5-.5.5H.9c-.3 0-.5-.2-.5-.5V5.4c0-.3.2-.5.5-.5h7.4c.3 0 .5.2.5.5v3.9z" />
        <path d="M13.1 2.4H9.3c-.5 0-.9.4-.9.9v.9c.1 0 .2 0 .3.1v-1c0-.3.3-.5.6-.5h3.8c.3 0 .5.2.5.5V6h-4v.2h4.1v4.5c0 .3-.2.5-.5.5H9.3c-.3 0-.5-.2-.5-.5v-.3c-.1.1-.2.1-.4.1v.2c0 .5.4.9.9.9h3.9c.5 0 .9-.4.9-.9V3.3c-.1-.5-.5-.9-1-.9z" />
        <circle cx="11.2" cy="9.2" r="0.4" />
    </svg>
)

const BottomTable = styled.div`
    margin-top: 5vh;
`

const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    height: ${props => props.height ? props.height : "5rem"};
`

const Rotate = styled.div`
    transform: rotate(-90deg);
`

const StyledSvg = styled.svg`
    width: 30%;
    fill: #fff;
`

const LowSvg = () => (
    <StyledSvg viewBox="0 0 14 14">
        <path d="M6.82.35h.3V2.5h-.3z" />
        <path d="M-.015 3.421l.212-.212 1.52 1.52-.212.213z" />
        <path d="M3.09 1.14l.275-.12.866 1.967-.274.121zM12.26 4.735l1.52-1.52.212.211-1.52 1.52zM9.745 2.997l.867-1.968.274.12-.866 1.969z" />
        <path d="M6.89 9.58L2.71 5.4l-.53.54 4.17 4.17v.67h1.21v-1.2z" />
        <path d="M7 6.92c-.63 0-1.21.19-1.71.5l.3.3c.41-.24.89-.39 1.41-.39a2.77 2.77 0 11-2.47 1.52l-.3-.3c-.26.46-.41.99-.41 1.56 0 1.76 1.43 3.19 3.19 3.19s3.19-1.43 3.19-3.19S8.76 6.92 7 6.92z" />
    </StyledSvg>
)

const MidSvg = () => (
    <StyledSvg viewBox="0 0 14 14">
        <path d="M6.84.35h.3V2.5h-.3z" />
        <path d="M.002 3.418l.212-.212 1.52 1.52-.212.212zM3.1 1.142l.275-.121.866 1.968-.275.12zM12.27 4.736l1.52-1.52.212.211-1.52 1.52zM9.76 2.984l.866-1.968.275.121-.867 1.968z" />
        <path d="M7.39 9.72v-5.9h-.76v5.9l-.47.47.85.85.85-.85z" />
        <path d="M7.79 7.02v.43c1.15.34 2 1.4 2 2.66a2.77 2.77 0 11-5.54 0c0-1.26.85-2.32 2-2.66v-.43c-1.38.35-2.41 1.6-2.41 3.09 0 1.76 1.43 3.19 3.19 3.19s3.19-1.43 3.19-3.19a3.236 3.236 0 00-2.43-3.09z" />
    </StyledSvg>
)

const HighSvg = () => (
    <StyledSvg viewBox="0 0 14 14">
        <path d="M6.86.52h.3v2.15h-.3z" />
        <path d="M12.27 4.916l1.52-1.52.212.211-1.52 1.52z" />
        <path d="M9.761 3.164l.867-1.967.274.12-.866 1.968zM.003 3.598l.212-.212 1.52 1.52-.212.212zM3.1 1.322l.275-.12.866 1.967-.274.121z" />
        <path d="M11.81 6.12l-.54-.54L7.1 9.76h-.67v1.2h1.21v-.67z" />
        <path d="M6.99 7.1c.63 0 1.21.19 1.71.5l-.3.3c-.42-.25-.9-.39-1.41-.39a2.77 2.77 0 102.47 1.52l.3-.3c.26.46.41.99.41 1.56 0 1.76-1.43 3.19-3.19 3.19S3.8 12.04 3.8 10.29 5.23 7.1 6.99 7.1z" />
    </StyledSvg>
)

const TitleText = styled.p`
    width: 100%;
    font-weight: bold;
`

const TiledLine = styled.div`
    width: 50%;
    transform: rotate(-45deg);
    height: 1px;
    background-color: #fff;
`

const Specs = () => {
    return (
        <>
            <Head title="สเปค VALORANT: ความต้องการขั้นต่ำ ที่แนะนำ และระดับสูง" />
            <NavBar />
            <TopSection>
                <BgText>VALORANT</BgText>
                <TopWrapper>
                    <TextWrapper>
                        <Title textColor="#fff" fontSize="7rem">สเปค</Title>
                    </TextWrapper>
                    <Image src="/project/g41playvalorant/img/viper-specs.png" alt="viper-specs" />
                </TopWrapper>
            </TopSection>
            <BottomSection>
                <Title fontSize="2rem">ข้อกำหนดด้านฮาร์ดแวร์ของ PC</Title>
                <TopTable>
                    <Col1>
                        <ComputerSvg />
                    </Col1>
                    <Col>
                        Windows // 7/8/10 64-bit
                        <Line />
                    </Col>
                    <Col>
                        RAM // 4GB
                        <Line />
                    </Col>
                    <Col>
                        VRAM // 1GB
                        <Line />
                    </Col>
                </TopTable>
                <BottomTable>
                    <Row height="auto">
                        <Col1 black background="#8b978f">
                            <TiledLine />
                        </Col1>
                        <Col direction="row" black background="#8b978f" color="#ece8e1">
                            <LowSvg />
                            <TitleText>สเปคขั้นต่ำ / 30 FPS</TitleText>
                        </Col>
                        <Col direction="row" black background="#8b978f" color="#ece8e1">
                            <MidSvg />
                            <TitleText>สเปคที่แนะนำ / 60 FPS</TitleText>
                        </Col>
                        <Col direction="row" black background="#8b978f" color="#ece8e1">
                            <HighSvg />
                            <TitleText>สเปคขั้นสูง / 144+ FPS</TitleText>
                        </Col>
                    </Row>
                    <Row height="8rem">
                        <Col1 black color="#768079" background="transparent">
                            <Rotate>CPU //</Rotate>
                        </Col1>
                        <Col black color="#768079" background="transparent">Intel Core 2 Duo E8400 (Intel), Athlon 200GE (AMD)</Col>
                        <Col black color="#768079" background="transparent">Intel i3-4150 (Intel), Ryzen 3 1200 (AMD)</Col>
                        <Col black color="#768079" background="transparent">Intel i5-9400F 2.90GHz (Intel), Ryzen 5 2600X (AMD)</Col>
                    </Row>
                    <Row height="8rem">
                        <Col1 black color="#768079" background="transparent">
                            <Rotate>GPU //</Rotate>
                        </Col1>
                        <Col black color="#768079" background="transparent">Intel HD 4000 , Radeon R5 200</Col>
                        <Col black color="#768079" background="transparent">Geforce GT 730, Radeon R7 240</Col>
                        <Col black color="#768079" background="transparent">GTX 1050 Ti , Radeon R7 370</Col>
                    </Row>
                </BottomTable>
            </BottomSection>
            <Footer />
        </>
    )
}

export default Specs;
