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
color: #8b978f;
&:hover{
    color: #ff4655;
}
`
const CategoryBar = () => {
    const router = useRouter();
    const { category } = router.query;
    const items = [{"name": "ทั้งหมด", "value": "all"},
        {"name": "วอลเปเปอร์", "value": "wallpaper"},
        {"name": "วิดีโอ", "value": "video"},
        {"name": "สกรีนช็อต", "value": "screenshot"},
        {"name": "อาร์ทเวิร์ก", "value": "artwork"},
        {"name": "โลโก้", "value": "logo"},
        {"name": "คอนเทนต์ครีเอเตอร์", "value": "content_creator"}
    ]
    return (
    <>
        <Bar>
            {
                items.map((item, index)=>{
                    if(item.value == category){
                        return <Category key={ index } style={{ color: "black", borderBottom: "1px solid black" }}><Link href={ `/media/${ item.value}` } scroll={false}>{ item.name }</Link></Category>
                    }
                    return <Category key={ index }><Link href={ `/media/${ item.value}` } scroll={false}>{ item.name }</Link></Category>

                })
                
            }
            <FilterDropbox></FilterDropbox>
        </Bar>

    </>)
}

export default CategoryBar;