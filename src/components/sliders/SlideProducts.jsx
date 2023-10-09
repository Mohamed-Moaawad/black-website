import React from 'react'
import './SlideProducts.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const SlideProducts = ({slider}) => {
    return (
        <>
            <div className='slider-products'>
                            <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {slider.map(itme=>(
                                <SwiperSlide key={itme.id}>
                                    <img src={itme.image} alt='image'/>
                                    <div className="text">
                                        <p>{itme.title}</p>
                                        <h4>{itme.name}</h4>
                                        <Link to="/" className='main-link'>
                                                <div className='icon'>
                                                    <i className="fa-solid fa-angle-right"></i>
                                                </div>
                                            <span>view case</span>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
            </div>
        </>
    )
}

export default SlideProducts
