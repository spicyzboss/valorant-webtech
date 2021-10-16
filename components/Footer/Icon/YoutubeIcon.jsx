import styled from 'styled-components'

const StyledLogo = styled.svg`
    width: 24px;
    height: 24px;
    transition: fill .3s;
    cursor: pointer;
    &:hover {
        fill: white;
    }
`

const YoutubeIcon = () => {
    return (
        <StyledLogo viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm5.47-16.231c.602.148 1.077.583 1.237 1.136C19 9.908 19 12 19 12s0 2.092-.293 3.095c-.16.553-.635.988-1.238 1.136C16.38 16.5 12 16.5 12 16.5s-4.378 0-5.47-.268c-.602-.149-1.077-.584-1.237-1.137C5 14.092 5 12 5 12s0-2.092.293-3.095c.16-.553.635-.988 1.237-1.136C7.622 7.5 12 7.5 12 7.5s4.378 0 5.47.269zM14.226 12l-3.659-1.9v3.8l3.66-1.9z" />
        </StyledLogo>
    )
}

export default YoutubeIcon;
