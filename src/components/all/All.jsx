import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import'./all.css'
import card from '../../assets/card.png'

const All = () => {
  return (
    <div>
      <section id='banner-all'>

     <Container>
        <Row>
            <Col lg={6}>
            
            
            <div className="all-left">
                <h3>Our Feature</h3>
                <h1>All payments are
                     linked to your Financy
                      account</h1>
                      <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                      <a href="#">Get Started</a>

            </div>
            
            
            </Col>
            <Col lg={6}>
             <div className="card-img ">
                <img src={card} alt="" className='w-100'/>
             </div>
            
            
            </Col>
        </Row>
     </Container>



      </section>
    </div>
  )
}

export default All
