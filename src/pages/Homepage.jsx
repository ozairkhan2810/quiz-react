import React from 'react'
import Category from '../components/Category'

const Homepage = () => {

    const categories = [
        {
            title: "Test",
            about: "Heart of Cricket",
            image: "https://i.ibb.co/yy1hgnB/test.jpg",
            desc: "Take this quiz to test yourself in crickets purest form."
        },
        {
            title: "T20",
            about: "Entertainment. Fun.",
            image: "https://i.ibb.co/89XjYC3/t20.jpg",
            desc: "Take this quiz to test yourself in shortest form of the game."
        }
    ]

    return (
        <div>
            <h1 className='text-center text-2xl mt-8'>Choose a category to get started:</h1>
            <div className="flex justify-center gap-16 mt-16">
                {
                    categories.map(category => {
                        return <Category title={category.title} about={category.about} image={category.image} desc={category.desc} />
                    })
                }
            </div>
        </div>
    )
}

export default Homepage