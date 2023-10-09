import React from 'react'
import Navs from '../../components/Navs'
import Wrap from '../../components/Wrap'
import { Container, Row, Col } from 'react-bootstrap'
import SocialMediaLinks from '../../components/SocialMediaLinks'
import './MenFashion.css'
// swiper 
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import BtnToUp from '../../components/BtnToUp'

const MenFashion = () => {
    return (
        <>
            {/* start nav */}
            <Navs />
            {/* end nav */}
            {/* start wrap */}
            <Wrap />
            {/* end wrap */}
            {/* start social */}
            <SocialMediaLinks />
            {/* end social */}
            {/* btn to up */}
            <BtnToUp/>
            {/* btn to up */}
            <div className="men-fashion">
                {/* start header */}
                <div className="header">
                    <Container>
                        <div className='content d-flex align-items-center'>
                                <div className="text">
                                    <h6>photography</h6>
                                    <h2>men fashion</h2>
                                    <p><span>photographer :</span> Daniel jaramillo</p>
                                </div>
                                <div className="img">
                                    <img src="images/1 (8).jpg" alt="" />
                                </div>
                        </div>
                    </Container>
                </div>
                {/* end header */}
                {/* start meet */}
                <div className="meet">
                    <Container>
                    <Row>
                                    <Col sm={12} md={6} lg={4}>
                                        <div className="title">
                                            <h6>service</h6>
                                            
                                            <p>Photographer</p>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6} lg={4}>
                                        <div className="title">
                                            <h6>industry</h6>
                                            <p>Daniel Jaramillo</p>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6} lg={4}>
                                        <div className="title">
                                            <h6>published</h6>
                                            <p>June 15th 2023</p>
                                        </div>
                                    </Col>
                                </Row>
                    </Container>
                </div>
                {/* end meet */}
                {/* start bg-image */}
                <div className="bg-image">
                    <div className="img-bg">
                        <img src="images/2 (3).jpg" alt="" />
                        <span className='caption px-4'>caption #1</span>
                    </div>
                    <Container>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <div className="img mt-4">
                                    <img src="images/3 (3).jpg" alt="" />
                                    <span className="caption">
                                        caption #2
                                    </span>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <div className="img mt-4 mt-md-0">
                                    <img src="images/4 (2).jpg" alt="" />
                                    <span className="caption">
                                        caption #3
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* end bg-image */}
                {/* start visual */}
                <div className="visual">
                    <div className="container-fluid">
                        <div className="img">
                            <img src="images/5.jpg" alt="" />
                        </div>
                        <div className="box">
                            <div className="content">
                            <h3>How is your visual identity?</h3>
                            <p>we give fashion forward men, quick access to the finest, 
                                premium-quality, designer clothes for men. Not only that, 
                                our online selection is comprised of versatile.
                            </p>
                            <ul>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    <span>Beautiful and easy to understand UI</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    <span>Theme advantages are pixel perfect design</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    <span>Present your services with flexible</span>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end visual */}
                {/* start slider */}
                <div className="slider">
                    <div className="container-fluid">
                        <div className="contain">
                        <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
                            <SwiperSlide>
                                <img src="images/7.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="images/8.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="images/9.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="images/6.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="images/7 (1).jpg" alt="" />
                            </SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                </div>
                {/* end slider */}
            </div>
        </>
    )
}

export default MenFashion
