export interface DetailItem {
  type: 'text' | 'image' | 'video';
  content: string;
  title?: string;
}

export interface ContentStep {
  id: string;
  number: number;
  title: string;
  description: string;
  details?: (string | DetailItem)[];
}

export interface ContentItem {
  id: string;
  menuKey: string;
  submenuId: string;
  itemTitle: string;
  steps: ContentStep[];
}

/* Maul-14/11/2025 */ 
export const contentData: Record<string, ContentItem> = {
  'pendaftaran-pasien-baru': {
    id: 'pendaftaran-pasien-baru',
    menuKey: 'front-office',
    submenuId: 'registrasi-pasien',
    itemTitle: 'Pendaftaran Pasien Baru',
    steps: [
      {
        id: 'pendaftaran-pasien-baru-step-1',
        number: 1,
        title: 'Pendaftaran Pasien Baru',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, pilih ambulatory care',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/pendaftaran_pasien_baru/1.png'
          },
          'Pilih menu registration, klik registration',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/pendaftaran_pasien_baru/2.png'
          },
          'Isi form selengkap-lengkapnya, kolom dengan tanda (*) wajib diisi',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/pendaftaran_pasien_baru/3.png'
          },
          'Jika pasien menggunakan jaminan, maka lengkapi form pada bagian patient eligibility',
          'Lengkapi form pada kolom sebagai berikut :',
          '     Eligibility name',
          '     Group id/policy no',
          '     Policy start date',
          '     Policy valid until ',
          '     Relationship',
          '     Billing order ',
          'Klik active',
          'Klik tombol add',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/pendaftaran_pasien_baru/4.png'
          },
          'Maka data jaminan sudah tersimpan',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/pendaftaran_pasien_baru/5.png'
          },
          'Klik tombol register',
          'Maka akan tampil informasi “Registration saved successfully”',
          'Nomor MRN akan otomatis terbentuk oleh system',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/pendaftaran_pasien_baru/6.png'
          },
          'Maka akan tampil preview sticker untuk pasien',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/pendaftaran_pasien_baru/7.png'
          }
        ]
      }
    ]
  },

  'mengubah-rincian-pasien-yang-sudah-teregistrasi': {
    id: 'mengubah-rincian-pasien-yang-sudah-teregistrasi',
    menuKey: 'front-office',
    submenuId: 'registrasi-pasien',
    itemTitle: 'Mengubah Rincian Pasien Yang sudah Teregistrasi',
    steps: [
      {
        id: 'mengubah-rincian-pasien-yang-sudah-teregistrasi-step-1',
        number: 1,
        title: 'Mengubah Rincian Pasien Yang sudah Teregistrasi',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, pilih ambulatory care',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/mengubah_rincian_pasien/1.png'
          },
          'Pilih menu registered patients list',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/mengubah_rincian_pasien/2.png'
          },
          'Maka akan tampil halaman registered patients list, cari pasien menggunakan MRN, kemudian klik select lalu pilih modify details',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/mengubah_rincian_pasien/3.png'
          },
          'Edit data yang ingin dilakukan perubahan',
          'Klik tombol save ',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/mengubah_rincian_pasien/4.png'
          },
          'Tampil form reason for modification',
          'Pilih reason yang sesuai',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/mengubah_rincian_pasien/5.png'
          },
          'Klik tombol save',
          'Maka akan tampil print reports',
          'Klik tombol close ',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/mengubah_rincian_pasien/6.png'
          },
          'Maka akan tampil informasi “Registration Saved Successfully”',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/mengubah_rincian_pasien/7.png'
          }

        ]
        
      }
    ]
  },

  'mengubah-status-pasien-eksternal-menjadi-pasien-reguler': {
    id: 'mengubah-status-pasien-eksternal-menjadi-pasien-reguler',
    menuKey: 'front-office',
    submenuId: 'registrasi-pasien',
    itemTitle: 'Mengubah Status Pasien Eksternal Menjadi Pasien Reguler',
    steps: [
      {
        id: 'mengubah-status-pasien-eksternal-menjadi-pasien-reguler-step-1',
        number: 1,
        title: 'Mengubah Status Pasien Eksternal Menjadi Pasien Reguler',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, Pilih Ambulatory Care',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/mengubah_status_pasien_eksternal/1.png'
          },
          'Pilih menu Registration pada sisi bilah kiri',
          'Pilih external patient list',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/mengubah_status_pasien_eksternal/2.png'
          },
          'Maka akan tampil halaman external patient list',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/mengubah_status_pasien_eksternal/3.png'
          },
          'Jika nama pasien tidak muncul, gunakan fitur search ',
          'Cari berdasarkan registration date',
          'Klik tombol search',
          'Setelah data pasien muncul, klik register',
          'Pilih General',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/mengubah_status_pasien_eksternal/5.png'
          },
          'Maka akan masuk ke halaman patient registration',
          'Cek kembali data pasien',
          'Jika sudah sesuai klik tombol register',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/mengubah_status_pasien_eksternal/5.png'
          }
        ],
        
        
      }
    ]
  },

  'perubahan-jaminan-pasien': {
    id: 'perubahan-jaminan-pasien',
    menuKey: 'front-office',
    submenuId: 'registrasi-pasien',
    itemTitle: 'Perubahan Jaminan Pasien',
    steps: [
      {
        id: 'perubahan-jaminan-pasien-step-1',
        number: 1,
        title: 'Perubahan Jaminan Pasien',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, pilih menu hospital account',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/perubahan_jaminan_pasien/1.png'
          },
          'Pilih care plan pada sisi bilah kiri, ',
          'Klik patient policy details',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/perubahan_jaminan_pasien/2.png'
          },
          'Cari pasien berdasarkan nama atau no.MRN',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/perubahan_jaminan_pasien/3.png'
          },
          'Sebelumnya pasien sudah mempunyai jaminan dan sekarang ingin menggunakan jaminan yang baru',
          'Lengkapi form pada kolom sebagai berikut :',
          'Plan name',
          'Policy valid until',
          'Policy start date',
          'Group id/policy no ',
          'Billing order ',
          'Klik pada kolom active',
          'Klik tombol save',
          'Maka akan tampil informasi “Policy details saved successfully”',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/perubahan_jaminan_pasien/4.png'
          },
          'Sekarang pasien memiliki dua data jaminan, dan keduanya aktif. ',
          'Untuk menonaktifkan salah satu jaminan yaitu pilih salah satu data jaminan yang ingin dinonaktifkan',
          'Klik edit',
          'Hilangkan tanda centang pada kolom active',
          'Klik tombol save',
          'Maka jaminan tersebut sudah tidak aktif',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/perubahan_jaminan_pasien/5.png'
          }
        ],
                
      }
    ]
  },

  'pendaftaran-rwj-bagi-pasien-yang-sudah-memiliki-janji': {
    id: 'pendaftaran-rwj-bagi-pasien-yang-sudah-memiliki-janji',
    menuKey: 'front-office',
    submenuId: 'rawat-jalan',
    itemTitle: 'Pendaftaran RWJ bagi pasien yang sudah memiliki janji',
    steps: [
      {
        id: 'pendaftaran-rwj-bagi-pasien-yang-sudah-memiliki-janji-step-1',
        number: 1,
        title: 'Pendaftaran RWJ bagi pasien yang sudah memiliki janji',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, pilih menu ambulatory care',
          'Pilih menu appointment ',
          'Masuk ke halaman Appointment List, cari pasien ',
          'Klik tombol select pada ',
          'Pilih confirm appointment',
          'Muncul pesan “Appointment confirmed successfuly”',
          'Status pasien akan berubah menjadi Confirmed',
          'Klik select kembali',
          'Klik Create encounter',
          'Masuk ke halaman create encounter, isi informasi yang diperlukan',
          'Klik tombol create encounter',
          'Kemudian akan muncul bukti transaksi poliklinik'
        ],
      }
    ]
  },

  'pendaftaran-rwj-bagi-pasien-yang-belum-memiliki-janji': {
    id: 'pendaftaran-rwj-bagi-pasien-yang-belum-memiliki-janji',
    menuKey: 'front-office',
    submenuId: 'rawat-jalan',
    itemTitle: 'Pendaftaran RWJ bagi pasien yang belum memiliki janji',
    steps: [
      {
        id: 'pendaftaran-rwj-bagi-pasien-yang-belum-memiliki-janji-step-1',
        number: 1,
        title: 'Pendaftaran RWJ bagi pasien yang belum memiliki janji',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, pilih menu ambulatory care',
          'Pilih menu bay management',
          'Pilih view patients',
          'Masuk ke halaman out patient desk, klik tombol walkin',
          'Masuk ke halaman create encounter',
          'Cari nama pasien  untuk menampilkan data pasien walkin',
          'Pilih departement, unit, consultant, dan consultant type dari menu dropdown',
          'Select slot di kolom Encouter Slot ',
          'Klik tombol create encounter',
          'Kemudian akan muncul bukti transaksi poliklinik'
        ],
      }
    ]
  },
  /* Maul-14/11/2025 */ 


  /* Maul-15/11/2025 */
  'pendaftaran-rawat-inap': {
    id: 'pendaftaran-rawat-inap',
    menuKey: 'front-office',
    submenuId: 'rawat-inap',
    itemTitle: 'Pendaftaran Rawat Inap',
    steps: [
      {
        id: 'pendaftaran-rawat-inap-step-1',
        number: 1,
        title: 'Pendaftaran Rawat Inap',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, pilih inpatient',
          'Kemudian pilih menu Admission ',
          'Masuk ke halaman patient admission, klik new',
          'Cari nama pasien berdasarkan nama atau no.MRN',
          'Isi informasi selengkap-lengkapnya, kolom dengan tanda (*) wajib diisi',
          'Untuk mengisi kolom Bed No klik icon kaca pembesar ',
          'Masuk ke halaman bed browser, pilih kamar perawatan pada field ward',
          'Klik tombol search',
          'Tampil pilihan bed yang masih available',
          'Klik pada bed yang akan dipilih',
          'Klik tombol Block',
          'Kembali ke halaman patient admission ',
          'Ceklis pada bagian payment methode',
          'Cek suggested advance amount, apakah service amount sudah sesuai, jika sudah klik tombol admit',
          'Tampil notifikasi klik tombol yes',
          'Maka akan muncul informasi "Patient Admission Saved Successfully"',
          'Klik tombol print sticker',
          'Maka akan tampil Sticker Rawat Inap',
          'Klik tombol Print ',
          'Maka akan tampil surat pernyataan persetujuan rawat inap'
        ],
      }
    ]
  },

  'pendaftaran-rawat-inap-dari-poli-atau-igd': {
    id: 'pendaftaran-rawat-inap-dari-poli-atau-igd',
    menuKey: 'front-office',
    submenuId: 'rawat-inap',
    itemTitle: 'Pendaftaran Rawat Inap dari Poli atau IGD',
    steps: [
      {
        id: 'pendaftaran-rawat-inap-dari-poli-atau-igd-step-1',
        number: 1,
        title: 'Pendaftaran Rawat Inap dari Poli atau IGD',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, pilih inpatient',
          'Pilih menu admission request',
          'Masuk ke halaman Admission Request Browser ',
          'Cari pasien dengan status “Waiting List”',
          'Klik select pilih modify',
          'Untuk mengisi kolom Bed No klik ikon kaca pembesar pada field attach bed',
          'Kemudian masuk ke halaman bed browser',
          'Pilih kamar perawatan pada field ward',
          'Klik tombol Search',
          'Maka akan muncul pilihan kamar yang masih available',
          'Klik bed yang akan dipilih',
          'Setelah itu akan muncul form, klik tombol block',
          'Maka akan masuk kembali ke halaman admission request',
          'Klik tombol modify admission request',
          'Maka akan muncul notifikasi  “Admission Request updated successfully” ',
          'Klik tombol confirm',
          'Maka akan muncul notifikasi “Admission Request Confirmed”',
          'Klik tombol back',
          'Kemudian pada kolom request status berubah menjadi Confirm',
          'Klik tombol Tambah',
          'Maka akan masuk ke patient admission',
          'Lalu isi suggested advance amount sesuai jumlah nominal',
          'Jika sudah klik tombol admit',
          'Maka akan tampil informasi “Patient Admission Saved Successfully”',
          'Klik tombol print sticker',
          'Maka akan tampil sticker rawat inap',
          'Klik tombol print ',
          'Maka akan tampil Surat Pernyataan Persetujuan Rawat Inap',
          'Kemudian kembali ke menu inpatient',
          'Klik admission request',
          {
            type: 'video',
            title: 'Lihat Video Tutorial',
            content: 'https://drive.google.com/file/d/1QCUpcBNN7AAc2KjC_W0wXtaLPrEmTXb4/preview'
          },
          'Pada kolom request status pasien sudah berubah menjadi processed'
        ],
      }
    ]
  },
  /* Maul-15/11/2025 */


  /* Maul-15/11/2025 */

  'pembatalan-rawat-inap': {
    id: 'pembatalan-rawat-inap',
    menuKey: 'front-office',
    submenuId: 'rawat-inap',
    itemTitle: 'Pembatalan Rawat Inap',
    steps: [
      {
        id: 'pembatalan-rawat-inap-step-1',
        number: 1,
        title: 'Pembatalan Rawat Inap',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pembatalan rawat inap, dengan kondisi belum diterima (receive) oleh perawatan',
          'Apabila sudah dibatalkan, bed yang sudah diblok akan kembali available',
          'Pada menu Apps, pilih inpatient',
          'Pilih menu transactions pada sisi bilah kiri, ',
          'Klik admission list',
          'Cari nama pasien, klik select pilih view admission',
          'Masuk ke halaman data pasien, klik cancel admission',
          'Tampil form admission cancel, isi remarks lalu klik save',
          'Maka akan tampil informasi “Admission cancelled successfully”',
          'Kembali ke halaman admitted patients, maka status pasien tersebut sudah berubah menjadi “Cancelled”'
        ],
      }
    ]
  },

  'pendaftaran-pasien-operasi-elektif': {
    id: 'pendaftaran-pasien-operasi-elektif',
    menuKey: 'front-office',
    submenuId: 'rawat-inap',
    itemTitle: 'Pendaftaran Pasien Operasi Elektif',
    steps: [
      {
        id: 'pendaftaran-pasien-operasi-elektif-step-1',
        number: 1,
        title: 'Pendaftaran Pasien Operasi Elektif',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, pilih inpatient',
          'Pilih admission request',
          'Masuk ke halaman admission request browser, klik create',
          'Kemudian cari pasien berdasarkan nama atau no.MRN',
          'Tampil data pasien, isi form selengkap-lengkapnya. Kolom dengan tanda (*) wajib diisi',
          'Lengkapi form pada kolom sebagai berikut :',
          'Pilih departement, ',
          'Consulting doctor',
          'Admission category',
          'Surgery date',
          'Est length of stay  ',
          'Admission type',
          'Untuk menjadwalkan operasi, pilih tanggal pada halaman OT availability',
          'Tampil form schedule details, pilih procedure kemudian tentukan waktu penjadwalan operasi',
          'Klik tombol schedule',
          'Tampil jadwal operasi yang sudah ditentukan ',
          'Klik create admision request',
          'Maka akan tampil informasi  “Admission request saved successfully”'
        ],
      }
    ]
  },


  'pendaftaran-pasien-odc': {
    id: 'pendaftaran-pasien-odc',
    menuKey: 'front-office',
    submenuId: 'one-day-care',
    itemTitle: 'Pendaftaran Pasien ODC',
    steps: [
      {
        id: 'pendaftaran-pasien-odc-step-1',
        number: 1,
        title: 'Pendaftaran Pasien ODC',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, pilih Ambulatory care',
          'Klik appoitment, pada sisi bilah kiri pilih Daycare patient',
          'Pilih New',
          'Cari nama pasien berdasarkan no. MRN atau nama',
          'Pilih departemen sesuai dengan spesialisasi',
          'Pilih ward sesuai dengan ruang one day care',
          'Pilih consulting doctor sesuai dengan DPJP',
          'Cari bed, klik icon kaca pembesar',
          'Pilih ward, bed status : available bed category : day care Gender (disesuaikan)',
          'Klik tombol search',
          'Kemudian klik bed yang tersedia',
          'Lalu klik tombol block',
          'Jika sudah memilih kamar, klik save',
          'Maka akan tampil informasi “Record saved successfully”'
        ],
      }
    ]
  },

  'penjadwalan-kunjung-pasien-lama': {
    id: 'penjadwalan-kunjung-pasien-lama',
    menuKey: 'front-office',
    submenuId: 'penjadwalan-janji',
    itemTitle: 'Penjadwalan Kunjung Pasien Lama',
    steps: [
      {
        id: 'penjadwalan-kunjung-pasien-lama-step-1',
        number: 1,
        title: 'Penjadwalan Kunjung Pasien Lama',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, pilih ambulatory care',
          'Pilih menu appointments',
          'Masuk ke halaman appointment list, klik schedule appointment',
          'Klik schedule untuk memilih jenis jasa rawat jalan yang diperlukan',
          'Klik tab slots, kemudian jadwal praktek  akan tampil ',
          'Pilih from date, kemudian klik search agar slot jadwal praktek tampil sesuai dengan tanggal yang dipilih ',
          'Pilih slot yang tersedia ',
          'Isi nomor rekam medis atau nama pasien kemudian data pasien akan muncul',
          'Apabila kesulitan dalam pencarian nama, dapat menggunakan mode search dengan klik tanda Loop',
          'Kemudian cari berdasarkan nama dan tanggal lahir (atau kategori lainnya)',
          'Klik tambah (+) untuk memilih pasien',
          'Isi tambahan informasi di “Reason for visit” dan “Remarks”',
          'Lakukan verifikasi terutama pada jam kunjungan yang tertera',
          'Jika informasi sudah sesuai, klik tombol schedule untuk menyelesaikan pembuatan jam kunjung bagi pasien',
          'Slot yang sudah dipilih akan hilang dari list yang tersedia',
          'Klik tombol appointment list, untuk melihat keseluruhan appoitment yang ada',
          'Kembali ke halaman appointment list,  klik select pilih generate token no ',
          'Maka akan muncul informasi “Token number generated successfully”'
        ],
      }
    ]
  },


  'pendaftaran-pasien-di-igd': {
    id: 'pendaftaran-pasien-di-igd',
    menuKey: 'front-office',
    submenuId: 'front-office-igd',
    itemTitle: 'Pendaftaran Pasien di IGD',
    steps: [
      {
        id: 'pendaftaran-pasien-di-igd-step-1',
        number: 1,
        title: 'Pendaftaran Pasien di IGD',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, pilih emergency',
          'Pilih menu registration',
          'Isi form selengkap-lengkapnya, kolom dengan tanda ( * ) wajib diisi',
          'Klik tombol register',
          'Nomor MRN akan otomatis terbentuk oleh sistem dan akan langsung mencetak sticker untuk pasien ',
          'Maka akan tampil notifikasi “Registration Saved Successfully”',
          'Kembali ke emergency, pilih menu emergency patient ',
          'Data pasien yang sudah diregistrasi akan terlihat di tab emergency patient list',
          'Klik walkin ER',
          'Cari nama pasien berdasarkan nama atau no MRN',
          'Lengkapi form pada kolom sebagai berikut :',
          'Pilih service center dengan IGD',
          'Pilih unit dengan IGD',
          'Pilih consultant',
          'Pilih triage category',
          'Klik tombol walkin',
          'Maka akan tampil notifikasi “The Patient Received Successfully”'
        ],
      }
    ]
  },

  'penjadwalan-kunjung-pasien-baru': {
    id: 'penjadwalan-kunjung-pasien-baru',
    menuKey: 'front-office',
    submenuId: 'penjadwalan-janji',
    itemTitle: 'Penjadwalan Kunjung Pasien Baru',
    steps: [
      {
        id: 'penjadwalan-kunjung-pasien-baru-step-1',
        number: 1,
        title: 'Penjadwalan Kunjung Pasien Baru',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, pilih ambulatory care',
          'Pilih menu appointments',
          'Masuk ke halaman appointment list, lalu klik schedule appointment',
          'Klik schedule untuk memilih jenis jasa rawat jalan yang diperlukan',
          'Klik tab slots, kemudian slot jadwal praktek akan tampil ',
          'Pilih from date, kemudian search agar slot jadwal praktek tampil sesuai dengan tanggal yang dipilih',
          'Pilih slot yang tersedia',
          'Klik new patient',
          'Isi informasi kelengkapan data pasien',
          'Klik create patient',
          'Isi tambahan informasi di “Reason for visit” dan “Remarks”',
          'Lakukan verifikasi pada tanggal dan jam kunjungan yang tertera',
          'Jika informasi sudah sesuai, klik tombol schedule untuk menyelesaikan pembuatan jam kunjung bagi pasien',
          'Slot yang sudah dipilih akan hilang dari list yang tersedia',
          'Lalu klik tombol appointment list, untuk melihat keseluruhan appointment yang ada',
          'Kembali ke appointment list, pasien baru akan memiliki warna “merah” dengan kode Rekam Medis sementara “EXTAPPO-…” ',
          'Klik select pilih generate token no untuk mendapatkan nomor booking',
          'Lakukan confirm appoitment',
          'Pilih select, klik general agar pasien didaftarkan sebagai pasien Rumah Sakit',
          'Kondisi Apabila Pasien Memiliki Nomor Rekam Medis ',
          'Pilih select, kemudian klik Link MRN ',
          'Isi nama pasien dengan lengkap, lalu pilih pasien ',
          'Kemudian klik link MRN ',
          'Lalu akan tampil informasi "Patient with MRN....... attached"',
          'Search criteria berdasarkan MRN, klik select berdasarkan MRN pasien yang dituju ',
          'Klik create encounter untuk proses pendaftaran poliklinik'
        ],
      }
    ]
  }
/* Maul-15/11/2025 */
  
};