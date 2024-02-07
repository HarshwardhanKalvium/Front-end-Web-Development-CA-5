import React, { useEffect, useState } from 'react';
import './App.css';
import { Nav as Navbar } from './components/Navbar';
import AllRoutes from './components/AllRoutes';

function App() {
  const [books, setBooks] = useState([]);
  const [allBooks,setAllBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://reactnd-books-api.udacity.com/books', {
          headers: {
            'Authorization': 'Kalvium',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setBooks(data.books);
          setAllBooks(data.books)
          console.log(data);
        } else {
          console.error('Failed to fetch data:', response.statusText);
        }
      } catch (error) {
        console.error('Error during fetch:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar books={books} setBooks={setBooks} allBooks={allBooks}/>
      <AllRoutes data={books} />
    </>
  );
}

export default App;