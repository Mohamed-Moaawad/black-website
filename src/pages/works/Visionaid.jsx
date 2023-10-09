import React, { useEffect, useRef } from 'react'
import './Visionaid.css'
import './Header.css'
import Navs from '../../components/Navs'
import Wrap from '../../components/Wrap'
import { Col, Container, Row } from 'react-bootstrap'
import SocialMediaLinks from '../../components/SocialMediaLinks'
import BtnToUp from '../../components/BtnToUp'

const Visionaid = () => {
    return (
        <>
            {/* statr nav */}
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
            <div className='works'>
                <div className="visionaid">
                    {/* start header */}
                    {/* end header */}
                    <div className="header">
                        <div className="img">
                            <img src="images/1 (5).jpg" alt="" />
                            <div className='text'>
                                <h6>creative | photography</h6>
                                <h2>visionaid</h2>
                            </div>
                        </div>
                    </div>
                    {/* end header */}
                    {/* start meet */}
                    <div className="meet">
                        <Container>
                            <div className="text">
                                <div className="head">
                                    <h3>Meet VisionAid™. Patents Pending.</h3>
                                    <p>Wondour™ was tasked with creating a pair Wondour™ was tasked with 
                                        creating a pair of electronic glasses that can help legally-blind and 
                                        low-vision people see again. We're helping people with Wet & Dry Macular Degeneration, 
                                        Diabetic and Non-Diabetic Retinopathy, Glaucoma, Optic-Nerve-Atrophy.
                                    </p>
                                </div>
                                <Row>
                                    <Col sm={12} md={6} lg={4}>
                                        <div className="title">
                                            <h6>service</h6>
                                            
                                            <p>design</p>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6} lg={4}>
                                        <div className="title">
                                            <h6>industry</h6>
                                            <p>dylan</p>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6} lg={4}>
                                        <div className="title">
                                            <h6>published</h6>
                                            <p>april 26th 2023</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </div>
                    {/* end  meet */}
                    {/* start glasses */}
                    <div className="glasses">

                            <div className="content ">
                                <div className="video">
                                <video  muted  autoPlay > 
                                        <source type="video/webm" src="images/VISIONAID _ Blackdsn.mp4" />
                                </video>
                                </div>
                                <div className="text ">
                                    <h4>patents pending</h4>
                                    <p>We designed VisionAid™ as a modular 
                                        system. This enables the release of new 
                                        SmartFrame™ and new DigitalLens™ styles in 
                                        the future that can be purchased to 
                                        improve the style or functionality of your device.
                                    </p>
                                </div>
                                
                            </div>
                    </div>
                    <div className="imgs">
                                    <div className="container-fluid">
                                        <Row>
                                            <Col sm={12} md={6} lg={6}>
                                                <div className="img mt-4 d-flex justify-content-start">
                                                <img src="images/2 (2).jpg" alt="" />
                                                <span className='caption'>caption #1</span>
                                                </div>
                                            </Col>
                                            <Col sm={12} md={6} lg={6}>
                                                <div className="img mt-4 d-flex justify-content-end">
                                                <img src="images/3 (2).jpg" alt="" />
                                                <span className='caption'>caption #2</span>
                                                </div>
                                            
                                            </Col>
                                            <Col className='col-12 '>
                                                <div className="img-lg">
                                                <img src="images/4 (1).jpg" alt="" />
                                                <span className='caption'>caption #3</span>
                                                </div>
                                            </Col>
                                            <div className="text">
                                            <p>CMF designs were an essential part of the 
                                                process. Material variations make sure your 
                                                VisionAid™ matches 
                                                your unique personal style.
                                            </p>
                                            </div>
                                        </Row>
                                    </div>
                                </div>
                    {/* end glasses */}
                </div>
            </div>
        </>
    )
}

export default Visionaid
