import { Footer, Head, NavBar } from '../components'
import { NewsContents } from '../components/NewsComponents';
import { css } from 'styled-components'

const NewsCss = css`

    html,
    body {
    padding: 0;
    margin: 0;
    
    overflow-x: hidden;
    background-color: antiquewhite;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    box-sizing: border-box;
    }
`

const News_Content04 = () =>{
    const data = require("../public/news_content/contents.json");
    return (
        <>
            <Head title="ข่าวสาร VALORANT: อัปเดต วิดีโอ และบันทึกแพตช์ล่าสุด" />
            <NavBar />
            <style>{ NewsCss }</style>
            <NewsContents data={ data.NEWS[3] }/>
            <Footer />
        </>
    )
    
}

export default News_Content04;