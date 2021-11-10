import styled, { css } from 'styled-components'

// #ff4655 แดงที่ใช้

const Button = styled.button`
    width: 15rem;
    background: #ff4655;
    font-size: 2rem;
    &:hover{
        background: darkred;
        cursor: pointer;
    }
    `

const button = ({ children }, { href }) =>{
    return (
    <>
    <Button  href={ href }>{ children }</Button>
    </>
    )}
export default button