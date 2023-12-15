import React from 'react'
import Image from 'next/image';
import Logo from '/images/hero-image.png';


const HeroSection = () => {

    return (
        <div className='hero-section w-full h-[60vh] flex items-center justify-center  bg-[url("https://images.unsplash.com/photo-1638184984605-af1f05249a56?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center'>
            <div className='left h-full w-1/2'>
                <Image
                    src={Logo}
                    alt='logo'
                    className='w-full h-full object-contain mix-blend-screen '
                />
            </div>
            <div className="right w-1/2 h-full  flex items-start justify-center flex-col">
                <h1 className='text-[4vmax] capitalize font-bold'>If you like it <br />Take it</h1>
                <p className='text-[1vmax] '>We have a variety of stock images from  where  you can download the image and enjoy</p>

            </div>
        </div>
    )
}

export default HeroSection