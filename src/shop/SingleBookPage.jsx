import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const SingleBookPage = () => {
    const { bookTitle, bookDescription,imageURL,bookPrice,category} = useLoaderData();
  return(
    <div className='px-4 lg:px-24 bg-green-100 flex flex-col items-center md-max-w-screen-md '>
  <div className='w-full flex flex-col-reverse md:flex-row justify-between items-center gap-16 py-32 '>
    {/* LEFT SIDE */}
    <div className='w-full md:w-1/3 flex flex-col justify-around text-center '>
      <img className="h-92 rounded mx-auto" src={imageURL} alt="" />
      <div className=" mt-10 -mb-16">
      <Link to = "/checkout" className='mt-12 block'><button className='bg-rose-600 mx-4 px-8 py-3 text-white font-medium hover:bg-black transition-all ease-in duration-200 '>
          Buy Now 
        </button>
        </Link>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className='w-full -my-8 md:w-2/3 '>
      <h2 className='text-4xl leading-snug text-black'>
      <span className='text-rose-600 font-bold'>{bookTitle}</span>
      </h2>
      <br />
      <p className='text-xl'>{bookDescription}</p>
      <br />
      <h2 className='text-2xl'>{category}</h2>
      <h2 className='text-2xl font-bold'>Price: ₹{bookPrice}</h2>
    </div>
  </div>
</div>

  
  )  
};

export default SingleBookPage;
