import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import balance from "../../assets/balance.png"
import'./balance.css'

const Balance = () => {
  return (
    <div>
     <section>
        <Container>
          <Row>
            <Col lg={6} >


       <div className="left">

        <img src={balance} alt="" className='w-100' />
       </div>



            </Col>
            <Col lg={6}>
            
         <div className="text-right">
          
          <h5>Our Feature</h5>
          <h1>Receive paymentsquickly from anywhere</h1>
          <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
          
          <div className="get">
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

export default Balance
