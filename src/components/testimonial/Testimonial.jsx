import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import testimonial from'../../assets/testimonial.png'
import victor from'../../assets/victor.png'
import star from '../../assets/star.png'
import'./testimonial.css'
import one from'../../assets/one.jpg'
import two from'../../assets/two.jpg'
import Slider from 'react-slick'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";




function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className='next' onClick={onClick}><IoIosArrowRoundBack className='sei'/></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className='prev' onClick={onClick}><IoIosArrowRoundForward className='oi'/></div>
  );
}








const Testimonial = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  
    
  };
  return (
    <div>
      <section>
        <Container>
            <Row>
                <Col lg={12}>
                 <div className="test-text">
                    <h3>Testimonials</h3>
                    <h2>Check what our 
                         clients are saying</h2>
                 </div>
                
                
                
                </Col>

                <Col lg={6}>
                <Slider {...settings}>
                  
               
               
               <div className="left-tes">
                    <img src={testimonial} alt="" className='w-100' />
                    
                </div>
                <div className="left-on">
                  <img src={one} alt="" />
                </div>

                <div className="left-tw">
                  <img src={two} alt="" />
                </div>
              
                


                   </Slider> 
               
               

              
              
                
                
                
                </Col>

               <Col lg={5} className='offset-lg-1'>
               
               <div className="right-tes" >
                 <img src={victor} alt="" />
                 <h2>Save Time Managing Social
                     Media For Your Business</h2>
                     <p>Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.

                    Believing neglected so so allowance existence departure in. In design active temper be uneasy. </p>
                    <div className="star">
                        <img src={star} alt="" />
                    </div>
                    <h3>Angela Taylor</h3>
                    <h4>CEO SAMSUNG</h4>
               </div>
               
               </Col>
               <Col lg={12}>
               
               <div className="main">
              
                
                 
                 
                 <div className="text">
                 <p>And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.</p>
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

export default Testimonial
