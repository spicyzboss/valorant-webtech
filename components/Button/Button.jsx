import styled from "styled-components";

const StyledButtonWrapper = styled.button`
    border: none;
    width: 270px;
    height: 68px;
    background: none;
    padding: 6px;
    cursor: pointer;
    margin: 0;
    position: relative;
`

const Content = styled.div`
    background-color: ${props => props.isWhite ? "#ece8e1" : "#ff4655"};
    height: 100%;
    width: 100%;
    font-family: 'Bai Jamjuree', sans-serif;
    font-weight: 500;
    overflow: hidden;
    color: ${props => props.isWhite ? "#0f1923" : "white"};
    transition: color .2s ease-in-out;
    &:hover {
        outline: ${props => props.isBordered ? `solid ${props.isWhite ? "#ece8e144" : "#ff465544"} 1px` : "none"};
        color: white;
    }
`

const WhiteBox = styled.div`
    position: absolute;
    background-color: #0f1923;
    width: 5px;
    height: 5px;
    right: 0;
    bottom: 0;
    transition: background ease-in .3s;
    z-index: 11;
    ${Content}:hover & {
        background-color: white;
    }
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

const HoverContent = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: "";
        background: #0f1923;
        width: 120%;
        height: 100%;
        position: absolute;
        transition: all ease-in .25s;
        transform: translateX(-100%) skewX(-20deg);
        z-index: 1;
    }

    ${Content}:hover &::before {
        transform: translateX(0) skewX(-20deg);
    }
`

const Text = styled.p`
    z-index: 10;
`

const Button = ({ children, isWhite, isBordered }) => (
    <StyledButtonWrapper>
        <TopBorder />
        <BottomBorder />
        <Content isWhite={isWhite} isBordered={isBordered}>
            <HoverContent>
                <Text>{children}</Text>
                <WhiteBox />
            </HoverContent>
        </Content>
    </StyledButtonWrapper>
)

export default Button;
