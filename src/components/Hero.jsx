import React from 'react'
import profilepic from '../assets/profilepic5.png'
import { AiFillLinkedin,AiFillGithub,AiFillTwitterCircle } from 'react-icons/ai'
import {TypeAnimation} from 'react-type-animation'
const Hero=() =>{
    return(
        <div>
            <div className='my-7 sm:my-0 max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center'>
                <div className=' flex-col my-auto mx-auto items-start align-left
                '>
                    <p className='  text-left md:text-5xl sm:text-4xl text-xl font-bold text-gray-200'>Hi! I am
                        </p>
                        <p className=' text-left md:text-5xl sm:text-4xl text-xl font-bold text-gray-200 '>Aditya Pratap Singh</p>
                        
                        <h1 className='text-left md-text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-gray-200'> I am a
                            <TypeAnimation
                            sequence={[
                                "Web Developer",
                                1000,
                                "Problem Solver"
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            />
                        </h1>
                        <div className='flex justify-center items-start text-left'>
                            <p className='md:text-1xl sm:text-1xl text-xl font-bold text-gray-500'>
                               I am a skilled and passionate web designer with experience in creating 
                               visually appealing and user-friendly websites.
                            </p>

                        </div  >
                        <div className='text-5xl flex justify-start gap-16 my-7 text-purple-600'>
                            <AiFillGithub />
                            <AiFillTwitterCircle />
                            <AiFillLinkedin />

                        </div>
                        <div class="relative inline-flex group my-3">
                            <div class="absolute transitions-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#F675E] rounded-x1 blur-lg group-hover:opacity-100
                            group-hover:-inset-1 group-hover:duration-200 animate-tilt">

                            </div>
                            
                       
                        <a href="/" title="Download CV" role='button'
       class="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 text-left">
        Check Resume
    </a>
    </div>
                     
                </div>

                <div className='my-auto'>
                    <img className='w-[400px] sm:w-[400px]-mx-auto h-auto' src={profilepic} alt="profile pic" />
                </div>
            </div>
        </div>
    )
}

export default Hero
