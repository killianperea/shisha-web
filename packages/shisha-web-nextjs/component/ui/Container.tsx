import { Box, useColorModeValue } from "@chakra-ui/react";

const Container = ({ children }): JSX.Element => {
    const bgMobile = useColorModeValue("gray.100", "gray.800");
    const bgWeb = useColorModeValue("gray.100", "gray.800");

    return (
        <Box minHeight="100vh" width="100%" bg={[bgMobile, bgMobile, bgWeb, bgWeb]}>{children}</Box>
    );
}

export default Container;