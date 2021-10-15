import styled from "styled-components";
import { NavItemLayout, NavArrowUp } from "../../../styles/nav_components";

const ExternalLink = ({ title, children }) => {
    return (
        <NavItemLayout>
            {title}
            {children}
            <NavArrowUp />
        </NavItemLayout>
    )
}

export default ExternalLink;
