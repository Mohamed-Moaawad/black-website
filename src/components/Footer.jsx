import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <Container>
                    <div className="header-text">
                        <h2>LET'S BUILD SOMETHING <br /> <i>AMAZING</i> TOGETHER</h2>
                        <button className='main-btn'>
                                            <div className="icon">
                                            <i className="fa-solid fa-angle-right"></i>
                                            </div>
                                            start a projects
                                        </button>
                    </div>
                    <Row>
                        <Col sm={12} md={6} lg={3} className='mt-4 '>
                            <div className="social">
                            <img src="images/logo-light.png" alt="" />
                                <div className="social-media">
                                    <div className="icon">
                                        <a href="https://www.facebook.com/profile.php?id=100026932089840" target='_blank'><i className="fa-brands fa-facebook-f"></i></a>
                                    </div>
                                    <div className="icon">
                                        <a href="https://twitter.com/Mohamed_M3awad" target='_blank'><i className="fa-brands fa-twitter"></i></a>
                                    </div>
                                    <div className="icon">
                                        <a href="https://www.linkedin.com/in/mohamed-moawad-993a21261/" target='_blank'><i className="fa-brands fa-linkedin-in"></i></a>
                                    </div>
                                    <div className="icon">
                                        <a href="https://www.instagram.com/mohamed_muoawad/" target='_blank'><i className="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={3} className='mt-4 ps-lg-5 ps-sm-1'>
                            <div className="links">
                                <h4>navigation</h4>
                                <ul>
                                    <li>
                                        <Link to='/'>home</Link>
                                        
                                    </li>
                                    <li>
                                    <Link to='/'>about</Link>
                                        
                                    </li>
                                    <li>
                                    <Link to='/'>services</Link>
                                        
                                    </li>
                                    <li>
                                    <Link to='/'>contact</Link>
                                        
                                    </li>
                                </ul>
                                
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={3} className='mt-4 '>
                            <div className="contact">
                                <h4>contact</h4>
                                <ul>
                                    <li>
                                    <a href="tel:01062026826">+201062026826</a>
                                    </li>
                                    <li>
                                    <a href="mailto:mohamedmoawad531@icloud.com">mohamedmoawad531@icloud.com</a>
                                    </li>
                                    <li>
                                    <a href="mailto:moawadmohamed084@gmailcom">moawadmohamed084@gmailcom</a>
                                    </li>
                                </ul>
                                
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={3} className='mt-4 ps-lg-5 ps-sm-1'>
                            <div className="adderss">
                                <h4>adderss</h4>
                                <p>El-Salam City, Cairo, Egypt</p>
                            </div>
                        </Col>
                    </Row>
                    <div className="copyright">
                        <p>© 2023 Digital Agency Designed </p>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer
