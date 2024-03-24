import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const MostSearchedBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect( ()=>{
<<<<<<< HEAD
        fetch('http://192.168.137.1:5000/all-books').then(res => res.json()).then(data => setBooks(data.slice(0,6)))
=======
        fetch('https://bookswap-4zmq.onrender.com/all-books').then(res => res.json()).then(data => setBooks(data.slice(0,6)))
>>>>>>> 011d601e4638ee1a54fba75e4da82433f7134ac2
    }, [])
  return (
    <div>
        <BookCards books={books} headline="Most Searched Books"/>
    </div>
  )
}

export default MostSearchedBooks
