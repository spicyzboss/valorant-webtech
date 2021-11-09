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
    background-color: wheat;
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
    height: 14vh;
    background-color: black;
`

const RankHead = styled.div`
    width: auto;
    padding: 20px 25px;
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;
`

const NameHead = styled.div`
    height: 100%;
    width: 100%;
    background-color: green;
`

const SeasonHead = styled.div`
    height: 100%;
    width: 23%;
    background-color: blue;
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
                </TableWrapper>
            </BottomSection>
            <Footer />
        </>
    )
}

export default Leaderboards;
