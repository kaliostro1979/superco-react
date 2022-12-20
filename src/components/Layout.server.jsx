import {
    useShopQuery,
    CacheLong,
    gql,
    useUrl,
    Link,
    Seo,
} from "@shopify/hydrogen";
import {Suspense, useRef} from "react";
import Header from "./Header";
import AnnouncementBar from "./AnnouncementBar";


/**
 * A server component that defines a structure and organization of a page that can be used in different parts of the Hydrogen app
 */
export function Layout({ children }) {
    const { pathname } = useUrl();
    const isHome = pathname === "/";

    const {
        data: { shop, menu },
    } = useShopQuery({
        query: SHOP_QUERY,
        cache: CacheLong(),
        preload: true,
    });

    return (
        <>
            <Suspense fallback={null}>
                <Seo
                    type="defaultSeo"
                    data={{
                        title: shop.name,
                        description: shop.description,
                    }}
                />
            </Suspense>
            <div className="flex flex-col min-h-screen antialiased bg-neutral-50">
                <AnnouncementBar/>
                <Header isHome={isHome} shop={shop} menu={menu}/>

                <main role="main" id="mainContent" className="flex-grow">
                   <div className={"max-w-[1440px] mx-auto my-0 px-[42px] py-0"}>
                       <Suspense fallback={null}>{children}</Suspense>
                   </div>
                </main>
            </div>
        </>
    );
}

const SHOP_QUERY = gql`
  query ShopInfo {
    shop {
      name
      description
    }
    menu(handle:"main-menu") {
      title
    items {
      id
      title
      url
     }
   }   
  }
`;
