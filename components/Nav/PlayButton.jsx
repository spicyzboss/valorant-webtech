import styled from "styled-components";

const Button = styled.button`
    background-color: rgb(255, 70, 85);
    margin-top: 20px;
    margin-left: 4px;
    margin-right: 4px;
    height: 40px;
    width: 130px;
    border: none;
    border-radius: 2px;
    color: white;
    font-family: 'Bai Jamjuree', sans-serif;
    cursor: pointer;
    position: absolute;
    right: 26px;
`

const PlayButton = ({ children }) => {
    return (
        <Button>
            {children}
        </Button>
    )
}

export default PlayButton;
