import { Box, useColorModeValue } from "@chakra-ui/react";

const Container = ({ children }): JSX.Element => {
    const bg = useColorModeValue("gray.100", "#2B2D42");

    return (
        <Box minHeight="100vh" width="100%" bg={bg}>{children}</Box>
    );
}

export default Container;