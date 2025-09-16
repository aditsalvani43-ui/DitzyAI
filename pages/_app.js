// pages/_app.js
import "../public/style.css"; // cuma di sini import CSS global

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
