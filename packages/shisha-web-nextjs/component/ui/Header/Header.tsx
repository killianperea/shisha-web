import Logo from "./Logo";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import NavBarContainer from "./NavBarContainer";
import ToggleThemeColor from "./ToggleThemeColor";

const Header = (props): JSX.Element => {
    return (
        <NavBarContainer {...props}>
            <Logo width={["90px", "90px", "150px", "150px"]} />
            <MenuMobile display={{ base: "flex", md: "none" }} />
            <MenuDesktop display={{ base: "none", md: "flex" }} />
            <ToggleThemeColor display={{ base: 'none', md: 'flex' }}/>
        </NavBarContainer>
    )
}

export default Header;