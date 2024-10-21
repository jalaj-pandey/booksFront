
import React, { useEffect, useState, useCallback } from 'react';
import BookCards from '../components/BookCards';

// Skeleton loader placeholder component
const LoadingSkeleton = () => (
  <div className="animate-pulse bg-gray-200 h-60 w-full rounded-lg"></div>
);

const MostSearchedBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const controller = new AbortController();

  // Fetch books function wrapped in useCallback to prevent unnecessary re-creation
  const fetchBooks = useCallback(async () => {
    try {
      const response = await fetch('https://bookswap-4zmq.onrender.com/all-books', {
        signal: controller.signal,
      });
      const data = await response.json();
      setBooks(data.slice(0, 6));
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Error fetching books:', error);
      }
    } finally {
      setLoading(false);
    }
  }, [controller]);

  useEffect(() => {
    fetchBooks();

    // Cleanup function to cancel fetch request on unmount
    return () => {
      controller.abort();
    };
  }, [fetchBooks, controller]);

  return (
    <div>
      {loading ? (
        // Render skeletons while loading
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <LoadingSkeleton key={index} />
          ))}
        </div>
      ) : (
        // Render BookCards once data is loaded
        <BookCards books={books} headline="Most Searched Books" />
      )}
    </div>
  );
};

export default React.memo(MostSearchedBooks);
