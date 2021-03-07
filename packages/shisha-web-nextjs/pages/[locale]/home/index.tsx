import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Layout from "../../../component/ui/Layout";
import { locales } from "../../../constants/languageConfig";
import ContextCurrentPage from "../../../contexts/ContextCurrentPage";

const Home: NextPage<{ locale: string }> = ({ locale }) => {
    const currentPageStatus = {
        currentUrl: `/home`,
        locale
    }
    return (
        <>
            <ContextCurrentPage.Provider value={currentPageStatus}>
                <Layout withHeader withFooter>
                    <div>Home with {locale}</div>
                </Layout>
            </ContextCurrentPage.Provider>
        </>
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