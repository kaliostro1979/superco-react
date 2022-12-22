import React from 'react';
import {CacheLong, gql, useShopQuery} from "@shopify/hydrogen";
import ProductCard from "./ProductCard.client";
import SwiperSlider from "../Swiper.client";

const FeaturedProductsSlider = () => {
    const {
        data: { products }
    } = useShopQuery({
        query: PRODUCTS_QUERY,
        cache: CacheLong(),
        preload: true,
    })

    return (
        <div className={"mb-[77px]"}>
            <SwiperSlider
                Component={ProductCard}
                dataArray={products.nodes}
                spaceBetween={2}
                sliderClassName={"md:max-w-[100%] md:w-full w-[278px] max-w-[278px]"}
            />
        </div>
    );
};

export default FeaturedProductsSlider;

const PRODUCTS_QUERY = gql`
    query AllProducts {
      products(first: 4) {
        nodes {
          id
          title
          featuredImage {
                id
                url
            }         
          handle
          variants(first:1){
            nodes {
              id
            }
          }
          priceRange {
            maxVariantPrice {amount, currencyCode}
            minVariantPrice {amount, currencyCode}
          }
        }
      }
    }
`
