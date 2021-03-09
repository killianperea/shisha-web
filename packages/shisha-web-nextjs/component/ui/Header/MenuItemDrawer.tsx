import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsChevronLeft } from "react-icons/bs";
import MenuButton from "../../global/MenuButton";

const MenuItemDrawer = ({ children, to = "/", isActive = false, onClose }): JSX.Element => {
    const router = useRouter();

    const pushRoute = () => {
        router.push(to);
    }

    const activeFunc = isActive ? onClose : pushRoute;

    return (
        <MenuButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            padding="0 15px"
            width="100%"
            display="flex"
            variant="unstyled"
            isActive={isActive}
            onClick={activeFunc}>
            <BsChevronLeft size="1.5rem" />
            <Flex flex="1" justifyContent="center" mr="24px">
                <Text>
                    {children}
                </Text>
            </Flex>
        </MenuButton>
    )
}
export default MenuItemDrawer;