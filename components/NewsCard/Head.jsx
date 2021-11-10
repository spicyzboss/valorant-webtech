import NextHead from 'next/head';

const Head = ({ title }) => {
    return (
        <NextHead>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title}</title>
        </NextHead>
    )
}

export default Head;