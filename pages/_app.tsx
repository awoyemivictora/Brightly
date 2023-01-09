import "../styles/globals.css";
import '../styles/main.css'
import '../styles/responsive.css'
import type { AppProps } from "next/app";
import { MeshProvider } from "@meshsdk/react";

import Head from 'next/head'




if (typeof window !== "undefined") {

document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
});

document.onkeydown = function(e) {
  if (e.keyCode == 123) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "j".charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};

}






function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
     <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Brightly</title>
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="apple-touch-icon" sizes="57x57" href="/img/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/img/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/img/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/img/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/img/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/img/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/img/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/img/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/img/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/img/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/img/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>

        <script defer src="/js/jquery.min.js"></script>
        <script defer src="/js/jquery.marquee.min.js"></script>
        <script defer src="/js/masonry.pkgd.min.js"></script>
        <script defer src="/js/owl.carousel.min.js"></script>
      </Head>
    <MeshProvider>
      <Component {...pageProps} />
    </MeshProvider>
    </>
  );
}

export default MyApp;