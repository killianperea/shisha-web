
import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    IconButton,
    StackDivider,
    useColorModeValue,
    useDisclosure,
    VStack
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useRef } from "react";
import { BsJustify } from "react-icons/bs";
import ContextCurrentPage from "../../../contexts/ContextCurrentPage";
import MenuItemDrawer from "./MenuItemDrawer";
import ToggleThemeColor from "./ToggleThemeColor";

const MenuMobile = ({ ...props }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const { locale, menuItems } = useContext(ContextCurrentPage);
    const router = useRouter();

    const borderColorDivider = useColorModeValue("gray.400", "gray.200");
    const bgColorDrawer = useColorModeValue("gray.100", "gray.700");

    return (
        < >
            <IconButton
                backgroundColor="transparent"
                ref={btnRef}
                onClick={onOpen}
                aria-label="Open menu"
                icon={<BsJustify />}
                fontSize="25px"
                {...props} />
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
                scrollBehavior="inside">
                <DrawerOverlay>
                    <DrawerContent backgroundColor={bgColorDrawer}>
                        <DrawerCloseButton fontSize="1rem" />
                        <DrawerHeader>
                            <ToggleThemeColor />

                            <Flex marginTop="1rem" justifyContent="center">
                                Menu
                            </Flex>
                        </DrawerHeader>
                        <DrawerBody px="0">
                            <VStack divider={<StackDivider borderColor={borderColorDivider} />}>
                                <StackDivider borderColor={borderColorDivider} />
                                {menuItems.map(menuItem => {
                                    return (
                                        <MenuItemDrawer key={menuItem.path}
                                            id={`menuItemMobile-${menuItem.path}`}
                                            onClose={onClose}
                                            to={`/${locale}${menuItem.path}`}
                                            isActive={`/${locale}${menuItem.path}` === router.asPath}>
                                            {menuItem.name[locale]}
                                        </MenuItemDrawer>
                                    )
                                })}
                                <StackDivider borderColor={borderColorDivider} />
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}

export default MenuMobile;