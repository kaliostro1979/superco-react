import {Suspense} from "react";
import {Layout} from "../components/Layout.server";
import FeaturedProductsSlider from "../components/featured-products/FeaturedProductsSlider";
import ContentCardsSlider from "../components/content-cards/ContentCardsSlider";
import {CacheLong, gql, useShopQuery} from "@shopify/hydrogen";
import HeroBanner from "../components/hero-banner/HeroBanner";

const Home = ()=> {
    const {data: {collection}} = useShopQuery({
        query: COLLECTION_INFO,
        cache: CacheLong(),
        preload: true
    })

    return (
        <Layout>
            <Suspense fallback={"Loading..."}>
                <HeroBanner image={collection.image.src}/>
                <ContentCardsSlider stat={false}/>
                <ContentCardsSlider stat={true}/>
                <FeaturedProductsSlider/>
            </Suspense>
        </Layout>
    );
}

export default Home

const COLLECTION_INFO = gql`
    query Banner {
        collection(handle:"frontpage"){
            id
            image{
                id
                src
            }
            metafield(namespace:"custom", key:"banner"){
                value
                id
                type
            }
        }
    }
`
