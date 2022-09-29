import React, { useCallback, useRef, useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, EffectCreative, Navigation, Scrollbar } from 'swiper';

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/scrollbar";



const items = [
    {
        id: "1",
        desc: "“Woahh, karena website ini saya jadi tau banyak event menarik yang terdapat di sekitaran Jabodetabek. Saya sendiri sangat terbantu ketika mengunjungi website ini.”",
        img: "p3.jpg",
        author: "Fadhel Muhamad",
        address: "Bogor, Indonesia"
    },
    {
        id: "2",
        desc: "“Eventmu keren banget saya suka mencari informasi disini.”",
        img: "p4.jpg",
        author: "Restu Kahvi",
        address: "Bandung, Indonesia"
    },
    {
        id: "3",
        desc: "“Eventmu sangat bermanfaat untuk saya, dari sini saya dapat informasi terkait event secara cepat dan mudah.”",
        img: "p2.jpg",
        author: "Assiva Syahrani",
        address: "Jakarta, Indonesia"
    },
    {
        id: "4",
        desc: "“Ga ragu lagi berkunjung ke website eventmu soalnya bermanfaat banget untuk cari referensi liburan keluarga.”",
        img: "p1.jpg",
        author: "Gandi Juhendra",
        address: "Padang, Indonesia"
    },
]

export default function Testimonial() {
    const swiper = useRef();
    const [realSlide, setRealSlide] = useState(0)

    const fnPrev = React.useCallback(
        () => {
            if (realSlide > 0) swiper?.current?.slidePrev()
        },
        [swiper, realSlide],
    )

    const fnNext = React.useCallback(
        () => {
            if (realSlide < items.length) swiper?.current?.slideNext()
        },
        [swiper, realSlide],
    )


    return (
        <div className='flex'>
            <div className='w-full lg:w-10/12 flex items-center justify-center relative h-[320px] lg:h-auto'>
                <div className='absolute -inset-0 lg:-inset-10'>
                    <Swiper
                        modules={[Navigation, Scrollbar, A11y, Autoplay, EffectCreative]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={true}
                        effect="creative"
                        creativeEffect={{
                            prev: {
                                translate: [60, 70, 0]
                            },
                            next: {
                                translate: ["-100%", "-100%", 0]
                            }
                        }}
                        simulateTouch={false}
                        onSlideChange={(s) => setRealSlide(s.realIndex)}
                        onSwiper={(s) => {
                            swiper.current = s;
                        }}
                    >
                        {
                            items.map((item) => {
                                return <SwiperSlide key={item.id}>
                                    <div className='relative px-16 lg:px-32 pt-10 lg:pt-20 pb-48'>
                                        <div className='relative'>
                                            <div className='bg-gradient-to-r from-purple-1 to-purple-2 shadow-2xl rounded-xl p-6 relative z-20'>
                                                <span className='w-16 h-16 absolute top-0 left-0 overflow-hidden transform -translate-x-1/2 -translate-y-1/2 rounded-full flex-none mr-3'>
                                                    <Image
                                                        src={`/images/${item.img}`}
                                                        width="100%"
                                                        height="100%"
                                                        alt='Testimoni'
                                                        layout='responsive'
                                                        className='object-cover'
                                                    />
                                                </span>
                                                <p className='text-white mb-8 font-sans'>{item.desc}</p>
                                                <h6 className='text-white text-lg font-sans'>{item.author}</h6>
                                                <h6 className='text-white text-sm font-sans'>{item.address}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>
            </div>
            <div className='hidden lg:flex lg:w-1/12 items-center justify-center '>
                <div className='flex flex-col'>
                    <button onClick={fnPrev} className={[realSlide === 0 ? "text-gray-300" : "text-purple-4"].join(" ")}>
                        <span className='material-icons mr-2'>keyboard_arrow_up</span>
                    </button>
                    <button onClick={fnNext} className={[realSlide === items.length - 1 ? "text-gray-300" : "text-purple-4"].join(" ")}>
                        <span className='material-icons mr-2'>keyboard_arrow_down</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
