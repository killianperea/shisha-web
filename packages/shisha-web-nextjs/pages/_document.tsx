import { ColorModeScript } from '@chakra-ui/react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document<any> {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps, locale: ctx.query.locale};
    }

    render(): JSX.Element {
        return (
            <Html lang={this.props.locale}>
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#222222" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#262a33" />
                </Head>
                <ColorModeScript initialColorMode="system" />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;