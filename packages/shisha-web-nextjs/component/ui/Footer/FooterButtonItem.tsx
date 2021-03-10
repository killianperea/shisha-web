import { Button, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";

const FooterButtonItem = ({ children, to = "/" , ...props }) => {
    const router = useRouter();

    const buttonColorHover = useColorModeValue("gray.700", "gray.300");
    const buttonColorActive = useColorModeValue("black", "white");
    return (
        <Button
            variant="unstyled"
            onClick={() => {
                router.push(to);
            }}
            color="gray.500"
            fontSize="12px"
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
        </Button>
    )
}

export default FooterButtonItem