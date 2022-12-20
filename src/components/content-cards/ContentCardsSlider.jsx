import {CacheLong, gql, useShopQuery} from "@shopify/hydrogen";
import SwiperSlider from "../Swiper.client";
import ContentCardClient from "./ContentCard.client";

const ContentCardsSlider = () => {
    const {data: { blog }} = useShopQuery({
        query: CARDS_QUERY,
        cache: CacheLong(),
        preload: true,
    })

    const cards = blog.nodes

    return (
        <div>
            <SwiperSlider Component={ContentCardClient} dataArray={cards} sliderClassName={""} spaceBetween={10}/>
        </div>
    );
};

export default ContentCardsSlider;



const CARDS_QUERY = gql`
    query AllCards {
        blog:articles(first: 10){
        nodes {
          id
          title
          content
          tags
          handle
          excerpt         
          image {
             id
             url
          }
        }
      }
    }

`
