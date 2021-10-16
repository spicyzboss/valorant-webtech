import NavLayout from "./NavLayout";
import { NavItem } from "./NavItem";
import { Dropdown, ExternalLi, Li } from "./NavDropdown";
import { External } from "./NavExternalLink";
import { ValorantLogo, RiotLogo } from "../../styles/nav_components";
import Separator from './NavSeparator'
import LangButton from "./LangButton";
import PlayButton from "./PlayButton";

const NavBar = () => {
    return (
        <NavLayout>
            <RiotLogo />
            <Separator />
            <ValorantLogo href="/" />
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
            <LangButton />
            <PlayButton>เล่นเลย</PlayButton>
        </NavLayout>
    )
}

export default NavBar;
