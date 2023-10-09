import React, { useState } from 'react'
import Wrap from '../components/Wrap'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

import Navs from '../components/Navs'

import './Service.css'
import TeamImages from '../components/TeamImages'
import SlideTeam from '../components/sliders/SlideTeam'
import Footer from '../components/Footer'
import SocialMediaLinks from '../components/SocialMediaLinks'
import BtnToUp from '../components/BtnToUp'




const Service = () => {
    const [statusOne ,setStatusOne] = useState("")
    const [statusTwo ,setStatusTwo] = useState("")
    const [statusThree ,setStatusThree] = useState("")

    return (
        <>
        {/* start wrap */}
            {/* end wrap */}
            {/* start nav */}
            <Navs />
            {/* end nav */}
            {/* btn to up */}
            <BtnToUp/>
            {/* btn to up */}
            <div className="service">
                <SocialMediaLinks />
                {/* start header */}
                <div className="header">
                    <div className="background-header"></div>
                    <Container>
                        <div className="text">
                            <h6><span></span> our services</h6>
                            <h2>WE ARE DELIVERING BEAUTIFUL DIGITAL PRODUCTS FOR YOU.</h2>
                            <p>If you are looking for an agency to help you create a remarkable presence online, 
                                you’ve come to the right place. We can help you take your business to the next level.
                            </p>
                            <Link to="/" className='main-link'>
                                            <div className='icon'>
                                                <i className="fa-solid fa-angle-right"></i>
                                            </div>
                                            <span>get started now</span>
                            </Link>
                        </div>
                    </Container>
                </div>
                {/* end header */}
                {/* start video-bg */}
                <div className="video-bg">
                    <div className="video">
                        <img src="images/2.gif" alt="" />
                    </div>
                    <Container>
                        <Row className='d-flex flex-row-reverse'>
                            <Col ms={12} md={8} lg={5}>
                            <div className="box">
                        <h3>LET’S CHECK OUR SERVICES</h3>
                        <div className="lists">
                            <ul>
                                <li>Brand Consulting</li>
                                <li>Customer Insight</li>
                                <li>Marketing Management</li>
                            </ul>
                            <ul>
                                <li>Marketing Management</li>
                                <li>Brand Consulting</li>
                                <li>Customer Insight</li>
                            </ul>
                        </div>
                        <div className="contain">
                            <div className="icon">
                            <i className="fa-solid fa-layer-group"></i>
                            </div>
                            <div className="text">
                                <h5>BEST PRACTICES FROM INDUSTRY EXPERTS</h5>
                                <p>We’ve designed a culture that allows our stewards to assimilate with our clients and bring.</p>
                            </div>
                        </div>
                    </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* end video-bg */}
                {/* start we-provide */}
                    <div className="we-provide">
                        <Container>
                                <div className="header-text">
                                    <Row>
                                        <Col sm={12} md={6} lg={6}>
                                            <h3>WE PROVIDE YOU WITH THE BEST SERVICE IN THE MARKET</h3>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration, by injected humour. words</p>
                                        </Col>
                                        <Col sm={12} md={6} lg={6}>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration, Injected humour words web page editors now use as their.</p>
                                            <p>Default and a search for will uncover many web sites still in their infancy.suffered alteration, by injected humour words web page.</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="images">
                                    <Row>
                                        <Col sm={12} md={8} lg={8} className=''>
                                            <div className="lg-img">
                                                <img src="images/s1.jpg" alt="" />
                                            </div>
                                        </Col>
                                        <Col sm={12} md={4} lg={4} className='mt-5 mt-md-0'>
                                            <div className="sm-img">
                                                <img src="images/s2.jpg" alt="" />
                                            </div>
                                        </Col>
                                        
                                    </Row>
                                </div>
                                <div className="text">

                                    
                                    <Row>
                                        <Col sm={12} md={6} lg={6}>
                                            <h3>WE HAVE BEEN DOING PROJECTS SINCE 2008.</h3>
                                            <p>FOUNDED IN 2000, DSN GRID HAS BECOME ONE OF THE BEST DIGITAL AGENCY IN THEMEFOREST. BLUE MONEY GOING FORWARD, BUT DEPLOY TO PRODUCTION.</p>
                                        </Col>
                                        <Col sm={12} md={6} lg={6}>
                                            <ul>
                                                <li className={`listLi ${statusOne}`}   onClick={()=>{
                                                    setStatusOne(statusOne == "" ? "lis" : "")
                                                }}>
                                                    <div className='dropdown'>
                                                        <h6><span>1</span> our vision</h6>
                                                        <div className="iocn">
                                                        <i className="fa-solid fa-angle-down"></i>
                                                        </div>
                                                    </div>
                                                    <p>Cepteur sint occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.</p>
                                                </li>
                                                <li className={`listLi ${statusTwo}`}   onClick={()=>{
                                                    setStatusTwo(statusTwo == "" ? "lis" : "")
                                                }}>
                                                    <div className='dropdown'>
                                                        <h6><span>2</span> our goals</h6>
                                                        <div className="iocn">
                                                        <i className="fa-solid fa-angle-down"></i>
                                                        </div>
                                                    </div>
                                                    <p>Cepteur sint occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.</p>
                                                </li>
                                                <li className={`listLi ${statusThree}`}  onClick={()=>{
                                                    setStatusThree(statusThree == "" ? "lis" : "")
                                                }}>
                                                    <div className='dropdown'>
                                                        <h6><span>3</span> our mission</h6>
                                                        <div className="iocn">
                                                        <i className="fa-solid fa-angle-down"></i>
                                                        </div>
                                                    </div>
                                                    <p>Cepteur sint occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole.</p>
                                                </li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </div>
                        </Container>
                    </div>
                {/* end we-provide */}
                {/* start our-team */}
                <div className="our-team">
                    <Container>
                        <div className="header-text">
                            <h6><span></span> our team</h6>
                            <h3>THE BEST TEAM EVER!</h3>
                        </div>
                        <Row>
                            <TeamImages />
                        </Row>
                    </Container>
                </div>
                {/* end our-team */}
                {/* start slider-brands */}
                <div className="slider-brands">
                    <div className="images">
                        <div className="image">
                            <img src="images/1.svg" alt="" />
                        </div>
                        <div className="image">
                            <img src="images/3.svg" alt="" />
                        </div>
                        <div className="image">
                            <img src="images/4 (1).svg" alt="" />
                        </div>
                        <div className="image">
                            <img src="images/2.svg" alt="" />
                        </div>
                        <div className="image">
                            <img src="images/5.svg" alt="" />
                        </div>
                        <div className="image">
                            <img src="images/6.svg" alt="" />
                        </div>
                    </div>
                </div>
                {/* end slider-brands */}
                {/* start slider-team */}
                <div className="slider-team">
                    <Container>
                        <div className="header-text">
                            <h3>RELATIONSHIPS BASED ON TRUST.</h3>
                        </div>
                        <SlideTeam />
                    </Container>
                </div>
                {/* end slider-team */}
                {/* start footer */}
                <Footer />
                {/* end footer */}
            </div>
        </>
    )
}

export default Service
