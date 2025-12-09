import { useState, useEffect, ReactNode } from 'react';
import { menuData } from '../data/menuData';
import { contentData } from '../data/contentData';
import DetailedContent from './DetailedContent';

interface ContentAreaProps {
  menuKey: string;
  submenuId: string;
}

const ContentArea = ({ menuKey, submenuId }: ContentAreaProps) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  // Reset selectedItem ketika submenuId berubah (user klik submenu lain)
  // Ini memastikan detail content tertutup dan menampilkan list menu baru
  useEffect(() => {
    setSelectedItem(null);
  }, [submenuId]);

  // Style untuk background (mengambil gambar dari folder public/images)
  const bgStyle: React.CSSProperties = {
    position: 'relative',
    backgroundImage: `url('/images/bg-1.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // atur minHeight sesuai kebutuhan layout Anda; '100%' atau '100vh' bisa dipilih
    minHeight: '100%',
    // optional fallback color jika gambar gagal dimuat
    backgroundColor: '#f5f5f5',
  };

  // wrapper untuk menempatkan overlay dan memastikan konten berada di atas overlay
  const renderWithBackground = (children: ReactNode) => (
    <div className="content-area" style={bgStyle}>
      {/* overlay semi-transparan */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0, // top:0; right:0; bottom:0; left:0;
          backgroundColor: 'rgba(0, 0, 0, 0.28)', // ubah alpha / warna sesuka Anda
          pointerEvents: 'none', // biarkan klik melewati overlay
        }}
      />
      {/* konten utama - zIndex agar tampil di atas overlay */}
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );

  // ===== Semua return sekarang dibungkus dengan renderWithBackground(...) =====

  if (menuKey === 'home') {
    return renderWithBackground(
      // <div className="welcome-section">
      //   <h1 className="display-4 mb-4">Selamat Datang di JUKNIS</h1>
      //   <p className="lead">
      //     Sistem Dokumentasi Online Petunjuk Teknis Rumah Sakit
      //   </p>
      //   <div className="info-card mt-5">
      //     <h3>Tentang Aplikasi</h3>
      //     <p>
      //       Aplikasi ini menyediakan dokumentasi lengkap mengenai petunjuk teknis
      //       penggunaan sistem informasi rumah sakit. Pilih menu di sebelah kiri
      //       untuk melihat dokumentasi yang Anda butuhkan.
      //     </p>
      //   </div>
      // </div>
    );
  }

  if (!submenuId) {
    return renderWithBackground(
      <div className="placeholder-section">
        <h3>Silakan pilih submenu di sebelah kiri</h3>
      </div>
    );
  }

  const menuItems = menuData[menuKey];
  if (!menuItems) {
    return renderWithBackground(
      <div className="placeholder-section">
        <h3>Menu tidak ditemukan</h3>
      </div>
    );
  }

  const submenu = menuItems.find((item) => item.id === submenuId);
  if (!submenu) {
    return renderWithBackground(
      <div className="placeholder-section">
        <h3>Submenu tidak ditemukan</h3>
      </div>
    );
  }

  if (selectedItem) {
    return renderWithBackground(
      <DetailedContent itemId={selectedItem} onBack={() => setSelectedItem(null)} />
    );
  }

  return renderWithBackground(
    <>
      <div className="content-header">
        <h2>{submenu.title}</h2>
      </div>
      <div className="content-body">
        {submenu.items && submenu.items.length > 0 ? (
          <div className="list-group">
            {submenu.items.map((item, index) => {
              const contentId = item
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^\w-]/g, '');
              const hasContent = contentData[contentId];

              return (
                <div key={index} className="list-group-item">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center" style={{ flex: 1 }}>
                      <span className="item-number">{index + 1}</span>
                      <span className="item-text">{item}</span>
                    </div>
                    {hasContent && (
                      <button
                        className="btn-read-more"
                        onClick={() => setSelectedItem(contentId)}
                      >
                        Baca Selengkapnya →
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="empty-content">
            <p>Konten sedang dalam proses pengembangan</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ContentArea;
