import styled from "styled-components"
import Link from 'next/link'

const A = styled.a`
    font-family: 'Bai Jamjuree', sans-serif;
    padding-left: 1em;
    padding-right: 1em;
    color: white;
    line-height: 80px;
    font-size: 14px;
    font-weight: bold;
    margin-left: .5em;
    margin-right: .5em;
    &:hover {
        border-bottom: 2px rgb(255, 70, 85) solid;
    }
`

const NavItem = ({ href, children, dropdown }) => {
    return (
        <Link href={href} passHref>
            <A>{(children)}</A>
        </Link>
    )
}

export default NavItem;
