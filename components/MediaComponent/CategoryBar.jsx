import styled from 'styled-components'
import Link from 'next/link'
import { FilterDropbox } from '.'
import { useRouter } from 'next/router'
const Bar = styled.ul`
    height: 10vh;
    position: relative;
    display: block;
    }
`
const Category = styled.li`
float: left;
margin-left: 50px;
list-style-type: none; 
height: 5vh;
`
const CategoryBar = () => {
    const router = useRouter();
    const { category } = router.query;

    return (
    <>
        <Bar>
            <Category style={{ color: `${ category == "all"?"black": "#8b978f"}`, borderBottom: `${ category == "all"?"1px solid black": "none"}` }} ><Link href="/media/all" scroll={false}>ทั้งหมด</Link></Category>
            <Category style={{ color: `${ category == "wallpaper"?"black": "#8b978f"}`, borderBottom: `${ category == "wallpaper"?"1px solid black": "none"}` }} ><Link href="/media/wallpaper" scroll={false}>วอลเปเปอร์</Link></Category>
            <Category style={{ color: `${ category == "video"?"black": "#8b978f"}`, borderBottom: `${ category == "video"?"1px solid black": "none"}` }} ><Link href="/media/video" scroll={false}>วิดีโอ</Link></Category>
            <Category style={{ color: `${ category == "screenshot"?"black": "#8b978f"}`, borderBottom: `${ category == "screenshot"?"1px solid black": "none"}` }} ><Link href="/media/screenshot" scroll={false}>สกรีนช็อต</Link></Category>
            <Category style={{ color: `${ category == "artwork"?"black": "#8b978f"}`, borderBottom: `${ category == "artwork"?"1px solid black": "none"}` }} ><Link href="/media/artwork" scroll={false}>อาร์ทเวิร์ก</Link></Category>
            <Category style={{ color: `${ category == "logo"?"black": "#8b978f"}`, borderBottom: `${ category == "logo"?"1px solid black": "none"}` }} ><Link href="/media/logo" scroll={false}>โลโก้</Link></Category>
            <Category style={{ color: `${ category == "content_creator"?"black": "#8b978f"}`, borderBottom: `${ category == "content_creator"?"1px solid black": "none"}` }} ><Link href="/media/content_creator" scroll={false}>คอนเทนต์ครีเอเตอร์</Link></Category>
            <FilterDropbox></FilterDropbox>
        </Bar>

    </>)
}

export default CategoryBar;