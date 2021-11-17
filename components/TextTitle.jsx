import styled from 'styled-components'

const StyledTitle = styled.p`
  font-size: ${props => props.fontSize ? props.fontSize : "4.25rem"};
  font-weight: bold;
  font-family: 'Kanit', sans-serif;
  color: ${props => props.color};
  margin: 0;
  width: ${props => props.width ? props.width : "60%"};
  line-height: 1.3;
`

const Title = ({ textColor, children, fontSize,textAlign,width }) => {
    return (
        <StyledTitle color={textColor} fontSize={fontSize} textAlign={textAlign} width={width}>
            {children}
        </StyledTitle>
    )
}

export default Title;
