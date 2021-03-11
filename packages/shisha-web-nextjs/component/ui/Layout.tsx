import Container from "./Container";
import Content from "./Content";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";


const Layout = ({ children, withHeader = false, withFooter = false }): JSX.Element => {
    return (
        <Container>
            { withHeader ? <Header position={['sticky', 'sticky', 'static', 'static']} top="0"/> : null }
            <Content fontSize={["12px", "12px","14px","14px"]} withFooter={withFooter}>{children}</Content>
            { withFooter ? <Footer /> : null }
        </Container>
    );
}

export default Layout;