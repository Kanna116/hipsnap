import React, { useEffect, useState } from 'react'
import ImageContainer from './imageContainer'

const ImageSection = () => {
    const [imageData, setImageData] = useState([])
    const [count, setCount] = useState(50)
    useEffect(() => {
        fetch(`https://picsum.photos/v2/list?page=2&limit=${count}`)
            .then(res => res.json())
            .then(data => setImageData(data))
    }, [count])

    const allImages = imageData.map(image => {0
        return <ImageContainer
            key={image.id}
            {...image}
        />
    })


    function changeImages() {
        setCount(prevCount => prevCount + 2)
    }

    return (

        <div className='w-screen flex justify-center gap-10 px-14  mt-5 relative py-20 pt-20 pb-32 mb-10'>
            <button onClick={changeImages} className='absolute top-0 left-1/2  px-5 py-2 rounded-full -translate-x-1/2 border-2 hover:bg-white hover:text-black transition-all duration-300 '>New images</button>
            <div className="image-columns flex flex-col gap-5 items-center">
                {allImages.slice(0, 20)}

            </div>
            <div className="image-columns flex flex-col gap-5 items-center">
                {allImages.slice(20, 40)}

            </div>
            <div className="image-columns flex flex-col gap-5 items-center">
                {allImages.slice(10, 30)}

            </div>
            <button onClick={changeImages} className='absolute bottom-3 left-1/2  px-5 py-2 rounded-full -translate-x-1/2 border-2 hover:bg-white hover:text-black transition-all duration-300 '>Load More</button>
        </div>
    )
}

export default ImageSection