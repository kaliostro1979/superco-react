import {
    useShopQuery,
    CacheLong,
    gql,
    useUrl,
    Seo,
} from "@shopify/hydrogen";
import {Suspense} from "react";
import Header from "./header/Header.client";
import MobileNavbar from "./mobile-navbar/MobileNavbar.client";


/**
 * A server component that defines a structure and organization of a page that can be used in different parts of the Hydrogen app
 */
export function Layout({ children }) {
    const { pathname } = useUrl();
    const isHome = pathname === "/";

    const {
        data: { shop, menu, collection },
    } = useShopQuery({
        query: SHOP_QUERY,
        cache: CacheLong(),
        preload: true,
    });

    const {data} = useShopQuery({
        query: ANNOUNCEMENT_MENU_QUERY,
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
            <div className="flex flex-col min-h-screen antialiased">

                <Header isHome={isHome} shop={shop} menu={menu} announcementMenu={data.menu.items} text={collection.metafield.value}/>
                <main role="main" id="mainContent" className="flex-grow">
                   <div className={"container"}>
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
   collection(handle:"frontpage"){
    metafield(namespace:"custom", key:"text"){
                value
                id
                type
            } 
   }  
  }
`;


const ANNOUNCEMENT_MENU_QUERY = gql`
  query ShopInfo {
    menu(handle:"announcement-menu") {
      title
      items {
        id
        title
        url
     }
   }   
  }
`;
