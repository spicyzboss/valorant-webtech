import styled from "styled-components";
import { FooterLayout } from "./FooterLayout";
import RiotGamesLogo from "./RiotGamesLogo";
import FistLogo from "./FistLogo";
import ButtonWrapper from "./LinkHover";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './Icon'

const P = styled.p`
    user-select: none;
    font-size: 12px;
`

const Reserved = styled(P)`
    max-width: 500px;
    text-align: center;
    cursor: default;
`

const LogoWrapper = styled.div`
    display: flex;
    cursor: pointer;
`

const Underline = styled(P)`
    text-decoration: underline;
    cursor: pointer;
`

const LinkWrapper = styled.div`
    display: flex;
    column-gap: 12px;
`

const SocialWrapper = styled.div`
    display: flex;
    column-gap: 24px;
`

const Footer = () => {
    return (
        <FooterLayout>
            <ButtonWrapper>
                <P>ดาวน์โหลดเกม</P>
            </ButtonWrapper>
            <LogoWrapper>
                <FistLogo />
                <RiotGamesLogo />
            </LogoWrapper>
            <SocialWrapper>
                <FacebookIcon/>
                <YoutubeIcon/>
                <InstagramIcon/>
            </SocialWrapper>
            <Reserved>© สงวนลิขสิทธิ์ตามกฏหมาย พ.ศ. 2563 บริษัท Riot, VALORANT และโลโก้เครื่องหมายการค้า เครื่องหมายบริการและ/หรือ เครื่องหมายการค้าจดทะเบียนที่เกี่ยวข้อง ถือเป็นกรรมสิทธิ์ของ Riot Games, Inc.</Reserved>
            <LinkWrapper>
                <Underline>นโยบายความเป็นส่วนตัว</Underline>
                <Underline>ข้อกำหนดการใช้</Underline>
                <Underline>การตั้งค่าคุกกี้</Underline>
            </LinkWrapper>
        </FooterLayout>
    )
}

export default Footer;
