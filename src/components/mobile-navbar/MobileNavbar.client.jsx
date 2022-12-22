import React from 'react';
import {Link} from "@shopify/hydrogen";

const MobileNavbar = ({menu}) => {
    console.log(menu);
    return (
        <div className={"fixed top-0 left-0 w-full h-screen bg-white"}>
            <ul>
                {
                    menu.items.map(item=>{
                        return <li key={item.id}><Link to={item.url}>{item.title}</Link></li>
                    })
                }
            </ul>
        </div>
    );
};

export default MobileNavbar;
