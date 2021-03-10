import { HStack } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { useContext } from "react";
import ContextCurrentPage from "../../../contexts/ContextCurrentPage";
import MenuItem from "./MenuItem";

const MenuDesktop = ({ ...props }): JSX.Element => {

    const { locale, menuItems } = useContext(ContextCurrentPage);
    const router = useRouter();

    return (

        <HStack spacing={8} {...props}>
            { menuItems.map(menuItem => {
                return (
                    <MenuItem key={menuItem.path}
                        id={`menuItemDesktop-${menuItem.path}`}
                        to={`/${locale}${menuItem.path}`}
                        isActive={`/${locale}${menuItem.path}` === router.asPath}>
                        {menuItem.name[locale]}
                    </MenuItem>
                )
            })}

        </HStack>
    )
}

export default MenuDesktop;