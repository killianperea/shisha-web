import { Box, Link } from "@chakra-ui/react";

const Copyright = ({ ...props }): JSX.Element =>
    <Box {...props}>
        <Box fontSize="10px">&copy; Copyright {new Date().getFullYear()}, <Link href="https://es.linkedin.com/in/killianperea" isExternal>Killian Perea Ruiz</Link></Box>
    </Box>

export default Copyright;