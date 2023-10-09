import React, { useEffect, useRef, useState } from 'react'
import Navs from '../components/Navs'
import Wrap from '../components/Wrap'
import './Home.css'
import { Col, Container, Row } from 'react-bootstrap';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import SlideProducts from '../components/sliders/SlideProducts';
import SlideTeam from '../components/sliders/SlideTeam';
import Footer from '../components/Footer';
import SocialMediaLinks from '../components/SocialMediaLinks';
import Preloader from '../components/Preloader';
import BtnToUp from '../components/BtnToUp';




const Home = () => {
    const [loading , setLoading] = useState(false)
    const [products, setProducts ] = useState([
        {
            id: 1,
            name: 'headphones',
            title: 'Production',
            image: 'images/1.jpg',
            dec: 'ABOUT THE PROJECT Mode is an audio range designed to provide optimal performance and comfort for every mode of use. The',
        },
        {
            id: 2,
            name: 'dog chow',
            title: 'Photography - Production',
            image: 'images/1 (1).jpg',
            dec: 'This optional section is only applicable to posts. It is a space for you to write a summary of the post.',
        },
        {
            id: 3,
            name: 'open run',
            title: 'Production',
            image: 'images/1 (2).jpg',
            dec: 'ABOUT THE PROJECT Wondour™ was tasked with creating a pair of electronic glasses that can help legally-blind and low-vision people see',
        },
        {
            id: 4,
            name: 'audi rs',
            title: 'Photography - Production',
            image: 'images/1 (3).jpg',
            dec: 'This optional section is only applicable to posts. It is a space for you to write a summary of the post.',
        },
        {
            id: 5,
            name: 'men fashion',
            title: 'Photography',
            image: 'images/1 (4).jpg',
            dec: 'Jaramillo Published June 15th 2022 Caption #1 Caption #2 Caption #3 How is your visual identity? we',
        },
        {
            id: 6,
            name: 'visionaid',
            title: 'CREATIVE - Photography',
            image: 'images/1 (5).jpg',
            dec: 'Meet VisionAid™. Patents Pending. Wondour™ was tasked with creating a pair of electronic glasses that can help legally-blind and low-vision people',
        },
    ])
    const sectionRef = useRef()
    const numRef = useRef()


    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },3000)
    },[])




    // const startCount = (element)=>{
    //     const goal = numRef.current.dataset.goal
    //     const count = setInterval(()=>{
    //         numRef.textContent++
    //         if(element.textContent == goal){
    //             clearInterval(count)
    //         }
    //     }, 1000)
    // }

    // startCount()


    return (
        <>
        {loading ? <Preloader/> :
        
        <div className="all-home">
            <Wrap/>
            {/*==========
                start Nav 
            ==========*/}
            <Navs />
            
            {/*==========
                end Nav 
            ==========*/}
            {/* btn to up */}
                <BtnToUp/>
            {/* btn to up */}
            <div className="home">
                <SocialMediaLinks />
                {/* start landing */}
                <div className="landing">
                                <div className="slide">
                                    <Swiper
                                        spaceBetween={30}
                                        effect={'fade'}
                                        navigation={true}
                                        pagination={{
                                        clickable: true,
                                        }}
                                        modules={[EffectFade, Navigation, Pagination]}
                                        className="mySwiper"
                                    >
                                        {products.map(itme=>(
                                            <SwiperSlide key={itme.id}>
                                            <img src={itme.image} />
                                            <div className="text">
                                                <h2>{itme.name}</h2>
                                                <p>{itme.dec}</p>
                                                <button className='main-btn'>
                                                    <div className="icon">
                                                        <i className="fa-solid fa-angle-right"></i>
                                                    </div>
                                                    view case
                                                </button>
                                            </div>
                                        </SwiperSlide>
                                        ))}
                                    </Swiper> 
                                </div>
                </div>
                {/* end landing */}
                {/* start sec-icon */}
                <div className="sec-iocns">
                    <Container>
                        <Row>
                            <Col sm={12} md={6} lg={4} className='mt-1'>
                                <div className="icon">
                                    <div className="ico">
                                        <i className="fa-solid fa-display"></i>
                                    </div>
                                    <div className="text">
                                        <h5>how we work</h5>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4} className='my-sm-4 my-md-0'>
                                <div className="icon tow">
                                    <div className="ico ">
                                    <i className="fa-regular fa-window-restore"></i>
                                    </div>
                                    <div className="text">
                                        <h5>what we do</h5>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4} className='mt-1'>
                                <div className="icon tow">
                                    <div className="ico ">
                                        <i className="fa-solid fa-code"></i>
                                    </div>
                                    <div className="text">
                                        <h5>get a quote</h5>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* end sec-icon */}
                {/* start we-are */}
                <div className="we-are">
                    <Container>
                        <div className="sec-up">
                            <div className="text">
                                <h2>
                                    <span className="spn-one">we are</span>
                                    <span className="spn-tow">black dsn</span>
                                    <span className="spn-three">acency</span>
                                </h2>
                                <div className="tex">
                                <Link to="/" className='main-link'>
                                        <div className='icon'>
                                            <i className="fa-solid fa-angle-right"></i>
                                        </div>
                                        <span>about us</span>
                                    </Link>
                                    <p>We build and activate brands through cultural insight, 
                                        strategic vision, and the power of emotion 
                                        across every element of its expression.
                                    </p>
                                </div>
                            </div>
                            <div className="img">
                                <img src="images/about-1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="sec-down">
                            <img src="images/about-2.jpeg" alt="" />
                        </div>
                    </Container>
                </div>
                {/* end we-are */}
                {/* start services */}
                <div className="services">
                    <Container>
                        <div className="header-text">
                            <Row>
                                <Col sm={12} md={8} lg={8}>
                                            <div className="text">
                                                <h6 className='head'><span></span> advantages</h6>
                                                <h3>let`s chack <span>our services</span></h3>
                                            </div>
                                </Col>
                                <Col sm={12} md={4} lg={4} className='btn-right'>
                                    <button className='main-btn'>
                                        <div className="icon">
                                        <i className="fa-solid fa-angle-right"></i>
                                        </div>
                                        view all services
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        <Row className='mt-5'>
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
                                    <i className="fa-regular fa-lightbulb"></i>
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
                                    <i className="fa-regular fa-lightbulb"></i>
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

                    </Container >
                    <Container className='services-conten'>
                        <Row>
                            <Col sm={12} md={6} lg={6} className='p-md-0 p-sm-1'>
                                <div className="img">
                                    <img src="images/about-3.jpg" alt="" />
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={6} className='p-md-0 p-sm-1 position-relative'>
                                <div className="text">
                                        <h6 className="head"><span></span> thchnology</h6>
                                        <h2>how is your visual <span>identity?</span></h2>
                                        <p>
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum. Sed ut perspiciatis unde omnis iste natus sit .
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="fa-solid fa-check"></i>
                                                Beautiful and easy to understand UI
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check"></i>
                                                Theme advantages are pixel perfect design
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check"></i>
                                                Present your services with flexible
                                            </li>
                                        </ul>
                                        <button className='main-btn'>
                                            <div className="icon">
                                                <i className="fa-solid fa-angle-right"></i>
                                            </div>
                                            learn more
                                        </button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* end services */}
                {/* start slider */}
                <div className="slider">
                    <Container>
                        <div className="header-text">
                            <Row>
                                <Col sm={12} md={8} lg={8}>
                                            <div className="text">
                                                <h6 className='head'><span></span> our work</h6>
                                                <h3>our latest <span>awesome designs</span></h3>
                                            </div>
                                </Col>
                                <Col sm={12} md={4} lg={4} className='btn-right'>
                                    <button className='main-btn'>
                                        <div className="icon">
                                        <i className="fa-solid fa-angle-right"></i>
                                        </div>
                                        view all work
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        <SlideProducts slider={products}/>
                    </Container>
                </div>
                {/* end slider */}
                {/* start bg-window */}
                <div className="bg-window">
                    <Container>
                        <Row>
                            <Col sm={12} md={12} lg={12} className='d-flex justify-content-center'>
                            <div className="text">
                            <h3>Need help with professional photography? Let's work together!</h3>
                            <p>
                            In my work, I try to find the right balance between form and function. From technical drawings, all the way to the photographic renders, and the actual representations of my work as a designer, my philosophy is that of simplicity.
                            At the same time, my style is distinctly mine – uncluttered, with clean shapes and modern space-saving solutions.
                            </p>
                            <button className='main-btn'>
                                <div className="icon">
                                    <i className="fa-regular fa-envelope-open"></i>
                                </div>
                                contact us
                            </button>
                        </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* end bg-window */}
                {/* start team-slide */}
                <div className="team-slide">
                    <Container>
                        <div className="bg-image"></div>
                        <div className="header-text">
                            <Row>
                                <Col sm={12} md={8} lg={8}>
                                            <div className="text">
                                                <h6 className='head'><span></span> testimonials</h6>
                                                <h3>what people <span>are saying</span></h3>
                                            </div>
                                </Col>
                                <Col sm={12} md={4} lg={4} className='btn-right'>
                                    <button className='main-btn'>
                                        <div className="icon">
                                        <i className="fa-solid fa-angle-right"></i>
                                        </div>
                                        view all news
                                    </button>
                                </Col>
                            </Row>
                        </div>
                        <SlideTeam/>
                    </Container>
                </div>
                {/* end team-slide */}
                {/* start slide-images */}
                    <div className="slide-images">
                        <Container>
                            <div className="header-text">
                            <Row>
                                <Col sm={12} md={8} lg={8}>
                                            <div className="text">
                                                <h6 className='head'><span></span> latest news</h6>
                                                <h3>latest and <span>greatest post</span></h3>
                                            </div>
                                </Col>
                                <Col sm={12} md={4} lg={4} className='btn-right'>
                                    <button className='main-btn'>
                                        <div className="icon">
                                        <i className="fa-solid fa-angle-right"></i>
                                        </div>
                                        view all news
                                    </button>
                                </Col>
                            </Row>
                            </div>
                            <Row className='mt-5'>
                                <Col sm={12} md={6} lg={4} className='mt-sm-5 mt-lg-0'>
                                <div className="box">
                                        <div className="img">
                                            <img src="images/3 (1).jpg" alt="" />
                                            <p>june 12, 2022 .. uncategorized</p>
                                        </div>
                                        <div className="text">
                                            <h4>wildilfe could be amazing, see why</h4>
                                            <p> qProin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} lg={4} className='mt-sm-5 mt-lg-0'>
                                <div className="box">
                                        <div className="img">
                                            <img src="images/1 (7).jpg" alt="" />
                                            <p>june 12, 2022 .. uncategorized</p>
                                        </div>
                                        <div className="text">
                                            <h4>wildilfe could be amazing, see why</h4>
                                            <p> qProin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} lg={4} className='mt-sm-5 mt-lg-0'>
                                <div className="box">
                                        <div className="img">
                                            <img src="images/2 (1).jpg" alt="" />
                                            <p>june 12, 2022 .. uncategorized</p>
                                        </div>
                                        <div className="text">
                                            <h4>wildilfe could be amazing, see why</h4>
                                            <p> qProin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                {/* end slide-images */}
                {/* start images */}
                <div className="images" ref={sectionRef}>
                    <Container>
                        <Row>
                            <Col sm={12} md={4} lg={4} className='d-flex align-items-center'>
                                <div className="number">
                                    <h1 ref={numRef}>25</h1>
                                    <h5 data-goal>YEARS OF
                                        <br />
                                        DIGITAL EXPERIENCE</h5>
                                </div>
                            </Col>
                            <Col sm={12} md={8} lg={8} className='mt-sm-5 mt-md-0'>
                                <Row>
                                    <Col sm={12} md={3} lg={3} className='px-0'>
                                    <div className="img top one">
                                        <img src="images/1.svg" alt="" />
                                        </div>
                                    </Col>
                                    <Col sm={12} md={3} lg={3} className='px-0'>
                                    <div className="img top two">
                                        <img src="images/2.svg" alt="" />
                                        </div>
                                    </Col>
                                    <Col sm={12} md={3} lg={3} className='px-0'>
                                    <div className="img top three">
                                        <img src="images/3.svg" alt="" />
                                        </div>
                                    </Col>
                                    <Col sm={12} md={3} lg={3} className='px-0'>
                                    <div className="img top">
                                        <img src="images/4 (1).svg" alt="" />
                                        </div>
                                    </Col>
                                    <Col sm={12} md={3} lg={3} className='px-0'>
                                    <div className="img one">
                                        <img src="images/5.svg" alt="" />
                                        </div>
                                    </Col>
                                    <Col sm={12} md={3} lg={3} className='px-0'>
                                    <div className="img two">
                                        <img src="images/6.svg" alt="" />
                                        </div>
                                    </Col>
                                    <Col sm={12} md={3} lg={3} className='px-0'>
                                    <div className="img three">
                                        <img src="images/1.svg" alt="" />
                                        </div>
                                    </Col>
                                    <Col sm={12} md={3} lg={3} className='px-0'>
                                    <div className="img">
                                        <img src="images/4 (1).svg" alt="" />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* end images */}
                {/* start footer */}
                <Footer/>
                {/* end footer */}
                
            </div>
        </div>
        }
            
            
        </>
    )
}

export default Home
