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
        <div>
            <SwiperSlider Component={ProductCard} dataArray={products.nodes} spaceBetween={2}/>
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
          priceRange {
            maxVariantPrice {amount, currencyCode}
            minVariantPrice {amount, currencyCode}
          }
        }
      }
    }
`
