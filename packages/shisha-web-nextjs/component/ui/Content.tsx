import { Box, HStack, useBreakpointValue } from "@chakra-ui/react";

const Content = ({ children }): JSX.Element => {

    const hideAside = useBreakpointValue({ base: true, md: false });
    const asideMinWidth = useBreakpointValue({ base: '200px', xl: '300px' })

    return (
        <HStack align="start" isInline={true} spacing="24px" pb={[4, 4, "7rem", "7rem"]}>
            <Box minWidth={asideMinWidth} as="aside" hidden={hideAside}></Box>
            <Box flex="1" marginRight={["24px", "24px", "0", "0"]}>{children}</Box>
            <Box minWidth={asideMinWidth} as="aside" hidden={hideAside}></Box>
        </HStack>
    )
}

export default Content;