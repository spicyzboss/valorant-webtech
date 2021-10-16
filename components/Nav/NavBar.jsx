import NavLayout from "./NavLayout";
import { NavItem } from "./NavItem";
import { Dropdown, ExternalLi, Li } from "./NavDropdown";
import { External } from "./NavExternalLink";
import { ValorantLogo } from "../../styles/nav_components";
import Separator from './NavSeparator'

const NavBar = () => {
    return (
        <NavLayout>
            <NavItem href="/" />
            <Separator />
            <NavItem href="/">
                <ValorantLogo/>
            </NavItem>
            <Dropdown title="ข้อมูลเกม">
                <Li href="/agents" title="เอเจนท์" />
                <Li href="/maps" title="แผนที่" />
                <Li href="/arsenal" title="คลังแสง" />
            </Dropdown>
            <NavItem href="/media" title="สื่อ" />
            <NavItem href="/news" title="ข่าวสาร" />
            <NavItem href="/leaderboards" title="กระดานผู้นำ" />
            <Dropdown title="ซัพพอร์ต">
                <Li href="/specs" title="สเปค" />
                <ExternalLi title="ซัพพอร์ต" />
                <Li href="/community-code" title="กฏระเบียบ" />
            </Dropdown>
            <Dropdown title="โซเชียล">
                <ExternalLi title="FACEBOOK" />
                <ExternalLi title="YOUTUBE" />
                <ExternalLi title="INSTAGRAM" />
            </Dropdown>
            <External title="อีสปอร์ต" />
        </NavLayout>
    )
}

export default NavBar;