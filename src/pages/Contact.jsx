import React, { useEffect, useRef } from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import Wrap from '../components/Wrap'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../components/Footer'
import Navs from '../components/Navs'
import SocialMediaLinks from '../components/SocialMediaLinks'
import BtnToUp from '../components/BtnToUp'

const Contact = () => {
    const inpTextRef = useRef()
    const inpEmailRef = useRef()
    const messageRef = useRef()
    const errorRef = useRef()


    const handelclick = (e)=>{
        e.preventDefault()
        if(inpTextRef.current.value == "" ){
            errorRef.current.innerHTML = "name is emty"
            errorRef.current.style.opacity = "1"
            errorRef.current.style.color = "red"
            inpTextRef.current.style.border = '1px solid red'
            return
        }if(inpEmailRef.current.value == ""){
            errorRef.current.innerHTML = "email is emty"
            errorRef.current.style.opacity = "1"
            errorRef.current.style.color = "red"
            inpEmailRef.current.style.border = '1px solid red'
            return
        }if(messageRef.current.value == ""){
            errorRef.current.innerHTML = "message is emty"
            errorRef.current.style.opacity = "1"
            errorRef.current.style.color = "red"
            messageRef.current.style.border = '1px solid red'
            return
        }
        else{
            errorRef.current.innerHTML = "succses"
            errorRef.current.style.color = "green"
            messageRef.current.style.border = '1px solid #8888883a'
            inpTextRef.current.style.border = '1px solid #8888883a'
            inpEmailRef.current.style.border = '1px solid #8888883a'
        }
    }

    const handelKey =()=>{
        if(inpTextRef.current.value != "" ){
            inpTextRef.current.style.border = '1px solid #8888883a'
            return
        }if(inpEmailRef.current.value != ""){
            inpEmailRef.current.style.border = '1px solid #8888883a'
            return
        }if(messageRef.current.value != ""){
            messageRef.current.style.border = '1px solid #8888883a'
            return
        }
        else{
            messageRef.current.style.border = '1px solid red'
            inpTextRef.current.style.border = '1px solid red'
            inpEmailRef.current.style.border = '1px solid red'
        }
    }

    return (
        <>
            {/* start wrap */}
            <Wrap />
            {/* end wrap */}
            <div className="contact">
                <SocialMediaLinks />
                {/* start nav */}
                <Navs/>
                {/* end nav */}
                {/* btn to up */}
                <BtnToUp/>
                {/* btn to up */}
                {/* start header */}
                <div className="header">
                <div className="background-header"></div>
                <div className="text">
                        <h2>LOOK AROUND YOU EVERYTHING IS CHANGING.</h2>
                        <p>What if the time has come for you to change? Starting a collaboration is easy! Order a free consultation or call back. We are always in touch and happy to cooperate with you</p>
                        <Link to="/" className='main-link'>
                            <div className='icon'>
                                <i className="fa-solid fa-angle-right"></i>
                            </div>
                            <span>get started now</span>
                        </Link>
                    </div>
                </div>
                {/* end header */}
                {/* start form */}
                <div className="from">
                <div className='form-contain'></div>
                    <Container>
                        <Row>
                            <Col sm={12} md={7} lg={8}>
                            <form action="">
                                <h3>IF YOU HAVE QUESTIONS PLEASE CONTACT US</h3>
                                <p>Fill fields and find approximate your repair</p>
                                <div className="inp">
                                    <input type="text" placeholder='your Name' ref={inpTextRef} onKeyUp={handelKey}/>
                                    <input type="email" placeholder='your Email Address' ref={inpEmailRef} onKeyUp={handelKey}/>
                                </div>
                                <textarea name="" id="" cols="30" rows="6"  ref={messageRef} onKeyUp={handelKey} placeholder='Tell us about you and the world'></textarea>
                                <p className='error' ref={errorRef}></p>
                                <button type="submit" onClick={handelclick}>send message</button>
                            </form>
                            </Col>
                            <Col sm={12} md={5} lg={4} className='d-flex justify-content-center mt-5 mt-md-0'>
                            <div className="contact-box">
                            <ul>
                                <li>
                                <i className="fa-solid fa-location-dot"></i>
                                    <div className="text">
                                        <h6>head office :</h6>
                                        <p>el salam city, cairo, egypt</p>
                                    </div>
                                </li>
                                <li>
                                <i className="fa-solid fa-phone-volume"></i>
                                    <div className="text">
                                        <h6>phone :</h6>
                                        <a href="tel:01062026826">+201062026826</a>
                                    </div>
                                </li>
                                <li>
                                <i className="fa-solid fa-envelope"></i>
                                    <div className="text">
                                        <h6>write us :</h6>
                                        <a href="mailto:mohamedmoawad531@icloud.com">mohamedmoawad531@icloud.com</a>
                                    </div>
                                </li>
                            </ul>
                            </div>
                            </Col>
                        </Row>

                    </Container>
                </div>
                {/* end form */}
                {/* start iframes */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13796.769821620073!2d31.41596758407405!3d30.17449589795185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145810c330e05d5d%3A0x13ef89ed5e914b06!2z2YXYr9mK2YbZhyDYp9mE2LPZhNin2YXYjCDYp9mE2LPZhNin2YUg2KfZhNi62LHYqNmK2KnYjCDZgtiz2YUg2KPZiNmEINin2YTYs9mE2KfZhdiMINmF2K3Yp9mB2LjYqSDYp9mE2YLYp9mH2LHYqeKArA!5e0!3m2!1sar!2seg!4v1694558924371!5m2!1sar!2seg" 
                width="600" height="450" style={{border:0}} 
                loading="lazy">

                </iframe>
                {/* end iframes */}
                {/* start footer */}
                <Footer />
                {/* end footer */}

            </div>
        </>
    )
}

export default Contact
