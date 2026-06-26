import { Html, Head, Main, NextScript } from "next/document";

// _document.js - applies to EVERY PAGE automatically
//    - Head / Body / Footer / Typography? - styling ?

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        put some stuff here
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
