import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <>
    <div className='h1'>
      <h1>It’s not a pipeline problem.</h1>
    </div>
    <div className='h2'>
   <h1>It’s a spotlight problem.</h1> 
    </div>
    <div className='dec'>
    Tech hiring needs a reset. From prepping for jobs and practicing coding to<br/>
     running a world-class technical interview, give developers the tools they need<br/>
      to showcase their skills, passion, and potential.
    </div>
    <div className='Menu'>
    <span className='gap' ><b>Prep</b></span>
    <span><b>Screen</b></span>
    <span><b>Interview</b></span>
    </div>
    <section className='hero-wrapper'>
      <div>
    <div className='top'>:: Coding practice ::</div>
    <div><h1>Explore and expand your skills.</h1></div>
    <div className='p'>Every idea has a first line of code. Prep for jobs and sharpen your skills<br/>
       alongside a global community of developers. Access the content you need<br/>
        to develop new skills – and land the job you’ve dreamed of.</div>
        <div>
        <button className='button'>
                Sign up and practics 
                </button>
        </div>
        </div>
      
                <div className="image">
                    <img src="./community.png" height={400} width={400} />
                </div>
                
               
    </section>
    <section>
      <div className='h3'><h1>Join the movement.</h1></div>
      <div><h1>Screen on skills.</h1></div>
      <div >
                    <img src="./"  />
                </div>
    </section>
    </>
  )
}

export default Hero;
