import Image from 'next/image'
import React from 'react'

const BGBody = () => {
    return (
        <div className='min-h-screen bg-black'>
            <Image src='/wallpaper.jpg' fill="true" alt='wallpaper' objectFit='cover' />
        </div>
    )
}

export default BGBody