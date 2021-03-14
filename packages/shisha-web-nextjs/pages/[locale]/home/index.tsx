import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Layout from "../../../component/ui/Layout";
import { locales } from "../../../constants/languageConfig";
import ContextCurrentPage from "../../../contexts/ContextCurrentPage";
import { SanityApi } from "../../../lib/sanityApi";
import { Utils } from "../../../lib/utils";
import { MenuItemModel } from "../../../models/MenuItemModel";

const Home: NextPage<{ locale: string, menuItems: MenuItemModel[] }> = ({ locale, menuItems }) => {

    const currentPageStatus = {
        currentUrl: `/home`,
        locale,
        menuItems
    }

    return (
        <ContextCurrentPage.Provider value={currentPageStatus}>
            <Layout withHeader withFooter>
                <div>Home with {locale}</div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque nulla, blandit aliquam feugiat sit amet, aliquet non risus. Proin nec dui ut orci dignissim imperdiet. Quisque eu odio mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In fringilla, odio vitae tempus interdum, massa elit aliquet est, lobortis porta tortor massa id nulla. Integer posuere sapien et rhoncus vestibulum. Ut et porta purus, quis placerat odio. Nullam ex lorem, tristique ut arcu in, luctus volutpat sapien. Maecenas rutrum, dolor eu bibendum gravida, libero dolor sodales nunc, id vehicula lectus felis tempor eros. Nam tincidunt nunc pharetra libero convallis pulvinar. Integer sit amet lacus vel magna porttitor porta. Ut ornare enim magna, et faucibus augue fringilla eget. Cras aliquet vulputate lacinia. Duis venenatis vel leo sed accumsan. Nunc ultrices egestas euismod.

                    Aliquam erat volutpat. Nam non magna non odio maximus feugiat. Duis gravida, nunc non rutrum consequat, tortor metus ultrices libero, nec iaculis erat neque eget enim. Donec a orci purus. Cras lobortis luctus neque et consequat. Vestibulum suscipit rhoncus viverra. Suspendisse finibus a ex sed porta. Aliquam erat volutpat. Proin at urna a enim consectetur vulputate eget tempus metus. Aliquam id sem vitae dui dictum mattis. Phasellus luctus consequat tempor.

                    Sed convallis eu mi eget laoreet. Vestibulum ut erat sagittis, consequat eros id, tincidunt metus. Curabitur et nunc euismod lacus sodales placerat sit amet in ipsum. Pellentesque porta velit a ullamcorper ultrices. Etiam gravida, odio eget scelerisque varius, arcu eros interdum tortor, ut semper leo risus et metus. Sed dapibus mi efficitur, malesuada lorem vel, consectetur arcu. Praesent facilisis augue a justo congue mattis. Aliquam ut odio scelerisque purus interdum commodo. In porttitor volutpat lacus. Curabitur bibendum vitae dolor vitae elementum. Mauris vehicula pellentesque dignissim.

                    Nunc et finibus nibh, nec pharetra turpis. Cras id metus maximus diam dictum tincidunt. Aliquam blandit venenatis egestas. In porttitor hendrerit elit maximus euismod. Aliquam feugiat massa leo, eget venenatis risus bibendum eget. Duis risus tellus, dapibus ut neque at, congue mollis justo. Nulla et rutrum purus. Praesent quis ligula ligula. Etiam tristique mauris aliquet varius sodales. Duis quis nulla sed eros sodales iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam augue ipsum, rhoncus sed blandit sit amet, ultrices ut tellus. Nullam sit amet urna metus. Aliquam bibendum quam lorem, vel fermentum risus ullamcorper nec. Etiam id blandit nibh. Donec sit amet sodales enim.

                    Nullam a dui vitae nulla facilisis euismod eget vitae nulla. Proin id sodales augue. Aliquam quis leo sed lacus aliquam sollicitudin ut et eros. Sed non felis felis. Maecenas enim sem, egestas ut nibh eu, pretium sagittis enim. Proin sed libero convallis, fermentum sapien eget, interdum leo. Nunc efficitur tempor feugiat. Nullam scelerisque velit odio, ac ornare velit lobortis eu. Cras lobortis elementum laoreet. Pellentesque efficitur velit vitae est posuere tempus. Aenean eu dignissim mi.
                    </div>
            </Layout>
        </ContextCurrentPage.Provider>
    );
};

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext<ParsedUrlQuery>) => {

    const menuItems = await SanityApi.getMenuItems();
    const cookies = await SanityApi.getCookiesConsient();

    return {
        props: {
            locale: ctx.params?.locale,
            menuItems: Utils.serialize(menuItems),
            cookies: Utils.serialize(cookies)
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