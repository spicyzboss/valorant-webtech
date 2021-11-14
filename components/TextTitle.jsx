import styled from 'styled-components'

const StyledTitle = styled.p`
  font-size: ${props => props.fontSize ? props.fontSize : "4.25rem"};
  font-weight: bold;
  font-family: 'Kanit', sans-serif;
  color: ${props => props.color};
  margin: 0;
  width: 60%;
  line-height: 1.3;
`

const Title = ({ textColor, children, fontSize }) => {
    return (
        <StyledTitle color={textColor} fontSize={fontSize}>
            {children}
        </StyledTitle>
    )
}

export default Title;
