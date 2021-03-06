import styled from "styled-components";

const Wrapper = styled.a`
    transition: color .3s;
    cursor: pointer;
    &:hover {
        color: white;
    }
    font-weight: 700;
`

const ButtonWrapper = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default ButtonWrapper;
