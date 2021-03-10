import { Flex, useColorModeValue } from "@chakra-ui/react";


const FooterContainer = ({ children, ...props }): JSX.Element => {
    
    const borderBottom = useColorModeValue("gray.400", "gray.600");

    return (
        <Flex
            as="footer"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            p={8}
            bg="transparent"
            borderTop="1px solid"
            borderTopColor={borderBottom}
            {...props}
        >
            {children}
        </Flex>
    )
}

export default FooterContainer;