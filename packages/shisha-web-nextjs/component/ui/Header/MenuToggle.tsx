import { Box } from "@chakra-ui/react";
import { BsX, BsJustify } from "react-icons/bs";

const MenuToggle = ({ toggle, isOpen }) => {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            {isOpen ? <Box as={BsX} size="25px"/> : <Box as={BsJustify} size="25px"/>}
        </Box>
    )
}

export default MenuToggle;