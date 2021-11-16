import styled, { css } from 'styled-components'
import styles from '../styles/News.module.css'


const TextBgContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 150vh;
    background: #0f1923;
`
const Txt = styled.span`
    font-family: DINNextLTW04-Medium;
    font-size: 22.65vw;
    font-weight: 400;
    Z-index: 1;
    @media (max-width: 800px){
        font-size: 27.65vw;
    }
`
const TextBG = () => {
    return (
        <>
        <TextBgContainer>
            <h2 className={ styles.stroke }>
                <Txt className={ styles.textBackground1 }>WE ARE</Txt>
                <Txt className={ styles.textBackground2 }>VALORANT</Txt>
            </h2>
        </TextBgContainer>
        </>

    )
    

}
export default TextBG;
export {Txt, TextBgContainer};

