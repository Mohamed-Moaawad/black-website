import React from 'react'
import Navs from '../../components/Navs'
import Wrap from '../../components/Wrap'
import SocialMediaLinks from '../../components/SocialMediaLinks'
import { Container, Row, Col } from 'react-bootstrap'
import './Header.css'
import './DogChow.css'
import BtnToUp from '../../components/BtnToUp'

const DogChow = () => {
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
              <div className="god-chow">
                {/* start header */}
                <div className="header">
                  <div className="img">
                              <img src="images/1 (10).jpg" alt="" />
                              <div className='text'>
                                  <h6>Photography | Production</h6>
                                  <h2>DOG CHOW</h2>
                                  <p><span>Published : </span>July 14th 2022</p>
                              </div>
                          </div>
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
                {/* end  meet */}
                {/* start images-dogs */}
                <div className="images-dogs">
                  <div className="img-dog img-dog_1">
                    <img src="images/2 (5).jpg" alt="" />
                  </div>
                  <div className="img-dog img-dog_2">
                    <img src="images/3 (5).jpg" alt="" />
                  </div>
                  <div className="img-dog img-dog_3">
                    <img src="images/4 (4).jpg" alt="" />
                  </div>
                  <div className="img-dog img-dog_4">
                    <img src="images/5 (2).jpg" alt="" />
                  </div>
                </div>
                {/* end images-dogs */}
            </div>
          </div>
        </>
  )
}

export default DogChow
