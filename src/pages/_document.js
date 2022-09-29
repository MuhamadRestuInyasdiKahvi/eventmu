import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html className='scroll-smooth'>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&family=Volkhov:wght@700&display=swap" rel="stylesheet" />

                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}