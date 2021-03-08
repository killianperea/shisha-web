import { ChakraProvider } from '@chakra-ui/react';
import Fonts from '../component/global/Fonts';
import CustomTheme from '../theme/CustomTheme';

const App = ({ Component, pageProps }): JSX.Element => {
  return (
    <ChakraProvider theme={CustomTheme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
};
export default App;
