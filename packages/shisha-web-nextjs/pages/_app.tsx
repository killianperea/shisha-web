import { ChakraProvider } from '@chakra-ui/react';
import Fonts from '../component/global/Fonts';
import Cookies from '../component/ui/Cookies';
import CustomTheme from '../theme/CustomTheme';

const App = ({ Component, pageProps }): JSX.Element => {
  return (
    <ChakraProvider theme={CustomTheme}>
      <Fonts />
      <Cookies locale={pageProps.locale} text={pageProps.cookies.text} button={pageProps.cookies.button}/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
};

export default App;
