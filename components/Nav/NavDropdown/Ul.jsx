import styled from "styled-components"
import { NavItemLayout } from "../../../styles/nav_components"

export const Ul = styled.ul`
    list-style-type: none;
    min-width: 200px;
    background-color: #111;
    position: absolute;
    top: 80px;
    left: 0;
    margin: 0;
    padding: 0;
    display: none;
    ${NavItemLayout}:hover & {
        display: block;
    }
`