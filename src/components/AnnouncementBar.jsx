import {Link} from "@shopify/hydrogen";

const AnnouncementBar = ({announcementMenu}) => {
    return (
        <div className={"announcement-bar border-b-2 border-black md:block hidden"}>
            <div className={"max-w-[1440px] mx-auto my-0 px-[42px] py-[12px] flex justify-between items-center"}>
                <h1 className={"font-['GT_Super_Text_Book_italic']"}>Meet Festive & Co</h1>
                <ul className={"flex items-center"}>
                    {
                        announcementMenu.map(item=>{
                            return <li key={item.id} className={"mr-[15px] font-['GT_Super_Text_Book_italic']"}>
                                <Link to={item.url}>
                                    {item.title}
                                </Link></li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default AnnouncementBar;
