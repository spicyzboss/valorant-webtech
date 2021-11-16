import { useState } from "react";
import styled from "styled-components";
import React from "react";
import Link from 'next/link'
import { useRouter } from "next/router";

const Text = styled.option`
    text-align: center;
    position: absolute;
    color: black;
    font-weight: small;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    background: antiquewhite;
`


const Box = styled.select`
    width: 10vw;
    height: 10vh;
    position: absolute;
    right: 10vw;
    background: none;
    top: 0;
    cursor: pointer;
    border: 1px solid #8b978f;

`

const FilterDropbox = () => {
    const router = useRouter();
    let { category, type } = router.query;
    if(typeof type === 'undefined'){
        type = `all`
    }
    const onSelectChange = (e) => {
        let locale = e.target.value;
        if(typeof category === 'undefined'){
            category = `all`;
            locale = `media/${ category }/${ locale }`
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

    return (
        <>
            <Box onChange={onSelectChange}>
                <Text value={`/${type}`}>{ convert[type] }</Text>
                {
                    itemList.map((item, index)=>{
                        if(item.type != convert[type]){
                            return <Text key={ index } value={item.value}>{item.type}</Text>
                        }
                    })
                }

            </Box>
        </>

    )
}
export default FilterDropbox;
