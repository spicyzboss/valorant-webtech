import styled, { css } from 'styled-components'

const BlankCard = styled.div`
    width: 50vw;
    height: 55vh;
    display: inline-block;
    position: relative;
    margin-right: 17.5vw;
    left: 0;
    background:red;
    &:hover .hoverSlide:before{
        transform: translateX(-10%) skewX(-10deg);

    }
`


export default BlankCard;

