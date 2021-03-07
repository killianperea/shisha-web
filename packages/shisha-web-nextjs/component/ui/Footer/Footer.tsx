import FooterContainer from "./FooterContainer";

const Footer = (): JSX.Element => {
    return (
        <FooterContainer position="absolute" bottom="0" display={['none', 'none', 'block', 'block']}>
            test
        </FooterContainer>
    );
}

export default Footer;