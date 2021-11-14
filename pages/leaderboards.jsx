import styled from 'styled-components';
import { Footer, Head, NavBar, Title } from '../components'
import { useState } from 'react';

const TopSection = styled.section`
    height: 68vh;
    width: 100%;
    background: transparent;
    position: relative;
    display: flex;
    justify-content: center;
`

const TitleRadiant = styled.img`
    padding: 0 1vw;
    object-fit: contain;
`

const Image = styled.img``

const ParallaxBg = styled.div`
    background: url('/project/g41playvalorant/img/leaderboards-hero-banner.jpeg') no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`

const HeadWrapper = styled.div`
    width: 71vw;
    height: 100%;
    display: flex;
    align-items: flex-end;
    z-index: 1;
`

const DateWhite = styled.p`
    color: #ece8e1;;
    padding-bottom: 1.5rem;
`

const BottomSection = styled.section`
    width: 100%;
    padding: 5vh 7.5vw 7.5vw 7.5vw;
    background-color: #ece8e1;
`

const InputWrapper = styled.div`
    padding: 2vh 0;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 2vw;
`

const InputBoxWrapper = styled.div`
    border: 1px solid #8b978f;
    padding: 1rem;
    width: 30vw;
    height: 65px;
    background-color: #dbd9d2;
    font-size: 1rem;
    display: flex;
    align-items: center;
`

const InputBox = styled.input`
    background-color: transparent;
    border: none;
    width: 100%;
    &:focus {
        outline: none;
    }
`

const StyledSearchButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`

const SearchButton = () => (
    <StyledSearchButton>
        <svg width="24" height="24" fill="#0F1923">
            <path fillRule="evenodd" clipRule="evenodd" d="M24 21l-5.6-5.6A10.058 10.058 0 0020 10a10 10 0 10-10 10 10.058 10.058 0 005.4-1.6L21 24l3-3zM4 10a6 6 0 116 6 5.89 5.89 0 01-6-6z" />
        </svg>
    </StyledSearchButton>
)

const TableWrapper = styled.div`
    margin: 2rem 0;
`

const HeadTable = styled.div`
    display: flex;
    width: 100%;
    height: 14.5vh;
    background-color: #0f1923;
`

const RankHead = styled.div`
    width: 11%;
    padding: 20px 25px;
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    border: 1px solid #8b978f;
`

const NameHead = styled.div`
    height: 100%;
    width: 72%;
    border: 1px solid #8b978f;
    color: #ece8e1;
    display: flex;
    cursor: pointer;
    position: relative;
`

const ListItemWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 0.5rem;
`

const FlexHead = styled.div`
    display: flex;
    justify-content: center;
`

const TopHead = styled(FlexHead)`
    width: 100%;
    height: 35%;
    font-size: 1rem;
    align-items: flex-end;
`

const BottomHead = styled(FlexHead)`
    width: 100%;
    height: 65%;
    font-size: ${props => props.fontSize ? props.fontSize : '2.7rem'};
    font-weight: 900;
    align-items: center;
`

const SeasonHead = styled.div`
    height: 100%;
    width: 17%;
    border: 1px solid #8b978f;
    color: #ece8e1;
    display: flex;
    cursor: pointer;
    position: relative;
`

const StyledDownIcon = styled.svg`
    transition: all .2s ease-in-out;
    transform-origin: bottom;
    transform: ${props => props.show ? "rotate(0deg)" : "rotate(180deg)"};
`

const DownIconWrapper = styled.div`
    width: 5vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DownIcon = ({ show }) => (
    <DownIconWrapper>
        <StyledDownIcon width="15" height="9" fill="gray" show={show}>
            <path d="M7.582 8.9H.504l3.54-3.957L7.581.997l3.54 3.946L14.66 8.9H7.582z" />
        </StyledDownIcon>
    </DownIconWrapper>
)

const RowWrapper = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const Row = styled.li`
    display: flex;
    height: ${props => props.height};
    border-bottom: ${props => props.border ? "3px solid rgba(189, 188, 183, .6);" : "none"};
    margin-top: .1vh;
`

const Col = styled.div`
    display: flex;
    justify-content: center;
    background: ${props => props.background ? props.background : "transparent"};
    align-items: ${props => props.aligny == "bottom" ? "flex-end" : "center"};
    padding: 1vh 0;
    font-size: ${props => props.fontSize ? props.fontSize : ".85rem"};
`

const Col1 = styled(Col)`
    width: 11%;
`

const Col2 = styled(Col)`
    width: 10%;
    column-gap: .5vw;
    padding: ${props => props.padding ? props.padding : "1vh 3vh"};
`

const Col3 = styled(Col)`
    width: 62%;
    justify-content: flex-start;
    padding-left: 5%;
`

const Col4 = styled(Col)`
    width: 17%;
    column-gap: .5vw;
`

const GreenText = styled.span`
    color: #39b54a;
`

const DropdownWrapper = styled.ul`
    position: absolute;
    top: 100%;
    right: 0;
    margin: 0;
    background-color: #ece8e1;
    padding: 0;
    list-style: none;
    border: 1px solid  #bdbcb7;
    opacity: ${props => props.show ? "100" : "0"};
    transition: opacity .2s ease-in-out;
`

const DropdownItem = styled.li`
    color: black;
    padding: 1.5vw;
    transition: all .1s ease-in-out;
    font-size: .9rem;
    position: relative;
    display: flex;
    align-items: center;
    column-gap: 1vw;

    &:hover {
        background-color: #0f1923;
        color: #ece8e1;
    }
`

const DropdownThumbnailWrapper = styled.div`
    height: 3vh;
    width: 3vh;
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const ButtonRightSection = styled.div`
    display: flex;
    column-gap: .5vw;
`

const PageNumberWrapper = styled.div`
    height: 5.75vh;
    width: 15vw;
    padding: .85vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0f1923;
    color: #ece8e1;
`

const Button = styled.button`
    background-color: #0f1923;
    color: #ece8e1;
    cursor: ${props => props.inactive ? "default" : "pointer"};
    transition: all .3s ease-in-out;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: ${props => props.inactive ? "#0f1923" : "rgb(255, 70, 85)"};
    }
`

const ViewRankButton = styled(Button)`
    height: 5.75vh;
    padding: .85vw 6.5vw;
`

const StyledIconButton = styled(Button)`
    height: 5.75vh;
    width: 5.75vh;
    padding: .85vw;
`

const StyledSVG = styled.svg`
    fill: ${props => props.inactive ? "#8b978f" : "#ECE8E1"};
    transform: ${props => props.flipx ? "rotate(180deg)" : "rotate(0deg)"};
`

const PreviousButton = ({ inactive, flipx }) => (
    <StyledSVG width="18" height="19" inactive={inactive} flipx={flipx}>
        <path d="M.907 9.034V.488l4.63 4.273 4.647 4.272-4.647 4.273-4.63 4.273V9.033zm12.556 8.97h4.454V.044h-4.454v17.96z" />
    </StyledSVG>
)

const NextButton = ({ inactive, flipx }) => (
    <StyledSVG width="10" height="18" inactive={inactive} flipx={flipx}>
        <path d="M.059 9.033V.487l4.63 4.273 4.629 4.273-4.63 4.272-4.63 4.273V9.033z" />
    </StyledSVG>
)

const IconButton = ({ children, inactive }) => {
    return (
        <StyledIconButton inactive={inactive}>
            {children}
        </StyledIconButton>
    )
}

const StarSvg = () => (
    <svg width="16" height="15" fill="#FF0">
        <path d="M8.35 12.07l-4.62 2.44.88-5.16L.87 5.71l5.17-.76L8.35.27l2.32 4.68 5.17.76-3.74 3.64.88 5.16-4.63-2.44z" />
    </svg>
)

const NumberLarge = styled.p`
    font-size: 3.65rem;
    font-weight: bold;
`

const NumberSmall = styled.p`
    font-size: 1.65rem;
    font-weight: bold;
`

const RatingLarge = styled.p`
    font-size: 1.5rem;
`

const NameLarge = styled.p`
    font-size: 1.85rem;
`

const GreyText = styled.span`
    color: #888;
`

const Leaderboards = () => {
    const [showRankDropdown, setShowRankDropdown] = useState(false);
    const [showSeasonDropdown, setShowSeasonDropdown] = useState(false);

    return (
        <>
            <Head title="กระดานผู้นำ VALORANT: ค้นหาหรือล็อกอินเพื่อดูแรงค์" />
            <NavBar />
            <TopSection>
                <ParallaxBg />
                <HeadWrapper>
                    <div>
                        <DateWhite>{new Date().getDate()}/{new Date().getMonth() + 1}/{(new Date().getFullYear() + 543) % 100}</DateWhite>
                        <Title textColor="#ece8e1">กระดานจัดอันดับ VALORANT</Title>
                    </div>
                </HeadWrapper>
            </TopSection>
            <BottomSection>
                <InputWrapper>
                    <p>ค้นหากระดานจัดอันดับ</p>
                    <InputBoxWrapper>
                        <InputBox type="text" placeholder="ชื่อผู้เล่น#แท็กไลน์" />
                        <SearchButton />
                    </InputBoxWrapper>
                </InputWrapper>
                <TableWrapper>
                    <HeadTable>
                        <RankHead>
                            <TitleRadiant src="/project/g41playvalorant/img/radiant-badge.png" alt="radiant-badge" width="100%" height="100%" objectFit="contain" />
                        </RankHead>
                        <NameHead onClick={() => setShowRankDropdown(!showRankDropdown)}>
                            <ListItemWrapper>
                                <TopHead>กระดานจัดอันดับ</TopHead>
                                <BottomHead>RADIANT</BottomHead>
                            </ListItemWrapper>
                            <DownIcon show={showRankDropdown} />
                            <DropdownWrapper show={showRankDropdown}>
                                <DropdownItem>
                                    <DropdownThumbnailWrapper>
                                        <Image src="/project/g41playvalorant/img/radiant-badge.png" alt="radiant-badge" width="100%" height="100%" objectFit="contain" />
                                    </DropdownThumbnailWrapper>
                                    RADIANT
                                </DropdownItem>
                                <DropdownItem>
                                    <DropdownThumbnailWrapper>
                                        <Image src="/project/g41playvalorant/img/immortal-badge.png" alt="immortal-badge" width="100%" height="100%" objectFit="contain" />
                                    </DropdownThumbnailWrapper>
                                    IMMORTAL 3
                                </DropdownItem>
                                <DropdownItem>
                                    <DropdownThumbnailWrapper>
                                        <Image src="/project/g41playvalorant/img/immortal-badge.png" alt="immortal-badge" width="100%" height="100%" objectFit="contain" />
                                    </DropdownThumbnailWrapper>
                                    IMMORTAL 2
                                </DropdownItem>
                                <DropdownItem>
                                    <DropdownThumbnailWrapper>
                                        <Image src="/project/g41playvalorant/img/immortal-badge.png" alt="immortal-badge" width="100%" height="100%" objectFit="contain" />
                                    </DropdownThumbnailWrapper>
                                    IMMORTAL 1
                                </DropdownItem>
                            </DropdownWrapper>
                        </NameHead>
                        <SeasonHead onClick={() => setShowSeasonDropdown(!showSeasonDropdown)}>
                            <ListItemWrapper>
                                <TopHead>EPISODE 3</TopHead>
                                <BottomHead fontSize="2rem">ACT 3</BottomHead>
                            </ListItemWrapper>
                            <DownIcon show={showSeasonDropdown} />
                            <DropdownWrapper show={showSeasonDropdown}>
                                <DropdownItem>EPISODE 2 //// ACT 1</DropdownItem>
                                <DropdownItem>EPISODE 2 //// ACT 2</DropdownItem>
                                <DropdownItem>EPISODE 2 //// ACT 3</DropdownItem>
                                <DropdownItem>EPISODE 3 //// ACT 1</DropdownItem>
                                <DropdownItem>EPISODE 3 //// ACT 2</DropdownItem>
                                <DropdownItem>EPISODE 3 //// ACT 3</DropdownItem>
                            </DropdownWrapper>
                        </SeasonHead>
                    </HeadTable>
                    <RowWrapper>
                        <Row height="6vh">
                            <Col1 fontSize=".75rem" aligny="bottom" nobackground><GreyText>แรงค์</GreyText></Col1>
                            <Col2 fontSize=".75rem" aligny="bottom" nobackground padding="1vh 0"><GreenText>เรตติ้ง</GreenText></Col2>
                            <Col3 fontSize=".75rem" nobackground></Col3>
                            <Col4 fontSize=".75rem" aligny="bottom" nobackground><GreyText>กำลังดำเนินการ</GreyText></Col4>
                        </Row>
                        <Row height="17vh" border>
                            <Col1 background="#e3dfd9">
                                <NumberLarge>1</NumberLarge>
                                <StarSvg />
                            </Col1>
                            <Col2 background="#dbd9d2" padding="3vh 2vh">
                                <Image src="/project/g41playvalorant/img/radiant-badge.png" alt="radiant-badge" width="100%" height="100%" objectFit="contain" />
                                <RatingLarge>911</RatingLarge>
                            </Col2>
                            <Col3 background="rgba(219,217,210,.8);">
                                <NameLarge>PRX Jinggg<GreyText>#Jing</GreyText></NameLarge>
                            </Col3>
                            <Col4 background="#e3dfd9">46 <GreyText>เกมที่ชนะ</GreyText></Col4>
                        </Row>
                        <Row height="9vh" border>
                            <Col1 background="#e3dfd9"><NumberSmall>2</NumberSmall></Col1>
                            <Col2 background="#dbd9d2">
                                <Image src="/project/g41playvalorant/img/radiant-badge.png" alt="radiant-badge" width="100%" height="100%" objectFit="contain" />
                                842
                            </Col2>
                            <Col3 background="rgba(219,217,210,.8);">PRX f0rsakeN<GreyText>#biboo</GreyText></Col3>
                            <Col4 background="#e3dfd9">66 <GreyText>เกมที่ชนะ</GreyText></Col4>
                        </Row>
                        <Row height="9vh" border>
                            <Col1 background="#e3dfd9"><NumberSmall>3</NumberSmall></Col1>
                            <Col2 background="#dbd9d2">
                                <Image src="/project/g41playvalorant/img/radiant-badge.png" alt="radiant-badge" width="100%" height="100%" objectFit="contain" />
                                818
                            </Col2>
                            <Col3 background="rgba(219,217,210,.8);">LVR Deryeon<GreyText>#Ting</GreyText></Col3>
                            <Col4 background="#e3dfd9">61 <GreyText>เกมที่ชนะ</GreyText></Col4>
                        </Row>
                        <Row height="9vh" border>
                            <Col1 background="#e3dfd9"><NumberSmall>4</NumberSmall></Col1>
                            <Col2 background="#dbd9d2">
                                <Image src="/project/g41playvalorant/img/radiant-badge.png" alt="radiant-badge" width="100%" height="100%" objectFit="contain" />
                                739
                            </Col2>
                            <Col3 background="rgba(219,217,210,.8);">Mojer<GreyText>#kndra</GreyText></Col3>
                            <Col4 background="#e3dfd9">56 <GreyText>เกมที่ชนะ</GreyText></Col4>
                        </Row>
                        <Row height="9vh" border>
                            <Col1 background="#e3dfd9"><NumberSmall>5</NumberSmall></Col1>
                            <Col2 background="#dbd9d2">
                                <Image src="/project/g41playvalorant/img/radiant-badge.png" alt="radiant-badge" width="100%" height="100%" objectFit="contain" />
                                711
                            </Col2>
                            <Col3 background="rgba(219,217,210,.8);">vateRr ramos<GreyText>#BTR</GreyText></Col3>
                            <Col4 background="#e3dfd9">51 <GreyText>เกมที่ชนะ</GreyText></Col4>
                        </Row>
                        <Row height="9vh" border>
                            <Col1 background="#e3dfd9"><NumberSmall>6</NumberSmall></Col1>
                            <Col2 background="#dbd9d2">
                                <Image src="/project/g41playvalorant/img/radiant-badge.png" alt="radiant-badge" width="100%" height="100%" objectFit="contain" />
                                710
                            </Col2>
                            <Col3 background="rgba(219,217,210,.8);">FS JohnOlsen<GreyText>#1TAP</GreyText></Col3>
                            <Col4 background="#e3dfd9">41 <GreyText>เกมที่ชนะ</GreyText></Col4>
                        </Row>
                        <Row height="9vh" border>
                            <Col1 background="#e3dfd9"><NumberSmall>7</NumberSmall></Col1>
                            <Col2 background="#dbd9d2">
                                <Image src="/project/g41playvalorant/img/radiant-badge.png" alt="radiant-badge" width="100%" height="100%" objectFit="contain" />
                                709
                            </Col2>
                            <Col3 background="rgba(219,217,210,.8);">LVR juicy<GreyText>#noaim</GreyText></Col3>
                            <Col4 background="#e3dfd9">37 <GreyText>เกมที่ชนะ</GreyText></Col4>
                        </Row>
                        <Row height="9vh" border>
                            <Col1 background="#e3dfd9"><NumberSmall>8</NumberSmall></Col1>
                            <Col2 background="#dbd9d2">
                                <Image src="/project/g41playvalorant/img/radiant-badge.png" alt="radiant-badge" width="100%" height="100%" objectFit="contain" />
                                706
                            </Col2>
                            <Col3 background="rgba(219,217,210,.8);">JUST LOSE BENAF<GreyText>#gnext</GreyText></Col3>
                            <Col4 background="#e3dfd9">45 <GreyText>เกมที่ชนะ</GreyText></Col4>
                        </Row>
                        <Row height="9vh" border>
                            <Col1 background="#e3dfd9"><NumberSmall>9</NumberSmall></Col1>
                            <Col2 background="#dbd9d2">
                                <Image src="/project/g41playvalorant/img/radiant-badge.png" alt="radiant-badge" width="100%" height="100%" objectFit="contain" />
                                696
                            </Col2>
                            <Col3 background="rgba(219,217,210,.8);">Moosey<GreyText>#benaf</GreyText></Col3>
                            <Col4 background="#e3dfd9">52 <GreyText>เกมที่ชนะ</GreyText></Col4>
                        </Row>
                    </RowWrapper>
                </TableWrapper>
                <ButtonWrapper>
                    <div>
                        <ViewRankButton>เข้าสู่ระบบเพื่อดูแรงค์</ViewRankButton>
                    </div>
                    <ButtonRightSection>
                        <IconButton inactive>
                            <PreviousButton inactive flipx />
                        </IconButton>
                        <IconButton inactive>
                            <NextButton flipx inactive />
                        </IconButton>
                        <PageNumberWrapper>
                            หน้า 1/2022
                        </PageNumberWrapper>
                        <IconButton>
                            <NextButton />
                        </IconButton>
                        <IconButton>
                            <PreviousButton />
                        </IconButton>
                    </ButtonRightSection>
                </ButtonWrapper>
            </BottomSection>
            <Footer />
        </>
    )
}

export default Leaderboards;
