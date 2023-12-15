
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';


const ImageContainer = (props) => {

  return (
    <div className='group  image-container w-full object-cover flex flex-col gap-3 relative'>
      <Image
        src={props.download_url}
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <div className="overlay absolute h-full w-full p-8 bg-gradient-to-b from-[#00000080]  to-[#00000080] flex items-end justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">

        {props.author && <h2 className='text-3xl'>{props.author}</h2>}
        <a href={props.url} target='_blank' >
          <FontAwesomeIcon icon={faLink} className='text-red-400 h-6 w-6 bg-white p-2 rounded-full ' />
        </a>

        <a
          rel='nofollow'
          href={props.download_url}
          download="hipsnap_image.jpg"
          className='absolute top-5 right-5'
          target='_blank'
        >
          <div className="download  flex items-center justify-center gap-3 px-8 py-2.5 rounded-full border-2 border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out" >
            <FontAwesomeIcon icon={faFloppyDisk} />
            Download
          </div>
        </a>

      </div>
    </div>
  )
}

export default ImageContainer;