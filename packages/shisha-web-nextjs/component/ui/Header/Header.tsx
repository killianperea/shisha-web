import { useState } from "react";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import MenuToggle from "./MenuToggle";
import NavBarContainer from "./NavBarContainer";
import ToggleThemeColor from "./ToggleThemeColor";

const Header = (props): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <NavBarContainer {...props}>
            <Logo width="100px" />
            <MenuToggle toggle={toggle} isOpen={isOpen}></MenuToggle>
            <MenuLinks isOpen={isOpen} />
            <ToggleThemeColor />
        </NavBarContainer>
    )
}

export default Header;