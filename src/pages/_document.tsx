import { ReactElement } from 'react';
import { DocumentProps, Head, Html, Main, NextScript } from 'next/document';
import { getHtmlLocaleAttributes } from 'next-locales/server';

interface CustomDocumentProps {
  styleElements: ReactElement[];
}

const CustomDocument = ({
  styleElements,
  __NEXT_DATA__,
}: DocumentProps & CustomDocumentProps) => (
  <Html {...getHtmlLocaleAttributes(__NEXT_DATA__)}>
    <Head>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      {styleElements}
    </Head>
    <body className="bg-white dark:bg-black">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default CustomDocument;
