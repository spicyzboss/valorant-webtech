import styled from 'styled-components'

const StyledTitle = styled.p`
  font-size: 6rem;
  font-weight: bold;
  font-family: 'Kanit', sans-serif;
  color: ${props => props.color};
  margin: auto;
`

const Title = ({ textColor, children }) => {
    return (
        <StyledTitle color={textColor}>
            {children}
        </StyledTitle>
    )
}

export default Title;
