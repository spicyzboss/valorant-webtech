import styled from "styled-components";

const MapImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Picture = styled.div`
    width: 80%;
    height: 100%;
    position: relative;
    margin-right: 10vh;
    overflow: hidden;
    &:before{
        content: "";
        width: 120%;
        height: 100%;
        background: #ff4655;
        position: absolute;
        display:block;
        transform: translateX(-110%) skewX(-10deg);
        transition: 1s;
        mix-blend-mode: multiply;
    }
`
const WarpIng = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    cursor: grab;
`
const Map_Card = ({ data }) => {

    return (
        <>
        <WarpIng>
            <Picture className="hoverSlide">
                <MapImg src={ data.imgpath }/>
            </Picture>
        </WarpIng>
        </>
    )
}

export default Map_Card;