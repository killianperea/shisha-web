import { Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import MenuButton from "../../global/MenuButton";


const MenuItem = ({ children, to = "/", isActive = false, ...props }) => {
    const router = useRouter();

    const buttonColorHover = useColorModeValue("gray.700", "gray.300");
    const buttonColorActive = useColorModeValue("black", "white");
    return (
        <MenuButton
            variant="unstyled"
            isActive={isActive}
            onClick={() => {
                router.push(to);
            }}
            color="gray.500"
            _active={{
                color: buttonColorActive
            }}
            _hover={{
                color: buttonColorHover
            }}
            {...props} >
            <Text>
                {children}
            </Text>
        </MenuButton>
    )
}

export default MenuItem