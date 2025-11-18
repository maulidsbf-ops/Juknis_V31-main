export interface DetailItem {
  type: 'text' | 'image' | 'video';
  content: string;
  title?: string;
  level?: number;
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
          { type: 'text', content: 'Eligibility name', level: 3 },
          { type: 'text', content: 'Group id/policy no', level: 3 },
          { type: 'text', content: 'Policy start date', level: 3 },
          { type: 'text', content: 'Policy valid until', level: 3 },
          { type: 'text', content: 'Relationship', level: 3 },
          { type: 'text', content: 'Billing order', level: 3 },
          { type: 'text', content: 'Checklist active', level: 3 },
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


  /* Maul-16/11/2025 */

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
  },
/* Maul-16/11/2025 */


/* Maul-17/11/2025 */
  'mengkonfirmasi-kedatangan-pasien': {
    id: 'mengkonfirmasi-kedatangan-pasien',
    menuKey: 'front-office',
    submenuId: 'penjadwalan-janji',
    itemTitle: 'Mengkonfirmasi Kedatangan Pasien',
    steps: [
      {
        id: 'mengkonfirmasi-kedatangan-pasien-step-1',
        number: 1,
        title: 'Mengkonfirmasi Kedatangan Pasien',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, pilih menu ambulatory care',
          'Pilih menu appointment',
          'Masuk ke halaman appointment list, cari pasien yang sudah memiliki jadwal kunjung dan telah tiba di rumah sakit',
          'Klik select pilih confirm appointment',
          'Status pasien dari “Booked” menjadi “Confirmed”',
          'Maka akan tampil informasi "Appointment confirmed successfully"'
        ],
      }
    ]
  },

  'menjadwal-ulang-kunjungan-pasien': {
    id: 'menjadwal-ulang-kunjungan-pasien',
    menuKey: 'front-office',
    submenuId: 'penjadwalan-janji',
    itemTitle: 'Menjadwal Ulang Kunjungan Pasien',
    steps: [
      {
        id: 'menjadwal-ulang-kunjungan-pasien-step-1',
        number: 1,
        title: 'Menjadwal Ulang Kunjungan Pasien',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, pilih menu ambulatory care',
          'Pilih menu appointment',
          'Masuk ke halaman appointment list, cari pasien yang akan dijadwal ulang',
          'Klik select, pilih reschedule appointment',
          'Tampil form schedule details ',
          'Slot yang yang sudah terisi akan berwarna biru',
          'Jika menjadwal ulang ke tanggal yang berbeda maka klik tombol “Reschedule to”',
          'Pilih kolom yang diinginkan, isi remarks dan reason for visit',
          'Klik reschedule / reschedule and print untuk menyelesaikan penjadwalan ulang',
          'Status  jadwal pasien sekarang menjadi booked setelah di jadwal ulang'
        ],
      }
    ]
  },

  'jadwal-kunjungan-berulang': {
    id: 'jadwal-kunjungan-berulang',
    menuKey: 'front-office',
    submenuId: 'penjadwalan-janji',
    itemTitle: 'Jadwal Kunjungan Berulang',
    steps: [
      {
        id: 'jadwal-kunjungan-berulang-step-1',
        number: 1,
        title: 'Jadwal Kunjungan Berulang',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, pilih menu ambulatory care',
          'Pilih menu appointment ',
          'Klik schedule appointment',
          'Kemudian pilih schedule',
          'Klik tab slot, untuk memilih jadwal dokter ',
          'Cari nama pasien lama, lalu akan muncul form schedule details',
          'Jika pasien akan dijadwalkan untuk kunjungan berulang, maka klik kolom repeat dan pilih pola ulang yang diperlukan: “Daily” (Harian), “Weekly” (Mingguan) dan “Monthly” (Bulanan)',
          'Klik Schedule untuk menyelesaikan penjadwalan pasien berulang kunjung',
          'Kembali ke halaman schedule, klik tombol appointment list',
          'Maka pasien tersebut berhasil dijadwal ulang kembali'
        ],
      }
    ]
  },

  'pembatalan-appointment': {
    id: 'pembatalan-appointment',
    menuKey: 'front-office',
    submenuId: 'penjadwalan-janji',
    itemTitle: 'Pembatalan Appointment',
    steps: [
      {
        id: 'pembatalan-appointment-step-1',
        number: 1,
        title: 'Pembatalan Appointment',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, pilih menu ambulatory care',
          'Pilih menu appointment ',
          'Masuk ke halaman Appointment List, pilih pasien klik select ',
          'Pilih cancel appointment',
          'Tampil form appointment, pilih reason ',
          'Klik tombol cancel appointment'
        ],
      }
    ]
  },

  'pembuatan-jadwal-dokter': {
    id: 'pembuatan-jadwal-dokter',
    menuKey: 'front-office',
    submenuId: 'jadwal-dokter',
    itemTitle: 'Pembuatan Jadwal Dokter',
    steps: [
      {
        id: 'pembuatan-jadwal-dokter-step-1',
        number: 1,
        title: 'Pembuatan Jadwal Dokter',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, pilih ambulatory care',
          'Pilih menu configuration pada sisi bilah kiri ',
          'Klik consultant schedule definition',
          'Pilih departement, klik view',
          'Kemudian klik tombol new',
          'Tampil form pengisian kalender dokter',
          'Pilih hari, minggu setiap bulan, pilih blok waktu yang diinginkan',
          'Pada consultation type pilih walkin jika ingin daftar langsung (tanpa perjanjian), appoitment (dengan penjadwalan) dan OT (operating theater)',
          'Pilih service center, unit dan consultant yang tepat',
          'Isi keterangan di kolom instruction',
          'Klik tombol add',
          'Maka jadwal telah tersimpan',
          'Kemudian klik save ',
          'Maka akan tampil informasi “Departement OPD Schedule is saved”'
        ],
      }
    ]
  },

  'pembuatan-jadwal-on-call-dokter': {
    id: 'pembuatan-jadwal-on-call-dokter',
    menuKey: 'front-office',
    submenuId: 'jadwal-dokter',
    itemTitle: 'Pembuatan Jadwal On Call Dokter',
    steps: [
      {
        id: 'pembuatan-jadwal-on-call-dokter-step-1',
        number: 1,
        title: 'Pembuatan Jadwal On Call Dokter',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada pembuatan jadwal praktek (on call) preference harus diubah sesuai spesialisasi dokter',
          'Klik tab preference',
          'Pilih departement, klik ok',
          'Maka akan tampil informasi “Preference updated successfully”',
          'Pada menu Apps, pilih menu ambulatory care',
          'Pilih menu configuration pada sisi bilah kiri',
          'Klik consultant schedule definition',
          'Masuk ke halaman OPD schedule, lalu klik tombol create',
          'Pilih schedule type, kemudian klik new',
          'Tampil form pengisian kalender dokter',
          'Pilih hari, minggu setiap bulan, pilih blok waktu yang diinginkan',
          'Pada consultation type pilih walkin jika ingin daftar langsung (tanpa perjanjian), appoitment (dengan penjadwalan dan OT (operating theater)',
          'Pilih service center, unit dan consultant yang tepat',
          'Isi keterangan di kolom instruction',
          'Klik tombol add',
          'Kemudian jadwal tersebut sudah tampil, pilih tanggal pada valid from',
          'Lalu klik save',
          'Maka akan tampil informasi “Departement OPD schedule is saved”'
        ],
      }
    ]
  },

  'jadwal-dokter-pengganti': {
    id: 'jadwal-dokter-pengganti',
    menuKey: 'front-office',
    submenuId: 'jadwal-dokter',
    itemTitle: 'Jadwal Dokter Pengganti',
    steps: [
      {
        id: 'jadwal-dokter-pengganti-step-1',
        number: 1,
        title: 'Jadwal Dokter Pengganti',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, pilih menu ambulatory care',
          'Pilih menu configuration pada bilah sisi kiri',
          'Pilih menu consultant schedule definition',
          'Masuk ke halaman OPD Schedule ',
          'Pilih tombol select  untuk memilih poliklinik (our patient departement) ',
          'Klik tombol Create',
          'Jika sebelumnya telah ada konfigurasi dapat klik tombol view maka akan muncul informasi ',
          'Pilih tanggal, klik tombol New',
          'Tampil form pengisian kalender dokter / konsultan atau unit',
          'Pilih data dokter yang ingin diganti jadwalnya',
          'Klik tombol new ',
          'Pilih hari yang akan dikonfigurasi',
          'Pilih minggu dari setiap bulan ',
          'Pilih blok waktu yang diinginkan',
          'Pilih jika konfigurasi berlaku untuk (Unit) kelompok dokter atau hanya untuk (Konsultan) dokter tertentu ',
          'Pilih jika konfigurasi berlaku untuk walkin (pasien tanpa perjanjian), Appointment (pasien dengan perjanjian) dan OT (Operating Theater) ',
          'Pilih Service center, Unit dan Consultant yang tepat',
          'Isi keterangan di kolom instruction',
          'Klik tombol Add ',
          'Jika sudah selesai maka klik tombol save',
          'Maka akan muncul informasi “Departement OPD Schedule is saved”'
        ],
      }
    ]
  },

  'penjadwalan-cuti-dokter': {
    id: 'penjadwalan-cuti-dokter',
    menuKey: 'front-office',
    submenuId: 'jadwal-dokter',
    itemTitle: 'Penjadwalan Cuti Dokter',
    steps: [
      {
        id: 'penjadwalan-cuti-dokter-step-1',
        number: 1,
        title: 'Penjadwalan Cuti Dokter',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama, pilih preference untuk merubah departement sesuai departement spesialisasi dokter',
          'Pilih menu Apps, pilih menu ambulatory care',
          'Pilih menu transactions pada sisi bilah kiri ',
          'Klik Un-Availability',
          'Kemudian klik new',
          'Tampil form create UnAvailability, lengkapi informasi dengan mengisi consultant, tanggal dan reason (alasan)',
          'Jika sudah klik save',
          'Maka akan tampil informasi “Record saved successfully”'
        ],
      }
    ]
  },


  'perubahan-kuota-atau-slot-pasien-untuk-dokter': {
    id: 'perubahan-kuota-atau-slot-pasien-untuk-dokter',
    menuKey: 'front-office',
    submenuId: 'jadwal-dokter',
    itemTitle: 'Perubahan Kuota atau Slot Pasien untuk Dokter',
    steps: [
      {
        id: 'perubahan-kuota-atau-slot-pasien-untuk-dokter-step-1',
        number: 1,
        title: 'Perubahan Kuota atau Slot Pasien untuk Dokter',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, pilih ambulatory care',
          'Pilih menu configuration pada sisi bilah kiri, ',
          'Klik quota definition',
          'Masuk ke halaman quota definition, klik search',
          'Cari berdasarkan kriteria, pilih departement klik search',
          'Kemudian klik edit',
          'Masuk ke halaman quota definitions, pilih tab unit quotas, pilih unit yang dituju',
          'Pada contoh ini pilih spesialis anak',
          'Isi atau edit kolom new registration slot time dan follow up slot time',
          'Jika sudah klik save',
          'Kembali ke halaman quota definitions, lalu klik save',
          'Maka akan tampil informasi “The departement quota is saved successfully”'
        ],
      }
    ]
  },

  'cara-mencari-info-pasien': {
    id: 'cara-mencari-info-pasien',
    menuKey: 'medical-record',
    submenuId: 'cara-mencari-info',
    itemTitle: 'Cara Mencari Info Pasien',
    steps: [
      {
        id: 'cara-mencari-info-pasien-step-1',
        number: 1,
        title: 'Cara Mencari Info Pasien',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama klik tab reports',
          'Pilih menu inpatient pada sisi bilah kiri',
          'Klik menu Report',
          'Pilih Admission and discharge reports',
          'Pilih tanggal admission (from date - to date)',
          'Pilih tanggal discharge (from date - to date)',
          'Klik ikon ms Excel maka data akan otomatis tersimpan di komputer',
          'Maka akan tampil laporan sebagai berikut :',
          'Di laporan ini terdapat keterangan pasien tersebut ke dokter spesialis tujuan',
          'Kemudian juga terdapat informasi nama dokter, pembayaran dan keterangan berapa lama pasien tersebut dirawat'
        ],
      }
    ]
  },

  'cara-mencari-brm-lama-bila-tidak-ada-datanya': {
    id: 'cara-mencari-brm-lama-bila-tidak-ada-datanya',
    menuKey: 'medical-record',
    submenuId: 'cara-mencari-brm',
    itemTitle: 'Cara Mencari BRM Lama Bila Tidak Ada Datanya',
    steps: [
      {
        id: 'cara-mencari-brm-lama-bila-tidak-ada-datanya-step-1',
        number: 1,
        title: 'Cara Mencari BRM Lama Bila Tidak Ada Datanya',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama pilih Apps',
          'Pada menu Apps, pilih Patient care',
          'Pilih menu EMR',
          'Ketik No MRN cari nama pasien ',
          'Cocokkan nama pasien dengan nomor MRN',
          'Jika nama pasien sudah tampil, klik Folder IP untuk melihat terakhir rawat  tanggal berapa.',
          'Pilih Observations klik link observasi tersebut untuk melihat rawat inap terakhir ke dokter siapa',
          'Jika sudah tampil pasien, klik Folder OP untuk melihat terakhir kunjungan tanggal berapa',
          'Pilih Observations klik link observasi tersebut untuk melihat kunjungan terakhir ke dokter siapa'
        ],
      }
    ]
  },

  'cara-cetak-bukti-transaksi-igd': {
    id: 'cara-cetak-bukti-transaksi-igd',
    menuKey: 'medical-record',
    submenuId: 'cetak-bukti',
    itemTitle: 'Cara Cetak Bukti Transaksi IGD',
    steps: [
      {
        id: 'cara-cetak-bukti-transaksi-igd-step-1',
        number: 1,
        title: 'Cara Cetak Bukti Transaksi IGD',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama pilih Apps',
          'Pilih menu Emergency',
          'Pilih Emergency patients',
          'Pada halaman emergency pilih tab Emergency OP patients',
          'Cari nama pasiennya, klik select pilih Case sheet print',
          'Maka akan tampil laporan sebagai berikut :'
        ],
      }
    ]
  },

  'memeriksa-pasien-masuk-dan-keluar-rawat-inap': {
    id: 'memeriksa-pasien-masuk-dan-keluar-rawat-inap',
    menuKey: 'medical-record',
    submenuId: 'memeriksa-pasien',
    itemTitle: 'Memeriksa Pasien Masuk dan Keluar Rawat Inap',
    steps: [
      {
        id: 'memeriksa-pasien-masuk-dan-keluar-rawat-inap-step-1',
        number: 1,
        title: 'Memeriksa Pasien Masuk dan Keluar Rawat Inap',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, pilih klik tab Reports',
          'Pilih modul inpatient pada sisi bilah kiri',
          'Klik menu Reports',
          'Pilih Admission and discharge report',
          'Pilih tanggal admission dan tanggal discharge',
          'Klik ikon ms Excel maka data akan otomatis tersimpan di komputer',
          'Maka akan tampil laporan sebagai berikut :',
          'Perhatikan pada kolom patient name dan MRN',
          'Admission date atau tanggal masuk, admission status atau keterangan keluar dan discharge date atau tanggal keluar',
          'Ward /dirawat dimana, Consultant/ DPJP dan plan/ penjamin',
          'Admission category / catatan dirawat dan admission note menjelaskan'
        ],
      }
    ]
  },

  'prosedur-permintaan-barang-ke-gudang-umum-di-mr': {
    id: 'prosedur-permintaan-barang-ke-gudang-umum-di-mr',
    menuKey: 'medical-record',
    submenuId: 'inventory-rm',
    itemTitle: 'Prosedur Permintaan Barang ke Gudang Umum di MR',
    steps: [
      {
        id: 'prosedur-permintaan-barang-ke-gudang-umum-di-mr-step-1',
        number: 1,
        title: 'Prosedur Permintaan Barang ke Gudang Umum di MR',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama klik Apps',
          'Pilih menu Inventory',
          'Pilih menu stock indent',
          'Klik New',
          'Isi Request store/Location : GU_Medical Record ',
          'Isi Issue store/Location : Gudang Umum',
          'Isi Remarks',
          'Klik Add line items',
          'Pilih item, isi quantity',
          'Klik add',
          'Maka akan tampil informasi bahwa item tersebut sudah berhasil ditambahkan',
          'Jika sudah sesuai, klik Send for approval',
          'Maka akan tampil informasi “Stock indent sent for approval”',
          'Proses Approval',
          'Pada menu Apps pilih Inventory',
          'Pilih menu stock indent',
          'Cari no dokumen yang akan dipilih',
          'Klik select pilih edit',
          'Cek data kembali, jika sudah sesuai klik Approve',
          'Maka akan tampil informasi “Stock indent approved”'
        ],
      }
    ]
  },

  'prosedur-penerimaan-barang-gudang-umum': {
    id: 'prosedur-penerimaan-barang-gudang-umum',
    menuKey: 'medical-record',
    submenuId: 'inventory-rm',
    itemTitle: 'Prosedur Penerimaan Barang Gudang Umum',
    steps: [
      {
        id: 'memeriksa-pasien-masuk-dan-keluar-rawat-inap-step-1',
        number: 1,
        title: 'Prosedur Penerimaan Barang Gudang Umum',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama klik Apps',
          'Pilih menu Inventory',
          'Pilih menu stock receipt',
          'Klik New',
          'Pilih convert from stock issue',
          'Isi Receipt store/location : GU_Medical Record',
          'Isi Issue store/location : Gudang Umum',
          'Klik Convert From',
          'Pada convert from pilih stock issue',
          'Pilih document number (ceklis no dokumen tujuan)',
          'Tampil item, klik select all',
          'Klik Ok',
          'Cek data kembali, jika sudah sesuai klik send for approval',
          'Maka akan tampil informasi “Stock receipt sent for approval',
          'Proses Approval',
          'Pada menu Apps pilih Inventory',
          'Pilih menu stock receipt',
          'Cari no dokumen, klik select pilih edit',
          'Cek data kembali, jika sudah sesuai klik Approve',
          'Maka akan tampil informasi “Stock receipt approved”'
        ],
      }
    ]
  },
  /* Maul-17/11/2025 */

  /* heru-17/11/2025 */

  'prosedur-penerimaan-pasien-di-nurse-station-rawat-jalan': {
    id: 'prosedur-penerimaan-pasien-di-nurse-station-rawat-jalan',
    menuKey: 'perawat',
    submenuId: 'perawat-rawat-jalan',
    itemTitle: 'Prosedur Penerimaan Pasien Di Nurse Station Rawat Jalan',
    steps: [
      {
        id: 'prosedur-penerimaan-pasien-di-nurse-station-rawat-jalan-step-1',
        number: 1,
        title: 'Prosedur Penerimaan Pasien Di Nurse Station Rawat Jalan',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, pilih ambulatory care',
          'Lalu pilih menu Bay management, klik View patients',
          'Masuk ke halaman Patient List, kemudian lakukan pencarian pasien berdasarkan search criteria yaitu dengan cara pilih departement, visit date, unit dan consultant ',
          'Setelah itu klik tombol search atau dapat juga mencari pasien berdasarkan no. MRN',
          'Jika sudah menemukan pasien tersebut,  lalu klik select, pilih Mark as Arrived',
          'Kemudian akan muncul informasi “Patient Marked As Arrived”',
          'Setelah itu klik select pada list pasien tersebut, lalu pilih patient chart ',
          'Masuk ke halaman entry perawat, setelah itu klik keperawatan pada menu CPPT untuk membuat clinical notes ',
          'Lalu pilih consultant pada form select encounter',
          'Setelah itu tampil form isian notes perawat, Isi kolom title dan notes',
          'Jika sudah klik tombol Save dan publish',
          'Kemudian muncul notifikasi, klik tombol processed',
          'Setelah itu akan tampil informasi “Clinical notes saved successfully”',
          'Berikut tampilan Clinical notes keperawatan yang sudah disave',
          'Selanjutnya pilih menu Vitals, lalu klik ikon tambah  ( + )  ',
          'Lengkapi informasi pada form vital, jika sudah klik tombol save',
          'Berikut tampilan informasi vitals yang sudah disave',
          'Kemudian klik tombol tambah ( + ) pada menu Allergies',
          'Lengkapi informasi pada form Allergy, jika sudah klik tombol save',
          'Lalu akan muncul informasi “Allergen saved successfully”, ',
          'Setelah itu klik Back to Patient List ',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/perubahan_jaminan_pasien/3.png'
          },

          {
            type: 'video',
            title: 'Lihat Video Tutorial',
            content: 'https://drive.google.com/file/d/1QCUpcBNN7AAc2KjC_W0wXtaLPrEmTXb4/preview'
          }
        ],
      }
    ]
  },



'prosedur-asisten-dokter-di-kamar-praktek-dokter': {
    id: 'prosedur-asisten-dokter-di-kamar-praktek-dokter',
    menuKey: 'perawat',
    submenuId: 'perawat-rawat-jalan',
    itemTitle: 'Prosedur Asisten Dokter di Kamar Praktek Dokter',
    steps: [
      {
        id: 'prosedur-asisten-dokter-di-kamar-praktek-dokter-jalan-step-1',
        number: 1,
        title: 'Prosedur Asisten Dokter di Kamar Praktek Dokter',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, pilih ambulatory care',
          'Lalu pilih menu Bay management, klik View patients',
          'Masuk ke halaman Patient List, kemudian lakukan pencarian pasien berdasarkan search criteria yaitu dengan cara pilih departement, visit date, unit dan consultant',
          'Setelah itu klik tombol search atau dapat juga mencari pasien berdasarkan no. MRN',
          'Jika sudah menemukan pasien tersebut, kemudian klik ikon berwarna kuning untuk OnCall dokter',
          'Kemudian akan muncul informasi “Patient is Called for consultation”',
          'Setelah itu klik select, pilih patient Chart ',
          'Pilih menu Orders, lalu klik tombol tambah ( + ) ',
          'Lalu pilih consultant pada form select encounter',
          'Setelah itu tampil form isian notes perawat, Isi kolom title dan notes',
          {type : 'text', content : '1. Masuk ke halaman Add orders, pastikan nama dokter yang tercantum di kolom nama dokter pada kotak sudut kanan atas sesuai', level: 2 },
          {type : 'text', content : '2. Isi kata kunci pada kolom pencarian', level: 2 },
          {type : 'text', content : '3. Kemudian beri tanda centang pada item yang ingin dipilih', level: 2 },
          'Kemudian cek kembali untuk item order yang sudah dipilih, ',
          'Pastikan prefered service center seesuai dengan spesialisasi ',
          'Jika sudah sesuai lalu klik tombol save ',
          'Kemudian akan muncul informasi “Service Order saved successfully” ',
          'Setelah itu klik Back to Patient List',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/perubahan_jaminan_pasien/3.png'
          },

          {
            type: 'video',
            title: 'Lihat Video Tutorial',
            content: 'https://drive.google.com/file/d/1QCUpcBNN7AAc2KjC_W0wXtaLPrEmTXb4/preview'
          }
        ],
      }
    ]
 },

  'prosedur-penerimaan-pasien-baru': {
    id: 'prosedur-penerimaan-pasien-baru',
    menuKey: 'perawat',
    submenuId: 'perawat-rawat-inap',
    itemTitle: 'Prosedur Penerimaan Pasien Baru',
    steps: [
      {
        id: 'prosedur-penerimaan-pasien-baru-step-1',
        number: 1,
        title: 'Prosedur Penerimaan Pasien Baru',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
            'Pada menu Apps, pilih menu Inpatients',
            'Masuk ke halaman inpatient, Pilih Nursing Work Bench',
            'Masuk ke halaman Nursing work bench, kemudian klik search',
            'Setelah itu cari pasien berdasarkan search criteria, pada patient status pilih Billing cleared',
            'Lalu klik tombol search',
            'Setelah pasien ditemukan kemudian klik Administrative, pilih Receive patient',
            'Muncul form data pasien, isi remarks bila ada keterangan setelah itu klik tombol save',
            'Lalu akan muncul informasi “Patient reported successfully”',
            'Kembali ke halaman list patient, setelah itu lakukan kembali pencarian berdasarkan status pasien (patient status)',
            'Pilih Under IP  lalu klik tombol search',
            'Setelah pasien ditemukan lalu klik Clinical, pilih patient chart',
            'Masuk ke halaman entry perawat, setelah itu klik keperawatan pada menu CPPT untuk membuat clinical notes',
            'Setelah itu tampil form isian note perawat, Isi kolom title dan note',
            'Jika sudah klik tombol Save dan publish',
            'Kemudian muncul notifikasi, klik tombol processed',
            'Setelah itu akan muncul informasi “Clinical notes saved successfully”',
            'Berikut tampilan Clinical notes keperawatan yang sudah disave',
            'Selanjutnya pilih menu Vitals, lalu klik ikon tambah  ( + )  ',
            'Lengkapi informasi pada form Vital, setelah itu klik tombol save',
            'Berikut tampilan Vitalls keperawatan yang sudah disave',
            'Selanjutnya pilih menu Allergies, lalu klik ikon tambah  ( + ) ',
            'Lengkapi informasi pada form alergi jika sudah klik tombol save',
            'Setelah itu klik Keperawatan pada menu CPPT',
            'Lengkapi informasi note keperawatan dengan mengisi title dan note',
            'Jika sudah klik Save dan Publish',
            'Kemudian muncul notifikasi, klik tombol processed',
            'Setelah itu akan muncul informasi “Clinical note saved successfully”',
            'Berikut tampilan Clinical notes keperawatan yang sudah disave',
            'Setelah itu klik Back to patient list',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/perubahan_jaminan_pasien/3.png'
          },

          {
            type: 'video',
            title: 'Lihat Video Tutorial',
            content: 'https://drive.google.com/file/d/1QCUpcBNN7AAc2KjC_W0wXtaLPrEmTXb4/preview'
          }
        ],
      }
    ]
  },

  'serah-terima-antar-shift': {
    id: 'serah-terima-antar-shift',
    menuKey: 'perawat',
    submenuId: 'perawat-rawat-inap',
    itemTitle: 'Serah Terima Antar Shift',
    steps: [
      {
        id: 'serah-terima-antar-shift-step-1',
        number: 1,
        title: 'Serah Terima Antar Shift',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
            'Pada menu Apps, pilih menu Inpatients ',
            'Masuk ke halaman inpatient, Pilih Nursing Work Bench',
            'Cari pasien setelah itu klik Clinical, pilih Patient Chart',
            'Masuk ke halaman entry perawat, setelah itu klik Keperawatan pada menu CPPT',
            'Lengkapi informasi note keperawatan dengan mengisi title dan note',
            'Jika sudah klik Save dan Publish',
            'Muncul notifikasi publish options, klik tombol processed',
            'Tampil informasi “Clinical note saved successfully”',
            'Setelah itu pilih menu Vitals, lalu klik ikon tambah  ( + ) ',
            'Lengkapi informasi pada form Vital, setelah itu klik tombol save',
            'Tampil informasi “Vitals saved successfully”',
            'Kembali ke halaman entry perawat, cek kembali data pasien jika sudah klik Back to patient list',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/perubahan_jaminan_pasien/3.png'
          },

          {
            type: 'video',
            title: 'Lihat Video Tutorial',
            content: 'https://drive.google.com/file/d/1QCUpcBNN7AAc2KjC_W0wXtaLPrEmTXb4/preview'
          }
        ],
      }
    ]
  },

  'prosedur-mendampingi-dokter-visit': {
    id: 'prosedur-mendampingi-dokter-visit',
    menuKey: 'perawat',
    submenuId: 'perawat-rawat-inap',
    itemTitle: 'Prosedur Mendampingi Dokter Visit',
    steps: [
      {
        id: 'prosedur-mendampingi-dokter-visit-step-1',
        number: 1,
        title: 'Prosedur Mendampingi Dokter Visit',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
            'Pada halaman utama pilih tab inpatient',
            'Pilih pasien, klik view EHR',
            'Pilih widget clinical notes, klik icon tambah (+)',
            'Lengkapi form add note, isi title dan note',
            'Klik save & publish',
            'Lalu klik processed',
            'Maka akan tampil notifikasi “Clinical note saved successfully”',
            'Pilih widget orders, klik icon tambah (+)',
            'Cari nama order di kolom search',
            'Kemudian akan tampil daftar order sesuai kata pencarian, beri tanda centang item order yang dipilih',
            'Pastikan nama dokter yang tercantum di kolom nama dokter pada kotak sudut kanan atas sesuai',
            'Pastikan service center untuk order yang dimaksud sesuai dengan lokasi yang dituju',
            'Klik save',
            'Maka akan tampil notifikasi “Service order saved successfully”',
            'Pilih widget medications, klik icon tambah (+)',
            'Pilih store, lalu klik prescription ',
            'Cari nama order di kolom search',
            'Kemudian akan tampil daftar order sesuai kata pencarian',
            'Beri tanda centang item order yang dipilih',
            'Setelah itu klik add instructions',
            'Lengkapi form instructions, lalu klik select',
            'Jika sudah klik add drugs',
            'Maka akan tampil data item yang sudah diorder',
            'Klik save',
            'Lalu akan tampil notifikasi “Drug order saved”',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/perubahan_jaminan_pasien/3.png'
          },

          {
            type: 'video',
            title: 'Lihat Video Tutorial',
            content: 'https://drive.google.com/file/d/1QCUpcBNN7AAc2KjC_W0wXtaLPrEmTXb4/preview'
          }
        ],
      }
    ]
  },

   'proses-pengosongan-kamar': {
    id: 'proses-pengosongan-kamar',
    menuKey: 'perawat',
    submenuId: 'perawat-rawat-inap',
    itemTitle: 'Proses Pengosongan Kamar',
    steps: [
      {
        id: 'proses-pengosongan-kamar-step-1',
        number: 1,
        title: 'Proses Pengosongan Kamar',
        description: 'Tujuan : Penyelesaian proses pemulangan sehingga kamar yang selesai digunakan di ruang perawatan dapat dilihat sebagai kamar available oleh admisi rawat inap',
        details: [
            'Pada halaman home klik pending tasks',
            'Kemudian klik form',
            'Klik tombol discharge',
            'Maka akan tampil informasi “Record saved successfully”',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/perubahan_jaminan_pasien/3.png'
          },

          {
            type: 'video',
            title: 'Lihat Video Tutorial',
            content: 'https://drive.google.com/file/d/1QCUpcBNN7AAc2KjC_W0wXtaLPrEmTXb4/preview'
          }
        ],
      }
    ]
  },

    'proses-unmark-for-discharge': {
    id: 'proses-unmark-for-discharge',
    menuKey: 'perawat',
    submenuId: 'perawat-rawat-inap',
    itemTitle: 'Proses Unmark For Discharge',
    steps: [
      {
        id: 'proses-unmark-for-discharge-step-1',
        number: 1,
        title: 'Proses Unmark For Discharge',
        description: 'Tujuan : Apabila pasien yang sudah siap dipulangkan namun ada item service yang belum terinput dan proses pembayaran belum sampai ke kasir',
        details: [
            'Pada menu Apps pilih Inpatients',
            'Pilih nursing work bench',
            'Lalu klik search',
            'Lakukan pencarian berdasarkan search criteria',
            'Pada patien status pilih Marked for discharge',
            'Klik search',
            'Cari nama pasien, klik clinical',
            'Pilih unmarked for discharge',
            'Pilih reason, lalu klik yes',
            'Maka akan tampil informasi bahwa pasien tersebut berhasil di un-marked for discharge ',
            'Kemudian untuk memastikan kembali apakah pasien tersebut berhasil di unmarked for discharge',
            'Yaitu search berdasarkan criteria. Pada patient status pilih under IP care',
            'Klik search',
            'Dan pasien tersebut berhasil di unmarked for discharge',
            'Selanjutnya dapat dilakukannya dengan menginput order yang tertinggal atau melakukan validasi service order processor oleh perawat terkait',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/perubahan_jaminan_pasien/3.png'
          },

          {
            type: 'video',
            title: 'Lihat Video Tutorial',
            content: 'https://drive.google.com/file/d/1QCUpcBNN7AAc2KjC_W0wXtaLPrEmTXb4/preview'
          }
        ],
      }
    ]
  },

    'prosedur-pemulangan-pasien': {
    id: 'prosedur-pemulangan-pasien',
    menuKey: 'perawat',
    submenuId: 'perawat-rawat-inap',
    itemTitle: 'Prosedur Pemulangan Pasien',
    steps: [
      {
        id: 'prosedur-pemulangan-pasien-step-1',
        number: 1,
        title: 'Prosedur Pemulangan Pasien',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
            'Pada menu Apps, pilih menu Inpatients',
            'Masuk ke halaman inpatient, Pilih Nursing Work Bench',
            'Masuk ke halaman Nursing work bench, kemudian cari nama pasien ',
            'Setelah itu klik Clinical, pilih Patient Chart',
            'Masuk ke halaman entry perawat, setelah itu klik Request',
            'Kemudian cari service Order Processor',
            'Masuk ke halaman service order processor, cari nama pasien',
            'Setelah itu klik tanda centang pada kolom process, ',
            'Kemudian klik save',
            'Kemudian muncul form, pilih select employee dan departement',
            'Setelah itu klik tombol tambah, lalu klik tombol OK',
            'Muncul informasi “Orders are processed successfully” ',
            'Kembali ke halaman service order processor, lalu cari nama pasien ',
            'Klik Clinical, pilih Marked for discharge',
            'Muncul form mark for discharge, kemudian pilih discharge type dan unit',
            'Setelah itu klik tombol yes',
            'Setelah pasien berhasil di marked for discharge, kemudian klik search untuk mencari pasien berdasarkan search criteria',
            'Pada patient status pilih Marked for discharge, klik tombol search',
            'Lalu akan tampil list pasien yang telah dilakukan marked for discharge',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/perubahan_jaminan_pasien/3.png'
          },

          {
            type: 'video',
            title: 'Lihat Video Tutorial',
            content: 'https://drive.google.com/file/d/1QCUpcBNN7AAc2KjC_W0wXtaLPrEmTXb4/preview'
          }
        ],
      }
    ]
  },

   'pembuatan-skl-birth-notifications': {
    id: 'pembuatan-skl-birth-notifications',
    menuKey: 'perawat',
    submenuId: 'perawat-rawat-inap',
    itemTitle: 'Pembuatan SKL (Birth Notifications)',
    steps: [
      {
        id: 'pembuatan-skl-birth-notifications-step-1',
        number: 1,
        title: 'Pembuatan SKL (Birth Notifications)',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
            'Pada menu Apps, pilih menu Inpatients',
            'Masuk ke halaman inpatient, Pilih Nursing Work Bench',
            'Masuk ke halaman nursing work bench, setelah itu search nama pasien',
            'Kemudian klik administrative, pilih Birth notification',
            'Isi form selengkap-lengkapnya, kolom dengan tanda bintang (*) wajib diisi',
            'Klik tombol Update',
            'Setelah itu klik tombol add ',
            'Jika sudah klik tombol add muncul data yang sudah diadd',
            'Lalu klik tombol save',
            'Tampil informasi saved successfully',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/perubahan_jaminan_pasien/3.png'
          },

          {
            type: 'video',
            title: 'Lihat Video Tutorial',
            content: 'https://drive.google.com/file/d/1QCUpcBNN7AAc2KjC_W0wXtaLPrEmTXb4/preview'
          }
        ],
      }
    ]
  },

  'proses-pengembalian-pasien-kabur-abscounded-ke-kamar-perawatan': {
    id: 'proses-pengembalian-pasien-kabur-abscounded-ke-kamar-perawatan',
    menuKey: 'perawat',
    submenuId: 'perawat-rawat-inap',
    itemTitle: 'Proses Pengembalian Pasien Kabur (Abscounded) Ke Kamar Perawatan',
    steps: [
      {
        id: 'proses-pengembalian-pasien-kabur-abscounded-ke-kamar-perawatan-step-1',
        number: 1,
        title: 'Proses Pengembalian Pasien Kabur (Abscounded) Ke Kamar Perawatan',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
            'Pada menu Apps, pilih menu Inpatients',
            'Masuk ke halaman inpatient, Pilih Nursing Work Bench',
            'Kemudian cari nama pasien berdasarkan search criteria yaitu dengan',
            'Patient status : Abscounded  dan No MRN pasien',
            'Lalu klik tombol search',
            'Jika nama pasien telah ditemukan, lalu klik administrative',
            'Pilih Revert abscounding patient',
            'Lalu akan muncul form, pilih reason',
            'Setelah itu klik tombol yes',
            'Maka akan muncul informasi pasien tersebut berhasil “Marked Abscounded”',
            'Setelah itu lakukan pencarian berdasarkan criteria dengan patient status : Under IP',
            'Klik tombol search',
            'Maka status pasien sudah pindah kembali ke Under IP',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/perubahan_jaminan_pasien/3.png'
          },

          {
            type: 'video',
            title: 'Lihat Video Tutorial',
            content: 'https://drive.google.com/file/d/1QCUpcBNN7AAc2KjC_W0wXtaLPrEmTXb4/preview'
          }
        ],
      }
    ]
  },

    'service-order-processor-melalui-inpatient': {
    id: 'service-order-processor-melalui-inpatient',
    menuKey: 'perawat',
    submenuId: 'perawat-rawat-inap',
    itemTitle: 'Service Order Processor Melalui Inpatient',
    steps: [
      {
        id: 'service-order-processor-melalui-inpatient-step-1',
        number: 1,
        title: 'Service Order Processor Melalui Inpatient',
        description: 'Tujuan Service order prosesor adalah melakukan validasi terhadap item service/tindakan yang sudah di order baik untuk mendapatkan kesesuaian nama dokter yang melakukan tindakan dan menerima honor dokternya (rendering doctor ). Prosedur ini dilakukan pada saat : A) Transfer pasien ke ruangan lain (perawat yang mengantar melakukan prosedur service order processor dan perawat yang menerima memastikan seluruh transaksi telah di verifikasi) ; B) Penerimaan pasien baru di ruang rawat inap (perawat yang melakukan verifikasi/  service order processor adalah perawat yang mengantar, sedangkan perawat yang menerima memastikan seluruh transaksi telah di verifikasi) ; C) Setiap akhir shift ; D)Saat pemulangan pasien',
        details: [
                  'Pada menu Apps, pilih Inpatient',
                  'Pilih menu Nursing Work Bench',
                  'Klik Search',
                  'Cari pasien berdasarkan kriteria sebagai berikut :',
                  'Patien status : Under IP',
                  'Active patients : Active',
                  'Service center : disesuaikan',
                  'Klik tombol search',
                  'Cari nama pasien, salin nomor MRN pasien tersebut',
                  'Klik tanda panah pada sisi kiri',
                  'Klik menu Transaction pada sisi bilah kiri',
                  'Pilih service order processor',
                  'Klik tab Pending sevice order',
                  'Klik search',
                  'Lakukan pencarian berdasarkan kriteria berikut :',
                  'MRN : disesuaikan',
                  'Visit Type : disesuaikan',
                  'Klik tombol search',
                  'Maka akan tampil data pasien tersebut bila ada transaksi yang belum di verifikasi',
                  'Lakukan penyelesaian verifikasi setiap transaksi, dengan cara :',
                  'Cek “Ordered  By” untuk memastikan nama dokter yang akan dilakukan verifikasi',
                  'Checklist kotak pada kolom process di setiap transaksi (lakukan satu persatu)',
                  'Klik save',
                  'Pada bagian Rendering Employee isi nama dokter di pilihan select employee sesuai dengan nama dokter pada informasi kolom order by (contoh gambar pada bagian sebelumnya)',
                  'Ketik ikon %%% untuk mencari nama dokter',
                  'Setelah pilih nama dokter maka field departement secara otomatis akan terisi datanya',
                  'Lalu klik ikon tambah (+)',
                  'Untuk nama dokter sudah ditambahkan',
                  'Klik Ok',
                  'Maka akan tampil informasi “Order are processed successfully”',
                  'Verifikasi transaksi atau service order processor telah berhasil dilakukan',
                  'Lakukan langkah yang sama untuk transaksi yang lainnya sampai seluruh transaksi selesai dilakukan',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/perubahan_jaminan_pasien/3.png'
          },

          {
            type: 'video',
            title: 'Lihat Video Tutorial',
            content: 'https://drive.google.com/file/d/1QCUpcBNN7AAc2KjC_W0wXtaLPrEmTXb4/preview'
          }
        ],
      }
    ]
  },

      'service-order-processor-melalui-nursing-work-bench': {
    id: 'service-order-processor-melalui-nursing-work-bench',
    menuKey: 'perawat',
    submenuId: 'perawat-rawat-inap',
    itemTitle: 'Service Order Processor Melalui Nursing Work Bench',
    steps: [
      {
        id: 'service-order-processor-melalui-nursing-work-bench-step-1',
        number: 1,
        title: 'Service Order Processor Melalui Nursing Work Bench',
        description: 'Tujuan Service order prosesor adalah melakukan validasi terhadap item service/tindakan yang sudah di order baik untuk mendapatkan kesesuaian nama dokter yang melakukan tindakan dan menerima honor dokternya (rendering doctor )',
        details: [
            'Pada menu Apps, pilih Inpatient',
            'Pilih menu Nursing Work Bench',
            'Klik Search',
            'Cari pasien berdasarkan kriteria sebagai berikut :',
            'Patien status : Under IP',
            'Active patients : Active',
            'Service center : disesuaikan',
            'Klik tombol search',
            'Untuk mulai membuka menu service order processor dapat di lakukan melalui 2 langkah, yaitu :',
            'Dapat melalui menu list pasien, yaitu klik “Clinical” pilih “Service Order Processor”',
            'Pada halaman service order processor klik tab pending service order',
            'Maka akan tampil data pasien yang akan dilakukan verifikasi transaksi',
            '2. Melalui dashboard pasien, klik clinical pilih patient chart',
            'Kemudian klik ”Request”” pilih “Service Order Processor”',
            'Pada halaman service order processor klik tab pending service order',
            'Maka akan tampil data pasien yang akan dilakukan verifikasi transaksi',
            'Lakukan penyelesaian verifikasi setiap transaksi, dengan cara :',
            'Cek “Ordered  By” untuk memastikan nama dokter yang akan dilakukan verifikasi',
            'Check list kotak pada kolom process di setiap transaksi (lakukan satu persatu)',
            'Klik save',
            'Pada bagian Rendering Employee isi nama dokter di pilihan select employee sesuai dengan nama dokter pada informasi kolom order by (contoh gambar pada bagian sebelumnya)',
            'Ketik ikon %%% untuk mencari nama dokter',
            'Setelah pilih nama dokter maka field departement secara otomatis akan terisi data keterangan',
            'Lalu klik ikon tambah (+)',
            'Untuk nama dokter sudah ditambahkan',
            'Klik Ok',
            'Maka akan tampil informasi “Order are processed successfully”',
            'Verifikasi transaksi atau service order processor telah berhasil dilakukan',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/perubahan_jaminan_pasien/3.png'
          },

          {
            type: 'video',
            title: 'Lihat Video Tutorial',
            content: 'https://drive.google.com/file/d/1QCUpcBNN7AAc2KjC_W0wXtaLPrEmTXb4/preview'
          }
        ],
      }
    ]
  },

  
      'proses-transfer-antar-ruangan-alih-rawat': {
    id: 'proses-transfer-antar-ruangan-alih-rawat',
    menuKey: 'perawat',
    submenuId: 'transfer-ruangan',
    itemTitle: 'Proses Transfer Antar Ruangan Alih Rawat',
    steps: [
      {
        id: 'proses-transfer-antar-ruangan-alih-rawat-step-1',
        number: 1,
        title: 'Proses Transfer Antar Ruangan Alih Rawat',
        description: 'Proses Transfer  (Dilakukan oleh perawat yang mentransfer / ruangan asal)',
        details: [
            'Pada menu Apps pilih Inpatient',
            'Masuk ke halaman inpatient, Pilih Nursing Work Bench',
            'Setelah itu klik search untuk mencari nama pasien berdasarkan search criteria',
            'Jika nama pasien sudah ditemukan, Klik administrative, pilih patient transfer',
            'Lalu klik tombol processed',
            'Masuk ke halaman data pasien, kemudian klik ikon kaca pembesar untuk menambahkan bed',
            'Masuk ke halaman Bed browser, pilih ward dan bed status',
            'Kemudian Klik tombol search, maka bed yang tersedia akan muncul',
            'Pilih bed yang tersedia',
            'Lalu klik tombol block',
            'Kembali ke halaman data pasien, kemudian isi kolom reason pada other details',
            'Setelah itu klik transfer',
            'Muncul informasi “Transfer request saved successfully” ',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/perubahan_jaminan_pasien/3.png'
          },

          {
            type: 'video',
            title: 'Lihat Video Tutorial',
            content: 'https://drive.google.com/file/d/1QCUpcBNN7AAc2KjC_W0wXtaLPrEmTXb4/preview'
          }
        ],
      }
    ]
  },

        'proses-received-pindah-kamar': {
    id: 'proses-received-pindah-kamar',
    menuKey: 'perawat',
    submenuId: 'transfer-ruangan',
    itemTitle: 'Proses Received (Pindah Kamar)',
    steps: [
      {
        id: 'proses-received-pindah-kamar-step-1',
        number: 1,
        title: 'Proses Received (Pindah Kamar)',
        description: 'Proses Received (dilakukan oleh perawat yang menerima / ruangan tujuan)',
        details: [
            'Pada menu Apps, pilih menu Inpatient ',
            'Kemudian pilih menu transactions, lalu klik Transfer request pada menu sisi bilah kiri',
            'Masuk ke halaman transfer request, lalu klik search',
            'Cari nama paien berdasarkan search criteria, lalu klik tombol search',
            'Jika nama pasien sudah ditemukan lalu klik tombol edit ',
            'Masuk ke halaman data pasien, lalu cek informasi data pasien tersebut jika sudah sesuai klik tombol receive',
            'Tampil informasi “Transfer request accepted successfuly”',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/perubahan_jaminan_pasien/3.png'
          },

          {
            type: 'video',
            title: 'Lihat Video Tutorial',
            content: 'https://drive.google.com/file/d/1QCUpcBNN7AAc2KjC_W0wXtaLPrEmTXb4/preview'
          }
        ],
      }
    ]
  },

          'proses-alih-rawat-pindah-dokter': {
    id: 'proses-alih-rawat-pindah-dokter',
    menuKey: 'perawat',
    submenuId: 'transfer-ruangan',
    itemTitle: 'Proses Alih Rawat (Pindah Dokter)',
    steps: [
      {
        id: 'proses-alih-rawat-pindah-dokter-step-1',
        number: 1,
        title: 'Proses Alih Rawat (Pindah Dokter)',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
            'Pada menu Apps pilih Inpatient',
            'Masuk ke halaman inpatient, Pilih Nursing Work Bench',
            'Masuk ke halaman nursing work bench, kemudian klik search',
            'Cari nama pasien berdasarkan search criteria, pada patient status pilih under IP care',
            'Lalu klik tombol search',
            'Setelah nama pasien ditemukan, klik administrative lalu pilih patient transfer',
            'Kemudian muncul form data pasien, klik tombol processed',
            'Masuk ke halaman transfer request, lalu pilih primary consultant ',
            'Isi kolom reason pada other details, kemudian klik tombol transfer',
            'Muncul informasi “Record already saved"',
            'Setelah itu klik transfer request kembali pada menu transaction',
            'Setelah itu klik tombol search, cari nama pasien berdasarkan criteria ',
            'Lalu klik tombol search',
            'Jika sudah menemukan nama pasien tersebut klik tombol edit',
            'Setelah itu masuk ke halaman data pasien, klik tombol receive',
            'Muncul informasi”Transfer request accepted successfuly”',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/perubahan_jaminan_pasien/3.png'
          },

          {
            type: 'video',
            title: 'Lihat Video Tutorial',
            content: 'https://drive.google.com/file/d/1QCUpcBNN7AAc2KjC_W0wXtaLPrEmTXb4/preview'
          }
        ],
      }
    ]
  },

    'proses-transfer-pasien-dari-kamar-perawatan-ke-kamar-operasi': {
    id: 'proses-transfer-pasien-dari-kamar-perawatan-ke-kamar-operasi',
    menuKey: 'perawat',
    submenuId: 'transfer-ruangan',
    itemTitle: 'Proses Transfer Pasien Dari Kamar Perawatan Ke Kamar Operasi',
    steps: [
      {
        id: 'proses-transfer-pasien-dari-kamar-perawatan-ke-kamar-operasi-step-1',
        number: 1,
        title: 'Proses Transfer Pasien Dari Kamar Perawatan Ke Kamar Operasi',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
            'Pada menu apps, pilih rawat inap (Inpatient)',
            'Lalu pilih Meja perawat  (Nursing work bench)',
            'Masuk ke halaman meja perawat, kemudian klik pencarian',
            'Cari nama pasien berdasarkan search criteria, pada patient status pilih under IP care',
            'Lalu klik tombol pencarian',
            'Setelah nama pasien ditemukan kemudian klik administrative, pilih patient transfer',
            'Kemudian muncul form data pasien, klik tombol processed',
            'Masuk ke halaman transfer request, kemudian pilih Bed type and no, klik ikon kaca pembesar',
            'Masuk ke halaman Bed browser, pilih ward dan bed status',
            'Kemudian Klik tombol search, maka bed yang tersedia akan muncul',
            'Pilih bed yang tersedia',
            'Lalu klik tombol block',
            'Kembali ke halaman data pasien, kemudian isi kolom reason pada other details',
            'Setelah itu klik transfer',
            'Tampil informasi “Transfer request saved successfully”',
            'Kemudian klik transfer request pada menu transaksi pada sisi bilah kiri',
            'Masuk ke halaman transfer request, cari nama pasien setelah itu klik tombol edit',
            'Masuk ke halaman data pasien, lalu klik tombol receive',
            'Muncul informasi “Transfer request accepted successfully”',
            'Kemudian klik bed browser pada menu transaksi',
            'Masuk ke halaman bed browser, lalu pilih ward dan bed status',
            'Klik tombol search',
            'Lalu pilih bed yang tersedia dengan mengklik tulisan block',
            'Kemudian tampil form change bed status, pilih reason',
            'Lalu klik tombol yes',
            'Tampil informasi “Bed status changes successfully”',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/perubahan_jaminan_pasien/3.png'
          },

          {
            type: 'video',
            title: 'Lihat Video Tutorial',
            content: 'https://drive.google.com/file/d/1QCUpcBNN7AAc2KjC_W0wXtaLPrEmTXb4/preview'
          }
        ],
      }
    ]
  },

      'penjadwalan-operasi-di-rawat-jalan-rawat-inap-dan-igd': {
    id: 'penjadwalan-operasi-di-rawat-jalan-rawat-inap-dan-igd',
    menuKey: 'perawat',
    submenuId: 'penjadwalan-operasi',
    itemTitle: 'Penjadwalan Operasi di Rawat Jalan, Rawat Inap dan IGD',
    steps: [
      {
        id: 'penjadwalan-operasi-di-rawat-jalan-rawat-inap-dan-igd-step-1',
        number: 1,
        title: 'Penjadwalan Operasi di Rawat Jalan, Rawat Inap dan IGD',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
            'Pada menu Apps, pilih Operation Theater',
            'Kemudian pilih surgery request',
            'Masuk ke halaman surgery request, kemudian cari pasien berdasarkan no MRN atau nama',
            'Isi form selengkap-lengkapnya, field yg wajib diisi yaitu Chief surgeon, Surgery type dan Billing class',
            'Kemudian pilih Departement dan isi kode prosedur ',
            'Setelah itu klik add maka akan tampil rincian biaya',
            'Untuk menjadwalkan operasi, klik ikon kaca pembesar pada operation date',
            'Kemudian tampil OT scheduling, lalu pilih tanggal operasi',
            'Selanjutnya akan tampil form event detail, lalu sesuaikan waktu untuk penjadwalan ',
            'Jika sudah klik tombol schedule',
            'Setelah itu tampil jadwal yang sudah disesuaikan pada form OT scheduling, ',
            'Jika data pada operation schedule sudah sesuai, kemudian klik tombol request',
            'Maka akan tampil informasi “Record saved successfully”',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/perubahan_jaminan_pasien/3.png'
          },

          {
            type: 'video',
            title: 'Lihat Video Tutorial',
            content: 'https://drive.google.com/file/d/1QCUpcBNN7AAc2KjC_W0wXtaLPrEmTXb4/preview'
          }
        ],
      }
    ]
  },

        'one-day-care': {
    id: 'one-day-care',
    menuKey: 'perawat',
    submenuId: 'penjadwalan-operasi',
    itemTitle: 'One Day Care',
    steps: [
      {
        id: 'one-day-care-step-1',
        number: 1,
        title: 'One Day Care',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
            'Pada menu Apps, pilih Ambulatory care',
            'Klik appoitment, pada sisi bilah kiri pilih Daycare patient',
            'Cari nama pasien, kemudian klik select pilih patient chart',
            'Pilih tab request, lalu pilih surgery request',
            'Lakukan surgery sesuai dengan jadwal yang direncanakan',
            'CATATAN :',
            'Pasien ODC  yang pulang dari kamar operasi tidak melalui jalur “ADMISSION REQUEST”',
            'Pasien ODC yang berubah kondisi menjadi rawat inap maka mengikuti alur “ADMISSION REQUEST”',
            'Setelah selesai dalam modul OT billing, pasien diarahkan ke kasir untuk menyelesaikan pembayaran.',
            'Pembayaran dilakukan dengan cara klik “Draft” pada modul hospital account',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/perubahan_jaminan_pasien/3.png'
          },

          {
            type: 'video',
            title: 'Lihat Video Tutorial',
            content: 'https://drive.google.com/file/d/1QCUpcBNN7AAc2KjC_W0wXtaLPrEmTXb4/preview'
          }
        ],
      }
    ]
  },

    'perubahan-atau-pemindahan-jadwal-operasi': {
    id: 'perubahan-atau-pemindahan-jadwal-operasi',
    menuKey: 'perawat',
    submenuId: 'penjadwalan-operasi',
    itemTitle: 'Perubahan atau Pemindahan Jadwal Operasi',
    steps: [
      {
        id: 'perubahan-atau-pemindahan-jadwal-operasi-step-1',
        number: 1,
        title: 'Perubahan atau Pemindahan Jadwal Operasi',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
            'Pada menu Apps, pilih operation theater',
            'Kemudian pilih view surgery request ',
            'Masuk ke halaman surgery request browser',
            'Pilih tanggal penjadwalan operasi, lalu isi nama pasien',
            'Klik tombol search',
            'Jika pasien sudah ditemukan klik select, pilih modify surgery request',
            'Masuk ke halaman data pasien',
            'Klik ikon kaca pembesar pada operation date',
            'Tampil form OT scheduling, klik tombol 2 days (untuk menampilkan keterangan dua tanggal) ',
            'Pilih sesuai kebutuhan',
            'Maka akan tampil dua tanggal',
            'Kemudian drag (pindahkan) jadwal operasi dari tanggal 10 Januari ke tanggal 11 Januari ',
            'Maka jadwal operasi sebelumnya dari tanggal 10 Januari telah berpindah ke tanggal 11 Januari ',
            'Jika sudah akan muncul inforamasi “OT Event update successfully”',
            'Kembali ke halaman data pasien, lalu klik tombol modify',
            'Kemudian tampil form reason for modification',
            'Pilih alasan dari modifikasi data pasien tersebut, klik Ok',
            'Maka akan muncul informasi “Record saved successfully”',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/registrasi_pasien/perubahan_jaminan_pasien/3.png'
          },

          {
            type: 'video',
            title: 'Lihat Video Tutorial',
            content: 'https://drive.google.com/file/d/1QCUpcBNN7AAc2KjC_W0wXtaLPrEmTXb4/preview'
          }
        ],
      }
    ]
  },

  /* heru-17/11/2025 */


  /* Maul-18/11/2025 */

  'cara-menghitung-diagnosa-rawat-jalan': {
    id: 'cara-menghitung-diagnosa-rawat-jalan',
    menuKey: 'medical-record',
    submenuId: 'laporan-rj',
    itemTitle: 'Cara Menghitung Diagnosa Rawat Jalan',
    steps: [
      {
        id: 'cara-menghitung-diagnosa-rawat-jalan-step-1',
        number: 1,
        title: 'Cara Menghitung Diagnosa Rawat Jalan',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama klik tab reports',
          'Pilih menu ambulatory care pada sisi bilah kiri',
          'Klik menu Report',
          'Pilih Diagnosis reports',
          'Pilih tanggal (from date - to date) dalam waktu 1 hari',
          'Klik ikon ms Excel maka data akan otomatis tersimpan di komputer',
          'Maka akan tampil laporan diagnosa sebagai berikut :',
          'Hanya dapat melihat final diagnosa'
        ],
      }
    ]
  },

  'cara-menghitung-jumlah-per-dokter-per-spesialis': {
    id: 'cara-menghitung-jumlah-per-dokter-per-spesialis',
    menuKey: 'medical-record',
    submenuId: 'laporan-rj',
    itemTitle: 'Cara Menghitung Jumlah per Dokter per Spesialis',
    steps: [
      {
        id: 'cara-menghitung-jumlah-per-dokter-per-spesialis-step-1',
        number: 1,
        title: 'Cara Menghitung Jumlah per Dokter per Spesialis',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama klik tab reports',
          'Pilih menu ambulatory care pada sisi bilah kiri',
          'Klik menu Report',
          'Pilih Visit reports',
          'Pilih tanggal (from - to)',
          'Pilih departement (disesuaikan)',
          'Klik ikon ms Excel maka data akan otomatis tersimpan di komputer',
          'Maka akan tampil laporan sebagai berikut :',
          'Lakukan filter pada data tersebut : kolom consultant name',
          'Tampil list nama dokter dan jumlah kunjungan ke dokter tersebut',
          'Kembali ke halaman visit report',
          'Pilih departement name kembali ',
          'Klik ikon ms Excel maka data akan otomatis tersimpan di komputer',
          'Maka akan tampil laporan sebagai berikut :',
          'Lakukan filter pada data tersebut : kolom consultant name',
          'Tampil list nama dokter dan jumlah kunjungan ke dokter tersebut'
        ],
      }
    ]
  },

  'cara-menghitung-kunjungan-pasien-baru-dan-lama-per-dokter': {
    id: 'cara-menghitung-kunjungan-pasien-baru-dan-lama-per-dokter',
    menuKey: 'medical-record',
    submenuId: 'laporan-rj',
    itemTitle: 'Cara Menghitung Kunjungan Pasien Baru dan Lama per Dokter',
    steps: [
      {
        id: 'cara-menghitung-kunjungan-pasien-baru-dan-lama-per-dokter-step-1',
        number: 1,
        title: 'Cara Menghitung Kunjungan Pasien Baru dan Lama per Dokter',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama klik tab reports',
          'Pilih menu ambulatory care pada sisi bilah kiri',
          'Klik menu report',
          'Pilih registration list ',
          'Pilih tanggal registration (from - to) per - 1 hari',
          'Klik ikon ms Excel maka data akan otomatis tersimpan di komputer',
          'Maka akan tampil laporan sebagai berikut :',
          'Lakukan filter pada data tersebut : registration type',
          'Kemudian akan tampil tipe pendaftaran pasien sebagai berikut :',
          {type : 'text', content : 'emergency - IGD : 2 pasien', level: 3 },
          {type : 'text', content : 'general - umum : 29', level: 3 },
          {type : 'text', content : 'new born - bayi baru lahir : 2', level: 3 },
          {type : 'text', content : 'total keseluruhan menjadi : 33', level: 3 },
          'Kembali ke halaman registration list report',
          'Pilih menu bay management report pada sisi bilah kiri',
          'Pilih tanggal (start date - end date)',
          'Klik ikon ms Excel maka data akan otomatis tersimpan di komputer',
          'Maka akan tampil laporan sebagai berikut :',
          'Lakukan filter pada data tersebut : kolom doctor',
          'Tampil list nama dokter dan jumlah kunjungan ke dokter tersebut'
        ],
      }
    ]
  },
  
  'cara-menghitung-pasien-batal': {
    id: 'cara-menghitung-pasien-batal',
    menuKey: 'medical-record',
    submenuId: 'laporan-rj',
    itemTitle: 'Cara Menghitung Pasien Batal',
    steps: [
      {
        id: 'cara-menghitung-pasien-batal-step-1',
        number: 1,
        title: 'Cara Menghitung Pasien Batal',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama klik tab reports',
          'Pilih menu ambulatory care pada sisi bilah kiri',
          'Klik menu reports',
          'Pilih pending appoitment register',
          'Pilih tanggal (from - to)',
          'Pilih departement name',
          'Klik ikon ms Excel maka data akan otomatis tersimpan di komputer',
          'Maka akan tampil laporan sebagai berikut :',
          'Kembali ke halaman pending appoitment register',
          'Pilih departement name',
          'Klik ikon ms Excel maka data akan otomatis tersimpan di komputer',
          'Maka akan tampil laporan sebagai berikut :'
        ],
      }
    ]
  },

  'cara-menghitung-pasien-masuk-hari-rawat-dan-pasien-pulang': {
    id: 'cara-menghitung-pasien-masuk,-hari-rawat-dan-pasien-pulang',
    menuKey: 'medical-record',
    submenuId: 'laporan-rj',
    itemTitle: 'Cara Menghitung Pasien Masuk, Hari Rawat dan Pasien Pulang',
    steps: [
      {
        id: 'cara-menghitung-pasien-masuk,-hari-rawat-dan-pasien-pulang-step-1',
        number: 1,
        title: 'Cara Menghitung Pasien Masuk, Hari Rawat dan Pasien Pulang',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama klik tab reports',
          'Pilih menu inpatient pada sisi bilah kiri',
          'Klik menu Reports',
          'Pilih Hospital census',
          'Pilih tanggal',
          'Klik ikon ms Excel maka data akan otomatis tersimpan di komputer',
          'Maka akan tampil laporan sebagai berikut :',
          {type : 'text', content : 'Keterangan :', level: 3 },
          {type : 'text', content : 'New admission : pasien masuk', level: 3 },
          {type : 'text', content : 'Transfer in : kondisi pasien masih di rawat', level: 3 },
          {type : 'text', content : 'Transfer out : pasien pindah kelas', level: 3 },
          {type : 'text', content : 'Marked for discharge : pasien rencana pulang', level: 3 },
          'Dari laporan hospital census terdapat data hari rawat dan BOR  dari ruang perawatan masing-masing ',
          {type : 'text', content : 'Contoh : perawat kbbl, perawat anak, perawat obsygn sudah sesuai kamar kelas dan BPJS', level: 3 },
          'Berikut data di ruang pelayanan intensif',
          'Berikut data untuk rencana operasi (kamar bedah)',
          'Yang perlu dihitung adalah new admission (pasien masuk), normal discharge dan deaths'
        ],
      }
    ]
  },

  'cara-menghitung-pasien-rawat-jalan-menjadi-pasien-masuk-rawat-inap': {
    id: 'cara-menghitung-pasien-rawat-jalan-menjadi-pasien-masuk-rawat-inap',
    menuKey: 'medical-record',
    submenuId: 'laporan-rj',
    itemTitle: 'Cara Menghitung Pasien Rawat Jalan Menjadi Pasien Masuk Rawat Inap',
    steps: [
      {
        id: 'cara-menghitung-pasien-rawat-jalan-menjadi-pasien-masuk-rawat-inap-step-1',
        number: 1,
        title: 'Cara Menghitung Pasien Rawat Jalan Menjadi Pasien Masuk Rawat Inap',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama klik tab reports',
          'Pilih menu ambulatory care pada sisi bilah kiri',
          'Klik menu reports',
          'Pilih conversion list',
          'Pilih tanggal (from - to)',
          'Klik ikon ms Excel maka data akan otomatis tersimpan di komputer',
          'Maka akan tampil laporan sebagai berikut :'
        ],
      }
    ]
  },

  'cara-menyiapkan-brm-pasien-appointment': {
    id: 'cara-menyiapkan-brm-pasien-appointment',
    menuKey: 'medical-record',
    submenuId: 'laporan-rj',
    itemTitle: 'Cara Menyiapkan BRM Pasien Appointment',
    steps: [
      {
        id: 'cara-menyiapkan-brm-pasien-appointment-step-1',
        number: 1,
        title: 'Cara Menyiapkan BRM Pasien Appointment',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama klik tab reports',
          'Pilih menu ambulatory care pada sisi bilah kiri',
          'Klik menu reports',
          'Pilih appoitment report',
          'Pilih tanggal yang sama  (from - to date)',
          'Klik ikon ms Excel maka data akan otomatis tersimpan di komputer',
          'Maka akan tampil laporan sebagai berikut :',
          'Lakukan filter pada data tersebut : kolom departement name',
          'Contoh : Ingin melihat BRM spesialis anak',
          'Berikut data BRM untuk spesialis anak',
          'Contoh : Ingin melihat BRM spesialis kebidanan dan kandungan',
          'Berikut data BRM untuk spesialis kebidanan dan kandungan'
                  ]
      }
    ]
  },

  'melihat-jumlah-kunjungan-rawat-jalan-per-dokter': {
    id: 'melihat-jumlah-kunjungan-rawat-jalan-per-dokter',
    menuKey: 'medical-record',
    submenuId: 'laporan-rj',
    itemTitle: 'Melihat Jumlah  Kunjungan Rawat Jalan Per Dokter',
    steps: [
      {
        id: 'melihat-jumlah-kunjungan-rawat-jalan-per-dokter-step-1',
        number: 1,
        title: 'Melihat Jumlah  Kunjungan Rawat Jalan Per Dokter',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama klik tab reports',
          'Pilih menu inpatient pada sisi bilah kiri',
          'Klik menu reports',
          'Pilih Daily patient census',
          'Pilih tanggal (from date - to date)',
          'Klik ikon ms Excel maka data akan otomatis tersimpan di komputer',
          'Maka akan tampil laporan sebagai berikut :'
                  ]
      }
    ]
  },

  'cara-melihat-data-kelahiran-bayi': {
    id: 'cara-melihat-data-kelahiran-bayi',
    menuKey: 'medical-record',
    submenuId: 'laporan-rwi',
    itemTitle: 'Cara Melihat Data Kelahiran Bayi',
    steps: [
      {
        id: 'cara-melihat-data-kelahiran-bayi-step-1',
        number: 1,
        title: 'Cara Melihat Data Kelahiran Bayi',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama klik tab reports',
          'Pilih menu inpatient pada sisi bilah kiri',
          'Klik menu reports',
          'Pilih birth notification report',
          'Pilih tanggal (from - to date)',
          'Klik ikon ms Excel maka data akan otomatis tersimpan di komputer',
          'Maka akan tampil laporan sebagai berikut :'
                  ]
      }
    ]
  },

  'cara-melihat-lama-rawat-per-dokter': {
    id: 'cara-melihat-lama-rawat-per-dokter',
    menuKey: 'medical-record',
    submenuId: 'laporan-rwi',
    itemTitle: 'Cara Melihat Lama Rawat per Dokter',
    steps: [
      {
        id: 'cara-melihat-lama-rawat-per-dokter-step-1',
        number: 1,
        title: 'Cara Melihat Lama Rawat per Dokter',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama klik tab reports',
          'Pilih menu inpatient pada sisi bilah kiri',
          'Klik menu reports',
          'Pilih ALOS report',
          'Pilih tanggal (mark for discharge from date - to date)',
          'Pilih departement',
          'Klik ikon ms Excel maka data akan otomatis tersimpan di komputer',
          'Maka akan tampil laporan sebagai berikut :',
          'Lakukan filter pada data tersebut : kolom duration (disesuaikan)',
          'Contoh : memilih duration (2)',
          'Lakukan filter pada kolom : consultant',
          'Contoh : konsultasi ke dr Arief Gunadi'
                  ]
      }
    ]
  },

  'cara-melihat-pasien-keluar-rawat-inap': {
    id: 'cara-melihat-pasien-keluar-rawat-inap',
    menuKey: 'medical-record',
    submenuId: 'laporan-rwi',
    itemTitle: 'Cara Melihat Pasien Keluar Rawat Inap',
    steps: [
      {
        id: 'cara-melihat-pasien-keluar-rawat-inap-step-1',
        number: 1,
        title: 'Cara Melihat Pasien Keluar Rawat Inap',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama klik tab reports',
          'Pilih menu inpatient pada sisi bilah kiri',
          'Klik menu Reports',
          'Pilih Speciality wise discharge type summary ',
          'Pilih tanggal (From date - To date) dalam waktu sehari',
          'Klik ikon ms Excel maka data akan otomatis tersimpan di komputer',
          'Maka akan tampil laporan sebagai berikut :'
                  ]
      }
    ]
  },

  'cara-menghitung-jumlah-total-igd-dan-pasien-naik-rawat-inap-dari-igd-rawat-inap': {
    id: 'cara-menghitung-jumlah-total-igd-dan-pasien-naik-rawat-inap-dari-igd-rawat-inap',
    menuKey: 'medical-record',
    submenuId: 'laporan-rwi',
    itemTitle: 'Cara Menghitung Jumlah Total IGD dan Pasien Naik Rawat Inap dari IGD Rawat Inap',
    steps: [
      {
        id: 'cara-menghitung-jumlah-total-igd-dan-pasien-naik-rawat-inap-dari-igd-rawat-inap-step-1',
        number: 1,
        title: 'Cara Menghitung Jumlah Total IGD dan Pasien Naik Rawat Inap dari IGD Rawat Inap',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama klik tab reports',
          'Pilih menu inpatient pada sisi bilah kiri',
          'Klik menu Reports ',
          'Pilih emergency patient list ',
          'Pilih tanggal (From date - To date) dalam waktu sehari',
          'Klik ikon ms Excel maka data akan otomatis tersimpan di komputer',
          'Maka akan tampil laporan sebagai berikut :',
          'Lakukan filter pada data tersebut : kolom visit number'
                            ]
      }
    ]
  },

  
  'cara-menghitung-lama-rawat-pasien': {
    id: 'cara-menghitung-lama-rawat-pasien',
    menuKey: 'medical-record',
    submenuId: 'laporan-rwi',
    itemTitle: 'Cara Menghitung Lama Rawat Pasien',
    steps: [
      {
        id: 'cara-menghitung-lama-rawat-pasien-step-1',
        number: 1,
        title: 'Cara Menghitung Lama Rawat Pasien',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama klik tab reports',
          'Pilih menu inpatient pada sisi bilah kiri',
          'Klik menu Reports ',
          'Pilih ALOS Report ',
          'Pilih tanggal mark for discharge (From date - To date) dalam waktu sehari',
          'Klik ikon ms Excel maka data akan otomatis tersimpan di komputer',
          'Maka akan tampil laporan sebagai berikut :',
          'Lakukan filter data pada kolom duration'
                            ]
      }
    ]
  },

  'melihat-daftar-pasien-rawat-inap-melihat-kelas-kamar-tt-dan-dokter-yang-merawat-rawat-inap': {
    id: 'melihat-daftar-pasien-rawat-inap-melihat-kelas-kamar-tt-dan-dokter-yang-merawat-rawat-inap',
    menuKey: 'medical-record',
    submenuId: 'laporan-rwi',
    itemTitle: 'Melihat Daftar Pasien Rawat Inap, Melihat Kelas Kamar TT dan Dokter yang Merawat Rawat Inap',
    steps: [
      {
        id: 'melihat-daftar-pasien-rawat-inap-melihat-kelas-kamar-tt-dan-dokter-yang-merawat-rawat-inap-step-1',
        number: 1,
        title: 'Melihat Daftar Pasien Rawat Inap, Melihat Kelas Kamar TT dan Dokter yang Merawat Rawat Inap',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama klik tab reports',
          'Pilih menu inpatient pada sisi bilah kiri',
          'Klik report',
          'Pilih speciality wise admission list',
          'Pilih tanggal (From date - To date) dalam waktu sehari',
          'Klik ikon ms Excel maka data akan otomatis tersimpan di komputer',
          'Maka akan tampil laporan sebagai berikut :'
                            ]
      }
    ]
  },

  'melihat-jumlah-igd-hari-rawat-kelahiran-per-bulan': {
    id: 'melihat-jumlah-igd-hari-rawat-kelahiran-per-bulan',
    menuKey: 'medical-record',
    submenuId: 'laporan-rwi',
    itemTitle: 'Melihat Jumlah IGD, Hari Rawat , Kelahiran per Bulan',
    steps: [
      {
        id: 'melihat-jumlah-igd-hari-rawat-kelahiran-per-bulan-step-1',
        number: 1,
        title: 'Melihat Jumlah IGD, Hari Rawat , Kelahiran per Bulan',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama klik tab reports',
          'Pilih menu inpatient pada sisi bilah kiri',
          'Klik menu reports',
          'Pilih monthly patient census',
          'Pilih tanggal (from date - to date)',
          'Klik ikon ms Excel maka data akan otomatis tersimpan di komputer',
          'Maka akan tampil laporan sebagai berikut :'
                            ]
      }
    ]
  },

  'melihat-jumlah-pasien-pulang': {
    id: 'melihat-jumlah-pasien-pulang',
    menuKey: 'medical-record',
    submenuId: 'laporan-rwi',
    itemTitle: 'Melihat Jumlah Pasien Pulang',
    steps: [
      {
        id: 'melihat-jumlah-pasien-pulang-step-1',
        number: 1,
        title: 'Melihat Jumlah Pasien Pulang',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama klik tab reports',
          'Pilih menu inpatient pada sisi bilah kiri',
          'Klik menu reports',
          'Pilih Discharge Tat Report',
          'Pilih tanggal (discharge from date - to date)',
          'Pilih tanggal (mark for discharge from date - to date)',
          'Klik ikon ms Excel maka data akan otomatis tersimpan di komputer',
          'Maka akan tampil laporan sebagai berikut :'
                            ]
      }
    ]
  },

  'melihat-status-tt-yang-terisi-pasien-yang-masih-dirawat': {
    id: 'melihat-status-tt-yang-terisi-pasien-yang-masih-dirawat',
    menuKey: 'medical-record',
    submenuId: 'laporan-rwi',
    itemTitle: 'Melihat Status TT yang Terisi Pasien yang Masih Dirawat',
    steps: [
      {
        id: 'melihat-status-tt-yang-terisi-pasien-yang-masih-dirawat-step-1',
        number: 1,
        title: 'Melihat Status TT yang Terisi Pasien yang Masih Dirawat',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama klik tab reports',
          'Pilih menu inpatient pada sisi bilah kiri',
          'Klik menu reports',
          'Pilih bed wise status report',
          'Pilih branch (disesuaikan)',
          'Klik ikon ms Excel maka data akan otomatis tersimpan di komputer',
          'Maka akan tampil laporan sebagai berikut :'
                            ]
      }
    ]
  },

  'melihat-angka-persalinan-dan-kelahiran-sc-dan-normal': {
    id: 'melihat-angka-persalinan-dan-kelahiran-sc-dan-normal',
    menuKey: 'medical-record',
    submenuId: 'laporan-rwi',
    itemTitle: 'Melihat Angka Persalinan dan Kelahiran SC dan Normal',
    steps: [
      {
        id: 'melihat-angka-persalinan-dan-kelahiran-sc-dan-normal-step-1',
        number: 1,
        title: 'Melihat Angka Persalinan dan Kelahiran SC dan Normal',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama klik tab reports',
          'Pilih menu inpatient pada sisi bilah kiri',
          'Klik menu reports',
          'Pilih birth notification report',
          'Pilih tanggal (from - to date)',
          'Klik ikon ms Excel maka data akan otomatis tersimpan di komputer',
          'Maka akan tampil laporan sebagai berikut :'
                            ]
      }
    ]
  }

  /* Maul-18/11/2025 */

};