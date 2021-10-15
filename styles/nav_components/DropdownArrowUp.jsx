import styled from 'styled-components'
import { StyledLi } from './StyledLi'

const StyledArrowUp = styled.svg`
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: 2px;
    padding-top: 6px;
    fill: #7E7E7E;
    ${StyledLi}:hover & {
        fill: white;
    }
`

const DropdownArrowUp = () => {
    return (
        <StyledArrowUp viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
        </StyledArrowUp>
    )
}

export default DropdownArrowUp;