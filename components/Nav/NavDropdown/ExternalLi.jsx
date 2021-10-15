import { DropdownArrowUp, StyledLi } from "../../../styles/nav_components";

const ExternalLi = ({ title }) => {
    return (
        <StyledLi>
            {title}
            <DropdownArrowUp />
        </StyledLi>
    )
}

export default ExternalLi;
