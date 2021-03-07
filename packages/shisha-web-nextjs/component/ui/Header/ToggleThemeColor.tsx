import { Box, HStack, Switch, useColorMode } from "@chakra-ui/react";
import { FiSun, FiMoon } from 'react-icons/fi';

const ToggleThemeColor = (): JSX.Element => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <HStack align="center" display={{ base: 'none', md: 'flex' }}>
            <Box as={FiSun} size="15px" />
            <Switch id="toggle-theme-color" isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
            <Box as={FiMoon} size="15px" />
        </HStack>

    )
}

export default ToggleThemeColor;