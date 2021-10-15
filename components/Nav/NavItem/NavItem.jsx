import Link from 'next/link'
import {StyledLink} from '../../../styles/nav_components'

const NavItem = ({ href, title, children }) => {
    return (
        <Link href={href} passHref>
            <StyledLink>{title}{children}</StyledLink>
        </Link>
    )
}

export default NavItem;
