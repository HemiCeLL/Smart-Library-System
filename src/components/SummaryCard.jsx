export default function SummaryCard({ totalBooks, availableBooks }) {
  return (
    <div style={{ background: '#eff6ff', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <small style={{ color: '#1e40af' }}>Total Koleksi</small>
        <h3 style={{ margin: 0, color: '#1e3a8a' }}>{totalBooks} Buku</h3>
      </div>
      <div>
        <small style={{ color: '#15803d' }}>Buku Tersedia</small>
        <h3 style={{ margin: 0, color: '#166534' }}>{availableBooks} Buku</h3>
      </div>
    </div>
  );
}