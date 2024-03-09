import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./recive.css"

const Recive = () => {
  return (
    <div>
      <section id='ban-rec'>
        <Container>
            <Row>
                <Col lg={6}>
                
                <div className="rec-text">
                <h5>Our Feature</h5>
          <h1>Receive paymentsquickly from anywhere</h1>
          <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
          
                </div>
                
                
                
                </Col>
                 
                 <Col lg={6}>
                 
                 <div className="right-in">
                    <h3>Get Started for Free</h3>
                    <input type="text"  placeholder= 'Email Address'/>
                    <input type="text"  placeholder='Password'/>
                  
                    <div className="ami">
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

export default Recive
