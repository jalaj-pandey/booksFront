import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'flowbite-react';
import { AuthContext } from '../contects/AuthProviders';

const ManageBooks = () => {

  const {user} = useContext(AuthContext);
  
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
<<<<<<< HEAD
    fetch(`http://localhost:5000/user-books/${user.email}`)
=======
    fetch(`https://bookswap-4zmq.onrender.com/user-books/${user.email}`)
>>>>>>> 011d601e4638ee1a54fba75e4da82433f7134ac2
    .then((res) => res.json())
    .then((data) => {
        setAllBooks(data);
      });
  },[]);

  // Delete a Book
  const handleDelete =(id)=>{
    fetch(`https://bookswap-4zmq.onrender.com/book/${id}`, {
      method: "DELETE",
      body: JSON.stringify({id})
    }).then(res => res.json()).then(data => {
      alert("Book Deleted Successfully")
      
    })
  }
  let serialNumber = 1;
  return (
    <div className='px-4 my-12'>
      {/* TABLE FOR BOOK DATA */}
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>
      <Table hoverable className='lg:w-[1180px]'>
      <Table.Head>
        <Table.HeadCell>No.</Table.HeadCell>
        <Table.HeadCell>Book Title</Table.HeadCell>
        <Table.HeadCell>Book Author</Table.HeadCell>
        <Table.HeadCell>Category</Table.HeadCell>
        <Table.HeadCell>Price (₹)</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      
        {
          allBooks.map((book) => <Table.Body className="divide-y" key={book._id}> 
          {book.sellerID === user.email && (
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell>{serialNumber++}</Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {book.bookTitle}
          </Table.Cell>
          <Table.Cell>{book.author}</Table.Cell>
          <Table.Cell>{book.category}</Table.Cell>
          <Table.Cell>{book.bookPrice}</Table.Cell>
          <Table.Cell>
            <button className='bg-cyan-800 px-4 py-1 font-semibold text-white rounded-sm hover:bg-teal-500 mr-5'>
            <Link to={
              `/admin/dashboard/edit-book/${book._id}`
            } >
              
              Edit
            </Link></button>
            <button onClick={()=>{handleDelete(book._id)}} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-teal-500'>Delete</button>
          </Table.Cell>
        </Table.Row>
        )}
          </Table.Body>)
        }
    </Table>
      
    </div>
  )
}

export default ManageBooks
