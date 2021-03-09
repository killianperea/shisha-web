import Copyright from "./Copyright";
import FooterContainer from "./FooterContainer";
import LegalMenu from "./LegalMenu";

const Footer = (): JSX.Element => {
    return (
        <FooterContainer position="absolute" bottom="0" display={['none', 'none', 'flex', 'flex']}>
            <LegalMenu position="relative"  left="50%" transform="translateX(-50%)"/>
            <Copyright position="relative" right="5px" />
        </FooterContainer>
    );
}

export default Footer;