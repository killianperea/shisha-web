import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }): JSX.Element => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
};
export default MyApp;
