import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Group from "../../assets/Group.png"
import "./banner.css"
import { FaPlayCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      
      {/* bannerone-star */}

      <section id='ban'>
        <Container>
         <Row>
            <Col lg={6}>
            
            <div className="left-text">
                <h1>Managing business payments has never been easier</h1>
                <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                <div className="play">
                    <a href="#">Get Started</a>
                    <a className='choto' href="#"> <FaPlayCircle className='icon' />  See How It Works</a>
                </div>
            </div>
            
            
            </Col>
            <Col lg={6}>
            
            
            <div className="right">
        <img src={Group} alt="" />
            
            </div>
            
            
            </Col>
         </Row>




        </Container>
      </section>


      {/* bannerone-end */}
    </div>
  )
}

export default Banner
