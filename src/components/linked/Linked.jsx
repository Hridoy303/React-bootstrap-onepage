import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import'./linked.css'
import link from'../../assets/link.png'

const Linked = () => {
  return (
    <div>
      <section id='ban-link'> 
        <Container>
            <Row>

                <Col lg={6}>
                
                <div className="lin-text">
                    <h4>Our Feature</h4>
                    <h1>All payments are
                        linked to your Financy
                          account</h1>
                    <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                    <div className="get-btn">
                        <a href="#">Get Started</a>
                    </div>
                </div>
                
                </Col>
                <Col lg={6}>
                
                <div className="lin-img">
                    <img src={link} alt="" className='w-100' />
                </div>
                </Col>

            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Linked
