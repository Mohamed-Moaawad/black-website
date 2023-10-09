import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Navs.css'
import { Link, NavLink } from 'react-router-dom'

const Navs = () => {
    const menuRef = useRef()
    const spnOneRef = useRef()
    const spnTwoRef = useRef()
    const spnthreeRef = useRef()
    const spnORef = useRef()
    const spnTRef = useRef()
    ///==============////
    const hORef = useRef()
    const hTRef = useRef()
    const hThRef = useRef()
    ///==================//
    const menuLinksRef = useRef()
    const workLinksRef = useRef()
    


    const handelMenu = ()=>{
        menuRef.current.classList.toggle('hide')
        spnOneRef.current.classList.toggle('spn-hide')
        spnTwoRef.current.classList.toggle('spn-hide')
        spnthreeRef.current.classList.toggle('spn-hide')
        spnORef.current.classList.toggle('spn-show')
        spnTRef.current.classList.toggle('spn-show')
        ///==============////
        hORef.current.classList.toggle('h6-hide')
        hTRef.current.classList.toggle('h6-hide')
        hThRef.current.classList.toggle('h6-colse')
    }

    const openWorkNav = ()=>{
        menuLinksRef.current.style.transform = "translateX(-300px)"
        setTimeout(()=>{
            workLinksRef.current.style.transform = "translateX(0)"
        },500)
        
    }
    const backToMenuLinks =()=>{
        workLinksRef.current.style.transform = "translateX(-300px)"
        setTimeout(()=>{
            menuLinksRef.current.style.transform = "translateX(0px)"
        },500)
        
    }

    return (
        <>
            <nav>
                <div className='container-fluid'>
                <Row sm={2} md={2} lg={2}>   
                    <Col>
                        <div className="logo">
                            <Link to="/">
                                <img src="images/logo-light.png" alt="" />
                            </Link>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-end'>
                                <div className="btn-menu" onClick={handelMenu}>
                                    <div className="spn">
                                        <span className='span_1' ref={spnOneRef}></span>
                                        <span className='span_1'  ref={spnTwoRef}></span>
                                        <span className='span_1'  ref={spnthreeRef}></span>
                                        <span className='spn-one' ref={spnORef}></span>
                                        <span className='spn-two' ref={spnTRef}></span>
                                    </div>
                                    <h6 className='h6-1' ref={hORef}>menu</h6>
                                    <h6 className='h6-2'  ref={hTRef}>open</h6>
                                    <h6 className='h6-3' ref={hThRef}>close</h6>
                                </div>
                                <div className="menu-links" ref={menuRef}>
                                    <Container>
                                    <Row>
                                        <Col sm={12} md={6} lg={7}>
                                            <div className="links">
                                                <div className="menu-title">menu</div>
                                                <div className="ovrefow">
                                                    <ol ref={menuLinksRef} className='menu'>
                                                        <li><NavLink to="/">home</NavLink></li>
                                                        <li onClick={openWorkNav}><NavLink>works <i className="fa-solid fa-angle-right"></i></NavLink></li>
                                                        <li><NavLink to="/service">service</NavLink></li>
                                                        <li><NavLink to="/about">about</NavLink></li>
                                                        <li><NavLink to="/contact">contact</NavLink></li>
                                                    </ol>
                                                    <ol ref={workLinksRef} className='work-links'>
                                                        <button onClick={backToMenuLinks}><i className="fa-solid fa-arrow-left"></i> <span className='works'>wroks</span><span className='back'>back</span></button>
                                                        <li><NavLink to="/visionaid">VISIONAID</NavLink></li>
                                                        <li><NavLink to="/men-fashion">MEN FASHION</NavLink></li>
                                                        <li><NavLink to="/audi-rs">AUDI RS</NavLink></li>
                                                        <li><NavLink to="/open-run">OPEN RUN</NavLink></li>
                                                        <li><NavLink to="/dog-chow">DOG CHOW</NavLink></li>
                                                        <li><NavLink to="/headphones">HEADPHONES</NavLink></li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={6} lg={5} className='contact-sec'>
                                            <div className="container-content">
                                                <div className="studio-nav">
                                                    <h5>studio</h5>
                                                    <a>Egypt, Cairo, Al Salam City </a>
                                                </div>
                                                <div className="contact-nav">
                                                    <h5>contact</h5>
                                                    <a href="tel:01062026826">+201062026826</a>
                                                    <a href="mailto:mohamedmoawad531@icloud.com">mohamedmoawad531@icloud.com</a>
                                                    <a href="mailto:moawadmohamed084@gmailcom">moawadmohamed084@gmailcom</a>
                                                </div>
                                                <div className="social-nav">
                                                    <h5>follow us</h5>
                                                    <a href="https://www.linkedin.com/in/mohamed-moawad-993a21261/" target='_blank'>linkedin.</a>
                                                    <a href="https://www.facebook.com/profile.php?id=100026932089840" target='_blank'>facebook.</a>
                                                    <a href="https://www.instagram.com/mohamed_muoawad/" target='_blank'>instagram.</a>
                                                    <a href="https://github.com/Mohamed-Moaawad" target='_blank'>github.</a>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    </Container>
                                </div>
                    </Col>
                </Row>
                </div>
            </nav>
        </>
    )
}

export default Navs
