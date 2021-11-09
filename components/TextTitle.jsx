import styled from 'styled-components'

const StyledTitle = styled.p`
  font-size: 4.25rem;
  font-weight: bold;
  font-family: 'Kanit', sans-serif;
  color: ${props => props.color};
  margin: 0;
  width: 60%;
  line-height: 1.3;
`

export default ({ textColor, children }) => {
    return (
        <StyledTitle color={textColor}>
            {children}
        </StyledTitle>
    )
}
