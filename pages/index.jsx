import styled from "styled-components";
import { Head, NavBar, Footer, Button } from "../components";

const Section = styled.section`
    height: 100vh;
    background-color: wheat;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
`

export default function Home() {
    return (
            <>
                <Head title="VALORANT: เกมยิงปืนจาก Riot Games ในรูปแบบ 5v5 ที่ขับเคลื่อนโดยตัวละครนักยิงปืนผู้มากความสามารถ" />
                <NavBar />
                <Section>
                    <h1>Hello world</h1>
                    <Button>Test</Button>
                    <Button>Test</Button>
                    <Button>Test</Button>
                    <Button>Test</Button>
                    <Button>Test</Button>
                    <Button>Test</Button>
                    <Button>Test</Button>
                </Section>
                <Footer />
            </>
    )
}
