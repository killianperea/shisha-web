import { Link, Text } from "@chakra-ui/react";


const MenuItem = ({ children, to = "/", isActive = false }) => {
    return (
        <Link href={to}>
            <Text
                display="block"
                fontWeight={[
                    isActive ? 'bold' : 'normal',
                    isActive ? 'bold' : 'normal',
                    'normal',
                    'normal'
                ]}
                borderBottom={[
                    'transparent',
                    'transparent',
                    isActive ? '1px solid' : null,
                    isActive ? '1px solid' : null
                ]}>
                {children}
            </Text>
        </Link>
    )
}

export default MenuItem