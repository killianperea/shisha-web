import { useRouter } from "next/router";
import { useEffect } from "react";
import { getInitialLocale } from "../translations/getInitialLocale";


const RedirectHome = (): JSX.Element => {
    const router = useRouter();
    useEffect(() => {
        router.push(`/[locale]/home`, `/${getInitialLocale()}/home`);
    }, []);

    return null;
}

export default RedirectHome;