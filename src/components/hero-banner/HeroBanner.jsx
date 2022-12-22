import React from 'react';

const HeroBanner = ({image}) => {
    return (
        <div className={"mb-[77px] relative w-full lg:pt-[700px] pt-[600px]"}>
            <img src={image} alt="" className={"absolute top-0 left-0 object-center object-cover w-full h-full"}/>
        </div>
    );
};

export default HeroBanner;
