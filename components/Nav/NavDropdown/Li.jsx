import Link from 'next/link'
import { StyledLi } from '../../../styles/nav_components';

const Li = ({ href, title }) => {
    return (
        <Link href={href} passHref>
            <StyledLi>
                <a>{title}</a>
            </StyledLi>
        </Link>
    )
}

export default Li;
