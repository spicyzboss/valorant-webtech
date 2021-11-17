import styled from 'styled-components'
import { RiotGamesBar } from '../../components/Nav/RiotGamesBar'
import RiotLogoWrapper from './RiotLogoWrapper'

export const StyledLogo = styled.svg`
    width: 75px;
    height: 24px;
    fill: ${props => props.color ? props.color : "#fff"};

    ${RiotLogoWrapper}:hover & {
        fill: red;
    }
`

const StyledCaretDown = styled.svg`
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-bottom: 4px;
    padding-top: 6px;
    fill: #7E7E7E;
    transform: ${props => props.flip ? "rotate(180deg)" : "none"};
`

export const CaretDown = ({ flip }) => {
    return (
        <StyledCaretDown viewBox="0 0 16 16" flip={flip}>
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
        </StyledCaretDown>
    )
}

const RiotLogo = ({ isGameBarOpen, onClick, stateControl }) => {
    return (
        <>
            <RiotLogoWrapper onClick={onClick}>
                <StyledLogo viewBox="0 0 75.89 24">
                    <path d="M69.31 20.67l4.22.71.26 2.63h-6.26l.11-1 4.48-.18v-.48l-4.3-.74.26-2.64h5.21l.1 1.05-4 .15zm-36.23 1.27l.06-1H36l.17 3.06h-6.52l.51-5.08h5.71l.07 1.05-4.43.1-.14 2.79 3.22.09v-1zm27.63.04v.87l4.1.1v1H59l.17-5.08h5.53v1.05l-4.1.09v.89h3.11v1z" />
                    <path d="M43.87 24h1.75l-1.39-5.08h-4.11L38.74 24h1.75l.27-1.28h2.85zm-2.9-2.25l.35-1.66 1.69-.08.36 1.67z" />
                    <path d="M56.28 24l-.52-5.08h-1.47l-2.12 2.42-2.11-2.42h-1.48L48.07 24h1.73l.17-3.29 2.2 2.24 2.21-2.24.17 3.29z" />
                    <path d="M43.2 16.03h-4.55l-1.21-5.54-2.93 1.59-.1 3.95h-4.07l1.26-12.4-2.6.09.38-3.41h11.61l1.61 7.38-2.36 1.28zM38.09 3.42l-3.34.11-.13 4.82 3.85-1.8z" />
                    <path d="M48.87.31h-3.46l-.32 15.72h4.19zm26.64 0l.36 3.44-4.24-.14 1.24 12.42h-4.19l-.35-12.54-3.41-.11-.09-3.07z" />
                    <path d="M52.18.32h10.8l.77 15.71h-12zm3.63 12.43l3.82-.12v-9l-4-.12z" />
                    <path d="M0 6.97l14.86-7 8.69 2.1L22 17.44h-4.41l-.82-11.2-.47.15-.78 11.05h-3.34l-1.59-9.29-.47.14.12 9.15H7.09L5.27 9.78l-.47.15.53 7.51h-3zm11.22 11.98l1.09 2.81 9 2.23.47-4.49z" />
                </StyledLogo>
                <CaretDown />
            </RiotLogoWrapper>
            <RiotGamesBar isOpen={isGameBarOpen} stateControl={stateControl} />
        </>
    )
}

export default RiotLogo;
