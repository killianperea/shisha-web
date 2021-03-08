import { Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";


const MenuItem = ({ children, to = "/", isActive = false, ...props }) => {
    const router = useRouter();
    return (
        <Button
            variant="unstyled"
            isActive={isActive}
            onClick={() => {
                router.push(to);
            }}
            {...props} >
            <Text>
                {children}
            </Text>
        </Button>
    )
}

export default MenuItem