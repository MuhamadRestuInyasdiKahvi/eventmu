import Image from 'next/image'
import Arrow from 'images/arrow.svg'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";

const items = [
    {
        id: "1",
        title: "Festival Lagu Laguan",
        desc: "Pengalaman baru Festival Musik akan datang. Apakah kamu siap? Festival Lagu Laguan akan diadakan pada 01 & 02 ...",
        img: "event-1.png",
    },
    {
        id: "2",
        title: "Museum ImersifA",
        desc: "Museum Nasional Indonesia kini memiliki ruang imajinasi ImersifA untuk memperkaya pengalaman berkunjung ke museum...",
        img: "event-2.png",
    },
    {
        id: "3",
        title: "Train To Apocalypse",
        desc: "Train to Apocalypse wahana kereta zombie pertama yang ada di Indonesia yang terinspirasi dari Film Korea Selatan yaitu ...",
        img: "event-3.png",
    },
]


export default function Index() {
    return (
        <>
            <Swiper
                loop={true}
                slidesPerView={1}
                centeredSlides={true}
                navigation={true}
                modules={[Navigation]}
                className="lg:hidden"
            >
                {
                    items.map((item) => {
                        return <SwiperSlide className='py-10 flex justify-center' key={item.id}>
                            <div className="max-w-xs md:max-w-md bg-white rounded-3xl group hover:scale-110 transform transition duration-500 overflow-hidden">
                                <Image
                                    src={`/images/${item.img}`}
                                    width="100%"
                                    height="100%"
                                    alt='Festival Lagu Laguan'
                                    layout='responsive'
                                    objectFit='cover'
                                    className='rounded-t-2xl object-top'
                                />
                                <div className="p-5 group-hover:bg-gradient-to-tr from-purple-1 to-purple-2 ">
                                    <div className='flex justify-between items-center mb-5'>
                                        <h2 className='font-sans text-xl text-gray-700 font-bold group-hover:text-white'>{item.title}</h2>
                                        <span className='w-5 h-4 group-hover:w-6 '>
                                            <Arrow className='fill-purple-400 group-hover:fill-white' />
                                        </span>
                                    </div>
                                    <p className='font-sans text-base text-gray-700 group-hover:text-white '>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>

            <Swiper
                loop={true}
                slidesPerView={3}
                centeredSlides={true}
                navigation={true}
                modules={[Navigation]}
                className="hidden lg:block"
            >
                {
                    items.map((item) => {
                        return <SwiperSlide className='py-10 flex justify-center' key={item.id}>
                            <div className="max-w-xs bg-white rounded-3xl group hover:scale-110 transform transition duration-500 overflow-hidden">
                                <Image
                                    src={`/images/${item.img}`}
                                    width="100%"
                                    height="100%"
                                    alt='Festival Lagu Laguan'
                                    layout='responsive'
                                    objectFit='cover'
                                    className='rounded-t-2xl object-top'
                                />
                                <div className="p-5 group-hover:bg-gradient-to-tr from-purple-1 to-purple-2 ">
                                    <div className='flex justify-between items-center mb-5'>
                                        <h2 className='font-sans text-xl text-gray-700 font-bold group-hover:text-white'>{item.title}</h2>
                                        <span className='w-5 h-4 group-hover:w-6 '>
                                            <Arrow className='fill-purple-400 group-hover:fill-white' />
                                        </span>
                                    </div>
                                    <p className='font-sans text-base text-gray-700 group-hover:text-white '>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </>


    )
}
