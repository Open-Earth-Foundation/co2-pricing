import { Html, Head, Main, NextScript } from 'next/document'

import type { NextPageWithLayout } from './_app';

const Document: NextPageWithLayout = () => {
    return (
        <Html>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document;
