import { Link } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { locales } from "../../constants/languageConfig";
import styles from '../../styles/Home.module.css';


const IndexPage: NextPage<{ locale: string }> = ({ locale }) => (
    <>
        <main className={styles.main}>
            <h1 className={styles.title}>
                Welcome to <Link href={`${locale}/blog`}>Blog</Link> with locale {locale}.
            </h1>
        </main>
    </>
);

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


export default IndexPage;