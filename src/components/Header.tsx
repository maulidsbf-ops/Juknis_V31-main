import { FileText } from 'lucide-react';

const Header = () => {
  return (
    <header className="app-header">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <FileText size={32} className="header-icon" />
            <div className="ms-3">
              <h1 className="header-title mb-0">JUKNIS Rumah Sakit</h1>
              <p className="header-subtitle mb-0">Petunjuk Teknis Sistem Informasi</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
