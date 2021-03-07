import { Flex } from "@chakra-ui/react";

const NavBarContainer = ({ children, ...props }): JSX.Element => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={[4, 4, 8, 8]}
            p={[4, 4, 8, 8]}
            bg={["gray.300", "gray.300", "transparent", "transparent"]}
            {...props}
        >
            {children}
        </Flex>
    )
}

export default NavBarContainer;