'use client'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Pizza, Search } from 'lucide-react'

const SearchBar = () => {

    return (
        <div className='flex items-center justify-center h-3/4 border-2 border-white px-2 mx-2 bg-white/15 rounded-full focus-within:border-blue-600'>
            <Search size={20} />
            <Input className='mx-1 h-3/4 p-0 flex justify-center items-center-center !outline-none border-none !ring-0 bg-transparent placeholder:text-muted-foreground' placeholder='Search' />
            <Pizza size={20} />
        </div>
    )
}

export default SearchBar