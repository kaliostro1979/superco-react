import {CacheLong, gql, useShopQuery} from "@shopify/hydrogen";
import SwiperSlider from "../Swiper.client";
import ContentCard from "./ContentCard.client";

const ContentCardsSlider = ({stat}) => {
    const {data: { blog }} = useShopQuery({
        query: CARDS_QUERY,
        cache: CacheLong(),
        preload: true,
    })

    const {data} = useShopQuery({
        query: CARDS_BY_TAGS_QUERY,
        cache: CacheLong(),
        preload: true,
    })

    const cards = blog.nodes
    const staticCards = data.blog.nodes

    return (
        <>
            {
                !stat ? <SwiperSlider Component={ContentCard} dataArray={cards} sliderClassName={"md:max-w-[100%] md:w-full w-[264px] max-w-[264px]"} spaceBetween={10}/>
                    : <div className={"grid grid-cols-2"}>
                        {
                            staticCards.map(card=>{
                                return <ContentCard data={card} key={card.id}/>
                            })
                        }
                    </div>
            }

        </>
    );
};

export default ContentCardsSlider;



const CARDS_QUERY = gql`
    query AllCards {
        blog:articles(first: 10, query:"tag:'dynamic'"){
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

const CARDS_BY_TAGS_QUERY = gql`
    query StaticCards {
        blog:articles(first: 10, query:"tag:'static'"){
        nodes {
          id
          title
          content
          handle
          tags
          excerpt         
          image {
             id
             url
          }
        }
      }
    }
`
