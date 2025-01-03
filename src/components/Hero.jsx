import React from 'react'
import heroImage from '../assets/hero_poster.png'

const Hero = () => {
  return (
    <>
    <div className="container h-screen flex flex-col k items-center">
        <div className="w-4/5 h-4/5 pt-2 justify-center items-center">
            <img src={heroImage}  alt="Hero" className="w-full h-full object-cover" />    
        </div>
        <div className="pt-2 w-4/5 h-4/5">
            <h1 className="text-center text-4xl font-bold">International Conference INSPECT-2024 (Hybrid Mode)</h1>
            <h2 className="text-center text-2xl font-semibold">to be held from 7-8th December 2024 at ABV-IIITM Gwalior, India</h2>
            <p className="text-lg font-normal">The conference aims to bring together researchers, engineers, and practitioners from academia and industry to discuss the latest advancements in the field of inspection and quality control. It provides a platform for sharing knowledge, experiences, and best practices in the field of inspection and quality control.</p>
        </div>

    </div>
    </>
  )
}

export default Hero