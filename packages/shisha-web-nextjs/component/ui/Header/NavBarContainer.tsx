import { Flex, useColorModeValue } from "@chakra-ui/react";

const NavBarContainer = ({ children, ...props }): JSX.Element => {
    
    const bg = useColorModeValue("white", "gray.800");
    const borderBottom = useColorModeValue("gray.400", "gray.600");

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={[4, 4, 8, 8]}
            p={[2, 2, 6, 6]}
            bg={[bg, bg, "transparent", "transparent"]}
            borderBottom="1px solid"
            borderBottomColor={borderBottom}
            {...props}
        >
            {children}
        </Flex>
    )
}

export default NavBarContainer;