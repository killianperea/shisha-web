import { HStack } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { useContext } from "react";
import ContextCurrentPage from "../../../contexts/ContextCurrentPage";
import MenuItem from "./MenuItem";

const MenuDesktop = ({ ...props }): JSX.Element => {

    const { locale } = useContext(ContextCurrentPage);
    const router = useRouter();

    return (

        <HStack spacing={8} {...props}>
            <MenuItem
                id="menuItemHome"
                to={`/${locale}/home`}
                isActive={`/${locale}/home` === router.asPath}>
                Home
            </MenuItem>
            <MenuItem
                id="menuItemAbout"
                to="/about"
                isActive={`/${locale}/about` === router.asPath}>
                About
            </MenuItem>
        </HStack>
    )
}

export default MenuDesktop;