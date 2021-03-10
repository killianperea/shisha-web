import { Box, Link, useColorModeValue } from "@chakra-ui/react";

const Copyright = ({ ...props }): JSX.Element => {
    const boxColor = useColorModeValue("gray.500", "gray.400")
    return (
        <Box {...props}>
            <Box color={boxColor} fontSize="10px">&copy; Copyright {new Date().getFullYear()}, <Link href="https://es.linkedin.com/in/killianperea" isExternal>Killian Perea Ruiz</Link></Box>
        </Box>
    )
}

export default Copyright;