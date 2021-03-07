
import { extendTheme } from "@chakra-ui/react";

const customBreakpoints = ['576px', '768px', '992px', '1200px', '1400px'];

customBreakpoints['sm'] = customBreakpoints[0];
customBreakpoints['md'] = customBreakpoints[1];
customBreakpoints['lg'] = customBreakpoints[2];
customBreakpoints['xl'] = customBreakpoints[3];
customBreakpoints['2xl'] = customBreakpoints[4];

export default extendTheme({
  breakpoints: customBreakpoints as any,
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  }
});

