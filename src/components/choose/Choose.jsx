import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './choose.css'
import victorone from'../../assets/victorone.png'
const Choose = () => {
  return (
    <div>
      <section id='ban-choose'>
        <Container>
            <Row>

                <Col lg={12} className='text-center'>
                
                <div className="up-text">
                    <h5>Why Financy</h5>
                    <h3>Why Choose Us</h3>
                </div>
                </Col>

                <Col lg={6}>
                
                <div className="main-div">
                   
                   <div className="vic-img">
                   <img src={victorone} alt="" /> 
                   </div>
                   
                  
                  <div className="deep">
                  <h5>No Extra Fee</h5>
                    <p>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                  </div>
                </div>
                </Col>
                <Col lg={6}>
                
                <div className="main-div">
                   
                   <div className="vic-img">
                   <img src={victorone} alt="" /> 
                   </div>
                   
                  
                  <div className="deep">
                  <h5>No Extra Fee</h5>
                    <p>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                  </div>
                </div>
                </Col>


                <Col lg={6}>
                
                <div className="main-div">
                   
                   <div className="vic-img">
                   <img src={victorone} alt="" /> 
                   </div>
                   
                  
                  <div className="deep">
                  <h5>No Extra Fee</h5>
                    <p>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                  </div>
                </div>
                </Col>



                <Col lg={6}>
                
                <div className="main-div">
                   
                   <div className="vic-img">
                   <img src={victorone} alt="" /> 
                   </div>
                   
                  
                  <div className="deep">
                  <h5>No Extra Fee</h5>
                    <p>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                  </div>
                </div>
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Choose
