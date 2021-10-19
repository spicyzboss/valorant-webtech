import styled from "styled-components"

const Nav = styled.nav`
    width: 100%;
    height: 80px;
    background-color: #111;
    display: flex;
    z-index: 4000;
    position: fixed;
    top: 0;
    padding-left: 26px;
    padding-right: 26px;
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
