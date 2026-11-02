import { useState } from 'react';
import Header from './components/Header';
import SummaryCard from './components/SummaryCard';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

export default function App() {
  const [books, setBooks] = useState([
    { 
      id: 1, 
      title: 'Clean Code: Handbook of Software Craftsmanship', 
      author: 'Robert C. Martin', 
      category: 'Software Engineering', 
      status: 'Tersedia' 
    },
    { 
      id: 2, 
      title: 'Learning React: Modern Patterns for Developing Applications', 
      author: 'Alex Banks', 
      category: 'Frontend', 
      status: 'Tersedia' 
    },
  ]);

  const handleAddBook = (newBook) => {
    setBooks([newBook, ...books]);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((item) => item.id !== id));
  };

  const availableBooksCount = books.filter((item) => item.status === 'Tersedia').length;

  return (
    <div style={{ maxWidth: '650px', margin: '2rem auto', fontFamily: 'sans-serif', padding: '0 1rem' }}>
      <Header title="Smart Library System" />
      <SummaryCard totalBooks={books.length} availableBooks={availableBooksCount} />
      <BookForm onAddBook={handleAddBook} />
      <BookList books={books} onDeleteBook={handleDeleteBook} />
    </div>
  );
}
