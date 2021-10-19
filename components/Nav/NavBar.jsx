import NavLayout from "./NavLayout";
import { NavItem } from "./NavItem";
import { Dropdown, ExternalLi, Li } from "./NavDropdown";
import { External } from "./NavExternalLink";
import { ValorantLogo, RiotLogo } from "../../styles/nav_components";
import Separator from './NavSeparator'
import LangButton from "./LangButton";
import PlayButton from "./PlayButton";
import { useState } from 'react'
import { RightNav } from './RightNav'

const NavBar = () => {
    const [openRiotGameBar, setOpenRiotGameBar] = useState(false)
    const [openLangSelector, setOpenLangSelector] = useState(false)
    const [openPlayPopup, setOpenPlayPopup] = useState(false)
    const handleRiotGameBarClick = e => {
        e.preventDefault();
        setOpenRiotGameBar(!openRiotGameBar)
        setOpenLangSelector(false)
    }
    const handleLangClick = e => {
        e.preventDefault();
        setOpenLangSelector(!openLangSelector)
        setOpenRiotGameBar(false)
    }
    const handlePlayPopupClick = e => {
        e.preventDefault();
        setOpenPlayPopup(!openPlayPopup)
        setOpenRiotGameBar(false)
        setOpenLangSelector(false)
    }
    const RiotGameBarStateControl = state => {
        setOpenRiotGameBar(state)
    }
    const PlayPopupStateControl = state => {
        setOpenPlayPopup(state)
    }
    return (
        <NavLayout>
            <RiotLogo isGameBarOpen={openRiotGameBar} onClick={handleRiotGameBarClick} stateControl={RiotGameBarStateControl} />
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
            <RightNav>
                <LangButton isOpen={openLangSelector} onClick={handleLangClick} />
                <PlayButton isOpen={openPlayPopup} onClick={handlePlayPopupClick} stateControl={PlayPopupStateControl}>เล่นเลย</PlayButton>
            </RightNav>
        </NavLayout>
    )
}

export default NavBar;
