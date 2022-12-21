import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

const SwiperSlider = ({dataArray, Component, sliderClassName, spaceBetween}) => {

    return (
        <Swiper
            spaceBetween={spaceBetween}
            autoHeight={false}
            breakpoints={{
                    0: {
                        slidesPerView: "auto",
                        allowTouchMove: true
                    },
                    // when window width is >= 480px
                    768: {
                        slidesPerView: 2,
                        allowTouchMove: true,
                    },
                    // when window width is >= 640px
                    991: {
                        slidesPerView: 4,
                        allowTouchMove: true,
                    }
                }}
        >
            {
                dataArray && dataArray.map((slide, index) => {

                    return (
                        <SwiperSlide key={slide.id} className={sliderClassName}>
                            <Component data={slide} index={index}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};

export default SwiperSlider
