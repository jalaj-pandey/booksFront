import React from 'react'

const About = () => {
  return (
    <>
    <div className='mt-24 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center text-rose-600'>About Us</h2>
    </div>


<div className='mt-10 px text-xl lg:px-24'>
      <h1 className='mb-4'>Welcome to <span className='text-rose-500 font-bold'>BookSwap </span>– Your Premier Destination for Affordable Reading!</h1>

      <section>
        <h2 className='text-3xl font-bold'>Our Story</h2>
        <p className='my-4'>
          Founded in 2023, BookSwap was born out of a shared passion for literature and a commitment to sustainability.
          We noticed the growing need for a platform where avid readers could exchange their beloved books, making reading more economical and environmentally friendly.
          BookSwap emerged as the answer to this call, providing a space where book enthusiasts can discover hidden gems, share their literary treasures, and connect with like-minded individuals.
        </p>
      </section>

      <section>
        <h2 className='text-3xl font-bold'>What Sets Us Apart</h2>
        <ul className='my-4'>
          <li>
            <strong>Affordability:</strong> We understand that the cost of buying brand-new books can add up quickly. That's why we've created a marketplace where you can find pre-loved books at budget-friendly prices. Enjoy your favorite reads without breaking the bank!
          </li>
          <li className='my-4'>
            <strong>Community-Driven:</strong> BookSwap is more than just a marketplace; it's a community of book lovers. Connect with fellow readers, join discussions, and share your thoughts on your latest literary finds. Our community is a vibrant space for bibliophiles to come together and celebrate the joy of reading.
          </li>
          <li className='my-4'>
            <strong>Eco-Friendly:</strong> By buying and selling used books, you're not only saving money but also contributing to a more sustainable planet. Join us in reducing the environmental impact of book consumption and promoting a circular economy.
          </li>
          <li>
            <strong>Easy Buying and Selling:</strong> Our user-friendly platform makes it simple to list your books for sale or browse through our extensive collection. With just a few clicks, you can find the perfect book or give a new home to the ones you've finished reading.
          </li>
        </ul>
      </section>

      <section className='my-4'>
        <h2 className='text-3xl font-bold'>How It Works</h2>
        <ol className='my-4'>
          <li className='mb-4'>
            <strong>List Your Books:</strong> Easily list the books you want to sell by providing a brief description and setting a fair price.
          </li>
          <li className='mb-4'>
            <strong>Discover Hidden Treasures:</strong> Explore our diverse selection of used books, from timeless classics to contemporary bestsellers, all at prices that won't break the bank.
          </li>
          <li className='mb-4'>
            <strong>Connect with Fellow Readers:</strong> Join our community forums, share your reading experiences, and connect with other book enthusiasts who share your literary interests.
          </li>
        </ol>
      </section>

      <section className='my-4'>
        <h2 className='text-2xl font-bold'>Join the BookSwap Community Today!</h2>
        <p className='my-4'>
          At BookSwap, we're on a mission to make reading affordable, sustainable, and community-driven.
          Join us in creating a world where everyone has access to the joy of a good book.
          Start exploring, start swapping, and let the reading adventures begin!
        </p>
        <p className='font-bold'>Happy Reading!😊<br />The BookSwap Team</p>
      </section>
    </div>
    </>
  )
}

export default About
