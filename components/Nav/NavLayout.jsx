import styled from "styled-components"

const Nav = styled.nav`
    width: 100%;
    height: 80px;
    background-color: #111;
    display: flex;
    z-index: 10000;
    /* position: fixed; */
`

const NavLayout = ({ children }) => {
    return (
        <header>
            <Nav>
                {children}
            </Nav>
        </header>
    )    
}

export default NavLayout;
