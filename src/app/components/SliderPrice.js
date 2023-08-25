"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function SliderPrice() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiperNav"
            >
                <SwiperSlide>
                    <div>
                        Bánh lẻ
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                        Combo 1
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                Combo 2
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                Combo 3
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                Chiết Khấu
                    </div>
                </SwiperSlide>

            </Swiper>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <Image src="/tuananh/banh-le.png" alt='' width={1000} height={800}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/tuananh/chiet-khau.png"width={1000} height={800}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/tuananh/combo-list-1.png" width={1000} height={800}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/tuananh/combo-list-2.png"width={1000} height={800}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/tuananh/combo-list-3.png" width={1000} height={800}/>
                </SwiperSlide>

            </Swiper>

        </>
    );
}
