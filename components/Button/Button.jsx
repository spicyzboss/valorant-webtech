import styled from "styled-components";

const StyledButtonWrapper = styled.button`
    border: solid #bdbcb7 1px;
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
    color: ${props => props.isWhite ? "#0f1923" : "white"};
    transition: background ease-in .2s, border .2s;
    &:hover {
        background: #0f1923;
        outline: solid ${props => props.isWhite ? "#ece8e133" : "#ff465533"} 1px;
        color: white;
    }
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Box = styled.div`
    position: absolute;
    background-color: #0f1923;
`

const WhiteBox = styled(Box)`
    width: 5px;
    height: 5px;
    right: 0;
    bottom: 0;
    transition: background ease-in .3s;
    ${Content}:hover & {
        background-color: white;
    }
`

const BlackLeftBox = styled(Box)`
    width: 10px;
    height: 10px;
    top: 29px;
    left: -5px;
`
const BlackRightBox = styled(Box)`
    width: 10px;
    height: 10px;
    top: 29px;
    right: -5px;
`

const Button = ({ children, isWhite }) => (
    <StyledButtonWrapper>
        <BlackLeftBox />
        <Content isWhite={isWhite}>
            {children}
            <WhiteBox />
        </Content>
        <BlackRightBox />
    </StyledButtonWrapper>
)

export default Button;
