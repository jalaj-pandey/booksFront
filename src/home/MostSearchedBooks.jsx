import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const MostSearchedBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect( ()=>{

        fetch('https://bookswap-4zmq.onrender.com/all-books').then(res => res.json()).then(data => setBooks(data.slice(0,6)))

    }, [])
  return (
    <div>
        <BookCards books={books} headline="Most Searched Books"/>
    </div>
  )
}

export default MostSearchedBooks
