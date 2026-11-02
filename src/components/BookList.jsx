import BookCard from './BookCard';

export default function BookList({ books }) {
  if (books.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', color: '#94a3b8' }}>
        <p>Belum ada data buku di perpustakaan.</p>
      </div>
    );
  }

  return (
    <div>
      {books.map((item) => (
        <BookCard key={item.id} book={item} />
      ))}
    </div>
  );
}