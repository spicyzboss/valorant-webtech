import styled from "styled-components";
import { PlayPopup } from "./PlayPopup";

const Button = styled.button`
    background-color: rgb(255, 70, 85);
    margin-left: 4px;
    margin-right: 4px;
    height: 40px;
    width: 130px;
    border: none;
    border-radius: 2px;
    color: white;
    font-family: 'Bai Jamjuree', sans-serif;
    font-weight: 500;
    cursor: pointer;
    right: 26px;
`

const PlayButton = ({ children, onClick, isOpen, stateControl }) => {
    return (
        <>
            <Button onClick={onClick}>
                {children}
            </Button>
            <PlayPopup isOpen={isOpen} stateControl={stateControl} />
        </>
    )
}

export default PlayButton;
