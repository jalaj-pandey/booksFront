import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBookPage = () => {
    const { bookTitle, bookDescription,imageURL,bookPrice,category} = useLoaderData();
  return (
      <div className='px-4 lg:px-24 bg-green-100 flex items-center md-max-w-screen-md'>
  <div className='flex flex-row w-full md:flex-row justify-between items-center gap-16 py-32'>
    {/* LEFT SIDE */}
    <div className=' sm:w-1/2 flex flex-col justify-around md:w-1/4 space-y-8 h-full'>
      <img className="h-92 rounded" src={imageURL} alt="" />
      <div className="w-full">
        <button className='bg-rose-600 mx-20 px-8 py-3 text-white font-medium hover:bg-black transition-all ease-in duration-200'>
          Buy Now
        </button>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className='sm:h-full -mx-28 -mt-48 md:w-3/4'>
      <h2 className='text-2xl '> {category}</h2>
      <h2 className='text-4xl leading-snug text-black'>
        <span className='text-rose-600 font-bold'>{bookTitle}</span>
      </h2>
      <br />
      <p className='text-2xl md:w-4/5'>{bookDescription}</p>
      <br />
      <h2 className='text-2xl font-bold'>₹{bookPrice}</h2>

    </div>
  </div>
</div>
  )
};

export default SingleBookPage;
