import React from 'react'
import { Link } from 'react-router-dom'
import bookpics from '../assets/bsell.png'

const SellYourBookBanner = () => {
  return (
    <div className='mt-16 py-12 bg-cyan-300 px-4 lg:px-24 sm:- h-1/2'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12 '>
            <div>
                <h2 className='text-4xl font-bold mb-6 leading-snug'>Sell Your <span className='text-rose-600'>Old</span> Books Here</h2>
                <Link to = "/shop" className='mt-12 block'><button className='bg-rose-500 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Sell Here</button></Link>
            </div>
            <div className='w-96 -my-8  '>
                <img src={bookpics} alt="" />
            </div>
        </div>
    </div>
  )
}

export default SellYourBookBanner
