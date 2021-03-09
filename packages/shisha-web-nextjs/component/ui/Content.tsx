import { Box, HStack, useBreakpointValue } from "@chakra-ui/react";

const Content = ({ children, withFooter = false, ...props}): JSX.Element => {

    const hideAside = useBreakpointValue({ base: true, lg: false });
    const asideMinWidth = useBreakpointValue({ base: '150px', xl: '200px' });

    const footerPaddingBottom = withFooter ? [4, 4, "9rem", "9rem"] : 4;

    return (
        <HStack align="start" isInline={true} spacing="24px" pb={footerPaddingBottom} {...props}>
            <Box minWidth={asideMinWidth} as="aside" hidden={hideAside}></Box>
            <Box flex="1" marginRight={["24px", "24px", "24px", "0"]}>{children}</Box>
            <Box minWidth={asideMinWidth} as="aside" hidden={hideAside}></Box>
        </HStack>
    )
}

export default Content;