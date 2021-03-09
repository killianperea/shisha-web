import { HStack, StackDivider } from "@chakra-ui/react";
import FooterButtonItem from "./FooterButtonItem";

const LegalMenu = ({ ...props }): JSX.Element => {
    return (
        <HStack {...props} spacing="15px" divider={<StackDivider orientation="vertical" />}>
            <FooterButtonItem to="/">Info legal</FooterButtonItem>
            <FooterButtonItem to="/">Privacidad</FooterButtonItem>
            <FooterButtonItem to="/">Cookies</FooterButtonItem>
            <FooterButtonItem to="/">contacto</FooterButtonItem>
        </HStack>
    )
}

export default LegalMenu;