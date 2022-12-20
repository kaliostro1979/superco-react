import {Suspense, useRef} from "react";
import {Layout} from "../components/Layout.server";
import Header from "../components/Header";
import FeaturedProductsSlider from "../components/featured-products/FeaturedProductsSlider";
import ContentCardsSlider from "../components/content-cards/ContentCardsSlider";

const Home = ()=> {
    return (
        <Layout>
            <Suspense fallback={<Header/>}>
                <ContentCardsSlider/>
                <FeaturedProductsSlider/>
            </Suspense>
        </Layout>
    );
}

export default Home


