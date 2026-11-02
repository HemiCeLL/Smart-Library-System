import { useState } from 'react';

export default function BookForm({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !category) return;

    onAddBook({
      id: Date.now(),
      title,
      author,
      category,
      status: 'Tersedia',
    });

    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
      <input
        type="text"
        placeholder="Judul Buku..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ flex: '2', padding: '0.5rem' }}
      />
      <input
        type="text"
        placeholder="Penulis..."
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={{ flex: '1', padding: '0.5rem' }}
      />
      <input
        type="text"
        placeholder="Kategori (e.g. STD)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ flex: '1', padding: '0.5rem' }}
      />
      <button type="submit" style={{ padding: '0.5rem 1.25rem', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Tambah Buku
      </button>
    </form>
  );
}