import React, { useState } from 'react';
import styles from '../../../styles/Books.module.css'
import BookLists from '../../../Utils/books';

const BookList = () => {
  const [books, setBooks] = useState(BookLists); // Corrected initialization

  const addBook = () => {
    const newBook = {
      id: books.length + 1,
      title: "Buku Baru " + (books.length + 1),
      author: "Penulis XYZ",
      year: 2069,
      description: "Deskripsi buku baru.",
      image: "https://placehold.co/150"
    };
    setBooks([...books, newBook]);
  };

  return (
    <div className={styles.container}>
      <h2>Daftar Buku</h2>
      <button className={styles.button} onClick={addBook}>Tambah Buku</button>
      <div className={styles.grid}>
        {books.map((book) => (
          <div key={book.id} className={styles.card}>
            <img src={book.image} alt={book.title} className={styles.image} />
            <h3>{book.title}</h3>
            <p><strong>Penulis:</strong> {book.author}</p>
            <p><strong>Tahun:</strong> {book.year}</p>
            <p className={styles.description}>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;