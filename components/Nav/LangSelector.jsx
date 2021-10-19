import styled from "styled-components";

const StyledLayout = styled.div`
    width: 240px;
    height: 360px;
    background-color: white;
    position: fixed;
    right: 70px;
    top: 94px;
    z-index: 5000;
    border-radius: 4px;
    display: ${props => props.isOpen ? "block" : "none"};
`

const StyledCheckedIcon = styled.svg`
    width: 20px;
    height: 20px;
    fill: #c4202b;
    position: absolute;
    right: 16px;
`

const CheckedIcon = () => (
    <StyledCheckedIcon viewBox="0 0 16 16">
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
    </StyledCheckedIcon>
)

const StyledTriangleUp = styled.svg`
    width: 32px;
    height: 32px;
    position: absolute;
    top: -14px;
    left: 104px;
`

const TriangleUp = () => {
    return (
        <StyledTriangleUp viewBox="0 0 16 16" fill="#fff">
            <path fillRule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"/>
        </StyledTriangleUp>
    )
}

const LanguageSupport = [
    "ENGLISH (NA)",
    "ENGLISH (EUW)",
    "DEUTSCH",
    "ESPAÑOL (EUW)",
    "FRANÇAIS",
    "ITALIANO",
    "POLSKI",
    "РУССКИЙ",
    "TÜRKÇE",
    "ESPAÑOL (LATAM)",
    "INDONESIAN",
    "日本語",
    "한국어",
    "PORTUGUÊS",
    "ภาษาไทย",
    "Tiếng Việt",
    "繁體中文",
    "العربية"
]

const StyleLangItem = styled.div`
    font-family: 'Kanit', sans-serif;
    font-size: 13px;
    font-weight: 400;
    padding: 10px 24px;
    margin: 0;
    width: 100%;
    color: ${props => props.selected ? "#c4202b" : "#999"};
    transition: color .4s;
    cursor: ${props => props.selected ? "default" : "pointer"};
    &:hover {
        color: #111;
    }
    position: relative;
    display: flex;
    align-items: flex-end;
`

const LangItem = ({ children, selected }) => (
    <StyleLangItem selected={children === selected}>
        {children}
        {children === selected ? (<CheckedIcon/>) : null}
    </StyleLangItem>
)

const Content = styled.div`
    overflow: auto;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 10px 0;
`

export const LangSelector = ({ isOpen }) => (
    <>
        <StyledLayout isOpen={isOpen}>
            <Content>
                {LanguageSupport.map((e, i) => (
                    <LangItem selected="ภาษาไทย" key={i}>
                        {e}
                    </LangItem>
                ))}
            </Content>
            <TriangleUp />
        </StyledLayout>
    </>
)