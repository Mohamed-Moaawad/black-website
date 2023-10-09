import React from 'react'
import Navs from '../../components/Navs'
import Wrap from '../../components/Wrap'
import { Col, Container, Row } from 'react-bootstrap'
import SocialMediaLinks from '../../components/SocialMediaLinks'
import './HeadPhones.css'
import './Header.css'
import BtnToUp from '../../components/BtnToUp'

const HeadPhones = () => {
    return (
        <>
            {/* start wrap */}
            <Wrap />
            {/* end wrap */}
            {/* start nav */}
            <Navs />
            {/* end nav */}
            {/* start social */}
            <SocialMediaLinks />
            {/* end social */}
            {/* btn to up */}
            <BtnToUp/>
            {/* btn to up */}
                <div className="works">
                <div className="headphones">
                {/* end header */}
                    <div className="header">
                        <div className="img">
                            <img src="images/1 (11).jpg" alt="" />
                            <div className='text'>
                                <h6>Production</h6>
                                <h2>HEADPHONES</h2>
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
                                    <p>Mode is an audio range designed to provide optimal 
                                        performance and comfort for every mode of use. The 
                                        system utilises a modular setup which allows the speaker 
                                        and interface unit to be transferred from the MD2 Headband 
                                        which features on-ear 

                                    </p>
                                </div>
                                <Row>
                                    <Col sm={12} md={6} lg={4}>
                                        <div className="title">
                                            <h6>service</h6>
                                            
                                            <p>Modular</p>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6} lg={4}>
                                        <div className="title">
                                            <h6>industry</h6>
                                            <p>Richard Price</p>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6} lg={4}>
                                        <div className="title">
                                            <h6>published</h6>
                                            <p>January 8th 2018</p>
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
                                    <img src="images/2.gif" alt="" />
                                </div>
                                <div className="text ">
                                    <p>The interface uses gesture control via the touch 
                                        sensitive speaker unit to wirelessly adjust audio preferences
                                        and the system is also available with active noise 
                                        cancelling technology for a fully immersive experience.
                                    </p>
                                </div>
                                
                            </div>
                            </div>
                            <div className="imgs">
                                    <div className="container-fluid">
                                        <Row className='d-flex align-items-center'>
                                            <Col sm={12} md={6} lg={6}>
                                                <div className="img img-one mt-4 d-flex justify-content-start">
                                                <img src="images/3 (6).jpg" alt="" />
                                                <span className='caption'>caption #1</span>
                                                </div>
                                            </Col>
                                            <Col sm={12} md={6} lg={6}>
                                                <div className="img img-two mt-4 d-flex justify-content-end">
                                                <img src="images/4 (5).jpg" alt="" />
                                                <span className='caption'>caption #2</span>
                                                </div>
                                            
                                            </Col>
                                            <Col className='col-12 '>
                                                <div className="img-lg">
                                                <img src="images/7 (3).jpg" alt="" />
                                                <span className='caption'>caption #3</span>
                                                </div>
                                            </Col>
                                            <div className="text">
                                            <p>The interface uses gesture control via the touch 
                                                sensitive speaker unit to wirelessly adjust audio 
                                                preferences and the system is also available with active noise 
                                                cancelling technology for a fully immersive experience.
                                            </p>
                                            <h5>Richard Price</h5>
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

export default HeadPhones
