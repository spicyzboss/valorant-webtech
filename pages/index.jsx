import styled from "styled-components";
import { Head, NavBar, Footer } from "../components";

const Section = styled.section`
    height: 100vh;
    background-color: white;
`

export default function Home() {
    return (
            <>
                <Head title="VALORANT: เกมยิงปืนจาก Riot Games ในรูปแบบ 5v5 ที่ขับเคลื่อนโดยตัวละครนักยิงปืนผู้มากความสามารถ" />
                <NavBar />
                <Section>
                    <h1>Hello world</h1>
                </Section>
                <Footer />
            </>
    )
}
