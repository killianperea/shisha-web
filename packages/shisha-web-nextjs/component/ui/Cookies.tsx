import { Button } from "@chakra-ui/button";
import { useRouter } from "next/router";
import CookieConsent from "react-cookie-consent";

const Cookies = ({ locale, text, button }): JSX.Element => {
    const router = useRouter();

    const buttonStyles = {
        margin: "30px",
        background:"rgba(255, 255, 255, 0.08)"
    }


    return (
        <CookieConsent
            location="bottom"
            buttonText={button[locale] || button[router.asPath.split('/')[1]]}
            overlay={true}
            disableButtonStyles={true}
            ButtonComponent={Button}
            buttonStyle={buttonStyles}>
            {text[locale] || text[router.asPath.split('/')[1]]}
        </CookieConsent>
    )
}

export default Cookies;