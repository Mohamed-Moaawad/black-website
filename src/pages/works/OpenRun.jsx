import React from 'react'
import Navs from '../../components/Navs'
import Wrap from '../../components/Wrap'
import SocialMediaLinks from '../../components/SocialMediaLinks'
import { Col, Container, Row } from 'react-bootstrap'
import './OpenRun.css'
import './Header.css'
// swiper 
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import BtnToUp from '../../components/BtnToUp'
const OpenRun = () => {
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
            {/* btn to up */}
            <BtnToUp/>
            {/* btn to up */}
            <div className="works">
            <div className="open-run">
                {/* start header */}
                <div className="header">
                <div className="img">
                            <img src="images/1 (9).jpg" alt="" />
                            <div className='text'>
                                <h6>Photography | Production</h6>
                                <h2>open run</h2>
                                <p><span>Published : </span>March 22nd 2022</p>
                            </div>
                        </div>
                </div>
                {/* end header */}
                    {/* start meet */}
                    <div className="meet">
                        <Container>
                            <div className="text">
                                <div className="head">
                                    <h3>ABOUT THE PROJECT.</h3>
                                    <p>Wondour™ was tasked with creating a pair Wondour™ 
                                        was tasked with creating a pair of electronic glasses 
                                        that can help legally-blind and low-vision people see again. 
                                        We're helping people with Wet & Dry Macular Degeneration, 
                                        Diabetic and Non-Diabetic Retinopathy, Glaucoma, Optic-Nerve-Atrophy.
                                    </p>
                                </div>
                                <Row>
                                    <Col sm={12} md={6} lg={4}>
                                        <div className="title">
                                            <h6>service</h6>
                                            
                                            <p>3D worker</p>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6} lg={4}>
                                        <div className="title">
                                            <h6>industry</h6>
                                            <p>Tars 42</p>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6} lg={4}>
                                        <div className="title">
                                            <h6>published</h6>
                                            <p>March 22nd 2023</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </div>
                    {/* end  meet */}
                    
                {/* start bg-image */}
                <div className="bg-image">
                    <div className="img-bg">
                        <img src="images/2 (4).jpg" alt="" />
                        <span className='caption px-4'>caption #1</span>
                    </div>
                    <Container>
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <div className="img mt-4">
                                    <img src="images/3 (4).jpg" alt="" />
                                    <span className="caption">
                                        caption #2
                                    </span>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <div className="img mt-4 mt-md-0">
                                    <img src="images/4 (3).jpg" alt="" />
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
                            <img src="images/5 (1).jpg" alt="" />
                        </div>
                        <div className="box">
                            <div className="content">
                            <h3>How is your visual identity?</h3>
                            <p>we give fashion forward men, quick access to the finest, premium-quality, designer clothes for men. Not only that, our online selection is comprised of versatile. <br /><br />
                                we give fashion forward men, quick access to the finest, premium-quality, designer clothes for men. Not only that, our online selection is comprised of versatile, exclusive and unique looks made with you in mind. You can always be confident, not only when wearing our shirts, but in our unrivaled customer service and affordable 
                                premium quality collections fresh off the catwalk..
                            </p>
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
                                <img src="images/6 (1).jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="images/7 (2).jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="images/8 (1).jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="images/9 (1).jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="images/7 (2).jpg" alt="" />
                            </SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                </div>
                {/* end slider */}
            </div>
            </div>
        </>
    )
}

export default OpenRun
