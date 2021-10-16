import styled from 'styled-components'

const StyledLogo = styled.svg`
    width: 35px;
    height: 35px;
    margin-top: 20px;
`

const ValorantLogo = () => {
    return (
        <StyledLogo viewBox="0 0 100 100" fill="#fff">
            <path d="M99.25 48.66V10.28c0-.59-.75-.86-1.12-.39l-41.92 52.4a.627.627 0 00.49 1.02h30.29c.82 0 1.59-.37 2.1-1.01l9.57-11.96c.38-.48.59-1.07.59-1.68zM1.17 50.34L32.66 89.7c.51.64 1.28 1.01 2.1 1.01h30.29c.53 0 .82-.61.49-1.02L1.7 9.89c-.37-.46-1.12-.2-1.12.39v38.38c0 .61.21 1.2.59 1.68z" />
        </StyledLogo>
    )
}

export default ValorantLogo;