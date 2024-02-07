import React from 'react';
import './BookData.css';

const BookData = ({ data }) => (
  <div className="main-container">
    <div className="grid-container">
      {data && data.map((book) => (
        <div key={book.id} className="grid-item">
          <img src={book.imageLinks.thumbnail} alt={book.title} />
          <h3>{book.title}</h3>
          <p>Author:{book.authors}</p>
          <p>Average Rating:🌟5/{book.averageRating}</p>
        </div>
      ))}
    </div>
  </div>
);

export default BookData;