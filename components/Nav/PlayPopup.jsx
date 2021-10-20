import styled from "styled-components"
import { Button } from '../Button'

const PopupWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    display: ${props => props.isOpen ? "flex" : "none"};
    justify-content: center;
    align-items: center;
`

const DimmedBackground = styled.div`
    width: 100%;
    height: 100%;
    background-color: #111;
    opacity: .7;
    position: absolute;
    z-index: 4000;
    top: 0;
`

const Popup = styled.div`
    width: 100px;
    height: 100px;
    border-top: 1px solid #968d8c;
    border-bottom: 1px solid #968d8c;
    background-color: #0f1923;
    z-index: 6000;
    height: 40vh;
    width: calc(2/3*100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

const PopupTitleWrapper = styled.div`
    height: 70%;
    width: 100%;
    font-family: 'Kanit', sans-serif;
    font-size: 32px;
    font-weight: 600;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 24px;
`

const PopupButtonWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    column-gap: 40px;
`

const ButtonLabel = styled.p`
    color: white;
    font-size: 14px;
    font-weight: 300;
`

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ExitButtonWrapper = styled.button`
    width: 60px;
    height: 60px;
    border: solid white 1px;
    position: absolute;
    top: 15px;
    right: 15px;
    background: transparent;
    cursor: pointer;
`

const ExitButton = ({ onClick }) => {
    return (
        <ExitButtonWrapper onClick={onClick}>
            <ExitButtonStyle />
        </ExitButtonWrapper>
    )
}

const SvgExit = styled.svg`
    width: 48px;
    height: 48px;
    transition: scale .2s;
    ${ExitButtonWrapper}:hover & {
        scale: 1.15;
    }
`

const ExitButtonStyle = () => (
    <SvgExit viewBox="0 0 72 72">
        <path fill="none" stroke="#ece8e1" d="M61.5 9.5l-7 7m-38 38l-7 7M30.3 42l2.8-3m8.6 3L30.3 30m11.4 0l-2.6 2.8" />
    </SvgExit>
)

export const PlayPopup = ({ isOpen, stateControl }) => {
    return (
        <>
            <PopupWrapper isOpen={isOpen}>
                <Popup>
                    <PopupTitleWrapper>
                        <p>\</p>
                        <p>เตรียมตัวให้พร้อม</p>
                        <p>\</p>
                    </PopupTitleWrapper>
                    <PopupButtonWrapper>
                        <ButtonWrapper>
                            <ButtonLabel>ฉันยังไม่มีบัญชี Riot</ButtonLabel>
                            <Button isWhite isBordered>สร้างทันที</Button>
                        </ButtonWrapper>
                        <ButtonWrapper>
                            <ButtonLabel>ฉันมีบัญชี Riot แล้ว</ButtonLabel>
                            <Button isBordered>ลงชื่อเข้าใช้</Button>
                        </ButtonWrapper>
                    </PopupButtonWrapper>
                    <ExitButton onClick={() => stateControl(false)} />
                </Popup>
                <DimmedBackground onClick={() => stateControl(false)} />
            </PopupWrapper>
        </>
    )
}