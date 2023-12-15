import React from 'react'
import Image from 'next/image'
import Logo from '/images/logo.png'

const Navbar = () => {
    return (
        <div className='navbar bg-[#000000aa] h-16 w-screen px-16 flex items-center justify-center pt-2 fixed top-0 backdrop-blur z-30'>
            <div className="logo h-full w-32 mr-auto ">
                <Image
                    src={Logo}
                    alt="Hipsnap logo"
                    className='w-fill object-cover  h-full'
                />
            </div>

            <ul className='flex items-center gap-10 uppercase font-medium'>
                <li>Home</li>
                <li>About</li>
                <li>Github Code</li>
            </ul>
        </div>
    )
}

export default Navbar