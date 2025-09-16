// pages/_app.js
import "../public/style.css"; // import css global

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
