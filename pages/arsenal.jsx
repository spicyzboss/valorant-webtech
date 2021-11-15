import styled from 'styled-components';
import { Footer, Head, NavBar, Title } from '../components'
import { useState } from 'react';
import Gun from '../assets/gun.json'

const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #ece8e1;
`

const Container = styled.div`
    width: 75%;
    height: 100%;
    border-left: 1px solid #bdbcb7;
    padding-bottom: 20vw;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3vw;
    width: 100%;
    height: auto;
    border: 0.1rem solid #bdbcb7;
    cursor: pointer;
    position: relative;
    transition: background-color .3s ease-in-out;

    &:hover {
        background-color: #ff4655;
    }
`

const GunImage = styled.img`
    width: 100%;
    filter: drop-shadow(1rem 1.5rem 0 rgba(0, 0, 0, 0.2));
    transition: all .2s ease-in-out;

    ${ItemWrapper}:hover & {
        scale: .95;
        opacity: .15;
    }
`

const ItemName = styled.p`
    font-family: 'Kanit', sans-serif;
    font-size: 4.75rem;
    font-weight: 900;
    padding: 0;
    margin: 0;
    ${ItemWrapper}:hover & {
        color: #ece8e1;
        z-index: 3;
    }
`

const ValorantText = styled.p`
    font-family: serif;
    font-weight: bold;
    font-size: 17rem;
    position: fixed;
    top: 30vh;
    user-select: none;
    margin: 0;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #2a343f33;
`

const ItemDesc = styled.p`
    color: #768079;
    ${ItemWrapper}:hover & {
        display: none;
    }
`

const ItemHoverWrapper = styled.ul`
    display: none;
    list-style: none;
    padding: 0 4vw 0 2vw;
    position: absolute;
    top: 200px;
    left: 6rem;
    transition: all .3s ease-in-out;

    ${ItemWrapper}:hover & {
        display: block;
    }
`

const ItemHover = styled.li`
    color: #ece8e1;
    position: relative;
    padding: 1rem;

    &::before {
        content: "";
        height: 3rem;
        width: 3rem;
        border: 1px solid #ece8e1;
        position: absolute;
        left: -4rem;
    }

    &::after {
        content: "";
        height: .5rem;
        width: .5rem;
        background-color: #ece8e1;
        position: absolute;
        left: -2.65rem;
        top: 2.25rem;
    }
`

const ListItem = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

const TitleWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    margin: 8.5vw 0 3vw;
    padding: 2vw 0 0;
    border-top: 1px solid #bdbcb7;
    position: relative;
`

const ButtonBorder = styled.div`
    border-left: solid #bdbcb7 1px;
    border-right: solid #bdbcb7 1px;
    left: 0;
    width: 100%;
    height: 29px;
    position: absolute;
`

const TopBorder = styled(ButtonBorder)`
    border-top: solid #bdbcb7 1px;
    top: 0;
`

const BottomBorder = styled(ButtonBorder)`
    border-bottom: solid #bdbcb7 1px;
    bottom: 0;
`

const StyledItemFilterBox = styled.div`
    width: 270px;
    height: 68px;
    padding: 2vw 1vw 2vw 2vw;
    cursor: pointer;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ItemFilterBox = ({ children }) => (
    <StyledItemFilterBox>
        <TopBorder />
        { children }
        <BottomBorder />
    </StyledItemFilterBox>
)

const StyledArrowDown = styled.div`
    width: 20px;
    height: 20px;
    transition: all .2s ease-in-out;
    transform: ${props => props.flip ? "rotate(-90deg)" : "rotate(90deg)"};
`

const ArrowDown = ({ flip }) => (
    <StyledArrowDown flip={flip}>
        <svg viewBox="0 0 20 20">
            <path d="M6.3 3l3.6 3.5m4.5 3.5l-8.2 7" stroke="#000" pathLength="1" />
        </svg>
    </StyledArrowDown>
)

const FilterList = [
    "อาวุธทั้งหมด",
    "ปืนพก",
    "ปืนกล",
    "ปืนลูกซอง",
    "ปืนไรเฟิล",
    "ปืนสไนเปอร์",
    "อาวุธหนัก",
    "อาวุธระยะประชิด"
]

const DropdownList = styled.ul`
    opacity: ${props => props.open ? 1 : 0};
    z-index: ${props => props.open ? "5" : "-1"};
    transition: all .1s ease-in-out;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    width: 270px;
    height: 200px;
    overflow: auto;
    border: 1px solid #bdbcb7;
    border-top: none;
    background-color: #ece8e1;
`

const FilterListItem = styled.div`
    padding: .65vw 2vw;
    cursor: pointer;
    transition: all .1s ease-in-out;
    &:hover {
        background-color: #0f1923;
        color: #ece8e1;
    }
`

const FilterWrapper = styled.div`
    position: absolute;
    right: 0;
`

const Arsenal = () => {
    const [filter, setFilter] = useState("อาวุธทั้งหมด")
    const [openDropdown, setOpenDropdown] = useState(false)

    return (
        <>
            <Head title="คลังแสง VALORANT: เลือกอาวุธของคุณ และดูรายละเอียดของอาวุธ" />
            <NavBar />
            <MainWrapper>
                <ValorantText>VALORANT</ValorantText>
                <Container>
                    <TitleWrapper>
                        <Title textColor="black" fontSize="6.25rem">เลือกอาวุธของคุณ</Title>
                        <FilterWrapper onClick={() => setOpenDropdown(!openDropdown)}>
                            <ItemFilterBox>
                                <p style={{ fontWeight: "bold" }}>{filter}</p>
                                <ArrowDown flip={openDropdown}/>
                            </ItemFilterBox>
                            <DropdownList open={openDropdown}>
                                {FilterList.map((item, index) => {
                                    if (item != filter) {
                                        return <FilterListItem key={index} onClick={() => setFilter(item)}>{item}</FilterListItem>
                                    }
                                })}
                            </DropdownList>
                        </FilterWrapper>
                    </TitleWrapper>
                    <ListItem>
                        {Gun.map((item, index) => {
                            if (item.type == filter || filter == "อาวุธทั้งหมด") {
                                return (
                                    <ItemWrapper key={index}>
                                        <ItemName>{item.name}.</ItemName>
                                        <GunImage src={item.pict} alt={item.name}/>
                                        <ItemDesc>{item.desc}</ItemDesc>
                                        <ItemHoverWrapper>
                                            {item.hover.map((item, index) => {
                                                return <ItemHover key={index}>{item}</ItemHover>
                                            })}
                                        </ItemHoverWrapper>
                                    </ItemWrapper>
                                )
                            }
                        })}
                    </ListItem>
                </Container>
            </MainWrapper>
            <Footer />
        </>
    )
}

export default Arsenal;
