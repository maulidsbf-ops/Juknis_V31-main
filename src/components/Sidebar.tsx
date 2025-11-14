import { useState } from 'react';

interface SidebarProps {
  onMenuSelect: (menuKey: string, submenuId: string) => void;
  activeMenu: string;
  activeSubmenu: string;
}

const Sidebar = ({ onMenuSelect, activeMenu, activeSubmenu }: SidebarProps) => {
  const [expandedMenu, setExpandedMenu] = useState<string>('');

  const menus = [
    { key: 'home', label: 'Home', submenus: [] },
    {
      key: 'front-office',
      label: 'Front Office',
      submenus: [
        { id: 'registrasi-pasien', label: 'Registrasi Pasien' },
        { id: 'rawat-jalan', label: 'Rawat Jalan' },
        { id: 'rawat-inap', label: 'Rawat Inap' },
        { id: 'one-day-care', label: 'One Day Care' },
        { id: 'igd', label: 'Instalasi Gawat Darurat' },
        { id: 'penjadwalan-janji', label: 'Penjadwalan Janji Kunjung Dokter' },
        { id: 'jadwal-dokter', label: 'Jadwal Dokter' }
      ]
    },
    {
      key: 'medical-record',
      label: 'Medical Record',
      submenus: [
        { id: 'cara-mencari-info', label: 'Cara Mencari Info Pasien' },
        { id: 'cara-mencari-brm', label: 'Cara Mencari BRM Lama Bila Tidak ada Data nya' },
        { id: 'cetak-bukti', label: 'Cara Cetak Bukti Transaksi IGD' },
        { id: 'memeriksa-pasien', label: 'Memeriksa Pasien Masuk dan Keluar Rawat Inap' },
        { id: 'inventory-rm', label: 'Inventory di Rekam Medis' },
        /* Maul-14/11/2025 */ 
        { id: 'laporan-rj', label: 'Laporan Rawat Jalan' },
        { id: 'laporan-rwi', label: 'Laporan Rawat Inap' }
        /* Maul-14/11/2025 */ 
      ]
    },
    {
      key: 'perawat',
      label: 'Perawat',
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
      submenus: [
        { id: 'terima-order', label: 'Terima Order' },
        { id: 'terima-order-eksternal', label: 'Terima Order Pasien Eksternal' },
        { id: 'cetak-hasil', label: 'Cetak Hasil Radiologi' }
      ]
    },
    {
      key: 'fisioterapi',
      label: 'Fisioterapi',
      submenus: [
        { id: 'penerimaan-pendaftaran', label: 'Penerimaan Pendaftaran Pasien Rawat Jalan Fisioterapi dan KTK' }
      ]
    },
    {
      key: 'laboratorium',
      label: 'Laboratorium',
      submenus: [
        { id: 'lab-terima-order', label: 'Terima Order' },
        { id: 'cetak-hasil-lab', label: 'Mencetak Hasil Pemeriksaan Laboratorium' },
        { id: 'rujuk-lab', label: 'Merujuk Pemeriksaan Lab ke Luar Antar Cabang atau Lab Rujukan Lainnya' },
        { id: 'terima-order-lab-eksternal', label: 'Terima Order Pasien Eksternal' },
        { id: 'laporan-jumlah-lab', label: 'Laporan Jumlah Pemeriksaan Lab' },
        { id: 'laporan-pending-lab', label: 'Laporan Pemeriksaan yang Belum Selesai (Pending)' },
        { id: 'laporan-tat', label: 'Laporan Turn Around Time (TAT)' }
      ]
    },
    {
      key: 'farmasi',
      label: 'Farmasi',
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
      submenus: [
        { id: 'stock-distribution', label: 'Stock Distribution' },
        { id: 'retur-barang', label: 'Retur Barang Internal' },
        { id: 'transfer-obat', label: 'Transfer Obat (Transfer Kode Barang)' },
        { id: 'reorder-qty', label: 'Pengaturan ReOrder Qty' },
        { id: 'pengeluaran-bhp', label: 'Pengeluaran Barang Habis Pakai' },
        { id: 'stock-opname', label: 'Stock Opname' },
        { id: 'penyesuaian-barang', label: 'Penyesuaian Barang' },
        { id: 'laporan-inventory', label: 'Laporan' }
      ]
    },
    {
      key: 'procurement',
      label: 'Procurement',
      submenus: [
        { id: 'purchase-request', label: 'Purchase Request' },
        { id: 'purchase-order', label: 'Purchase Order' },
        { id: 'good-receipt', label: 'Good Receipt Note' },
        { id: 'kriteria-po-grn', label: 'Kriteria Penginputan Purchase Order dan Good Receipt Note' }
      ]
    },
    {
      key: 'keuangan',
      label: 'Keuangan',
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

  const handleSubmenuClick = (menuKey: string, submenuId: string) => {
    onMenuSelect(menuKey, submenuId);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h4 className="text-center py-3 mb-0">JUKNIS</h4>
      </div>
      <div className="menu-list">
        {menus.map((menu) => (
          <div key={menu.key} className="menu-item">
            <button
              className={`menu-button ${activeMenu === menu.key ? 'active' : ''}`}
              onClick={() => handleMenuClick(menu.key)}
            >
              {menu.label}
              {menu.submenus.length > 0 && (
                <span className="menu-arrow">
                  {expandedMenu === menu.key ? '▼' : '▶'}
                </span>
              )}
            </button>
            {expandedMenu === menu.key && menu.submenus.length > 0 && (
              <div className="submenu-list">
                {menu.submenus.map((submenu) => (
                  <button
                    key={submenu.id}
                    className={`submenu-button ${
                      activeMenu === menu.key && activeSubmenu === submenu.id ? 'active' : ''
                    }`}
                    onClick={() => handleSubmenuClick(menu.key, submenu.id)}
                  >
                    {submenu.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
