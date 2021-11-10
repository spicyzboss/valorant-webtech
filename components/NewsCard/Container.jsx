import styled from 'styled-components'

const Container = styled.div`
    width: 85vw;
    position: absolute;
    border-left: 0.1px solid white;
    border-right: 0.1px solid white;
    height: auto;
    left: 7.5vw;
    @media (max-width: 1024px){
        width: 92.5vw;
    }
`

export default Container;