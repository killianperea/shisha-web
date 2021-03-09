import { useBreakpointValue } from "@chakra-ui/react";
import Container from "./Container";
import Content from "./Content";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";


const Layout = ({ children, withHeader = false, withFooter = false }): JSX.Element => {

    const fontSize = useBreakpointValue({base: "12px", md: "14px"})

    return (
        <Container>
            { withHeader ? <Header position={['sticky', 'sticky', 'static', 'static']} top="0"/> : null }
            <Content fontSize={fontSize} withFooter={withFooter}>{children}</Content>
            { withFooter ? <Footer /> : null }
        </Container>
    );
}

export default Layout;