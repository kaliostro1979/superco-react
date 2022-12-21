import {Link} from "@shopify/hydrogen";

const ContentCard = ({data}) => {

    return (
        <>
            {
                data.tags[0] !== 'static' ?
                    <div style={{background: data.tags && data?.tags[0]}}
                         className="p-[10px]">
                        <div className="relative pt-[224px] w-full">
                            <img src={data?.image.url} alt=""
                                 className="absolute top-0 left-0 object-cover object-center w-full h-full"/>
                        </div>
                        <div className="pt-[30px] pb-[51px] text-center">
                            <p className="content-card__title text-[32px] text-black">{data?.title}</p>
                            <p className="content-card__text text-black text-[18px] my-[15px]">{data?.content}</p>
                            <Link to={data?.handle}
                                  className="content-card__link uppercase underline underline-offset-4">{data?.excerpt}</Link>
                        </div>
                    </div> :
                    <div className="md:min-h-[800px] min-h-[420px] bg-cover bg-no-repeat bg-center relative"
                         style={{backgroundImage: `url(${data?.image.url})`}}>
                        <div
                            className="absolute bottom-0 left-[50%] translate-x-[-50%] text-center px-[25px] pb-[30px] xl:w-[614px] w-full">
                            <p className="content-card__title w-full lg:text-[64px] text-[32px] text-white">{data?.title}</p>
                            <Link to={data?.handle}
                                  className="content-card__link w-full text-white lg:text-[16px] text-[12px] uppercase underline underline-offset-4">{data?.excerpt}</Link>
                        </div>
                    </div>
            }

        </>
    );
};

export default ContentCard;
