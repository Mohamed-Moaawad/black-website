import React from 'react'
import './About.css'
import Navs from '../components/Navs'
import Wrap from '../components/Wrap'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import TeamImages from '../components/TeamImages'
import SlideTeam from '../components/sliders/SlideTeam'
import Footer from '../components/Footer'
import SocialMediaLinks from '../components/SocialMediaLinks'
import BtnToUp from '../components/BtnToUp'

const About = () => {
    return (
        <>
            {/* start nav */}
            <Navs />
            {/* end nav */}
            {/* start wrap */}
            <Wrap />
            {/* end wrap */}
            {/* btn to up */}
            <BtnToUp/>
            {/* btn to up */}
            <div className="about">
                <SocialMediaLinks />
                {/* start headre */}
                <div className="header">
                <div className="background-header"></div>
                    <div className="text">
                        <h2>DIGITAL AGENCY THAT THRIVES ON YOUR SUCCESS</h2>
                        <p>If you are looking for an agency to help you create a remarkable presence online, you’ve come to the right place. We can help you take your business to the next level.</p>
                        <Link to="/" className='main-link'>
                                            <div className='icon'>
                                                <i className="fa-solid fa-angle-right"></i>
                                            </div>
                                            <span>get started now</span>
                        </Link>
                    </div>
                </div>
                {/* end headre */}
                {/* start img-head-phone */}
                <div className="img-head-phone">
                    <img src="images/1.jpg" alt="" />
                    <div className="text-box">
                        <h4>HELP MILLIONS TO BRING THERE CREATIVE PROJECTS TO LIFE</h4>
                        <p>e were thoughtful about presenting these in a way where we could also tell the story of the individual.. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                    </div>
                </div>
                {/* end img-head-phone  */}
                {/* start advantages  */}
                <div className="advantages">
                    <Container>
                        <div className="header-text">
                            <h6><span></span> advantages</h6>
                            <h3>LET’S CHECK OUR SERVICES</h3>
                        </div>
                        <Row>
                        <Col sm={12} md={6} lg={4} className='mt-3'>
                                <div className="item">
                                    <div className="item-icon">
                                    <i className="fa-regular fa-lightbulb"></i>
                                    <h5>digital products</h5>
                                    <h3>01</h3>
                                    </div>
                                    <div className="item-text">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                                Ratione, debitis magnam cumque eius assumenda at sapiente 
                                                iusto, expedita officia magni eveniet cupiditate officiis 
                                                molestias est quis, veniam aliquid ea recusandae?
                                            </p>
                                            <Link to="/" className='main-link'>
                                                <div className="icon">
                                                <i className="fa-solid fa-angle-right"></i>
                                                </div>
                                                <span>learn more</span>
                                            </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4} className='mt-3'>
                                <div className="item item-tow">
                                    <div className="item-icon">
                                    <i className="fa-solid fa-layer-group"></i>
                                    <h5>web development</h5>
                                    <h3>02</h3>
                                    </div>
                                    <div className="item-text">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                                Ratione, debitis magnam cumque eius assumenda at sapiente 
                                                iusto, expedita officia magni eveniet cupiditate officiis 
                                                molestias est quis, veniam aliquid ea recusandae?
                                            </p>
                                            <Link to="/" className='main-link'>
                                                <div className="icon">
                                                <i className="fa-solid fa-angle-right"></i>
                                                </div>
                                                <span>learn more</span>
                                            </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4} className='mt-3'>
                                <div className="item  item-three">
                                    <div className="item-icon">
                                    <i className="fa-solid fa-bezier-curve"></i>
                                    <h5>ui-ux design</h5>
                                    <h3>03</h3>
                                    </div>
                                    <div className="item-text">
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                                Ratione, debitis magnam cumque eius assumenda at sapiente 
                                                iusto, expedita officia magni eveniet cupiditate officiis 
                                                molestias est quis, veniam aliquid ea recusandae?
                                            </p>
                                            <Link to="/" className='main-link'>
                                                <div className="icon">
                                                <i className="fa-solid fa-angle-right"></i>
                                                </div>
                                                <span>learn more</span>
                                            </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* end advantages  */}
                {/* start team-image */}
                <div className="team-image">
                    <Container>
                        <div className="header-text">
                            <h6><span></span>our team</h6>
                            <h3>THE BEST TEAM EVER!</h3>
                        </div> 
                        {/*  */}
                        <TeamImages />
                        {/*  */}
                    </Container>

                </div>
                {/* end team-image */}
                {/* start slide-team */}
                <div className="slide-team">
                    <Container>
                    <div className="header-text ">
                        <h6><span></span>TESTIMONIALS</h6>
                        <h3>WHAT PEOPLE ARE SAYING</h3>
                    </div>
                    {/* start SlideTeam */}
                    <SlideTeam />
                    {/* end SlideTeam  */}
                    </Container>
                    
                </div>
                {/* end slide-team */}
                {/* start images-brand */}
                <div className="images-brand">
                    <Container>
                        <div className="header-text">
                            <h6><span></span>testimonials</h6>
                            <h3>WHAT PEOPLE ARE SAYING</h3>
                        </div>
                        <Row>
                            <Col sm={12} md={6} lg={3} className='mt-4'>
                                <div className="brand">
                                    <img src="images/1.svg" alt="" />
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={3} className='mt-4'>
                                <div className="brand">
                                    <img src="images/2.svg" alt="" />
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={3} className='mt-4'>
                                <div className="brand">
                                    <img src="images/3.svg" alt="" />
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={3} className='mt-4'>
                                <div className="brand">
                                    <img src="images/4.svg" alt="" />
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={3} className='mt-4'>
                                <div className="brand">
                                    <img src="images/5.svg" alt="" />
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={3} className='mt-4'>
                                <div className="brand">
                                    <img src="images/6.svg" alt="" />
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={3} className='mt-4'>
                                <div className="brand">
                                    <img src="images/1.svg" alt="" />
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={3} className='mt-4'>
                                <div className="brand">
                                    <img src="images/2.svg" alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* end images-brand */}
                {/* start footer */}
                <Footer />
                {/* end footer */}
            </div>
        </>
    )
}

export default About
