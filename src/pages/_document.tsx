import * as React from 'react';
import NextDocument, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
} from 'next/document';

import { Favicon } from '@/components/favicon';

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps: DocumentInitialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" className={`scroll-smooth [--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem]`}>
        <Head>
          <Favicon />
          <script></script>
        </Head>
        <body className="bg-slate-900 font-sans text-slate-500 antialiased">
          <Main />
          <NextScript />
          <script></script>
        </body>
      </Html>
    );
  }
}
