import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [activeMenu, setActiveMenu] = useState<string>('home');
  const [activeSubmenu, setActiveSubmenu] = useState<string>('');

  const handleMenuSelect = (menuKey: string, submenuId: string) => {
    setActiveMenu(menuKey);
    setActiveSubmenu(submenuId);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-container">
        <Sidebar
          onMenuSelect={handleMenuSelect}
          activeMenu={activeMenu}
          activeSubmenu={activeSubmenu}
        />
        <ContentArea menuKey={activeMenu} submenuId={activeSubmenu} />
      </div>
    </div>
  );
}

export default App;
