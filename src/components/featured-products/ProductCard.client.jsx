const ProductCard = ({data}) => {

    return (
        <div className="product-card__wrapper cursor-pointer lg:w-auto w-[278px]">
            <div className="product-card__image relative md:pt-[313px] pt-[208px]">
                <img
                    src={data?.featuredImage.url}
                    className="absolute top-0 left-0 object-cover object-center w-full h-full"
                    alt=""
                />
            </div>
            <div className="product-card__meta bg-white p-[20px] md:flex justify-between items-center block">
                <p className="product-card__title text-[24px] text-black">{data?.title}</p>
                <p className="product-card__price text-[14px]">
                    {`${data?.priceRange.minVariantPrice.amount} ${data?.priceRange.minVariantPrice.currencyCode}`}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
