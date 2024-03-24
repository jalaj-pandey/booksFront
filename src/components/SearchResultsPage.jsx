import { Card } from "flowbite-react";
import React, { useState, useEffect } from "react";
import searchBook from "../assets/booksearch.png"
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SearchResultsPage = () => {
  const [books, setBooks] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `https://bookswap-4zmq.onrender.com/api/books/search/${searchQuery}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch search results");
        }
        const data = await response.json();
        setBooks(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (searchQuery) {
      fetchSearchResults();
    }
  }, [searchQuery]);

  return (
    <>
    <Navbar/>
      <div className="m-0 pb-6 bg-green-100 px-4 lg:px-24">
  <h2 className="text-4xl pt-20 lg:pt-28 font-bold text-center text-rose-600">
    Your Search Results
  </h2>
  {books.length === 0 ? (
    <div className="text-center my-8 ">
      <p className="text-2xl pb-8">No results found for your search.</p>
        <img src={searchBook} alt="" className="mx-auto w-auto h-auto lg:w-1/2 lg:h-auto"/>
    </div>
  ) : (
    <div className="grid my-8 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      {books.map((book) => (
        <Card key={book._id}>
          <Link to={`/book/${book._id}`}>
            <img src={book.imageURL} alt="" className="h-96" />
            <h5 className="text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white py-2">
              {book.bookTitle}
            </h5>
            <p className="text-sm lg:text-base font-normal text-gray-700 dark:text-gray-400">
              {book.bookDescription}
            </p>
            <h4 className="text-base lg:text-lg font-bold tracking-tight text-gray-700 dark:text-white p-1">
              ₹ {book.bookPrice}
            </h4>
            <h4 className="text-base lg:text-lg tracking-tight text-gray-900 dark:text-white pb-2">
              {book.category}
            </h4>
            <button className="bg-rose-500 w-full font-semibold text-white py-2 rounded">
              Buy Now
            </button>
          </Link>
        </Card>
      ))}
    </div>
  )}
  
</div>
<Footer/>


    </>
  );
};

export default SearchResultsPage;
