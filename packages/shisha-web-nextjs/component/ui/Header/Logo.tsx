
import { Box } from "@chakra-ui/react";
import LogoIcon from "../../LogoIcon";

const Logo = (props): JSX.Element => {
    return (
        <Box id="logo" {...props}>
            <LogoIcon />
        </Box>
    )
}

export default Logo