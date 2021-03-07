import Container from "./Container";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header/Header";


const Layout = ({ children, withHeader = false, withFooter = false }): JSX.Element => {
    return (
        <Container>
            { withHeader ? <Header /> : null }
            <Content>{children}</Content>
            { withFooter ? <Footer /> : null }
        </Container>
    );
}

export default Layout;