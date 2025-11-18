import { useState } from 'react';
import { useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import {
  Home,
  Building,
  FileText,
  Stethoscope,
  UserCog,
  Radiation,
  HeartPulse,
  FlaskConical,
  Pill,
  Boxes,
  ShoppingCart,
  Wallet,
  Settings
} from 'lucide-react';

interface SidebarProps {
  onMenuSelect: (menuKey: string, submenuId: string) => void;
  activeMenu: string;
  activeSubmenu: string;
}

const Sidebar = ({ onMenuSelect, activeMenu, activeSubmenu }: SidebarProps) => {
  const [expandedMenu, setExpandedMenu] = useState<string>('');

  const [isDark, setIsDark] = useState(false);

useEffect(() => {
  const saved = localStorage.getItem("theme");
  const dark = saved === "dark";

  setIsDark(dark);
  if (dark) document.body.classList.add("dark-mode");
}, []);

const toggleTheme = () => {
  document.body.classList.toggle("dark-mode");

  const darkNow = document.body.classList.contains("dark-mode");
  setIsDark(darkNow);

  localStorage.setItem("theme", darkNow ? "dark" : "light");
};


  <button
  className="theme-toggle-modern"
  onClick={toggleTheme}
>
  {isDark ? <Sun size={18} /> : <Moon size={18} />}
</button>


  const menus = [
    { key: 'home', label: 'Home', icon: Home, submenus: [] },
    {
      key: 'front-office',
      label: 'Front Office',
      icon: Building,
      submenus: [
        { id: 'registrasi-pasien', label: 'Registrasi Pasien' },
        { id: 'rawat-jalan', label: 'Rawat Jalan' },
        { id: 'rawat-inap', label: 'Rawat Inap' },
        { id: 'one-day-care', label: 'One Day Care' },
        { id: 'front-office-igd', label: 'Instalasi Gawat Darurat' },
        { id: 'penjadwalan-janji', label: 'Penjadwalan Janji Kunjung Dokter' },
        { id: 'jadwal-dokter', label: 'Jadwal Dokter' }
      ]
    },
    {
      key: 'medical-record',
      label: 'Medical Record',
      icon: FileText,
      submenus: [
        { id: 'cara-mencari-info', label: 'Cara Mencari Info Pasien' },
        { id: 'cara-mencari-brm', label: 'Cara Mencari BRM Lama Bila Tidak ada Data nya' },
        { id: 'cetak-bukti', label: 'Cara Cetak Bukti Transaksi IGD' },
        { id: 'memeriksa-pasien', label: 'Memeriksa Pasien Masuk dan Keluar Rawat Inap' },
        { id: 'inventory-rm', label: 'Inventory di Rekam Medis' },
        { id: 'laporan-rj', label: 'Laporan Rawat Jalan' },
        { id: 'laporan-rwi', label: 'Laporan Rawat Inap' }
      ]
    },
    {
      key: 'perawat',
      label: 'Perawat',
      icon: Stethoscope,
      submenus: [
        { id: 'perawat-rawat-jalan', label: 'Rawat Jalan' },
        { id: 'perawat-rawat-inap', label: 'Rawat Inap' },
        { id: 'transfer-ruangan', label: 'Transfer Ruangan' },
        { id: 'penjadwalan-operasi', label: 'Penjadwalan Operasi' },
        { id: 'kamar-operasi', label: 'Kamar Operasi' },
        { id: 'perawat-igd', label: 'Instalasi Gawat Darurat' },
        { id: 'farmasi-keperawatan', label: 'Farmasi di Keperawatan' },
        { id: 'inventory-keperawatan', label: 'Inventory di Keperawatan' },
        { id: 'laporan-perawat', label: 'Laporan' }
      ]
    },
    {
      key: 'dokter',
      label: 'Dokter',
      icon: UserCog,
      submenus: [
        { id: 'dokter-rawat-jalan', label: 'Rawat Jalan' },
        { id: 'dokter-rawat-inap', label: 'Rawat Inap' },
        { id: 'dokter-igd', label: 'IGD' },
        { id: 'dokter-kamar-operasi', label: 'Kamar Operasi' }
      ]
    },
    {
      key: 'radiologi',
      label: 'Radiologi',
      icon: Radiation,
      submenus: [
        { id: 'terima-order', label: 'Terima Order' },
        { id: 'terima-order-eksternal', label: 'Terima Order Pasien Eksternal' },
        { id: 'cetak-hasil', label: 'Cetak Hasil Radiologi' }
      ]
    },
    {
      key: 'fisioterapi',
      label: 'Fisioterapi',
      icon: HeartPulse,
      submenus: [
        { id: 'penerimaan-pendaftaran', label: 'Penerimaan Pendaftaran Pasien Rawat Jalan Fisioterapi dan KTK' }
      ]
    },
    {
      key: 'laboratorium',
      label: 'Laboratorium',
      icon: FlaskConical,
      submenus: [
        { id: 'lab-terima-order', label: 'Terima Order' },
        { id: 'cetak-hasil-lab', label: 'Mencetak Hasil Pemeriksaan Laboratorium' },
        { id: 'rujuk-lab', label: 'Merujuk Pemeriksaan ke Luar' },
        { id: 'terima-order-lab-eksternal', label: 'Terima Order Pasien Eksternal' },
        { id: 'laporan-lab', label: 'Laporan Laboratorium' }
      ]
    },
    {
      key: 'farmasi',
      label: 'Farmasi',
      icon: Pill,
      submenus: [
        { id: 'e-prescription', label: 'E-Prescription' },
        { id: 'retur-transaksi', label: 'Retur Transaksi' },
        { id: 'pending-dispense', label: 'Pending Dispense Request' },
        { id: 'laporan-farmasi', label: 'Laporan' }
      ]
    },
    {
      key: 'inventory',
      label: 'Inventory',
      icon: Boxes,
      submenus: [
        { id: 'stock-distribution', label: 'Stock Distribution' },
        { id: 'retur-barang', label: 'Retur Barang Internal' },
        { id: 'transfer-obat', label: 'Transfer Obat' },
        { id: 'reorder-qty', label: 'Pengaturan ReOrder Qty' },
        { id: 'pengeluaran-bhp', label: 'Pengeluaran BHP' },
        { id: 'stock-opname', label: 'Stock Opname' },
        { id: 'penyesuaian-barang', label: 'Penyesuaian Barang' },
        { id: 'laporan-inventory', label: 'Laporan' }
      ]
    },
    {
      key: 'procurement',
      label: 'Procurement',
      icon: ShoppingCart,
      submenus: [
        { id: 'purchase-request', label: 'Purchase Request' },
        { id: 'purchase-order', label: 'Purchase Order' },
        { id: 'good-receipt', label: 'Good Receipt Note' },
        { id: 'kriteria-po-grn', label: 'Kriteria Input PO & GRN' }
      ]
    },
    {
      key: 'keuangan',
      label: 'Keuangan',
      icon: Wallet,
      submenus: [
        { id: 'pelunasan-rawat-jalan', label: 'Pelunasan Rawat Jalan' },
        { id: 'pelunasan-rawat-inap', label: 'Pelunasan Rawat Inap' },
        { id: 'pembatalan-transaksi', label: 'Pembatalan Transaksi' },
        { id: 'uang-muka', label: 'Penerimaan Uang Muka' },
        { id: 'deposit', label: 'Deposit' },
        { id: 'finance-clearance', label: 'Finance Clearance' },
        { id: 'discount', label: 'Discount' },
        { id: 'refund', label: 'Refund' },
        { id: 'transaksi-lainnya', label: 'Transaksi Lainnya' },
        { id: 'laporan-keuangan', label: 'Laporan' },
        { id: 'admin-rawat-inap', label: 'Admin Rawat Inap' }
      ]
    },
    {
      key: 'it-support',
      label: 'IT Support',
      icon: Settings,
      submenus: [
        { id: 'update-bed', label: 'Update Bed Definition' },
        { id: 'data-karyawan', label: 'Pengisian Data Karyawan' }
      ]
    }
  ];

  const handleMenuClick = (menuKey: string) => {
    if (menuKey === 'home') {
      onMenuSelect('home', '');
      setExpandedMenu('');
    } else {
      setExpandedMenu(expandedMenu === menuKey ? '' : menuKey);
    }
  };

  return (
    <nav className="sidebar" aria-label="Sidebar navigation">
      <div className="sidebar-header" role="banner">
  <h4 className="text-center py-3 mb-0"></h4>

  {/* ===== THEME TOGGLE BUTTON ===== */}
  <button
    className="theme-toggle-btn"
    onClick={() => {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    }}
    aria-label="Toggle theme"
  >
    {document.body.classList.contains("dark-mode") ? (
      <Sun size={20} />
    ) : (
      <Moon size={20} />
    )}
  </button>
</div>


      <div className="menu-list" role="menu">
        {menus.map((menu) => {
          const Icon = menu.icon;
          const isActiveMenu = activeMenu === menu.key;

          return (
            <div key={menu.key} className="menu-item" role="none">
              {/* MAIN MENU BUTTON */}
              <button
                role="menuitem"
                aria-expanded={expandedMenu === menu.key}
                aria-current={isActiveMenu ? 'true' : undefined}
                className={`menu-button ${isActiveMenu ? 'active' : ''}`}
                onClick={() => handleMenuClick(menu.key)}
                title={menu.label}
              >
                <div className="d-flex" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Icon size={18} aria-hidden />
                  <span>{menu.label}</span>
                </div>

                {menu.submenus.length > 0 && (
                  <span className="menu-arrow" aria-hidden>
                    {expandedMenu === menu.key ? '▾' : '▸'}
                  </span>
                )}
              </button>

              {/* SUBMENU */}
              {expandedMenu === menu.key && menu.submenus.length > 0 && (
                <div className="submenu-list" role="group" aria-label={`${menu.label} submenu`}>
                  {menu.submenus.map((submenu) => (
                    <button
                      key={submenu.id}
                      role="menuitem"
                      className={`submenu-button ${
                        isActiveMenu && activeSubmenu === submenu.id ? 'active' : ''
                      }`}
                      onClick={() => onMenuSelect(menu.key, submenu.id)}
                    >
                      {submenu.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Sidebar;
