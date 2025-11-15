import { useState } from 'react';
import { menuData } from '../data/menuData';
import { contentData } from '../data/contentData';
import DetailedContent from './DetailedContent';

interface ContentAreaProps {
  menuKey: string;
  submenuId: string;
}

const ContentArea = ({ menuKey, submenuId }: ContentAreaProps) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  if (menuKey === 'home') {
    return (
      <div className="content-area">
        <div className="welcome-section">
          <h1 className="display-4 mb-4">Selamat Datang di JUKNIS</h1>
          <p className="lead">
            Sistem Dokumentasi Online Petunjuk Teknis Rumah Sakit
          </p>
          <div className="info-card mt-5">
            <h3>Tentang Aplikasi</h3>
            <p>
              Aplikasi ini menyediakan dokumentasi lengkap mengenai petunjuk teknis
              penggunaan sistem informasi rumah sakit. Pilih menu di sebelah kiri
              untuk melihat dokumentasi yang Anda butuhkan.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!submenuId) {
    return (
      <div className="content-area">
        <div className="placeholder-section">
          <h3>Silakan pilih submenu di sebelah kiri</h3>
        </div>
      </div>
    );
  }

  const menuItems = menuData[menuKey];
  if (!menuItems) {
    return (
      <div className="content-area">
        <div className="placeholder-section">
          <h3>Menu tidak ditemukan</h3>
        </div>
      </div>
    );
  }

  const submenu = menuItems.find((item) => item.id === submenuId);
  if (!submenu) {
    return (
      <div className="content-area">
        <div className="placeholder-section">
          <h3>Submenu tidak ditemukan</h3>
        </div>
      </div>
    );
  }

  if (selectedItem) {
    return (
      <div className="content-area">
        <DetailedContent itemId={selectedItem} onBack={() => setSelectedItem(null)} />
      </div>
    );
  }

  return (
    <div className="content-area">
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
    </div>
  );
};

export default ContentArea;