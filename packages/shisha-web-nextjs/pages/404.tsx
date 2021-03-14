import { GetStaticProps } from "next";
import { SanityApi } from "../lib/sanityApi";
import { Utils } from "../lib/utils";

const custom404 = (): JSX.Element => {
    return (
        <div>404</div>
    );
};

export const getStaticProps: GetStaticProps = async () => {

    const cookies = await SanityApi.getCookiesConsient();

    return {
        props: {
            cookies: Utils.serialize(cookies)
        },
    };
};

export default custom404