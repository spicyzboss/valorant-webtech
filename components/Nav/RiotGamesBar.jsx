import styled from "styled-components";

const GamesBar = styled.div`
    position: fixed;
    left: 0;
    height: 385px;
    width: 100%;
    background-color: white;
    z-index: 10000;
    opacity: 1;
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
    display: none;
`

const StyledTriangleUp = styled.svg`
    width: 32px;
    height: 32px;
    position: absolute;
    top: -14px;
    left: 38px;
`

const TriangleUp = () => {
    return (
        <StyledTriangleUp viewBox="0 0 16 16" fill="#fff">
            <path fillRule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"/>
        </StyledTriangleUp>
    )
}

export const RiotGamesBar = () => {
    return (
        <GamesBarWrapper>
            <TriangleUp />
            <GamesBar />
            <DimmedBackground />
        </GamesBarWrapper>
    )
}
