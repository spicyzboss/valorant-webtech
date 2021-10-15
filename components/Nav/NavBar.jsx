import NavLayout from "./NavLayout";
import NavItem from "./NavItem";

const NavBar = () => {
    return (
        <NavLayout>
            <NavItem href="/"></NavItem>
            {/* <NavItem>ข้อมูลเกม</NavItem> */}
            <NavItem href="/media">สื่อ</NavItem>
            <NavItem href="/news">ข่าวสาร</NavItem>
            <NavItem href="/leaderboards">กระดานผู้นำ</NavItem>
            {/* <NavItem>ซัพพอร์ต</NavItem> */}
            {/* <NavItem>โซเชียล</NavItem> */}
            {/* <NavItem>อีสปอร์ต</NavItem> */}
        </NavLayout>
    )
}

export default NavBar;
