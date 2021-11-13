import Text from '../NewsCard/Text'
import styled from 'styled-components';

const Warp = styled.div`
    height: auto;
    width: 40%;
    display: inline-table;
    @media (max-width: 1024px){
        display: block;
        width: 90%;
    }
`

const ContentText = ({ children }) =>{
    return (
        <>
        <Warp>
            <Text>{ children }</Text>
        </Warp>
        </>
    )
}
export default ContentText;
