import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({ title, about, image, desc }) => {
    return (
        <div className="flex flex-col items-center w-60 bg-zinc-200 rounded-lg shadow-zinc-900 shadow-md">
            <Link to='/'>
                <div className='relative'>
                    <img src={image} alt={title} className='w-60 h-60 rounded-lg' />
                    <span className="absolute bottom-0 left-0 text-white pl-4 pb-4 text-4xl font-bold">{title}</span>
                </div>
                <div className="flex flex-col p-4">
                    <span>{about}</span>
                    <span className="font-thin pt-2">{desc}</span>
                </div>
            </Link>
        </div>
    )
}

export default Category
