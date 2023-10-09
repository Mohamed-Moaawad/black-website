import React from 'react'
import './SlideTeam.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const SlideTeam = () => {
    return (
        <>
            <div className="slide-team">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card-box">
                        <div className="text">
                            <p>This theme is awesome and the designer is very helpful. 
                                I had a few questions purchase. He/She helped me with all the doubts. 
                                Also, they provide quick support. Thank you so much for a beautiful theme
                            </p>
                        </div>
                        <div className="acount">
                            <img src="images/1 (6).jpg" alt="" />
                            <div className="name">
                                <h6>bill gardner</h6>
                                <span>web designer</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card-box">
                        <div className="text">
                            <p>This theme is awesome and the designer is very helpful. 
                                I had a few questions purchase. He/She helped me with all the doubts. 
                                Also, they provide quick support. Thank you so much for a beautiful theme
                            </p>
                        </div>
                        <div className="acount">
                            <img src="images/2.jpg" alt="" />
                            <div className="name">
                                <h6>bill gardner</h6>
                                <span>web designer</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card-box">
                        <div className="text">
                            <p>This theme is awesome and the designer is very helpful. 
                                I had a few questions purchase. He/She helped me with all the doubts. 
                                Also, they provide quick support. Thank you so much for a beautiful theme
                            </p>
                        </div>
                        <div className="acount">
                            <img src="images/3.jpg" alt="" />
                            <div className="name">
                                <h6>bill gardner</h6>
                                <span>web designer</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card-box">
                        <div className="text">
                            <p>This theme is awesome and the designer is very helpful. 
                                I had a few questions purchase. He/She helped me with all the doubts. 
                                Also, they provide quick support. Thank you so much for a beautiful theme
                            </p>
                        </div>
                        <div className="acount">
                            <img src="images/4.jpg" alt="" />
                            <div className="name">
                                <h6>bill gardner</h6>
                                <span>web designer</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            
            </Swiper>
            </div>
        </>
    )
}

export default SlideTeam
