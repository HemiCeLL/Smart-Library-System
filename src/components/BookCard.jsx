export default function BookCard({ book }) {
  return (
    <div style={{ border: '1px solid #e2e8f0', padding: '1rem', borderRadius: '8px', marginBottom: '0.75rem', background: '#fff' }}>
      <span style={{ fontSize: '0.75rem', background: '#e0e7ff', color: '#3730a3', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>
        {book.category}
      </span>
      <h3 style={{ margin: '0.5rem 0 0.25rem' }}>{book.title}</h3>
      <small style={{ color: '#64748b' }}>
        Penulis: {book.author} | Status: <strong style={{ color: '#16a34a' }}>{book.status}</strong>
      </small>
    </div>
  );
}