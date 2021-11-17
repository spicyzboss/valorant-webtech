import { useState } from "react";
import styled from "styled-components";
import React from "react";
import Link from 'next/link'
import { useRouter } from "next/router";

const Text = styled.div`
    text-align: center;
    color: black;
    background: #ece8e1;
    width: 10vw;
    height: 10vh;
    padding-top: 3vh;
    user-select: none;
    &:hover{
        background: black;
        color: white;
    }
`
const CurrentText = styled(Text)`
vertical-align: middle;
position: relative;

&:hover{
    background: none;
    color: black;
}
&:before{
    content: "";
    position: absolute;
    width: 100%;
    height: 40%;
    border: 1px solid #8b978f;
    border-bottom: none;
    top: 0;
    left: 0;
}
&:after{
    content: "";
    position: absolute;
    width: 100%;
    height: 40%;
    border: 1px solid #8b978f;
    border-top: none;
    bottom: 0;
    left: 0;
}
`


const Box = styled.div`
    width: 10vw;
    height: 10vh;
    position: absolute;
    right: 10vw;
    background: none;
    top: 0;
    cursor: pointer;
    transition: 1s;

`
const Drop = styled.div`
    background: red;
    height: 303%;
    width: 101%;
    border: 1px solid #8b978f;
`

const FilterDropbox = () => {
    const router = useRouter();
    let { category, type } = router.query;
    const [state, setState] = useState(false);
    if(typeof type === 'undefined'){
        type = `all`
    }
    const onSelectChange = (e) => {
        let locale = e.target.dataset.value;
        if(typeof category === 'undefined'){
            category = `all`;
            locale = `//media/${ category }/${ locale }`
            router.push(locale)
        }

        else if(typeof type === 'undefined'){
            locale = `${ category }/${ locale }`
            router.push(locale)
        }
        else{
            locale = {
                pathname: '/media/[category]/[type]',
                query: {category: `${ category }`, "type": `${ locale }`},
                asPath: `/media/${ category }/${ locale }`
            }
            router.push(locale.asPath, locale.asPath,{
                scroll: false
            })
        }
        e.target.parentElement.style.display = "none";
        setState(false)

    }
    let convert = {
        "all": "ทั้งหมด",
        "agents": "เอเจนท์",
        "maps": "แผนที่",
        "arsenals": "คลังแสง",
    }
    let itemList = [{"type" : "ทั้งหมด", "value" : `all`},
     {"type" : "เอเจนท์", "value" : `agents`},
     {"type" : "แผนที่", "value" : `maps`},
     {"type" : "คลังแสง", "value" : `arsenals`}]
    const openDropbox = (e) => {
        e.target.nextElementSibling.style.display = state?"none":"block";
        setState(state?false:true);
    }
    return (
        <>
            <Box>
                <CurrentText onClick={ openDropbox } style={{ zIndex: 1}} value={`/${type}`}>{ convert[type] }</CurrentText>
                <Drop style={{ display: "none"}}>
                {
                    itemList.map((item, index)=>{
                        if(item.type != convert[type]){
                            return <Text key={ index } onClick={ onSelectChange } data-value={item.value}>{item.type}</Text>
                        }
                    })
                }
                </Drop>

            </Box>
        </>
    )
}
export default FilterDropbox;
