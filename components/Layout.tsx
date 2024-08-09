import Link from "next/link";
import Head from "next/head";
import Navbar from "./Navbar";
import Header from "./Header";
import { Box } from "@mui/material";

export default function Layout({ children }: any) {
  return (
    <div className="layout">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2R3V858F9W"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2R3V858F9W');
          `}
        </script>
      </Head>
      <Header />
      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright 2024 Egensytt</p>
      </footer>
    </div>
  );
}
