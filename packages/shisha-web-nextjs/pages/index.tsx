import { GetStaticProps } from "next";
import RedirectHome from "../component/RedirectHome";
import { SanityApi } from "../lib/sanityApi";
import { Utils } from "../lib/utils";


const RootPage = (): JSX.Element => <RedirectHome />;

export const getStaticProps: GetStaticProps = async () => {

    const cookies = await SanityApi.getCookiesConsient();

    return {
        props: {
            cookies: Utils.serialize(cookies)
        },
    };
};


export default RootPage;