'use client'
import React from 'react'
import Windows from '../windows/Windows'
import SearchBar from './SearchBar'


const MiddleSection = () => {
    return (
        <div className='flex justify-between items-center'>
            <Windows />
            <SearchBar />
        </div>
    )
}

export default MiddleSection