import React from 'react'
import  Netflix from '../assets/netflix.png'
import Cloud from '../assets/cluod.avif'
import Cart from '../assets/cart.avif'



const Projects = () => {
    return (
        <div>
            <h1 className='text-center eheading' style={{ fontSize: '60px', color: 'rgb(245, 101, 57)',paddingTop:'90px' }}>Projects</h1>
            <div class="cards d-flex align-items-center justify-content-center gap-4 flex-wrap" style={{padding:'100px 0'}}>
                <div class="card projects" style={{ width: '20rem' }}>
                    <img src={Netflix} class="card-img-top" alt="..." width={350} height={350} />
                    <div class="layer">
                        <h5>Netflix Clone(React)</h5>
                        <p>A Netflix clone project is a web application that replicates the functionality and
                            features
                            of the original Netflix platform. The project involves creating a user-friendly
                            interface.
                        </p>
                        <a href="https://github.com/gopalthrilok/netflix_clown" target="_blank"><i
                            class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div class="card projects" style={{ width: '20rem' }}>
                    <img src={Cloud} class="card-img-top" alt="..." width={350} height={350} />
                    <div class="layer">
                        <h5>Weather Application React</h5>
                        <p>The Weather Application is a React-based project that provides users with real-time weather
                            information and a 7-day forecast for their selected location.</p>
                        <a href="https://github.com/gopalthrilok/WeatherApi" target="_blank"><i
                            class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div class="card projects" style={{ width: '20rem' }}>
                    <img src={Cart}  class="card-img-top" alt="..." width={350} height={350} />
                    <div class="layer">
                        <h5>React Shopping Cart</h5>
                        <p>Shopping Cart is a e-commerce cart management system designed to enhance the online shopping
                            experience. Developed using the Redux Toolkit, this project ensures state management is
                            efficient.</p>
                        <a href="" target="_blank">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects