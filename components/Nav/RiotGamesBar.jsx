import styled from "styled-components";
import { RiotLogoWrapper, StyledLogo, CaretDown } from "../../styles/nav_components/RiotLogo"

const GamesBar = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 55vh;
    width: 100%;
    background-color: #f9f9f9;
    z-index: 30000;
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    z-index: 99999;
    display: ${props => props.isOpen ? "block" : "none"};
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

const AdaptedLogo = styled(RiotLogoWrapper)`
    position: absolute;
    top: 25px;
    left: 25px;
`

const CloseSvg = styled.svg`
    border-radius: 50%;
`

const StyledCloseButton = styled.button`
    padding: 0;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    background: transparent;
    position: absolute;
    right: 20px;
    top: 20px;
`

const CloseButton = ({ onClick }) => (
    <StyledCloseButton onClick={onClick}>
        <CloseSvg width="32" height="32" viewBox="0 0 24 24">
            <rect opacity=".07" width="24" height="24" rx="2" fill="#333" />
            <path stroke="#7E7E7E" strokeWidth="2" d="M8.007 7.973l8.132 8.132m-8.146-.012l8.132-8.132" />
        </CloseSvg>
    </StyledCloseButton>
)

const RiotGamesWrapper = styled.div`
    height: 80%;
    top: 70px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    position: relative;
`

const NavLeft = styled.div`
    grid-column: auto/span 1;
    grid-row: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    padding: 0 1rem;
    height: 100%;
    position: relative;
`

const NavRight = styled.div`
    grid-column: auto/span 1;
    grid-row: 1;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

const ListWrapper = styled.ul`
    list-style: none;
    padding: 0;
`

const ListItem = styled.li`
    padding: 6px 0px 6px 20px;
    margin: 3px 0;
    border-radius: 5px;
    color: #4a4a4a;
    font-weight: ${props => props.header ? "bold" : "normal"};
    background: ${props => props.header ? "rgba(186,186,186,.12)" : "transparent"};
    cursor: ${props => props.header ? "auto" : "pointer"};

    &:hover {
        background: ${props => props.header ? "rgba(186,186,186,.12)" : "rgba(186,186,186,.25)"};
    }
`

const ImgWrapper = styled.div`
    margin: 1rem;
    cursor: pointer;
    height: fit-content;
`

const Img = styled.img`
    width: 100%;
    border-radius: 10px;
    box-shadow: 2px 2px 10px #00000055;
    transition: all .2s ease-in-out;

    ${ImgWrapper}:hover & {
        box-shadow: 0px 0px 2rem #00000066;
    }
`

const ImgText = styled.p`
    margin-bottom: 0;
`

export const RiotGamesBar = ({ isOpen, stateControl}) => {
    return (
        <GamesBarWrapper isOpen={isOpen}>
            <GamesBar>
                <AdaptedLogo onClick={() => stateControl(false)}>
                    <StyledLogo viewBox="0 0 75.89 24" color="black">
                        <path d="M69.31 20.67l4.22.71.26 2.63h-6.26l.11-1 4.48-.18v-.48l-4.3-.74.26-2.64h5.21l.1 1.05-4 .15zm-36.23 1.27l.06-1H36l.17 3.06h-6.52l.51-5.08h5.71l.07 1.05-4.43.1-.14 2.79 3.22.09v-1zm27.63.04v.87l4.1.1v1H59l.17-5.08h5.53v1.05l-4.1.09v.89h3.11v1z" />
                        <path d="M43.87 24h1.75l-1.39-5.08h-4.11L38.74 24h1.75l.27-1.28h2.85zm-2.9-2.25l.35-1.66 1.69-.08.36 1.67z" />
                        <path d="M56.28 24l-.52-5.08h-1.47l-2.12 2.42-2.11-2.42h-1.48L48.07 24h1.73l.17-3.29 2.2 2.24 2.21-2.24.17 3.29z" />
                        <path d="M43.2 16.03h-4.55l-1.21-5.54-2.93 1.59-.1 3.95h-4.07l1.26-12.4-2.6.09.38-3.41h11.61l1.61 7.38-2.36 1.28zM38.09 3.42l-3.34.11-.13 4.82 3.85-1.8z" />
                        <path d="M48.87.31h-3.46l-.32 15.72h4.19zm26.64 0l.36 3.44-4.24-.14 1.24 12.42h-4.19l-.35-12.54-3.41-.11-.09-3.07z" />
                        <path d="M52.18.32h10.8l.77 15.71h-12zm3.63 12.43l3.82-.12v-9l-4-.12z" />
                        <path d="M0 6.97l14.86-7 8.69 2.1L22 17.44h-4.41l-.82-11.2-.47.15-.78 11.05h-3.34l-1.59-9.29-.47.14.12 9.15H7.09L5.27 9.78l-.47.15.53 7.51h-3zm11.22 11.98l1.09 2.81 9 2.23.47-4.49z" />
                    </StyledLogo>
                    <CaretDown flip />
                </AdaptedLogo>
                <CloseButton onClick={() => stateControl(false)} />
                <RiotGamesWrapper>
                    <NavLeft>
                        <div>
                            <ListWrapper>
                                <ListItem header>อีเวนต์</ListItem>
                                <ListItem>RIOTX ARCANE</ListItem>
                            </ListWrapper>
                            <ListWrapper>
                                <ListItem header>เกม</ListItem>
                                <ListItem>VALORANT</ListItem>
                                <ListItem>LEGENDS OF RUNETERRA</ListItem>
                                <ListItem>LOL: WILD RIFT</ListItem>
                            </ListWrapper>
                        </div>
                        <div>
                            <ListWrapper>
                                <ListItem header>FORGE</ListItem>
                                <ListItem>HEXTECH MAYHEM</ListItem>
                                <ListItem>RUINED KING</ListItem>
                                <ListItem>CONV/RGENCE</ListItem>
                                <ListItem>SONG OF NUNU</ListItem>
                                <ListItem>RIOT FORGE GAMES</ListItem>
                            </ListWrapper>
                            <ListWrapper>
                                <ListItem header>อีสปอร์ต</ListItem>
                                <ListItem>อีสปอร์ต LOL</ListItem>
                                <ListItem>อีสปอร์ต VALORANT</ListItem>
                            </ListWrapper>
                        </div>
                        <div>
                            <ListWrapper>
                                <ListItem header>สื่อบันเทิง</ListItem>
                                <ListItem>ARCANE</ListItem>
                                <ListItem>UNIVERSE</ListItem>
                                <ListItem>RIOT GAMES MUSIC</ListItem>
                            </ListWrapper>
                            <ListWrapper>
                                <ListItem header>ธุรกิจ</ListItem>
                                <ListItem>RIOT GAMES</ListItem>
                                <ListItem>RIOT SUPPORT</ListItem>
                            </ListWrapper>
                        </div>
                    </NavLeft>
                    <NavRight>
                        <ImgWrapper>
                            <Img src="/project/g41playvalorant/img/nav_1.jpeg" alt="nav_1" />
                            <ImgText>Riot Forge ขอนำเสนอ Hextech Mayhem</ImgText>
                        </ImgWrapper>
                        <ImgWrapper>
                            <Img src="/project/g41playvalorant/img/nav_2.jpeg" alt="nav_2" />
                            <ImgText>ตัวอย่าง RiotX Arcane - ค่ำคืนเมืองเบื้องล่าง</ImgText>
                        </ImgWrapper>
                    </NavRight>
                </RiotGamesWrapper>
            </GamesBar>
            <DimmedBackground onClick={() => stateControl(false)} />
        </GamesBarWrapper>
    )
}
