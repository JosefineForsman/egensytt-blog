import Link from "next/link";
import Head from "next/head";
import Navbar from "./Navbar";
import Header from "./Header";
import Script from "next/script";

export default function Layout({ children }: any) {
  return (
    <div className="layout">
      <Head>
        <title>Egensytt</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-2R3V858F9W"
        strategy="afterInteractive"
      />
      <Script strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2R3V858F9W');
        `}
      </Script>
      <Header />
      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright 2024 Egensytt</p>
      </footer>
    </div>
  );
}
