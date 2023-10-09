import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './TeamImages.css'

const TeamImages = () => {
    const [team, setTeam] = useState([
    {
        id:1,
        name: "ahmed shawky",
        image: "images/3.jpg",
        title: "web designer",
    },
    {
        id:2,
        name: "hisham megahed",
        image: "images/2.jpg",
        title: "founder",
    },
    {
        id:3,
        name: "blake hamilton",
        image: "images/1 (6).jpg",
        title: "engineer",
    },
    {
        id:4,
        name: "blake hamilton",
        image: "images/p-1.jpg",
        title: "engineer",
    },
    ])
    return (
        <>
            <div className="team-images">
                <Container>
                    <Row>
                        {team.map(item =>(
                            <Col sm={12} md={6} lg={3} className='mt-lg-0 mt-4' key={item.id}>
                            <div className="box-image">
                                <img src={item.image} alt="" />
                                <div className="text">
                                    <h5>{item.name}</h5>
                                    <p>{item.title}</p>
                                    <div className="icons">
                                        <div className="icon">
                                        <i className="fa-brands fa-facebook-f"></i>
                                        </div>
                                        <div className="icon">
                                        <i className="fa-brands fa-instagram"></i>
                                        </div>
                                        <div className="icon">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default TeamImages
