import React from 'react'
import Aboutimg from '../assets/about-img.png'

const About = () => {
  return (
    <div className='about' style={{background:'#212121'}}>
        <div className="linestyling d-flex align-item-center gap-3 py-4" >
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="line"></div>
        </div>
        <div className="row align-items-center about-container justify-content-center gap-5">
        <div className="col-md-5 col-sm-10 col-11 about-description">
            <h1 className='h1 eheading about-heading' style={{fontSize:'60px',color:'rgb(245, 101, 57)'}}>Who am I?</h1>
            <p className='p about-desc' style={{lineHeight:'35px'}}>Hi, I'm Gopal Thrilok, a passionate Full Stack Developer from Hyderabad, having experience in building robust web applications. I specialize in both front-end and back-end development and databases, offering a comprehensive skill set that allows me to create seamless and efficient digital experiences from start to finish.</p>
        </div>
        <div className="col-md-5 col-sm-10 col-11 about-img">
            <img src={Aboutimg} width={400} height={400} alt="" />
        </div>
        </div>
    </div>
  )
}

export default About