import React from 'react'

export const Greeting = () => {
    return (
        <div className='absolute bottom-40 right-30 p-5 text-white'>
            <div className="text-center">
                <h1 className="text-4xl font-bold ">Discover the Magic of Switzerland</h1>
                <p>Welcome to the ultimate Swiss adventure! <br />
                    Let us help you plan the perfect trip—where every moment is a postcard-worthy experience! 🌍🏔️
                    Start your Swiss adventure today!
                </p>
                <button className='mt-5 bg-green-700 hover:bg-green-900 text-white fong-bold py-2 px-7 border border-green-800 hover:border-transparet rounded-full'>
                    Start ✈️
                </button>
            </div>
        </div>
    )
}
