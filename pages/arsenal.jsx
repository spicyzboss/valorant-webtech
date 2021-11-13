import styled from 'styled-components';
import { Footer, Head, NavBar, Title } from '../components'

const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #ece8e1;
`

const Container = styled.div`
    width: 85%;
    height: 100%;
    border-left: 1px solid black;
`

const ItemWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2vw;
    width: 50%;
    height: 50%;
    background-color: red;
`

const ListItem = styled.div`
    display: flex;
    justify-content: space-between;
`

const Arsenal = () => {
    return (
        <>
            <Head title="คลังแสง VALORANT: เลือกอาวุธของคุณ และดูรายละเอียดของอาวุธ" />
            <NavBar />
            <MainWrapper>
                <Container>
                    <Title textColor="black">เลือกอาวุธของคุณ</Title>
                    <ListItem>
                        <ItemWrapper>test</ItemWrapper>
                        <ItemWrapper>test</ItemWrapper>
                    </ListItem>
                </Container>
            </MainWrapper>
            <Footer />
        </>
    )
}

export default Arsenal;
