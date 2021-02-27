import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: { Component: any, pageProps: any }): JSX.Element => {
  return <Component {...pageProps} />
}

export default MyApp;
