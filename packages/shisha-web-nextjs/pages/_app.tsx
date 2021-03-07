import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import CustomTheme from '../theme/CustomTheme';

const App = ({ Component, pageProps }): JSX.Element => {
  return (
    <ChakraProvider theme={CustomTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
};
export default App;
