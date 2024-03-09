import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./samsung.css"
import logo from "../../assets/logo-one.png"
import more from '../../assets/more.png'
import oracle from "../../assets/oracle.png"
import samsung from "../../assets/samsung.png"
import monday from "../../assets/monday.png"
import segment from "../../assets/segment.png"



const Samsung = () => {
  return (
    <div>
      <section id='company'>
        <Container>

         <Row>

        <Col lg={12} className='text-center'>
        
        
        <div className="main-com">
            <h3>Over 32k+ software  businesses growing with AR Shakir</h3>
        </div>
      
      
        
        </Col>
        <Col lg={12}>
        
        <div className="up">
            <img src={logo} alt="" />
            <img src={more} alt="" />
            <img src={oracle} alt="" />
            <img src={samsung} alt="" />
            <img src={monday} alt="" />
            <img src={segment} alt="" />
            
            
            
           
           
        </div>
        
        
        </Col>

        
        


         </Row>

        </Container>



      </section>
    </div>
  )
}

export default Samsung
