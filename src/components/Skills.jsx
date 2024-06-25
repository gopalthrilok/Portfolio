import React from 'react'
import Html from '../assets/html.svg'
import Css from '../assets/css.svg'
import JS from '../assets/javascript.svg'
import Reactimg from '../assets/react.svg'
import Redux from '../assets/redux.svg'
import Python from '../assets/python.svg'
import Mysql from '../assets/mysql.svg'
import Django from '../assets/django.svg'



const Skills = () => {
    return (
        <div className='skill-container' style={{ height: '100vh' }}>
            <h1 className='text-center eheading' style={{ fontSize: '60px', color: 'rgb(245, 101, 57)', marginTop: '90px' }}>Skills</h1>
            <div className="logos">
                <div className="logos-slide">
                    <div className="skill">
                        <img src={Html} alt="" width={80} height={80} />
                        <h5>Html</h5>
                    </div>
                    <div className="skill">
                        <img src={Css} alt="" width={80} height={80} />
                        <h5>Css</h5>
                    </div>
                    <div className="skill">
                        <img src={JS} alt="" width={80} height={80} />
                        <h5>Javascript</h5>
                    </div>
                    <div className="skill">
                        <img src={Reactimg} alt="" width={80} height={80} />
                        <h5>React</h5>
                    </div>
                    <div className="skill">
                        <img src={Redux} alt="" width={80} height={80} />
                        <h5>Redux</h5>
                    </div>
                    <div className="skill">
                        <img src={Python} alt="" width={80} height={80} />
                        <h5>Python</h5>
                    </div>
                    <div className="skill">
                        <img src={Mysql} alt="" width={80} height={80} />
                        <h5>MySql</h5>
                    </div>
                    <div className="skill">
                        <img src={Django} alt="" width={80} height={80} />
                        <h5>Django</h5>
                    </div>
                    <div className="skill">
                        <img src={Html} alt="" width={80} height={80} />
                        <h5>Html</h5>
                    </div>
                    <div className="skill">
                        <img src={Css} alt="" width={80} height={80} />
                        <h5>Css</h5>
                    </div>
                    <div className="skill">
                        <img src={JS} alt="" width={80} height={80} />
                        <h5>Javascript</h5>
                    </div>
                    <div className="skill">
                        <img src={Reactimg} alt="" width={80} height={80} />
                        <h5>React</h5>
                    </div>
                    <div className="skill">
                        <img src={Redux} alt="" width={80} height={80} />
                        <h5>Redux</h5>
                    </div>
                    <div className="skill">
                        <img src={Python} alt="" width={80} height={80} />
                        <h5>Python</h5>
                    </div>
                    <div className="skill">
                        <img src={Mysql} alt="" width={80} height={80} />
                        <h5>MySql</h5>
                    </div>
                    <div className="skill">
                        <img src={Django} alt="" width={80} height={80} />
                        <h5>Django</h5>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills