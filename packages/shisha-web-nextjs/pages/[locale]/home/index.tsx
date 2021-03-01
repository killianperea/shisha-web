import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { locales } from "../../../constants/languageConfig";

const Home: NextPage<{ locale: string }> = ({ locale }) => {
    return (
        <div>Home with {locale}</div>
    );
};

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext<ParsedUrlQuery>) => {
    return {
        props: {
            locale: ctx.params?.locale
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: locales.map(locale => ({ params: { locale } })),
        fallback: false,
    };
};

export default Home;