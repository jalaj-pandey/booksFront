import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

// Placeholder loader component
const LoadingSkeleton = () => (
  <div className="animate-pulse bg-gray-200 h-96 w-full rounded-lg"></div>
);

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch data once when the component mounts
    const fetchBooks = async () => {
      try {
        const res = await fetch("https://bookswap-4zmq.onrender.com/all-books");
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false); // Stop loading after data fetch
      }
    };
    fetchBooks();
  }, []); // Empty dependency array

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center text-rose-600'>All Books Are Here</h2>
      <div className='grid my-12 gap-4 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {loading ? (
          // Show loading skeletons while loading
          Array.from({ length: 8 }).map((_, index) => <LoadingSkeleton key={index} />)
        ) : (
          // Render books once loading is complete
          books.map(book => (
            <Card key={book._id}>
              <Link to={`/book/${book._id}`}>
                {/* Add lazy loading to images */}
                <img src={book.imageURL} alt={book.bookTitle} className='h-96' loading="lazy" />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white py-2">
                  {book.bookTitle}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {book.bookDescription}
                </p>
                <h4 className="text-1xl font-bold tracking-tight text-gray-700 dark:text-white p-1">
                  ₹ {book.bookPrice}
                </h4>
                <h4 className="tracking-tight text-gray-900 dark:text-white pb-2">
                  {book.category}
                </h4>
                <button className='bg-rose-500 w-full font-semibold text-white py-2 rounded'>
                  Buy Now
                </button>
              </Link>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Shop;
