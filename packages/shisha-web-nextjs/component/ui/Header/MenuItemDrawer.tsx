import { Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsChevronLeft } from "react-icons/bs";

const MenuItemDrawer = ({ children, to = "/", isActive = false, onClose }): JSX.Element => {
    const router = useRouter();

    const pushRoute = () => {
        router.push(to);
    }

    const activeFunc = isActive ? onClose : pushRoute;

    return (
        <Button
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
        </Button>
    )
}
export default MenuItemDrawer;