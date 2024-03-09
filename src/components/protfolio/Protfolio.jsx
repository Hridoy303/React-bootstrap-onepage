import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './protfolio.css'

const Protfolio = () => {
  return (
    <div>
      <section id='ban-pro'>
        <Container>

            <Row>
                <Col lg={6}>
                
            <div className="pro-left-text">
                <h5>Why Choose Us</h5>
                <h1>Track your crytpo portfolio on the best way possible</h1>
                <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
            </div>
                
                </Col>
                <Col lg={5} className='offset-lg-1'>
                <div className="pro-right">
                    
                    <input type="text"  placeholder= 'Email Address'/>
                    <input type="text"  placeholder='Password'/>
                  
                    <div className="last">
                  <a href="#">Get Started</a>
                  </div>
                
                 </div>
               
                
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Protfolio
