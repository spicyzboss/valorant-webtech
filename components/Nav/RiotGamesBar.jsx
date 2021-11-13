import styled from "styled-components";
import Image from 'next/image';

const GamesBar = styled.div`
    position: fixed;
    left: 0;
    height: 370px;
    width: 100%;
    background-color: white;
    z-index: 10000;
    opacity: 1;
    padding: 24px 40px;
`

const DimmedBackground = styled.div`
    z-index: 9000;
    background-color: #111;
    opacity: .7;
    position: fixed;
    left: 0;
    top: 0;
    margin-top: 80px;
    width: 100vw;
    height: 100vh;
`

const GamesBarWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    margin-top: 80px;
    width: 100vw;
    height: 100vh;
    display: ${props => props.isOpen ? "block" : "none"};
`

const StyledTriangleUp = styled.svg`
    width: 32px;
    height: 32px;
    position: absolute;
    top: -14px;
    left: 38px;
`

const TitleRiotGames = styled.p`
    font-family: 'Kanit', sans-serif;
    font-size: 24px;
    margin: 0;
    font-weight: 700;
`

const TriangleUp = () => {
    return (
        <StyledTriangleUp viewBox="0 0 16 16" fill="#fff">
            <path fillRule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"/>
        </StyledTriangleUp>
    )
}

const RiotGamesWrapper = styled.div`
    height: 80%;
    margin-top: 20px;
    display: flex;
    column-gap: 10px;
    position: relative;
    background-color: rebeccapurple;
`

const ContentWrapper = styled.div`
    width: 25%;
    background-color: red;
    position: relative;
`

const Content = styled.p`
    font-family: 'Bai jamjuree', sans-serif;
    font-size: 16px;
    font-weight: 500;
`

const Img = styled(Image)`
    border-radius: 5px;
`

export const RiotGamesBar = ({ isOpen, stateControl}) => {
    return (
        <GamesBarWrapper isOpen={isOpen}>
            <TriangleUp />
            <GamesBar>
                <TitleRiotGames>RIOT GAMES</TitleRiotGames>
                <RiotGamesWrapper>
                    <ContentWrapper>
                        <Img src="/img/nav_1.jpeg" alt="nav_1" layout="fill" objectFit="contain" />
                        <Content>ต่อสู้เคียงข้างองครักษ์แห่งแสงในอีเวนต์ที่ยิ่งใหญ่ที่สุดของเรา</Content>
                    </ContentWrapper>
                </RiotGamesWrapper>
            </GamesBar>
            <DimmedBackground onClick={() => stateControl(false)} />
        </GamesBarWrapper>
    )
}
