import styled from 'styled-components'

const StyledLogo = styled.svg`
    width: 24px;
    height: 24px;
    margin-top: 28px;
`

const RiotLogoWrapper = styled.div`
    cursor: pointer;
    margin-left: 12px;
    margin-right: 12px;
`

const StyledCaretDown = styled.svg`
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: 8px;
    margin-bottom: 4px;
    padding-top: 6px;
    fill: #7E7E7E;
    ${RiotLogoWrapper}:hover & {
        fill: white;
    }
`

const CaretDown = () => {
    return (
        <StyledCaretDown viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
        </StyledCaretDown>
    )
}

const RiotLogo = () => {
    return (
        <RiotLogoWrapper>
            <StyledLogo viewBox="0 0 24 24" fill="#fff">
                <path d="M12.534 21.77l-1.09-2.81 10.52.54-.451 4.5zM15.06 0L.307 6.969 2.59 17.471H5.6l-.52-7.512.461-.144 1.81 7.656h3.126l-.116-9.15.462-.144 1.582 9.294h3.31l.78-11.053.462-.144.82 11.197h4.376l1.54-15.37Z" />
            </StyledLogo>
            <CaretDown />
        </RiotLogoWrapper>
    )
}

export default RiotLogo;