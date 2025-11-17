export interface MenuItem {
  id: string;
  title: string;
  items?: string[];
}

export interface MenuData {
  [key: string]: MenuItem[];
}

export const menuData: MenuData = {
  'front-office': [
    {
      id: 'registrasi-pasien',
      title: 'Registrasi Pasien',
      items: [
        'Pendaftaran Pasien Baru',
        'Mengubah Rincian Pasien Yang sudah Teregistrasi',
        /* Maul-14/11/2025 */ 
        'Mengubah Status Pasien Eksternal Menjadi Pasien Reguler',
        'Perubahan Jaminan Pasien'
        /* Maul-14/11/2025 */ 
      ]
    },
    {
      id: 'rawat-jalan',
      title: 'Rawat Jalan',
      items: [
        'Pendaftaran RWJ bagi pasien yang sudah memiliki janji',
        'Pendaftaran RWJ bagi pasien yang belum memiliki janji'
      ]
    },
    {
      id: 'rawat-inap',
      title: 'Rawat Inap',
      items: [
        'Pendaftaran Rawat Inap',
        'Pendaftaran Rawat Inap dari Poli atau IGD',
        'Pembatalan Rawat Inap',
        'Pendaftaran Pasien Operasi Elektif'
      ]
    },
    {
      id: 'one-day-care',
      title: 'One Day Care',
      items: ['Pendaftaran Pasien ODC']
    },
    {
      id: 'front-office-igd',
      title: 'Instalasi Gawat Darurat',
      items: ['Pendaftaran Pasien di IGD']
    },
    {
      id: 'penjadwalan-janji',
      title: 'Penjadwalan Janji Kunjung Dokter',
      items: [
        'Penjadwalan Kunjung Pasien Lama',
        'Penjadwalan Kunjung Pasien Baru',
        'Mengkonfirmasi Kedatangan Pasien',
        'Menjadwal Ulang Kunjungan Pasien',
        'Jadwal Kunjungan Berulang',
        'Pembatalan Appointment'
      ]
    },
    {
      id: 'jadwal-dokter',
      title: 'Jadwal Dokter',
      items: [
        'Pembuatan Jadwal Dokter',
        'Pembuatan Jadwal On Call Dokter',
        'Jadwal Dokter Pengganti',
        'Penjadwalan Cuti Dokter',
        'Perubahan Kuota atau Slot Pasien untuk Dokter'
      ]
    }
  ],
  'medical-record': [
    {
      id: 'cara-mencari-info',
      title: 'Cara Mencari Info Pasien',
      items: ['Cara Mencari Info Pasien']
    },
    {
      id: 'cara-mencari-brm',
      title: 'Cara Mencari BRM Lama Bila Tidak ada Data nya',
      items: ['Cara Mencari BRM Lama Bila Tidak Ada Datanya']
    },
    {
      id: 'cetak-bukti',
      title: 'Cara Cetak Bukti Transaksi IGD',
      items: ['Cara Cetak Bukti Transaksi IGD']
    },
    {
      id: 'memeriksa-pasien',
      title: 'Memeriksa Pasien Masuk dan Keluar Rawat Inap',
      items: ['Memeriksa Pasien Masuk dan Keluar Rawat Inap']
    },
    {
      id: 'inventory-rm',
      title: 'Inventory di Rekam Medis',
      items: [
        /* Maul-14/11/2025 */ 
        'Prosedur Permintaan Barang ke Gudang Umum',
        'Prosedur Penerimaan Barang Gudang Umum'
        /* Maul-14/11/2025 */ 
      ]
    },
    {
      /* Maul-14/11/2025 */ 
      id: 'laporan-rj',
      title: 'Laporan Rawat Jalan',
      items: [
        'Cara Menghitung Diagnosa Rawat Jalan',
        'Cara Menghitung Jumlah per Dokter per Spesialis',
        'Cara Menghitung Kunjungan Pasien Baru dan Lama per Dokter',
        'Cara Menghitung Pasien Batal',
        'Cara Menghitung Pasien Masuk, Hari Rawat dan Pasien Pulang',
        'Cara Menghitung Pasien Rawat Jalan Menjadi Pasien Masuk Rawat Inap',
        'Cara Menyiapkan BRM Pasien Appointment',
        'Melihat Jumlah  Kunjungan Rawat Jalan Per Dokter'
      ]
    },
    {
      id: 'laporan-rwi',
      title: 'Laporan Rawat Inap',
      items: [
        'Cara Melihat Data Kelahiran Bayi',
        'Cara Melihat Lama Rawat per Dokter',
        'Cara Melihat Pasien Keluar Rawat Inap',
        'Cara Menghitung Jumlah Total IGD dan Pasien Naik Rawat Inap dari IGD Rawat Inap',
        'Cara Menghitung Lama Rawat Pasien',
        'Melihat Angka Persalinan dan Kelahiran SC & Normal',
        'Melihat Daftar Pasien Rawat Inap, Melihat Kelas Kamar TT dan Dokter yang Merawat Rawat Inap',
        'Melihat Jumlah IGD, Hari Rawat , Kelahiran per Bulan',
        'Melihat Jumlah Pasien Pulang',
        'Melihat Status TT yang Terisi Pasien yang Masih Dirawat'
      ]
    }
    /* Maul-14/11/2025 */ 
  ],
  'perawat': [
    {
      id: 'perawat-rawat-jalan',
      title: 'Rawat Jalan',
      items: [
        'Prosedur Penerimaan Pasien Di Nurse Station Rawat Jalan',
        'Prosedur Asisten Dokter di Kamar Praktek Dokter'
      ]
    },
    {
      id: 'perawat-rawat-inap',
      title: 'Rawat Inap',
      items: [
        'Prosedur Penerimaan Pasien Baru',
        'Serah Terima Antar Shift',
        'Prosedur Mendampingi Dokter Visit',
        'Proses Pengosongan Kamar',
        'Proses Unmark For Discharge',
        'Prosedur Pemulangan Pasien',
        'Pembuatan SKL (Birth Notifications)',
        'Proses Pengembalian Pasien Kabur (Abscounded) Ke Kamar Perawatan',
        'Service Order Processor Melalui Inpatient',
        'Service Order Processor Melalui Nursing Work Bench'
      ]
    },
    {
      id: 'transfer-ruangan',
      title: 'Transfer Ruangan',
      items: [
        'Proses Transfer Antar Ruangan Alih Rawat',
        'Proses Received (Pindah Kamar)',
        'Proses Alih Rawat (Pindah Dokter)',
        'Proses Transfer Pasien Dari Kamar Perawatan Ke Kamar Operasi'
      ]
    },
    {
      id: 'penjadwalan-operasi',
      title: 'Penjadwalan Operasi',
      items: [
        'Penjadwalan Operasi di Rawat Jalan, Rawat Inap dan IGD',
        'One Day Care',
        'Perubahan atau Pemindahan Jadwal Operasi'
      ]
    },
    {
      id: 'kamar-operasi',
      title: 'Kamar Operasi',
      items: [
        'Melihat Jadwal Operasi Dari Ruang OK',
        'Proses Pelaksanaan Operasi',
        'Transfer Pasien Pasca Operasi ke Ruang Perawatan',
        'Pengkajian Pra Anasthesi',
        'Tindakan Operasi Dilakukan',
        'Tindakan Operasi yang Dilakukan Lebih Dari 1 Dokter dan Lebih dari 1 Tindakan (Incision Type)',
        'Validasi Jadwal Operasi yang Diterima Petugas Kamar Operasi',
        'Validasi Transaksi Di Kamar Operasi'
      ]
    },
    {
      id: 'perawat-igd',
      title: 'Instalasi Gawat Darurat',
      items: [
        'Prosedur Penerimaan Pasien Di IGD atau VK (OP Emergency)',
        'Prosedur Rawat Inap Dari Emergency',
        'Pemulangan Dari OP Emergency'
      ]
    },
    {
      id: 'farmasi-keperawatan',
      title: 'Farmasi di Keperawatan',
      items: [
        'Proses Input Pemakaian Obat Ruangan',
        'Proses Retur Obat Ke Farmasi',
        'Proses Retur Obat Pemakaian Ruangan'
      ]
    },
    {
      id: 'inventory-keperawatan',
      title: 'Inventory di Keperawatan',
      items: [
        'Prosedur Permintaan Barang Ke Gudang Umum',
        'Prosedur Permintaan Obat Ruangan Ke Farmasi',
        'Prosedur Penerimaan Barang Farmasi atau Gudang Umum',
        'Prosedur Pengeluaran BMHP'
      ]
    },
    {
      id: 'laporan-perawat',
      title: 'Laporan',
      items: [
        'Service Order Status Report',
        'Cocokan Transaksi Dokter Di Rawat Jalan'
      ]
    }
  ],
  'dokter': [
    {
      id: 'dokter-rawat-jalan',
      title: 'Rawat Jalan',
      items: [
        'Dokter di Rawat Jalan',
        'Cross Consultation',
        'Request Surgery',
        'Pembuatan Resep Racik',
        'Pembuatan Resep Paten',
        'Dokter Admission Request',
        'Mendaftarkan Pasien Perjanjian di Poli Dokter',
        'Resume Rawat Jalan(Encounter Summary)'
      ]
    },
    {
      id: 'dokter-rawat-inap',
      title: 'Rawat Inap',
      items: ['Pasien di Rawat Inap (Dokter Ruangan)']
    },
    {
      id: 'dokter-igd',
      title: 'IGD',
      items: [
        'Pasien Rawat Jalan IGD / VK',
        'Memindahkan Pasien emergency Menjadi IP emergency',
        'Merencanakan Pasien di Rawat Dari IP Emergency'
      ]
    },
    {
      id: 'dokter-kamar-operasi',
      title: 'Kamar Operasi',
      items: ['Pengisian Laporan Operasi(Operation Note)']
    }
  ],
  'radiologi': [
    {
      id: 'terima-order',
      title: 'Terima Order',
      items: ['Terima Order']
    },
    {
      id: 'terima-order-eksternal',
      title: 'Terima Order Pasien Eksternal',
      items: ['Terima Order Pasien Eksternal']
    },
    {
      id: 'cetak-hasil',
      title: 'Cetak Hasil Radiologi',
      items: ['Cetak Hasil Radiologi']
    }
  ],
  'fisioterapi': [
    {
      id: 'penerimaan-pendaftaran',
      title: 'Penerimaan Pendaftaran Pasien Rawat Jalan Fisioterapi dan KTK',
      items: ['Penerimaan Pendaftaran Pasien Rawat Jalan Fisioterapi dan KTK']
    }
  ],
  'laboratorium': [
    {
      id: 'lab-terima-order',
      title: 'Terima Order Lab',
      items: ['Terima Order Lab']
    },
    {
      id: 'cetak-hasil-lab',
      title: 'Mencetak Hasil Pemeriksaan Laboratorium',
      items: ['Mencetak Hasil Pemeriksaan Laboratorium']
    },
    {
      id: 'rujuk-lab',
      title: 'Merujuk Pemeriksaan Lab Ke Luar Antar Cabang Hermina dan Lab Rujukan Lainnya',
      items: ['Merujuk Pemeriksaan Lab Ke Luar Antar Cabang Hermina dan Lab Rujukan Lainnya']
    },
    {
      id: 'terima-order-lab-eksternal',
      title: 'Terima Order Pasien Eksternal',
      items: ['Terima Order Pasien Eksternal']
    },
    {
      id: 'laporan-lab',
      title: 'Laporan Lab',
      items: [
        'Laporan Jumlah Pemeriksaan Lab',
        'Laporan Pemeriksaan yang Belum Selesai (Pending)',
        'Laporan Turn Around Time (TAT)'
      ]
    }
    
  ],
  'farmasi': [
    {
      id: 'e-prescription',
      title: 'E-Prescription',
      items: ['Rawat Jalan', 'Rawat Inap']
    },
    {
      id: 'retur-transaksi',
      title: 'Retur Transaksi',
      items: [
        'Retur Transaksi Resep Rawat Jalan',
        'Drug Return Request(Retur Obat Pasien Rawat Inap)',
        'Receive Store(Penerimaan Returan Resep Pasien Rawat Inap)',
        'Case 1 : Pending Farmasi Return Request'
      ]
    },
    {
      id: 'pending-dispense',
      title: 'Pending Dispense Request',
      items: ['Pending Dispense Request']
    },
    {
      id: 'laporan-farmasi',
      title: 'Laporan',
      items: ['Pembuatan Laporan Resep dan Sub Resep Farmasi']
    }
  ],
  'inventory': [
    {
      id: 'stock-distribution',
      title: 'Stock Distribution',
      items: [
        'Permintaan Gudang (Stock Indent)',
        'Pengeluaran Barang (Stock Issue)',
        'Penerimaan Barang (Stock Receipt)'
      ]
    },
    {
      id: 'retur-barang',
      title: 'Retur Barang Internal',
      items: ['Retur Barang Internal (Stock Return)']
    },
    {
      id: 'transfer-obat',
      title: 'Transfer Obat (Transfer Kode Barang)',
      items: ['Transfer Obat (Transfer Kode Barang)']
    },
    {
      id: 'reorder-qty',
      title: 'Pengaturan ReOrder Qty',
      items: ['Pengaturan ReOrder Quantity (Min - Max)']
    },
    {
      id: 'pengeluaran-bhp',
      title: 'Pengeluaran Barang Habis Pakai',
      items: ['Pengeluaran Barang Habis Pakai(Stock Consumption)']
    },
    {
      id: 'stock-opname',
      title: 'Stock Opname',
      items: ['Stock Opname']
    },
    {
      id: 'penyesuaian-barang',
      title: 'Penyesuaian Barang',
      items: ['Penyesuaian Barang']
    },
    {
      id: 'laporan-inventory',
      title: 'Laporan',
      items: [
        'Inventory Adjustment With Quantity and Value',
        'Adjustment Details Report',
        'Inventory Adjustment and Receipt',
        'Stock Ledger',
        'Stock Position With Value Report',
        'Stock Position Report',
        'Item Movement Summary',
        'Report Fast Slow Non Moving',
        'Item Reorder Details Report',
        'Report Non Moving Dalam Periode Terakhir'
      ]
    }
  ],
  'procurement': [
    {
      id: 'purchase-request',
      title: 'Purchase Request',
      items: ['Purchase Request']
    },
    {
      id: 'purchase-order',
      title: 'Purchase Order',
      items: ['Purchase Order']
    },
    {
      id: 'good-receipt',
      title: 'Good Receipt Note',
      items: ['Good Receipt Note']
    },
    {
      id: 'kriteria-po-grn',
      title: 'Kriteria Penginputan Purchase Order dan Good Receipt Note',
      items: ['Kriteria Penginputan Purchase Order dan Good Receipt Note']
    }
  ],
  'keuangan': [
    {
      id: 'pelunasan-rawat-jalan',
      title: 'Pelunasan Rawat Jalan',
      items: [
        'Proses Penerimaan Transaksi Rawat Jalan Tunai',
        'Proses Penerimaan Transaksi Rawat Jalan Card',
        'Jaminan Dengan Nama Customer Sesuai dan Dengan Selisih Pembayaran',
        'Jaminan Dengan Nama Customer Sesuai dan di Jamin Seluruhnya',
        'Jaminan Dengan Selisih Pembayaran',
        'Jaminan Dengan Plan Exclude Menjadi Tercover',
        'Jaminan Dengan Mengubah atau Mengedit Nilai Plan yang Dijamin',
        'Jaminan Pemeriksaan Penunjang Medis yang Dilakukan Dengan Hari Yang Berbeda',
        'Jaminan yang Tidak Dijamin Pada Akhir Transaksi',
        'Pembayaran Jaminan Dengan Ganti Customer Penjamin',
        'Prosedur Penginputan Transaksi Pasien Masalah Rawat Jalan'
      ]
    },
    {
      id: 'pelunasan-rawat-inap',
      title: 'Pelunasan Rawat Inap',
      items: [
        'Pelunasan Transaksi Rawat Inap Dengan Cara Bayar Tunai',
        'Pelunasan Transaksi Rawat Inap Dengan Cara Bayar Card',
        'Pelunasan Rawat Inap Dengan Selisih Biaya Dibayar Di RS',
        'Pelunasan Rawat Inap yang Dijamin Seluruhnya Oleh Jaminan atau Asuransi'
      ]
    },
    {
      id: 'pembatalan-transaksi',
      title: 'Pembatalan Transaksi',
      items: [
        'Prosedur Pengajuan Pembatalan Transaksi',
        'Prosedur Approval Transaksi Pembatalan',
        'Prosedur Penginputan Revisi Transaksi'
      ]
    },
    {
      id: 'uang-muka',
      title: 'Penerimaan Uang Muka',
      items: [
        'Proses Penerimaan Uang Muka Dengan Cara Bayar Tunai',
        'Proses Penerimaan Uang Muka Dengan Cara Bayar Card',
        'Penerimaan Uang Muka Berdasarkan Collection Type',
        'Penerimaan Uang Muka Untuk Transaksi Deposit Kedua dan Selanjutnya'
      ]
    },
    {
      id: 'deposit',
      title: 'Deposit',
      items: [
        'Deposit Transfer',
        'Prosedur Penerimaan Transaksi Cicilan Depomil (Deposit Ibu Hamil)',
        'Prosedur Penerimaan Transaksi Depomil di Rawat Inap'
      ]
    },
    {
      id: 'finance-clearance',
      title: 'Finance Clearance',
      items: [
        'Prosedur Finance Clearence di Rawat Jalan',
        'Prosedur Finance Clearence di Rawat Inap'
      ]
    },
    {
      id: 'discount',
      title: 'Discount',
      items: [
        'Prosedur Penginputan Nilai Diskon',
        'Proses Approval Diskon',
        'Prosedur Penginputan Transaksi Setelah Approval Diskon'
      ]
    },
    {
      id: 'refund',
      title: 'Refund',
      items: [
        'Prosedur Refund Karena Pembatalan Transaksi',
        'Prosedur Refund Karena Pengembalian Kelebihan Deposit',
        'Proses Refund Dengan Tunai',
        'Proses Refund Dengan Transfer Bank'
      ]
    },
    {
      id: 'transaksi-lainnya',
      title: 'Transaksi Lainnya',
      items: [
        'Penerimaan Transaksi Pembelian Obat Tanpa Resep (Obat Bebas)',
        'Penerimaan Transaksi Pembayaran Seminar (Pasien Eksternal)',
        'Prosedur Penerimaan Transaksi Klinik Tumbuh Kembang Paket'
      ]
    },
    {
      id: 'laporan-keuangan',
      title: 'Laporan',
      items: [
        'Laporan Tunai dan Card Tanpa Detail',
        'Laporan Pendapatan Asuransi',
        'Laporan Transaksi Detail',
        'Laporan Rekap Pembatalan Transaksi',
        'Report Recap Card Seluruh User',
        'Report Recap Card Per User'
      ]
    },
    {
      id: 'admin-rawat-inap',
      title: 'Admin Rawat Inap',
      items: [
        'Rawat Inap Pasien Pribadi',
        'Pasien Pribadi Menjadi Jaminan',
        'Input Nilai Jaminan Asuransi',
        'Pasien Jaminan A Berubah Menjadi B',
        'Posting Transaksi RWI Jaminan Dicover Semua',
        'Pasien Jaminan Selisih Bayar Rawat Inap',
        'Input Transaksi Direct service (Materai, Pantry)',
        'Pasien Pribadi Pulang',
        'Cara Input Nilai yang Dicover Asuransi',
        'Pembuatan Surat Tagihan Rawat Inap'
      ]
    }
  ],
  'it-support': [
    {
      id: 'update-bed',
      title: 'Update Bed Definition',
      items: ['Update Bed Definition']
    },
    {
      id: 'data-karyawan',
      title: 'Pengisian Data Karyawan',
      items: ['Pengisian Data Karyawan']
    }
  ]
};
