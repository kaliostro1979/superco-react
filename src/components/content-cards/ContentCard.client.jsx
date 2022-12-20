import {Link} from "@shopify/hydrogen";

const ContentCard = ({data}) => {
    return (
        <div>
            <div style={{background: data?.tags[0]}} className="p-[10px] swiper-slide md:max-w-[100%] max-w-[264px]">
                <div className="relative pt-[224px] w-full">
                    <img src={data?.image.url} alt="" className="absolute top-0 left-0 object-cover object-center w-full h-full"/>
                </div>
                <div className="pt-[30px] pb-[51px] text-center">
                    <p className="content-card__title text-[32px] text-black">{data?.title}</p>
                    <p className="content-card__text text-black text-[18px] my-[15px]">{data?.content}</p>
                    <Link to={data?.handle} className="content-card__link uppercase underline underline-offset-4">{data?.excerpt}</Link>
                </div>
            </div>
        </div>
    );
};

export default ContentCard;
