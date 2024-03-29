import React, { useState } from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  const [query, setQuery] = useState('');


  const handleSearch = (event) => {
    event.preventDefault();
    window.location.href = `/search?q=${query}`;
};
    

  return (
    <div className='px-4 lg:px-24 bg-teal-300 flex items-center md-max-w-screen-md'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40 ' >
            {/* LEFT SIDE */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy And Sell Your Books<br/><span className='text-rose-600'>For The Best Price</span></h2>
                <p className='md:w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita optio laboriosam sint aliquam ex, error consectetur omnis corporis cumque quas blanditiis, nostrum perferendis voluptate illo quod rerum minima commodi! Minima?</p>
                <div>
                  <input 
                    type="search" 
                    name='search' 
                    id='search' 
                    placeholder='Search a Book' 
                    className='py-2 px-2 rounded-s-sm outline-none' 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                />
                  <button 
                    type="submit"
                    className='bg-rose-600 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'
                    onClick={handleSearch}
                >
                    Search
                </button>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className=' sm:h-full -mb-20' >
                <BannerCard/>
            </div>
        </div>
    </div>
  )
}

export default Banner
