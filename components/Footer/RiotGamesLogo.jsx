import styled from 'styled-components'

const StyledLogo = styled.svg`
    width: 60px;
    height: 30px;
`

const RiotGamesLogo = ({ href }) => {
    return (
        <StyledLogo viewBox="0 0 600 305.41" fill="#E6E6E6">
            <path d="m404.82 290.61-.39225-11.291 39.032-.46128.35814-12.305-39.851-.49538-.39793-11.431 52.503-1.2291.43285-13.5h-70.833l-2.1115 65.51h74.251l-.52138-13.525zm-353.18-24.086-.83372 12.256 19.699.65862-.24932 12.442-41.232-1.209 1.7963-35.938 56.692-1.3121-.81934-13.525h-73.228l-6.5665 65.51h83.436l-2.1631-39.519zm516.81 5.0681-54.116-9.1478.2347-7.0907 51.77-1.931-1.3064-13.525h-66.547l-3.4036 33.955 55.016 9.566.24932 6.2399-57.242 2.2232-1.4038 13.525h80.115z"/>
            <path d="m347.63 305.41-6.5664-65.51h-18.851l-27.082 31.228-27.085-31.228h-18.851l-6.5664 65.51h22.146l2.1201-42.499 28.237 28.973 28.231-28.973 2.1258 42.499z"/>
            <path d="m254.55 0h-44.324l-4.0338 202.59h53.552z"/>
            <path d="m391.89 158.52-48.907 1.5786-1.6215-119.15 51.151 1.5499zm42.862-158.43h-138.19l-5.3804 202.5h153.38z"/>
            <path d="m600 44.336-4.9363-44.335h-136.15l1.1517 39.493 43.547 1.507 4.4635 161.59h53.66l-16.052-160.14z"/>
            <path d="m73.64 41.444 42.711-1.4296 4.8675 40.364-49.297 23.286zm49.899 161.15h58.167l-37.909-90.925 30.251-16.528-20.668-95.139h-148.48l-4.8875 43.905 33.216-1.1088-16.018 159.8h51.984l1.4067-50.939 37.456-20.462z"/>
            <path d="m151.82 275.89 4.5037-21.433 21.625-.97698 4.518 21.507zm37.044 29.526h22.424l-17.743-65.513h-52.615l-17.74 65.513h22.424l3.4723-16.528 36.402.47021z"/>
        </StyledLogo>
    )
}

export default RiotGamesLogo;