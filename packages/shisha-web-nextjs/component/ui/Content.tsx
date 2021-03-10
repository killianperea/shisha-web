import { Box, HStack } from "@chakra-ui/react";

const Content = ({ children, withFooter = false, ...props }): JSX.Element => {

    const footerPaddingBottom = withFooter ? [4, 4, "9rem", "9rem"] : 4;

    return (
        <HStack align="start" isInline={true} spacing="24px" pb={footerPaddingBottom} {...props}>
            <Box minWidth={["0", "0", "150px", "200px"]} as="aside" display={["none", "none", "flex", "flex"]}></Box>
            <Box as="main" flex="1" marginRight={["24px", "24px", "24px", "0"]}>{children}</Box>
            <Box minWidth={["0", "0", "150px", "200px"]} as="aside" display={["none", "none", "flex", "flex"]}></Box>
        </HStack>
    )
}

export default Content;