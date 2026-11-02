export default function Header({ title }) {
  return (
    <header style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
      <h1 style={{ color: '#1e3a8a', margin: 0 }}>{title}</h1>
      <p style={{ color: '#475569', margin: '0.5rem 0 0' }}>Sistem Manajemen & Katalog Perpustakaan</p>
    </header>
  );
}