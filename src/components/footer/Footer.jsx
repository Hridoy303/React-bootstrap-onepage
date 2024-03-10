import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import foot from '../../assets/foot.png'
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa6";


import './footer.css'

const Footer = () => {
  return (
   
    
    <div>
       <ScrollToTop height='25' width='28' color='white' smooth top='500' className='sc-icon' />
     <section id='ban-footer'>
        <Container>
            <Row>
                <Col lg={3}>
                <div className="log">
                    <img src={foot} alt="" />
                    <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
                    
                </div>
                
                </Col>
                <Col lg={2} className='offset-lg-1'>
                <div className="com-text">
                    <h2>Company</h2>
                    <h3>AboutUs</h3>
                    <h4>Blog</h4>
                    <h6>Carries</h6>
                    <h5>Princing</h5>
                </div>
                
                
                </Col>
                <Col lg={2} className='offset-lg-1'>
                
                <div className="product">
                    <h2>Product</h2>
                    <h3>Invoicing Platform</h3>
                    <h4>Accounting Plateform</h4>
                    <h5>Create Proposal</h5>
                    <h6>Contracts</h6>
                </div>
                </Col>
                <Col lg={2} >
                <div className="res">
                    <h2>Resources</h2>
                    <h3>Proposal Template</h3>
                    <h4>Invoice Template</h4>
                    <h5>Tuturoial</h5>
                    <h6>How to write a contract</h6>
                </div>
                </Col>

                <Col lg={12}>
                    <div className="footer-main">

                    </div>
                </Col>
                <Col lg={4}>
                <div className="text-area">
                    <h4>2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms of Services</h4>
                </div>
                </Col>
                <Col lg={3} className='offset-lg-5'>
                  <div className="right-area">
                    <h4>Supported by Microsoft Startup</h4>
                  </div>
                
                </Col>
            </Row>
        </Container>
     </section>
    </div>
  )
}

export default Footer
