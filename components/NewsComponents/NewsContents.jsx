import styled from 'styled-components';
import React, {window} from 'react';

const ArticleImg = styled.div`
    width: 100vw;
    height: 70vh;
    overflow: hidden;
`
const Article = function({ imgID }){
    const imgPath = `news_content/pic/news/N_${ imgID }.jpeg`
    console.log(imgPath);
    if (typeof window !== "undefined") {
        window.addEventListener('scroll', (e) => {
            console.log(window.scrollY)
          });
      }
    
    let x = 1;
    return (
        <>
            <ArticleImg><img className="moveOnScroll" src={ imgPath } width="100%"/> </ArticleImg>
        </>

    )
}


const NewsContents = ({ data }) =>{
    return (
        <>
            <Article imgID={ data.ID }></Article>

            <div style={{ width:"100vw", height: "100vh"}}/>
        </>
    )
    
}

export default NewsContents;