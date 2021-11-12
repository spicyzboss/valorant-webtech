import styled from 'styled-components';
import { Footer, Head, NavBar, Title } from '../components'
import Image from 'next/image'

const TopSection = styled.section`
    height: 68vh;
    width: 100%;
    background-color: green;
    display: flex;
    justify-content: center;
`

const HeadWrapper = styled.div`
    width: 71vw;
    height: 100%;
    display: flex;
    align-items: flex-end;
`

const DateWhite = styled.p`
    color: white;
    padding-bottom: 1.5rem;
`

const BottomSection = styled.section`
    width: 100%;
    padding: 5vh 7.5vw;
    background-color: #ece8e1;
`

const InputWrapper = styled.div`
    padding: 2vh 0;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 2vw;
`

const InputBox = styled.input`
    border: 1px solid #8b978f;
    padding: 1rem;
    background-color: lightgray;
    font-size: 1rem;
    width: 30vw;
    height: 65px;
    &:focus {
        outline: none;
    }
`

const TableWrapper = styled.div`
    margin: 2rem 0;
`

const HeadTable = styled.div`
    display: flex;
    width: 100%;
    height: 17vh;
    background-color: black;
`

const RankHead = styled.div`
    width: 15%;
    padding: 20px 25px;
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    border: 1px solid #8b978f;
`

const NameHead = styled.div`
    height: 100%;
    width: 65%;
    border: 1px solid #8b978f;
`

const SeasonHead = styled.div`
    height: 100%;
    width: 20%;
    border: 1px solid #8b978f;
`

const RowWrapper = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const Row = styled.li`
    display: flex;
    height: ${props => props.height};
    border-bottom: ${props => props.border ? "3px solid rgba(189,188,183,.4);" : "none"};
    margin-top: .5vh;
`

const Col = styled.div`
    display: flex;
    justify-content: center;
    background: ${props => props.background ? props.background : "transparent"};
    align-items: ${props => props.aligny == "bottom" ? "flex-end" : "center"};
    padding: 1vh 0;
`

const Col1 = styled(Col)`
    width: 15%;
`

const Col2 = styled(Col)`
    width: 12.5%;
    padding: ${props => props.padding ? props.padding : "1vh 4vh"};
    font-size: ${props => props.title ? "1.5em" : "1em"};
`

const Col3 = styled(Col)`
    width: 52.5%;
    justify-content: flex-start;
    padding-left: 5%;
`

const Col4 = styled(Col)`
    width: 20%;
`

const GreenText = styled.span`
    color: #39b54a;
`

const Leaderboards = () => {
    return (
        <>
            <Head title="กระดานผู้นำ VALORANT: ค้นหาหรือล็อกอินเพื่อดูแรงค์" />
            <NavBar />
            <TopSection>
                <HeadWrapper>
                    <div>
                        <DateWhite>09/11/64</DateWhite>
                        <Title textColor="white">กระดานจัดอันดับ VALORANT</Title>
                    </div>
                </HeadWrapper>
            </TopSection>
            <BottomSection>
                <InputWrapper>
                    <p>ค้นหากระดานจัดอันดับ</p>
                    <InputBox type="text" placeholder="ชื่อผู้เล่น#แท็กไลน์" />
                </InputWrapper>
                <TableWrapper>
                    <HeadTable>
                        <RankHead>
                            <Image src="/img/radiant-badge.png" alt="radiant-badge" width="100%" height="100%" objectFit="contain" />
                        </RankHead>
                        <NameHead></NameHead>
                        <SeasonHead></SeasonHead>
                    </HeadTable>
                    <RowWrapper>
                        <Row height="7vh">
                            <Col1 aligny="bottom" nobackground>แรงค์</Col1>
                            <Col2 aligny="bottom" nobackground padding="1vh 0"><GreenText>เรตติ้ง</GreenText></Col2>
                            <Col3 nobackground></Col3>
                            <Col4 aligny="bottom" nobackground>กำลังดำเนินการ</Col4>
                        </Row>
                        <Row height="19vh" border>
                            <Col1 background="#e3dfd9">1</Col1>
                            <Col2 background="#dbd9d2" title padding="3vh 2vh">
                                <Image src="/img/radiant-badge.png" alt="radiant-badge" width="100%" height="100%" objectFit="contain" />
                                911
                            </Col2>
                            <Col3 background="rgba(219,217,210,.8);">PRX Jinggg#Jing</Col3>
                            <Col4 background="#e3dfd9">46 เกมที่ชนะ</Col4>
                        </Row>
                        <Row height="12vh" border>
                            <Col1 background="#e3dfd9">1</Col1>
                            <Col2 background="#dbd9d2">
                                <Image src="/img/radiant-badge.png" alt="radiant-badge" width="100%" height="100%" objectFit="contain" />
                                911
                            </Col2>
                            <Col3 background="rgba(219,217,210,.8);">PRX Jinggg#Jing</Col3>
                            <Col4 background="#e3dfd9">46 เกมที่ชนะ</Col4>
                        </Row>
                        <Row height="12vh" border>
                            <Col1 background="#e3dfd9">1</Col1>
                            <Col2 background="#dbd9d2">
                                <Image src="/img/radiant-badge.png" alt="radiant-badge" width="100%" height="100%" objectFit="contain" />
                                911
                            </Col2>
                            <Col3 background="rgba(219,217,210,.8);">PRX Jinggg#Jing</Col3>
                            <Col4 background="#e3dfd9">46 เกมที่ชนะ</Col4>
                        </Row>
                        <Row height="12vh" border>
                            <Col1 background="#e3dfd9">1</Col1>
                            <Col2 background="#dbd9d2">
                                <Image src="/img/radiant-badge.png" alt="radiant-badge" width="100%" height="100%" objectFit="contain" />
                                911
                            </Col2>
                            <Col3 background="rgba(219,217,210,.8);">PRX Jinggg#Jing</Col3>
                            <Col4 background="#e3dfd9">46 เกมที่ชนะ</Col4>
                        </Row>
                        <Row height="12vh" border>
                            <Col1 background="#e3dfd9">1</Col1>
                            <Col2 background="#dbd9d2">
                                <Image src="/img/radiant-badge.png" alt="radiant-badge" width="100%" height="100%" objectFit="contain" />
                                911
                            </Col2>
                            <Col3 background="rgba(219,217,210,.8);">PRX Jinggg#Jing</Col3>
                            <Col4 background="#e3dfd9">46 เกมที่ชนะ</Col4>
                        </Row>
                        <Row height="12vh" border>
                            <Col1 background="#e3dfd9">1</Col1>
                            <Col2 background="#dbd9d2">
                                <Image src="/img/radiant-badge.png" alt="radiant-badge" width="100%" height="100%" objectFit="contain" />
                                911
                            </Col2>
                            <Col3 background="rgba(219,217,210,.8);">PRX Jinggg#Jing</Col3>
                            <Col4 background="#e3dfd9">46 เกมที่ชนะ</Col4>
                        </Row>
                        <Row height="12vh" border>
                            <Col1 background="#e3dfd9">1</Col1>
                            <Col2 background="#dbd9d2">
                                <Image src="/img/radiant-badge.png" alt="radiant-badge" width="100%" height="100%" objectFit="contain" />
                                911
                            </Col2>
                            <Col3 background="rgba(219,217,210,.8);">PRX Jinggg#Jing</Col3>
                            <Col4 background="#e3dfd9">46 เกมที่ชนะ</Col4>
                        </Row>
                        <Row height="12vh" border>
                            <Col1 background="#e3dfd9">1</Col1>
                            <Col2 background="#dbd9d2">
                                <Image src="/img/radiant-badge.png" alt="radiant-badge" width="100%" height="100%" objectFit="contain" />
                                911
                            </Col2>
                            <Col3 background="rgba(219,217,210,.8);">PRX Jinggg#Jing</Col3>
                            <Col4 background="#e3dfd9">46 เกมที่ชนะ</Col4>
                        </Row>
                        <Row height="12vh" border>
                            <Col1 background="#e3dfd9">1</Col1>
                            <Col2 background="#dbd9d2">
                                <Image src="/img/radiant-badge.png" alt="radiant-badge" width="100%" height="100%" objectFit="contain" />
                                911
                            </Col2>
                            <Col3 background="rgba(219,217,210,.8);">PRX Jinggg#Jing</Col3>
                            <Col4 background="#e3dfd9">46 เกมที่ชนะ</Col4>
                        </Row>
                    </RowWrapper>
                </TableWrapper>
            </BottomSection>
            <Footer />
        </>
    )
}

export default Leaderboards;
