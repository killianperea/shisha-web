import { Box, Stack } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { useContext } from "react";
import ContextCurrentPage from "../../../contexts/ContextCurrentPage";
import MenuItem from "./MenuItem";

const MenuLinks = ({ isOpen }): JSX.Element => {

    const { currentUrl, locale } = useContext(ContextCurrentPage);
    const router = useRouter();

    return (

        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <MenuItem
                    to={`/${locale}/home`}
                    isActive={`/${locale}${currentUrl}` === router.asPath}
                >
                    Home
                        </MenuItem>
                <MenuItem to="/how">How It Works</MenuItem>

            </Stack>
        </Box>
    )
}

export default MenuLinks;