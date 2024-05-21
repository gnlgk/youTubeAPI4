import React from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Videoslider = ({ id, title, videos }) => {
    return (
        <section id={id}>
            <h2>{title}</h2>
            <div className='video__slider'>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className={`mySwiper-${id}`}
                    breakpoints={{
                        600: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        960: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1600: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {videos.map((video, key) => (
                        <SwiperSlide key={key}>
                            <div className='video'>
                                <div className="video__thumb play__icon">
                                    <Link to={`/video/${video.videoId}`}>
                                        <img src={video.img} alt={video.title} />
                                    </Link>
                                </div>
                                <div className="video__text">
                                    <Link to={`/video/${video.videoId}`}>{video.title}</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Videoslider
