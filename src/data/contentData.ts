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
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_jalan/pendaftaran_rwj_dengan_janji/1.png'
          },
          'Masuk ke halaman Appointment List, cari pasien ',
          'Klik tombol select pada ',
          'Pilih confirm appointment',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_jalan/pendaftaran_rwj_dengan_janji/2.png'
          },
          'Muncul pesan “Appointment confirmed successfuly”',
          'Status pasien akan berubah menjadi Confirmed',
          'Klik select kembali',
          'Klik Create encounter',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_jalan/pendaftaran_rwj_dengan_janji/3.png'
          },
          'Masuk ke halaman create encounter, isi informasi yang diperlukan',
          'Klik tombol create encounter',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_jalan/pendaftaran_rwj_dengan_janji/4.png'
          },
          'Kemudian akan muncul bukti transaksi poliklinik',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_jalan/pendaftaran_rwj_dengan_janji/5.png'
          },
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
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_jalan/pendaftaran_rwj_tanpa_janji/1.png'
          },
          'Masuk ke halaman out patient desk, klik tombol walkin',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_jalan/pendaftaran_rwj_tanpa_janji/2.png'
          },
          'Masuk ke halaman create encounter',
          'Cari nama pasien  untuk menampilkan data pasien walkin',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_jalan/pendaftaran_rwj_tanpa_janji/3.png'
          },
          'Pilih departement, unit, consultant, dan consultant type dari menu dropdown',
          'Select slot di kolom Encouter Slot ',
          'Klik tombol create encounter',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_jalan/pendaftaran_rwj_tanpa_janji/4.png'
          },
          'Kemudian akan muncul bukti transaksi poliklinik',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_jalan/pendaftaran_rwj_tanpa_janji/5.png'
          },
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
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pendaftaran_rawat_inap/1.png'
          },
          'Kemudian pilih menu Admission ',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pendaftaran_rawat_inap/2.png'
          },
          'Masuk ke halaman patient admission, klik new',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pendaftaran_rawat_inap/3.png'
          },
          'Cari nama pasien berdasarkan nama atau no.MRN',
          'Isi informasi selengkap-lengkapnya, kolom dengan tanda (*) wajib diisi',
          'Untuk mengisi kolom Bed No klik icon kaca pembesar ',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pendaftaran_rawat_inap/4.png'
          },
          'Masuk ke halaman bed browser, pilih kamar perawatan pada field ward',
          'Klik tombol search',
          'Tampil pilihan bed yang masih available',
          'Klik pada bed yang akan dipilih',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pendaftaran_rawat_inap/5.png'
          },
          'Klik tombol Block',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pendaftaran_rawat_inap/6.png'
          },
          'Kembali ke halaman patient admission ',
          'Ceklis pada bagian payment methode',
          'Cek suggested advance amount, apakah service amount sudah sesuai, jika sudah klik tombol admit',
          'Tampil notifikasi klik tombol yes',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pendaftaran_rawat_inap/7.png'
          },
          'Maka akan muncul informasi "Patient Admission Saved Successfully"',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pendaftaran_rawat_inap/8.png'
          },
          'Klik tombol print sticker',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pendaftaran_rawat_inap/9.png'
          },
          'Maka akan tampil Sticker Rawat Inap',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pendaftaran_rawat_inap/10.png'
          },
          'Klik tombol Print ',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pendaftaran_rawat_inap/11.png'
          },
          'Maka akan tampil surat pernyataan persetujuan rawat inap',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pendaftaran_rawat_inap/12.png'
          },
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
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pembatalan_rawat_inap/1.png'
          },
          'Pilih menu transactions pada sisi bilah kiri, ',
          'Klik admission list',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pembatalan_rawat_inap/2.png'
          },
          'Cari nama pasien, klik select pilih view admission',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pembatalan_rawat_inap/3.png'
          },
          'Masuk ke halaman data pasien, klik cancel admission',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pembatalan_rawat_inap/4.png'
          },
          'Tampil form admission cancel, isi remarks lalu klik save',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pembatalan_rawat_inap/5.png'
          },
          'Maka akan tampil informasi “Admission cancelled successfully”',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pembatalan_rawat_inap/6.png'
          },
          'Kembali ke halaman admitted patients, maka status pasien tersebut sudah berubah menjadi “Cancelled”',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pembatalan_rawat_inap/7.png'
          },
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
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pendaftaran_pasien_operasi_elektif/1.png'
          },
          'Pilih admission request',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pendaftaran_pasien_operasi_elektif/2.png'
          },
          'Masuk ke halaman admission request browser, klik create',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pendaftaran_pasien_operasi_elektif/3.png'
          },
          'Kemudian cari pasien berdasarkan nama atau no.MRN',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pendaftaran_pasien_operasi_elektif/4.png'
          },
          'Tampil data pasien, isi form selengkap-lengkapnya. Kolom dengan tanda (*) wajib diisi',
          'Lengkapi form pada kolom sebagai berikut :',
          { type: 'text', content: 'Pilih departement, ', level: 3 },
          { type: 'text', content: 'Consulting doctor', level: 3 },
          { type: 'text', content: 'Admission category', level: 3 },
          { type: 'text', content: 'Surgery date', level: 3 },
          { type: 'text', content: 'Est length of stay  ', level: 3 },
          { type: 'text', content: 'Admission type', level: 3 },
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pendaftaran_pasien_operasi_elektif/5.png'
          },
          'Untuk menjadwalkan operasi, pilih tanggal pada halaman OT availability',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pendaftaran_pasien_operasi_elektif/6.png'
          },
          'Tampil form schedule details, pilih procedure kemudian tentukan waktu penjadwalan operasi',
          'Klik tombol schedule',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pendaftaran_pasien_operasi_elektif/7.png'
          },
          'Tampil jadwal operasi yang sudah ditentukan ',
          'Klik create admision request',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pendaftaran_pasien_operasi_elektif/8.png'
          },
          'Maka akan tampil informasi  “Admission request saved successfully”',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/rawat_inap/pendaftaran_pasien_operasi_elektif/9.png'
          },
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
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/one_day_care/1.png'
          },
          'Klik appoitment, pada sisi bilah kiri pilih Daycare patient',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/one_day_care/2.png'
          },
          'Pilih New',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/one_day_care/3.png'
          },
          'Cari nama pasien berdasarkan no. MRN atau nama',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/one_day_care/4.png'
          },
          'Pilih departemen sesuai dengan spesialisasi',
          'Pilih ward sesuai dengan ruang one day care',
          'Pilih consulting doctor sesuai dengan DPJP',
          'Cari bed, klik icon kaca pembesar',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/one_day_care/5.png'
          },
          'Pilih ward, bed status : available bed category : day care Gender (disesuaikan)',
          'Klik tombol search',
          'Kemudian klik bed yang tersedia',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/one_day_care/6.png'
          },
          'Lalu klik tombol block',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/one_day_care/7.png'
          },
          'Jika sudah memilih kamar, klik save',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/one_day_care/8.png'
          },
          'Maka akan tampil informasi “Record saved successfully”',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/one_day_care/9.png'
          },
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
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/instalasi_gawat_darurat/1.png'
          },
          'Pilih menu registration',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/instalasi_gawat_darurat/2.png'
          },
          'Isi form selengkap-lengkapnya, kolom dengan tanda ( * ) wajib diisi',
          'Klik tombol register',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/instalasi_gawat_darurat/3.png'
          },
          'Nomor MRN akan otomatis terbentuk oleh sistem dan akan langsung mencetak sticker untuk pasien ',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/instalasi_gawat_darurat/4.png'
          },
          'Maka akan tampil notifikasi “Registration Saved Successfully”',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/instalasi_gawat_darurat/5.png'
          },
          'Kembali ke emergency, pilih menu emergency patient ',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/instalasi_gawat_darurat/6.png'
          },
          'Data pasien yang sudah diregistrasi akan terlihat di tab emergency patient list',
          'Klik walkin ER',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/instalasi_gawat_darurat/7.png'
          },
          'Cari nama pasien berdasarkan nama atau no MRN',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/instalasi_gawat_darurat/8.png'
          },
          'Lengkapi form pada kolom sebagai berikut :',
          'Pilih service center dengan IGD',
          'Pilih unit dengan IGD',
          'Pilih consultant',
          'Pilih triage category',
          'Klik tombol walkin',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/instalasi_gawat_darurat/9.png'
          },
          'Maka akan tampil notifikasi “The Patient Received Successfully”',
          {
            type: 'image',
            title: 'Contoh Gambar',
            content: '/images/front_office/instalasi_gawat_darurat/10.png'
          },
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
        description: 'Login ke aplikasi SIMRS Hinai',
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
        description: 'Login ke aplikasi SIMRS Hinai',
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
        description: 'Login ke aplikasi SIMRS Hinai',
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
        description: 'Login ke aplikasi SIMRS Hinai',
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
        description: 'Login ke aplikasi SIMRS Hinai',
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
        description: 'Login ke aplikasi SIMRS Hinai',
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
        description: 'Login ke aplikasi SIMRS Hinai',
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
        description: 'Login ke aplikasi SIMRS Hinai',
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
        description: 'Login ke aplikasi SIMRS Hinai',
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
        description: 'Login ke aplikasi SIMRS Hinai',
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
        description: 'Login ke aplikasi SIMRS Hinai',
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
        description: 'Login ke aplikasi SIMRS Hinai',
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
        description: 'Login ke aplikasi SIMRS Hinai',
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
        description: 'Login ke aplikasi SIMRS Hinai',
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
        description: 'Login ke aplikasi SIMRS Hinai',
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
        description: 'Login ke aplikasi SIMRS Hinai',
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
        description: 'Login ke aplikasi SIMRS Hinai',
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
        description: 'Login ke aplikasi SIMRS Hinai',
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

  /* Maul-18/11/2025 */

  /* heru-18/11/2025 */
  'melihat-jadwal-operasi-dari-ruang-ok': {
    id: 'melihat-jadwal-operasi-dari-ruang-ok',
    menuKey: 'perawat',
    submenuId: 'kamar-operasi',
    itemTitle: 'Melihat Jadwal Operasi Dari Ruang OK',
    steps: [
      {
        id: 'melihat-jadwal-operasi-dari-ruang-ok-step-1',
        number: 1,
        title: 'Melihat Jadwal Operasi Dari Ruang OK',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
            'Pada menu Apps, pilih operation theater',
            'Setelah itu pilih view surgery request',
            'Kemudian cek di kolom scheduled date & time',
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

       'proses-pelaksanaan-operasi': {
    id: 'proses-pelaksanaan-operasi',
    menuKey: 'perawat',
    submenuId: 'kamar-operasi',
    itemTitle: 'Proses Pelaksanaan Operasi',
    steps: [
      {
        id: 'proses-pelaksanaan-operasi-step-1',
        number: 1,
        title: 'Proses Pelaksanaan Operasi',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
            'Pada menu Apps, pilih Operation Theater',
            'Setelah itu pilih view surgery request',
            'Masuk ke halaman surgery request browser, kemudian cari nama pasien',
            'Setelah itu klik select pilih modify surgery request',
            'Masuk ke halaman data pasien, lalu cek kembali  prosedur tindakan yang akan dilakukan dan waktu tindakan operasi, apabila ada perubahan dapat langsung diperbaiki',
            'Kemudian klik pada bagian operasi team, pilih category dan employee code name',
            'Jika sudah klik tombol add',
            'Lakukan langkah yang sama hingga semua tim operasi tercatat pada field operation team',
            'Jika sudah selesai klik modify, kemudian tampil notifikasi reason for modification',
            'Pilih reason lalu klik ikon ( + ), setelah itu klik ok',
            'Maka akan tampil informasi “Record saved successfully”',
            'Setelah itu klik tombol back',
            'Kembali ke halaman surgery request browser, cari nama pasien ',
            'Kemudian klik select, pilih validate surgery request',
            'Setelah itu klik tombol validate, jika sudah klik tombol back',
            'Kembali ke halaman surgery request browser, cari nama pasien',
            'Setelah itu klik select, pilih PreAnesthesia Checkup',
            'Masuk ke halaman data pasien, lengkapi informasi selengkap-lengkapnya',
            'Jika sudah klik tombol save,',
            'Kembali ke halaman surgery request browser, cari nama pasien',
            'Lalu klik ikon segitiga hijau "start surgery"',
            'Setelah itu klik Anasthesia record entry',
            'Masuk ke halaman Anasthesia record entry, lengkapi data',
            'Jika sudah klik tombol validate',
            'Maka akan muncul informasi “Anasthesia record for OT request validated”',
            'Setelah itu cari nama pasien, kemudian klik select pilih Operation Request Entry',
            'Masuk ke halaman operation request entry, kemudian cek kembali data tersebut',
            'Jika sudah sesuai klik save generate entry',
            'Maka akan muncul informasi “General operation record entry saved successfully”',
            'Setelah itu klik operation theater, lalu pilih menu view surgery request',
            'Masuk ke halaman view surgery request, cari nama pasien',
            'Kemudian klik select, pilih surgery timer',
            'Masuk ke halaman surgery timer, isi kolom sponge count',
            'Kemudian klik tombol save surgery timer',
            'Maka akan muncul informasi “OT Timer saved successfully” ',
            'Setelah itu klik operation theater, pilih menu view surgery request, ',
            'Kemudian klik ikon segitiga (surgery completed)',
            'Setelah itu klik select, pilih Billing',
            'Masuk ke halaman surgery billing, cek total amount jika sudah sesuai klik tombol validate',
            'Maka data akan tervalidasi',
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

         'transfer-pasien-pasca-operasi-ke-ruang-perawatan': {
    id: 'transfer-pasien-pasca-operasi-ke-ruang-perawatan',
    menuKey: 'perawat',
    submenuId: 'kamar-operasi',
    itemTitle: 'Transfer Pasien Pasca Operasi ke Ruang Perawatan',
    steps: [
      {
        id: 'transfer-pasien-pasca-operasi-ke-ruang-perawatan-step-1',
        number: 1,
        title: 'Transfer Pasien Pasca Operasi ke Ruang Perawatan',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
            'Pada menu Apps pilih Inpatient',
            'Setelah itu pilih menu Nursing Work Bench',
            'Kemudian klik search setelah itu cari nama pasien berdasarkan search criteria',
            'Pada patient status pilih under IP care, kemudian klik tombol search',
            'Jika nama pasien sudah ditemukan lalu klik “Related documents”, pilih patient transactions ',
            'Masuk ke halaman transaction log, untuk mengecek kamar sebelumnya',
            'Kemudian klik tombol back',
            'Kembali ke halaman list pasien, lalu klik search setelah itu search nama pasien berdasarkan search criteria',
            'Pada patient status pilih under IP care, kemudian klik tombol search',
            'Jika nama pasien sudah ditemukan lalu klik administrative, pilih patient transfer',
            'Tampil halaman form pending orders, lalu klik tombol processed',
            'Masuk ke halaman transfer request, lalu klik ikon kaca pembesar pada kolom bed type and no',
            'Kemudian lakukan pembebasan kamar (unblock) pada kamar pasien selanjutnya dengan cara pilih ward sesuai kelas kamar pasien sebelumnya dan pilih status bed "All"',
            'Lalu cari kamar pasien yang akan dilakukan pembebasan atau unblock (kamar pasien sebelumnya)',
            'setelah itu klik unblock',
            'Lalu tampil notifikasi, “Do you want to release selected bed?” Klik tombol Yes',
            'Maka akan muncul informasi “Bed released successfully”',
            'Selanjutnya lakukan proses pemesanan kamar (block pada kamar tersebut) dengan cara pilih ward sesuai dengan status "Available"',
            'Setelah itu pilih kembali bed type tersebut (keterangan sebelumnya unblock) sekarang sudah Available',
            'Lalu klik tombol block',
            'Kemudian kembali ke halaman transfer request, maka akan muncul keterangan kamar yang sudah dipilih yaitu pada kolom Bed type dan no.',
            'Setelah itu lengkapi kolom reason, klik tombol transfer',
            'Maka akan muncul informasi “Transfer request saved successfully”',
            'Selanjutnya, klik menu transactions pada menu sisi bilah kiri lalu pilih transfer request',
            'Lalu akan muncul data pasien sudah berhasil ditransfer dari kamar operasi ke kamar perawatan',
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

    'pengkajian-pra-anasthesi': {
    id: 'pengkajian-pra-anasthesi',
    menuKey: 'perawat',
    submenuId: 'kamar-operasi',
    itemTitle: 'Pengkajian Pra Anasthesi',
    steps: [
      {
        id: 'pengkajian-pra-anasthesi-step-1',
        number: 1,
        title: 'Pengkajian Pra Anasthesi',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
            'Pada menu Apps, pilih operation theater',
            'Setelah itu pilih view surgery request ',
            'Pada halaman surgery request browser, cari nama pasien',
            'Setelah itu klik select, pilih PreAnesthesia Checkup',
            'Masuk ke halaman data pasien, lengkapi informasi selengkap-lengkapnya',
            'Jika sudah klik tombol save',
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

      'tindakan-operasi-dilakukan': {
    id: 'tindakan-operasi-dilakukan',
    menuKey: 'perawat',
    submenuId: 'kamar-operasi',
    itemTitle: 'Tindakan Operasi Dilakukan',
    steps: [
      {
        id: 'tindakan-operasi-dilakukan-step-1',
        number: 1,
        title: 'Tindakan Operasi Dilakukan',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
            'Pada menu Apps, pilih operation theater',
            'Setelah itu pilih view surgery request',
            'Cari nama pasien, lalu klik ikon segitiga untuk melakukan start surgery ',
            'Setelah itu klik Anasthesia record entry',
            'Masuk ke halaman Anasthesia record entry, lengkapi data',
            'Jika sudah klik tombol validate',
            'Maka akan muncul informasi “Anasthesia record for OT request validated” ',
            'Setelah itu cari nama pasien, kemudian klik select pilih Operation Request Entry ',
            'Masuk ke halaman operation request entry, kemudian cek kembali data tersebut',
            'Jika sudah sesuai klik save generate entry',
            'Maka akan muncul informasi “General operation record entry saved successfully”',
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

    'tindakan-operasi-yang-dilakukan-lebih-dari-1-dokter-dan-lebih-dari-1-tindakan-incision-type': {
    id: 'tindakan-operasi-yang-dilakukan-lebih-dari-1-dokter-dan-lebih-dari-1-tindakan-incision-type',
    menuKey: 'perawat',
    submenuId: 'kamar-operasi',
    itemTitle: 'Tindakan Operasi yang Dilakukan Lebih Dari 1 Dokter dan Lebih dari 1 Tindakan (Incision Type)',
    steps: [
      {
        id: 'tindakan-operasi-yang-dilakukan-lebih-dari-1-dokter-dan-lebih-dari-1-tindakan-incision-type-step-1',
        number: 1,
        title: 'Tindakan Operasi yang Dilakukan Lebih Dari 1 Dokter dan Lebih dari 1 Tindakan (Incision Type)',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada menu Apps, pilih Operation Theater',
                  'Setelah itu pilih view surgery request',
                  'Masuk ke halaman surgery request browser, kemudian cari pasien',
                  'Setelah itu klik select pilih modify surgery request',
                  'Masuk ke halaman data pasien',
                  'Tentukan nama tindakan (procedure name)',
                  'Pilih yang akan menjadi tindakan utama (beri tanda centang pada kolom primary procedure)',
                  'Cek kesesuaian data pasien dan tim yang melakukan tindakan dengan mengklik  nama tindakan di setiap barisnya (pada kolom procedur name) dan memastikan nama operator, nama dokter anestesi, nama dr asisten, dan atau dr anak pendamping tindakan persalinan dengan sc sesuai dengan nama dokter tersebut',
                  'Bila semua informasi sudah sesuai, klik tombol validate',
                  'Maka akan tampil informasi “OT Request validated”',
                  'Klik view all',
                  'Lakukan langkah yang sama pada saat pelaksanaan operasi',
                  'PreAnasthesia Checkup (Pengkajian PreAnasthesia)',
                  'Start Surgery (Tindakan operasi dilakukan)',
                  'Anasthesia record entry ',
                  'Operation request entry',
                  'Surgery timer (Validasi jadwal operasi yang diterima petugas kamar operasi)',
                  'Surgery completed (Tindakan operasi selesai dilakukan)',
                  'Selanjutnya yang perlu diperhatikan pada langkah ini adalah ketika akan melakukan validasi transaksi di kamar operasi',
                  'Klik select, pilih billing',
                  'Pilih Incision type',
                  'Pada tindakan yang kedua pilih single 50% Multiple 25%  ',
                  'Karena tindakan yang kedua dinilai 50% dari operasi yang ada',
                  'Pilih single 50% Multiple 25%',
                  'Selanjutnya pada planned procedures tindakan kedua dipilih departement type nya',
                  'Pada contoh ini : tindakan debridement kecil',
                  'Pilih single, karena di tindakan kedua pada incision type sebelumnya memilih single 50%',
                  'Kemudian pada tindakan kamar operasi pilih departemen type : single',
                  'Maka nilai pada kolom unitrate dan amount akan berubah setelah pilih single ',
                  'Perfome procedure tindakannya harus dipilih dengan memberikan tanda centang',
                  'Jika sudah selesai, klik save',
                  'Maka akan tampil informasi “OT Billing saved successfully”',
                  'Setelah itu klik select pilih billing kembali',
                  'Cek data pasien, jika sudah sesuai klik validate',
                  'Maka akan tampil informasi “OT Billing validated successfully”',
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

    'validasi-jadwal-operasi-yang-diterima-petugas-kamar-operasi': {
    id: 'validasi-jadwal-operasi-yang-diterima-petugas-kamar-operasi',
    menuKey: 'perawat',
    submenuId: 'kamar-operasi',
    itemTitle: 'Validasi Jadwal Operasi yang Diterima Petugas Kamar Operasi',
    steps: [
      {
        id: 'validasi-jadwal-operasi-yang-diterima-petugas-kamar-operasi-step-1',
        number: 1,
        title: 'Validasi Jadwal Operasi yang Diterima Petugas Kamar Operasi',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
            'Pada menu Apps, pilih operation theater ',
            'Setelah itu pilih view surgery request ',
            'Masuk ke halaman view surgery request, cari nama pasien',
            'Kemudian klik select, pilih surgery timer',
            'Masuk ke halaman surgery timer, lengkapi informasi dan isi kolom sponge count',
            'Klik tombol save surgery timer',
            'Maka akan muncul informasi “OT Timer saved successfully”',
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
  
    'validasi-transaksi-di-kamar-operasi': {
    id: 'validasi-transaksi-di-kamar-operasi',
    menuKey: 'perawat',
    submenuId: 'kamar-operasi',
    itemTitle: 'Validasi Transaksi Di Kamar Operasi',
    steps: [
      {
        id: 'validasi-transaksi-di-kamar-operasi-step-1',
        number: 1,
        title: 'Validasi Transaksi Di Kamar Operasi',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
            'Pada menu Apps, pilih operation theater',
            'Setelah itu pilih view surgery request',
            'Cari nama pasien',
            'Lalu klik ikon segitiga (surgery completed)',
            'Setelah itu klik select, pilih Billing',
            'Masuk ke halaman surgery billing, cek total amount ',
            'Jika sudah sesuai klik tombol validate',
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

      'prosedur-penerimaan-pasien-di-igd-atau-vk-op-emergency': {
    id: 'prosedur-penerimaan-pasien-di-igd-atau-vk-op-emergency',
    menuKey: 'perawat',
    submenuId: 'perawat-igd',
    itemTitle: 'Prosedur Penerimaan Pasien Di IGD atau VK (OP Emergency)',
    steps: [
      {
        id: 'prosedur-penerimaan-pasien-di-igd-atau-vk-op-emergency-step-1',
        number: 1,
        title: 'Prosedur Penerimaan Pasien Di IGD atau VK (OP Emergency)',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
            'Pada menu Apps pilih Emergency',
            'Kemudian pilih menu Emergency patients',
            'Masuk ke halaman emergency, kemudian klik modify pada kolom triage',
            'Pilih warna triage sesuai penilaian kondisi pasien kemudian klik tombol save',
            'Setelah itu klik select pilih Receive OP ER',
            'Masuk ke halaman emergency patient details, pada kolom service center pilih IGD',
            'Setelah itu pilih Unit dan Consultant (sesuai kebutuhan)',
            'Kemudian klik tombol Receive',
            'Maka akan muncul informasi “The patient is received successfully”',
            'Lalu klik tombol back',
            'Kembali ke halaman emergency, klik tab Emergency OP Patients',
            'Kemudian cari nama pasien, setelah itu klik select lalu pilih patient chart',
            'Masuk ke halaman entry perawat, kemudian pilih menu clinical notes klik ikon tambah ( + )  ',
            'Kemudian select encounter ',
            'Lengkapi form add note isi title dan note',
            'Jika sudah klik tombol save & publish',
            'Tampil notifikasi publish options, klik processed',
            'Tampil notifikasi clinical saved successfully,',
            'Kemudian pilih menu Vitals, lalu klik ikon tambah (+)',
            'Lengkapi informasi pada form vital, jika sudah klik save',
            'Tampil informasi vital saved successfully',
            'Jika sudah selesai klik back to emergency',
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

        'prosedur-rawat-inap-dari-emergency': {
    id: 'prosedur-rawat-inap-dari-emergency',
    menuKey: 'perawat',
    submenuId: 'perawat-igd',
    itemTitle: 'Prosedur Rawat Inap Dari Emergency',
    steps: [
      {
        id: 'prosedur-rawat-inap-dari-emergency-step-1',
        number: 1,
        title: 'Prosedur Rawat Inap Dari Emergency',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
            'Pada menu Apps pilih Keadaan Darurat (Emergency)',
            'Lalu pilih menu Emergency Patients',
            'Masuk ke halaman emergency, kemudian klik tab Pasien OP darurat (emergency)',
            'Cari nama pasien lalu klik select, pilih Mark for IP (Pastikan admission request sudah dilakukan oleh dokter dan seluruh order sudah ditransaksi)',
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

          'pemulangan-dari-op-emergency': {
    id: 'pemulangan-dari-op-emergency',
    menuKey: 'perawat',
    submenuId: 'perawat-igd',
    itemTitle: 'Pemulangan Dari OP Emergency',
    steps: [
      {
        id: 'pemulangan-dari-op-emergency-step-1',
        number: 1,
        title: 'Pemulangan Dari OP Emergency',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
            'Pada menu Apps pilih Emergency',
            'Kemudian pilih menu Emergency patients',
            'Masuk ke halaman emergency, klik tab emergency OP patients',
            'cari nama pasien kemudian klik select pilih patient chart',
            'Setelah itu cek data pasien tersebut pada menu Orders',
            'Jika sudah sesuai kembali ke halaman emergency',
            'Masuk ke halaman emergency, klik tab emergency OP patients ',
            'cari nama pasien, kemudian klik select pilih close visit status',
            'Tampil notifikasi untuk mengisi reason for close, lalu klik tombol yes ',
            'Jika sudah diconfirm untuk close visit status, maka pilhan select pada nama pasien tersebut akan hilang',          {
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

    'proses-input-pemakaian-obat-ruangan': {
    id: 'proses-input-pemakaian-obat-ruangan',
    menuKey: 'perawat',
    submenuId: 'farmasi-keperawatan',
    itemTitle: 'Proses Input Pemakaian Obat Ruangan',
    steps: [
      {
        id: 'proses-input-pemakaian-obat-ruangan-step-1',
        number: 1,
        title: 'Proses Input Pemakaian Obat Ruangan',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
            'Pada menu Apps pilih Rawat Inap (Inpatient)',
            'Kemudian pilih menu Meja Perawat (Nursing work bench)',
            'Cek data pasien, setelah itu pilih menu pharmacy pada sisi bilah kiri',
            'Masuk ke halaman pharmacy, lalu klik menu transactions pada sisi bilah kiri',
            'Pilih issue on demand',
            'Setelah itu klik tombol issue on demand ',
            'Masuk ke halaman issue drugs, cari data pasien berdasarkan nama atau no MRN',
            'Pilih store, cari item name (untuk mencari item obat tambahkan simbol %)',
            'Kemudian klik item obat tersebut',
            'Jika sudah sesuai kemudian klik Confirm Dispense ',
            'Lalu tampil informasi “Drugs dispensed successfully”',          {
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

    'proses-retur-obat-ke-farmasi': {
    id: 'proses-retur-obat-ke-farmasi',
    menuKey: 'perawat',
    submenuId: 'farmasi-keperawatan',
    itemTitle: 'Proses Retur Obat Ke Farmasi',
    steps: [
      {
        id: 'proses-retur-obat-ke-farmasi-step-1',
        number: 1,
        title: 'Proses Retur Obat Ke Farmasi',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada menu Apps pilih rawat inap (Inpatient)',
                  'Kemudian pilih menu Meja Perawat (Nursing work bench) ',
                  'Masuk ke halaman rawat inap, lalu klik search',
                  'Setelah itu cari pasien berdasarkan kriteria pencarian (search criteria)',
                  'Pada patient status pilih Under IP care, klik pencarian (search)',
                  'Kemudian cari data pasien',
                  'Setelah itu pilih menu pharmacy pada sisi bilah kiri, pilih Drug Return request ',
                  'Kemudian klik tombol Create return request',
                  'Masuk ke halaman drug return request, kemudian cari pasien berdasarkan nama atau no. MRN',
                  'Lalu pilih return store, klik tambahkan (add)',
                  'Pada form dispensed items, klik ikon tambah (+)',
                  'Kemudian klik close',
                  'Lalu isi Drug return reason, lalu klik create reason request ',
                  'Setelah itu muncul informasi “Return request saved successfully”',         
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

      'proses-retur-obat-pemakaian-ruangan': {
    id: 'proses-retur-obat-pemakaian-ruangan',
    menuKey: 'perawat',
    submenuId: 'farmasi-keperawatan',
    itemTitle: 'Proses Retur Obat Pemakaian Ruangan',
    steps: [
      {
        id: 'proses-retur-obat-pemakaian-ruangan-step-1',
        number: 1,
        title: 'Proses Retur Obat Pemakaian Ruangan',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps pilih menu Pharmacy pada sisi bilah kiri,',
          'Kemudian pilih menu pengembalian obat langsung (Direct drug return)',
          'Cari pasien berdasarkan nama atau no MRN',
          'Lalu pilih toko retur (store) kemudian klik tombol tambahkan (add)',
          'Lalu klik ikon tambah (+) jika sudah klik tombol tutup (close) ',
          'Kemudian isi alasan pengembalian obat (Reason), lalu klik Simpan (Save) ',
          'Lalu akan tampil informasi “Pengembalian Obat berhasil disimpan"',         
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

        'prosedur-permintaan-barang-ke-gudang-umum': {
    id: 'prosedur-permintaan-barang-ke-gudang-umum',
    menuKey: 'perawat',
    submenuId: 'inventory-keperawatan',
    itemTitle: 'Prosedur Permintaan Barang Ke Gudang Umum',
    steps: [
      {
        id: 'prosedur-permintaan-barang-ke-gudang-umum-step-1',
        number: 1,
        title: 'Prosedur Permintaan Barang Ke Gudang Umum',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
            'Pada menu apps pilih menu inventory, lalu pilih stock indent',
            'Masuk ke halaman Stock indent, klik new ',
            'Pilih request store / location, issue store / location dan isi Remarks',
            'Setelah itu klik Add line items',
            'Tampil form add stock indent line item, isi form selengkapnya dan kolom dengan tanda bintang (*) wajib diisi',
            'Lalu klik tombol Add, maka akan tampil informasi bahwa Added item telah ditambahkan',
            'Jika sudah selesai klik tombol close',
            'Kemudian akan tampil item yang sudah ditambahkan melalui add line item',
            'Lalu klik Send for approval',
            'Maka akan tampil informasi “Stock indent sent for approval',
            'Lalu cek pada kolom approval status, jika keterangannya masih tertunda (pending) klik pilih lalu edit',
            'Cek kembali data tersebut, jika sudah sesuai lalu klik Approval',
            'Maka akan tampil informasi “Stock Indent Approved”',         
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

        'prosedur-permintaan-obat-ruangan-ke-farmasi': {
    id: 'prosedur-permintaan-obat-ruangan-ke-farmasi',
    menuKey: 'perawat',
    submenuId: 'inventory-keperawatan',
    itemTitle: 'Prosedur Permintaan Obat Ruangan Ke Farmasi',
    steps: [
      {
        id: 'prosedur-permintaan-obat-ruangan-ke-farmasi-step-1',
        number: 1,
        title: 'Prosedur Permintaan Obat Ruangan Ke Farmasi',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
            'Pada menu Apps pilih Inventory',
            'Kemudian pilih stock indent pada menu transaction di sisi bilah kiri',
            'Masuk ke halaman stock indent, lalu klik new',
            'Pilih request store / location, issue store / location dan isi Remarks',
            'Setelah itu klik Add line items',
            'Tampil form add stock indent line item, isi form selengkapnya dan kolom dengan tanda bintang (*) wajib diisi',
            'Lalu klik tombol Add, maka akan tampil informasi bahwa Added item telah ditambahkan',
            'Jika sudah selesai klik tombol close',
            'Kemudian akan tampil item yang sudah ditambahkan melalui add line item',
            'Lalu klik Send for approval',
            'Maka akan tampil informasi “Stock indent sent for approval',
            'Lalu cek pada kolom approval status, jika keterangannya masih pending, klik select lalu pilih edit',
            'Cek kembali data tersebut, jika sudah sesuai lalu klik Approval',
            'Maka akan tampil informasi “Stock Indent Approved”',         
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
  
        'prosedur-penerimaan-barang-farmasi-atau-gudang-umum': {
    id: 'prosedur-penerimaan-barang-farmasi-atau-gudang-umum',
    menuKey: 'perawat',
    submenuId: 'inventory-keperawatan',
    itemTitle: 'Prosedur Penerimaan Barang Farmasi atau Gudang Umum',
    steps: [
      {
        id: 'prosedur-penerimaan-barang-farmasi-atau-gudang-umum-step-1',
        number: 1,
        title: 'Prosedur Penerimaan Barang Farmasi atau Gudang Umum',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps pilih Inventory ',
          'Pilih stock receipt ',
          'Cari no.document yang telah di create sebelumnya',
          'Lalu klik edit',
          'Maka akan tampil keterangan item yang telah diterima (stock receipt items)',         
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

    'prosedur-pengeluaran-bmhp': {
    id: 'prosedur-pengeluaran-bmhp',
    menuKey: 'perawat',
    submenuId: 'inventory-keperawatan',
    itemTitle: 'Prosedur Pengeluaran BMHP',
    steps: [
      {
        id: 'prosedur-pengeluaran-bmhp-step-1',
        number: 1,
        title: 'Prosedur Pengeluaran BMHP',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps pilih Inventaris (Inventory)',
          'Lalu pilih menu stock consumption',
          'Masuk ke halaman stock consumption, klik New',
          'Lengkapi informasi yaitu Pilih store, consumption departement, dan isi remarks',
          'Jika sudah klik Add line items',
          'Tampil form add line item, isi form selengkapnya dan kolom dengan tanda bintang (*) wajib diisi',
          'Lalu klik tombol Add, maka akan tampil informasi bahwa Added item telah ditambahkan',
          'Jika sudah selesai klik tombol close',
          'Kemudian akan tampil item yang sudah ditambahkan melalui add line item',
          'Lalu klik Send for approval',
          'Maka akan tampil informasi “Stock consumption sent for approval',
          'Lalu cek keterangan pada kolom approval status, jika keterangannya masih tertunda (pending) klik edit',
          'Cek kembali data tersebut, jika sudah sesuai lalu klik Approval',
          'Maka akan tampil informasi “Stock consumption Approved”',         
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

      'service-order-status-report': {
    id: 'service-order-status-report',
    menuKey: 'perawat',
    submenuId: 'laporan-perawat',
    itemTitle: 'Service Order Status Report',
    steps: [
      {
        id: 'service-order-status-report-step-1',
        number: 1,
        title: 'Service Order Status Report',
        description: 'Tujuan : Untuk pencocokan jumlah kunjungan rawat jalan',
        details: [
          'Pada halaman utama klik Report ',
          'Pada sisi bilah kiri pilih menu Billing',
          'Klik Reports',
          'Pilih service order status report',
          'Pada halaman service order status report pilih tanggal pada pilihan from - to date (disesuaikan)',
          'Untuk melihat laporan klik ikon excel (disarankan)',
          'Maka akan tampilan laporan sebagai berikut :',
          'Lakukan filtering dengan melakukan blocking pada judul kolom (kolom A - kolom P)',
          'Klik tombol filter',
          'Pilih visit type : OP',
          'Klik OK',
          'Pada kolom P yang berjudul status order terdapat beberapa status kategori yaitu:',
          'Order		 : Apabila masih di sisi user yang melakukan permintaan',
          'Processed	 : Apabila sudah dilakukan finance clearance/settle invoice (ada invoice no)',
          'In progress : Apabila order dalam proses pengerjaan oleh unit lain dan belum selesai (certified)',
          'Lakukan pemilahan untuk kolom-kolom yang diperlukan, antara lain :',
          {type : 'text', content : '1. MRN', level: 2 },
          {type : 'text', content : '2. Patient name', level: 2 },
          {type : 'text', content : '3. Visit type', level: 2 },
          {type : 'text', content : '4. Order Number', level: 2 },
          {type : 'text', content : '5. Order type', level: 2 },
          {type : 'text', content : '6. Order item', level: 2 },
          {type : 'text', content : '7. Ordered from', level: 2 },
          {type : 'text', content : '8. Requested by', level: 2 },
          {type : 'text', content : '9. Employee name', level: 2 },
          {type : 'text', content : '10. Ordered date', level: 2 },
          {type : 'text', content : '11. Processed date', level: 2 },
          {type : 'text', content : '12. Invoice number', level: 2 },
          {type : 'text', content : '13. Order status', level: 2 },
          'Copy dan simpan file dengan diberi nama dokter terkait dan tanggal report dilakukan',
          'Kirim file melalui email / whatsapp dengan hasil print',         
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

        'cocokan-transaksi-dokter-di-rawat-jalan': {
    id: 'cocokan-transaksi-dokter-di-rawat-jalan',
    menuKey: 'perawat',
    submenuId: 'laporan-perawat',
    itemTitle: 'Cocokan Transaksi Dokter Di Rawat Jalan',
    steps: [
      {
        id: 'cocokan-transaksi-dokter-di-rawat-jalan-step-1',
        number: 1,
        title: 'Cocokan Transaksi Dokter Di Rawat Jalan',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama klik Report',
          'Pilih menu Inpatient',
          'Klik menu report',
          'Pilih Processed service order',
          'Pilih tanggal order (from - to date) ',
          'Untuk processed date (from - to date) dilakukan clean / dikosongkan',
          'Setelah dilakukan clean tanggal proses maka akan tampil sebagai berikut',
          'Untuk melihat laporan klik ikon excel (disarankan)',
          'Maka akan tampil laporan sebagai berikut :',
          'Blok header excel dan pilih auto filter',
          'Filter list dengan visit type : OP',
          'Pilih nama consultant (dokter) yang diinginkan',
          'Filter nama dokter',
          'Klik OK',
          'Setelah dipilih nama yang diinginkan, block semua field dan dicopy ke new sheet',
          'Save as new file',
          'Kirim file melalui email / whatsapp dokter atau diprint dan diserahkan ke dokter setelah selesai praktek',

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
  /* heru-18/11/2025 */


  /* Maul-19/11/2025 */
  'dokter-di-rawat-jalan': {
    id: 'dokter-di-rawat-jalan',
    menuKey: 'dokter',
    submenuId: 'dokter-rawat-jalan',
    itemTitle: 'Dokter di Rawat Jalan',
    steps: [
      {
        id: 'dokter-di-rawat-jalan-step-1',
        number: 1,
        title: 'Dokter di Rawat Jalan',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pada menu Apps, Pilih Patient Care ',
          'Pilih menu Patient Chart ',
          'Masuk ke halaman Consultation Desk, pilih tab Out Patient',
          'Pilih pasien di tab Pending, lalu klik tanda panah ke bawah di sisi kanan dan pilih Start consultation',
          'Masuk ke halaman entry dokter, kemudian klik tombol Create Consultation Note, pilih New ',
          'Masuk ke halaman Consultation Note, kemudian isi Chief complaint, Social History, Past medical history dan untuk isi Allergy record klik tombol Add ',
          'Tampil form Add allergy, isi informasi lalu klik tombol save ',
          'Kembali ke halaman Consultation Note, kemudian isi Vital sign details dengan memilih tombol Add pada sisi sebelah kanan',
          'Tampil form Vital sign details, isi informasi lalu klik tombol Save ',
          'Kembali ke halaman Consultation Note, kemudian isi Encounter diagnosis dengan memilih tombol Add pada sisi sebelah kanan layar (Pengisian diagnosa sesuai dengan penamaan pada ICD 10)',
          'Tampil form Add diagnosis, cari diagnosa sesuai dengan penamaan pada ICD 10',
          'Setelah itu pilih penggolongan diagnosa berdasarkan primary, secondary, comorbid atau complication',
          'Pilih diagnosa yang dibuat apakah sebagai diagnosa awal/akhir/diagnosa banding',
          'Setelah informasi diagnosa yang dipilih sesuai, klik save',
          'Kembali ke halaman Consultation Note, Kemudian Isi kolom Notes dengan :',
          {type : 'text', content : 'Title : CPPT', level: 3 } ,
	        {type : 'text', content : 'Section mapping : medis', level: 3 }  ,
	        {type : 'text', content : 'Note : informasi klinis pasien', level: 3 }  ,
	        {type : 'text', content : 'Klik tombol save', level: 3 }  ,
          'Kembali ke halaman Consultation Note, pilih widget Order, klik tombol Add, ',
          'Tampil halaman Order',
          'Lakukan pencarian tindakan yang akan diorder (sesuai dengan jenis pelayanan dan kategori dokter yang melakukan input)',
          'Jika sudah sesuai untuk tindakan order yang diperlukan, klik checklist ',
          'Pilih lokasi pelayanan sesuai dengan lokasi pelayanan dilakukan (poli spesialis/eksekutif)',
          'Jika informasi sudah sesuai, klik tombol done',
          'Kembali ke halaman Consultation note, pada kolom prescription klik add',
          'Masuk ke halaman Drug Order, kemudian pilih store (sesuai dengan sponsor pasien) yaitu :',
          {type : 'text', content : 'Store Farmasi executive untuk pasien non BPJS non Inhealth', level: 3 }  ,
          {type : 'text', content : 'Store farmasi inhealth   untuk pasien Inhealth', level: 3 }  ,
          {type : 'text', content : 'Store reguler untuk pasien BPJS', level: 3 }  ,
          'Klik sediaan obat yang akan diorder (Prescription atau mixture disesuaikan)',
	        {type : 'text', content : 'Prescription untuk sediaan obat jadi', level: 3 }  ,
	        {type : 'text', content : 'Add mixture untuk sediaan obat racik', level: 3 }  ,
          'Lakukan pencarian obat yang akan diorder dengan stok yang masih tersedia (informasi stok ada di kanan nama obat yang dipilih)',
          'Kemudian checklist untuk obat yang  akan diorder',
          'Apabila ketersediaan obat tersebut kosong, akan ada notifikasi merah pada bawah layar',
          'Klik Add instructions',
          'Kemudian muncul form instruction builder, ',
          'Pilih informasi yang diperlukan pada kolom yang tersedia atau ketik informasi instruksi obat yang diberikan (free text) ',
          'Lalu klik tombol select di sudut kanan layar',
          'Kembali ke halaman Drug Order, ',
          'Cek data kembali jika sudah sesuai klik tombol Add Drugs',
          'Lalu data yang sudah diadd drugs akan muncul pada halaman Prescription Order,  Kemudian klik Done',
          'Kembali ke halaman Consultation Note, jika data sudah lengkap kemudian klik Save ',
          'Akan muncul pesan “Record saved successfully”',
          'Kembali ke halaman Data dokter, kemudian data dari setiap kolom widget sudah lengkap lalu klik back to dashboard',
          'Kembali ke halaman Consultation Desk, lalu perhatikan di tab Inprogress nama pasien tersebut sudah pindah di tab In Progress, kemudian klik tanda panah di sisi kanan lalu pilih Complete Consultation ',
          'Setelah itu nama pasien tersebut sudah berada di tab Completed',
        ],
      }
    ]
  },

  'cross-consultation': {
    id: 'cross-consultation',
    menuKey: 'dokter',
    submenuId: 'dokter-rawat-jalan',
    itemTitle: 'Cross Consultation',
    steps: [
      {
        id: 'cross-consultation-step-1',
        number: 1,
        title: 'Cross Consultation',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pada menu Apps, Pilih Patient Care ',
          'Pilih menu Patient Chart ',
          'Masuk ke halaman Consultion Desk, pilih tab Our Patient',
          'Kemudian pilih pasien lalu klik tanda panah ke bawah di sisi kanan dan pilih Cross consultation',
          'Masuk ke halaman entry dokter, kemudian klik tombol Cross Consultation ',
          'Masuk ke halaman cross consultation request, Isi form, kolom dengan tanda ( * ) wajib diisi',
          'Klik tombol save',
          'Muncul notifikasi “Cross Consultation saved successfully”',
          'Kemudian klik tombol Close'
        ],
      }
    ]
  },

  'request-surgery': {
    id: 'request-surgery',
    menuKey: 'dokter',
    submenuId: 'dokter-rawat-jalan',
    itemTitle: 'Request Surgery',
    steps: [
      {
        id: 'request-surgery-step-1',
        number: 1,
        title: 'Request Surgery',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pada menu Apps, Pilih Operation Theater',
          'Pilih menu Surgery Request',
          'Masuk ke halaman Surgery Request, cari nama pasien lalu isi informasi yang diperlukan',
          'Pada saat mengisi kolom Operation Schedule, klik Operation Date',
          'Tampil halaman OT Scheduling, klik ruangan dan waktu yang akan dijadwalkan',
          'Setelah itu tampil form Event Details, isi informasi lalu klik tombol Schedule',
          'Kembali ke halaman OT Scheduling, tampil jadwal yang sudah ditentukan',
          'Kemudian ke halaman surgery request, informasi di Operation Scheduling akan terisi setelah itu klik tombol Request',
          'Muncul informasi “Record saved successfully”',
          'Klik tombol back kemudian masuk ke halaman Surgery request browser, tampil data pasien secara details'
        ],
      }
    ]
  },

  'pembuatan-resep-racik': {
    id: 'pembuatan-resep-racik',
    menuKey: 'dokter',
    submenuId: 'dokter-rawat-jalan',
    itemTitle: 'Pembuatan Resep Racik',
    steps: [
      {
        id: 'pembuatan-resep-racik-step-1',
        number: 1,
        title: 'Pembuatan Resep Racik',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pada halaman utama dokter, klik salah satu nama pasien',
          'Kemudian pilih view EHR',
          'Pilih widget medications, kemudian klik ikon tambah (+)',
          'Pilih store : Farmasi (disesuaikan)',
          'Klik add mixture ',
          'Isi kolom combinational drug order',
          'Lalu klik add instruction',
          'Lengkapi form instruction, lalu klik mixture instruction',
          'Kemudian klik Add',
          'Maka akan tampil data obat yang sudah ditambahkan sebelumnya',
          'Cari nama item obat pada kolom search',
          'Kemudian akan tampil daftar order sesuai kata pencarian',
          'Beri tanda centang item order yang dipilih',
          'Klik add mixture',
          'Kemudian klik save',
          'Maka akan tampil notifikasi “Drug order saved” '
        ],
      }
    ]
  },

  'pembuatan-resep-paten': {
    id: 'pembuatan-resep-paten',
    menuKey: 'dokter',
    submenuId: 'dokter-rawat-jalan',
    itemTitle: 'Pembuatan Resep Paten',
    steps: [
      {
        id: 'pembuatan-resep-paten-step-1',
        number: 1,
        title: 'Pembuatan Resep Paten',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pada halaman utama dokter, klik salah satu nama pasien',
          'Kemudian pilih view EHR',
          'Pilih widget medications, kemudian klik ikon tambah (+)',
          'Pilih store : Farmasi (disesuaikan)',
          'Klik prescription',
          'Cari nama item obat pada kolom search',
          'Kemudian akan tampil daftar order sesuai kata pencarian',
          'Beri tanda centang item order yang dipilih',
          'Klik add instruction',
          'Lengkapi form instruction',
          'Klik tombol select',
          'Jika sudah selesai klik Add drugs ',
          'Maka akan tampil data obat yang sudah dipilih',
          'Lalu klik done'
        ],
      }
    ]
  },

  'dokter-admission-request': {
    id: 'dokter-admission-request',
    menuKey: 'dokter',
    submenuId: 'dokter-rawat-jalan',
    itemTitle: 'Dokter Admission Request',
    steps: [
      {
        id: 'dokter-admission-request-step-1',
        number: 1,
        title: 'Dokter Admission Request',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pada menu Apps, Pilih Patient Care',
          'Pilih menu Patient Chart ',
          'Masuk ke halaman Consultation Desk, pilih tab Our Patient',
          'Kemudian pilih pasien di tab Inprogress, lalu klik tanda panah ke bawah di sisi kanan dan pilih Admission Request',
          'Masuk ke halaman entry dokter, lalu pilih tab request setelah itu klik Admission request',
          'Masuk ke halaman Admission request, isi informasi yang diperlukan setelah itu klik tombol Create admission request',
          'Muncul notifikasi Select open orders, lalu klik Yes',
          'Kemudian klik Create admission request kembali, lalu muncul pesan “Admission request saved successfully”',
          'Kembali ke halaman Consultation Desk, Kemudian pilih pasien tersebut di tab Inprogress, lalu klik tanda panah ke bawah di sisi kanan dan pilih Complete consultation ',
          'Lalu muncul informasi “Consultation Completed” dan pasien tersebut sudah pindah di tab completed'
        ],
      }
    ]
  },

  'mendaftarkan-pasien-perjanjian-di-poli-dokter': {
    id: 'mendaftarkan-pasien-perjanjian-di-poli-dokter',
    menuKey: 'dokter',
    submenuId: 'dokter-rawat-jalan',
    itemTitle: 'Mendaftarkan Pasien Perjanjian di Poli Dokter',
    steps: [
      {
        id: 'mendaftarkan-pasien-perjanjian-di-poli-dokter-step-1',
        number: 1,
        title: 'Mendaftarkan Pasien Perjanjian di Poli Dokter',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pada menu Apps, Pilih Patient Care',
          'Pilih menu Patient Chart',
          'Masuk ke halaman Consultation Desk, pilih tab Our Patient',
          'Kemudian pilih pasien di tab Pending, lalu klik tanda panah ke bawah di sisi kanan dan pilih Start consultation',
          'Masuk ke halaman data dokter, pilih tab Appointment',
          'Tampil form Appointment kemudian pilih tanggal',
          'Pilih waktu untuk penjadwalan, kemudian isi Remarks untuk keterangan lalu klik tombol Save',
          'Muncul informasi “Appointments saved successfully”',
        ],
      }
    ]
  },

  'resume-rawat-jalan-encounter-summary': {
    id: 'resume-rawat-jalan-encounter-summary',
    menuKey: 'dokter',
    submenuId: 'dokter-rawat-jalan',
    itemTitle: 'Resume Rawat Jalan(Encounter Summary)',
    steps: [
      {
        id: 'resume-rawat-jalan-encounter-summary-step-1',
        number: 1,
        title: 'Resume Rawat Jalan(Encounter Summary)',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Klik menu Apps, pilih patient care',
          'Pilih patient chart',
          'Tampil halaman consultation desk',
          'Lakukan pencarian nama pasien',
          'Berikut tampilan EMR Hinai',
          'Isi data widget EMR secara lengkap',
          'Klik menu summary,  pilih encounter summary',
          'Tampil halaman encounter',
          'Pilih encounter yang akan diprint',
          'Ceklis atau pilih encounter yang ingin dicetak ',
          'Klik tombol print',
          'Maka akan tampil resume rawat jalan (encounter summary) sebagai berikut :'
        ],
      }
    ]
  },

  'pasien-di-rawat-inap-dokter-ruangan': {
    id: 'pasien-di-rawat-inap-dokter-ruangan',
    menuKey: 'dokter',
    submenuId: 'dokter-rawat-inap',
    itemTitle: 'Pasien di Rawat Inap (Dokter Ruangan)',
    steps: [
      {
        id: 'pasien-di-rawat-inap-dokter-ruangan-step-1',
        number: 1,
        title: 'Pasien di Rawat Inap (Dokter Ruangan)',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pada menu Apps, Pilih Patient Care',
          'Pilih menu Patient Chart',
          'Masuk ke halaman Consultation Desk, pilih tab Inpatient',
          'Kemudian pilih pasien, lalu klik tanda panah ke bawah di sisi kanan lalu Pilih View EHR',
          'Masuk ke halaman entry dokter, kemudian pilih Clinical Notes dan klik tombol tambah',
          'Tampil halaman Add note, isi form setelah itu klik tombol save & publish',
          'Tampil publish options, klik tombol processed',
          'Kembali ke halaman Entry Dokter, lalu pilih menu Orders klik tombol Tambah',
          'Masuk ke halaman Add order, lalu cari enter service name ',
          'Jika sudah klik tombol save',
          'Kembali ke halaman Entry Dokter, lalu pilih menu Medications klik tambah',
          'Pilih prescription, klik tombol Add',
          'Tampil halaman Drug Orders, lalu cari Enter drug name',
          'Klik add instructions',
          'Isi informasi yang diperlukan, jika sudah klik tombol select',
          'Kembali ke halaman Drug Orders, jika informasi sudah sesuai klik tombol Add Drugs',
          'Lalu klik tombol save ',
          'Maka akan tampil informasi “Drug Orders Saved”'
        ],
      }
    ]
  },

  'pasien-rawat-jalan-igd-vk': {
    id: 'pasien-rawat-jalan-igd-vk',
    menuKey: 'dokter',
    submenuId: 'dokter-igd',
    itemTitle: 'Pasien Rawat Jalan IGD / VK',
    steps: [
      {
        id: 'pasien-rawat-jalan-igd-vk-step-1',
        number: 1,
        title: 'Pasien Rawat Jalan IGD / VK',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pada menu Apps, Pilih Emergency',
          'Pilih Emergency Patiens',
          'Masuk ke halaman Emergency patients, lalu pilih tab Emergency patients list ',
          'Klik Modify pada kolom Triage',
          'Pilih Triage category, klik Save',
          'Kembali ke menu halaman Emergency patients, klik select pada kolom action',
          'Pilih Receive OP ER',
          'Masuk ke halaman Emergency Patient Details, kemudian isi informasi yang diperlukan (Consultant dan Service Center)',
          'Klik tombol Receive',
          'Tampil informasi “The patients is received successfully”',
          'Kembali ke halaman Emergency patient details, kemudian pilih tab Emergency OP Patients',
          'Cari pasien kemudian klik select pada kolom action, lalu pilih Patient chart',
          'Masuk ke halaman patient chart, lalu klik Create Consultation Note pilih New',
          'Masuk ke halaman Consultation Note, kemudian isi Chief complaint, Social History, Past medical history',
          'Kembali ke halaman Consultation Note, kemudian isi Vital sign details dengan memilih tombol Add pada sisi sebelah kanan',
          'Kemudian klik add pada encounter diagnosis',
          'Tampil form Add diagnosis, isi informasi lalu klik tombol Done',
          'Kembali ke halaman Consultation Note, Kemudian isi Order Klik tombol Add pada sisi sebelah kanan',
          'Tampil form Order, cari selected order kemudian checked untuk data order yang dibutuhkan, kemudian pilih konsultasi dokter setelah itu klik tombol Done',
          'Kembali ke halaman Consultation Note, Kemudian isi Prescription klik tombol Add pada sisi sebelah kanan',
          'Tampil form Prescription, kemudian klik tombol Add (+) pada menu Prescription',
          'Masuk ke halaman Drug Order, kemudian Enter drug name to search cari drug order kemudian checked untuk data drug order yang dibutuhkan',
          'Klik Add instructions',
          'Kemudian muncul form instruction builder pilih informasi yang diperlukan lalu klik tombol select',
          'Kembali ke halaman Drug Order, cek data kembali jika sudah sesuai klik tombol Add Drugs',
          'Lalu data yang sudah diadd drugs akan muncul pada halaman Prescription Order',
          'Kemudian klik Done',
          'Kembali ke halaman Consultation Note, jika data sudah lengkap kemudian klik Save Consultation Note',
          'Akan muncul pesan “Record saved successfully”',
          'Kembali ke halaman Entry dokter, pilih Back to emergency',
          'Cari pasien kemudian klik select pada kolom action, lalu pilih Close Visit Status',
          'Tampil notifikasi close visit status, pilih Reason for close, klik tombol Yes',
          'Kembali ke halaman Emergency OP Patients, cari pasien kemudian tulisan select di kolom action akan menghilang'
        ],
      }
    ]
  },

  'memindahkan-pasien-emergency-menjadi-ip-emergency': {
    id: 'memindahkan-pasien-emergency-menjadi-ip-emergency',
    menuKey: 'dokter',
    submenuId: 'dokter-igd',
    itemTitle: 'Memindahkan Pasien emergency Menjadi IP emergency',
    steps: [
      {
        id: 'memindahkan-pasien-emergency-menjadi-ip-emergency-step-1',
        number: 1,
        title: 'Memindahkan Pasien emergency Menjadi IP emergency',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pada menu Apps, pilih menu emergency',
          'Pilih emergency patients ',
          'Pada emergency patient list, search patient lalu klik select',
          'Pilih Receive IP ER',
          'Pilih service center : IGD Unit : Dokter umum',
          'Pilih Bed yang tersedia',
          'Klik Receive',
          'Maka akan tampil informasi “The patient is receive successfully”',
          'Klik Back',
          'Pilih tab emergency IP patients, klik select',
          'Pilih patient chart',
          'Pilih widget orders, lalu klik ikon tambah (+) ',
          'Cari nama item obat pada kolom search',
          'Kemudian akan tampil daftar order sesuai kata pencarian',
          'Beri tanda centang item order yang dipilih',
          'Kemudian klik save ',
          'Maka akan muncul notifikasi “Service order saved successfully”',
          'Klik back to emergency'
        ],
      }
    ]
  },

  'merencanakan-pasien-di-rawat-dari-ip-emergency': {
    id: 'merencanakan-pasien-di-rawat-dari-ip-emergency',
    menuKey: 'dokter',
    submenuId: 'dokter-igd',
    itemTitle: 'Merencanakan Pasien di Rawat Dari IP Emergency',
    steps: [
      {
        id: 'merencanakan-pasien-di-rawat-dari-ip-emergency-step-1',
        number: 1,
        title: 'Merencanakan Pasien di Rawat Dari IP Emergency',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pada menu Apps, pilih menu emergency',
          'Pilih emergency patients',
          'Pilih tab Emergency IP patients',
          'Klik select, pilih admission request',
          'Lengkapi form admission request, kolom dengan tanda bintang (*) wajib diisi',
          'Pilih departement, consulting doctor, admission category, est length of stay dan admission type',
          'Klik create admission request',
          'Maka akan tampil informasi “Admission Request saved successfully” ',
          'Kembali ke halaman Emergency',
          'Pilih tab Emergency IP patients, klik select',
          'Pilih Mark for IP',
          'Maka akan tampil informasi “Patient is Mark for IP”'
        ],
      }
    ]
  },

  'pengisian-laporan-operasi-operation-note': {
    id: 'pengisian-laporan-operasi-operation-note',
    menuKey: 'dokter',
    submenuId: 'dokter-igd',
    itemTitle: 'Pengisian Laporan Operasi(Operation Note)',
    steps: [
      {
        id: 'pengisian-laporan-operasi-operation-note-step-1',
        number: 1,
        title: 'Pengisian Laporan Operasi(Operation Note)',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Klik Apps, pilih Operation Theater',
          'Pilih view surgery request',
          'Cari nama pasien',
          'Klik select, pilih Operation Record Entry',
          'Masuk ke halaman operation record entry',
          'Pilih menu operation note',
          'Pilih form names dengan Laporan operasi (operation notes)',
          'Klik tombol confirm form name untuk konfirmasi pada nama form yang dipilih',
          'Maka akan tampil notifikasi "Form saved successfully"',
          'Selanjutnya pengisian data pada kolom-kolom laporan operasi (operation notes) oleh dokter operator',
          'Jika data-data di kolom telah diisi lengkap ',
          'Klik Submit agar form laporan operasi dapat disimpan dan diprint',
          'Klik ikon print untuk cetak ',
          'Maka akan tampil laporan sebagai berikut :',
          'Hal-hal yang perlu diperhatikan : ',
          {type : 'text', content : 'Data pasien operasi harus diisi dan diperiksa pada', level: 3 },
          {type : 'text', content : 'Operation Record Entry', level: 3 },
          {type : 'text', content : 'Anesthesia Record Entry', level: 3 },
          {type : 'text', content : 'Operation Record Entry', level: 3 },
          {type : 'text', content : 'Anesthesia Record Entry', level: 3 },
          {type : 'text', content : 'Operation Record Entry', level: 3 },
          {type : 'text', content : 'Operation Record Entry', level: 3 }
        ],
      }
    ]
  },


  /* Maul-19/11/2025 */

  /* heru-19/11/2025 */
  'terima-order': {
    id: 'terima-order',
    menuKey: 'radiologi',
    submenuId: 'terima-order',
    itemTitle: 'Terima Order',
    steps: [
      {
        id: 'terima-order-step-1',
        number: 1,
        title: 'Terima Order',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada menu Apps, pilih menu RIS',
                  'Lalu pilih Service Center Manager pada sisi bilah kiri',
                  'Masuk ke halaman service center manager, kemudian pilih tanggal',
                  'Pilih order status : Order  Lalu klik search',
                  'Cari nama pasien kemudian klik icon berwarna biru, pilih accept patient',
                  'Lalu pilih order status : Checked in  setelah itu klik tombol search',
                  'Maka akan muncul nama pasien yang sebelumnya telah di accept,',
                  'Klik icon berwarna biru lalu pilih start test',
                  'Setelah itu pilih order status : In-progress',
                  'Klik tombol search',
                  'Klik icon berwarna biru, pilih Fill report',
                  'Masuk ke halaman data pasien, isi field catch no',
                  'Klik tombol save',
                  'Lalu muncul sebuah form, lengkapi performing employee dan rendering employee',
                  'Jika sudah memilih employee tersebut kemudian klik ikon tambah berwarna hijau',
                  'Setelah itu klik tombol ok',
                  'Lalu akan muncul informasi “Report is saved”',
                  'Setelah itu klik tombol close',
                  'Kembali ke halaman service center manager, kemudian klik upload (masih pada pasien yang sama)',
                  'Kemudian tampil form upload details, isi keterangan pada field document name',
                  'Kemudian klik tombol add untuk memilih foto',
                  'Jika sudah klik tombol upload',
                  'Jika foto sudah terupload, klik save',
                  'Lalu klik tombol close',
                  'Kembali ke halaman service center manager, kemudian klik icon berwarna biru pilih Fill report kembali (masih pada pasien yang sama)',
                  'Masuk ke halaman data pasien, lalu klik Fill report',
                  'Tampil form untuk catatan dokter, klik modify ',
                  'Lengkapi catatan, setelah itu klik save',
                  'Kembali ke halaman data pasien, lalu klik tombol close ',

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

    'terima-order-pasien-eksternal': {
    id: 'terima-order-pasien-eksternal',
    menuKey: 'radiologi',
    submenuId: 'terima-order-pasien-eksternal',
    itemTitle: 'Terima Order Pasien Eksternal',
    steps: [
      {
        id: 'terima-order-pasien-eksternal-step-1',
        number: 1,
        title: 'Terima Order Pasien Eksternal',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, pilih patient care',
          'Pilih menu CPOE Ordering',
          'Cari pasien berdasarkan informasi nama atau no MRN',
          'Pilih departement dengan : Radiologi',
          'Beri tanda centang pada kolom Eksternal Consultant',
          'Isi kolom Consulting Doctor',
          'Klik New orders',
          'Tampil form service order',
          'Departement dan service center pilih : All',
          'Cari service name : disesuaikan',
          'Tanggal order : disesuaikan dengan tanggal order pasein',
          'Setelah tampil item yang dicari pilih item tersebut',
          'Klik Add service',
          'Maka akan tampil data yang telah ditambahkan service pada halaman CPOE entry',
          'Setelah itu klik save',
          'Maka akan tampil informasi “Record is saved successfully”',
          'Untuk melihat order radiologi pasien eksternal kembali ke menu Apps',
          'Pilih RIS',
          'Pada sisi bilah kiri klik menu RIS',
          'Pilih Service center manager',
          'Pada halaman service center manager ',
          'Pilih order status : Ordered',
          'Tanggal order : disesuaikan',
          'Klik search',
          'Maka akan tampil data order pasien eksternal',
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

              'cetak-hasil-radiologi': {
    id: 'cetak-hasil-radiologi',
    menuKey: 'radiologi',
    submenuId: 'cetak-hasil-radiologi',
    itemTitle: 'Cetak Hasil Radiologi',
    steps: [
      {
        id: 'cetak-hasil-radiologi-step-1',
        number: 1,
        title: 'Cetak Hasil Radiologi',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, pilih menu RIS',
          'Lalu pilih Service Center Manager pada sisi bilah kiri',
          'Masuk ke halaman service center manager, isi field ordered to location : Radiologi',
          'Pilih order status : Processed kemudian klik tombol search',
          'Cari nama pasien, kemudian klik ikon biru pilih Fill report',
          'Masuk ke halaman data pasien, lalu klik view report',
          'Lalu akan tampil Report seperti berikut:',
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

    'terima-order-lab': {
    id: 'terima-order-lab',
    menuKey: 'laboratorium',
    submenuId: 'terima-order-lab',
    itemTitle: 'Terima Order Lab',
    steps: [
      {
        id: 'terima-order-lab-step-1',
        number: 1,
        title: 'Terima Order Lab',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps pilih menu Laboratory',
          'Kemudian pilih menu Collect Sample',
          'Cari pasien berdasarkan no.MRN, kemudian pilih status : Ordered',
          'Pilih tanggal kemudian klik search',
          'Setelah itu klik Generate',
          'Kemudian tampil form print barcode labels, jika ingin mencetak klik print jika tidak klik close',
          'Setelah itu pilih status : Sample generated klik search',
          'Lalu klik collect',
          'Maka akan muncul informasi “Sample collected successfully”',
          'Kemudian pilih status : Sample collected klik search',
          'Setelah itu klik send',
          'Maka akan muncul “Sample sent successfully” ',
          'Kemudian pilih Status : Sample send lalu klik search',
          'Kemudian klik Accept sample ',
          'Maka akan muncul informasi “Sample accepted successfully”',
          'Kembali ke menu Apps, pilih Laboratory',
          'Klik menu Perform Test',
          'Cari pasien berdasarkan no.MRN, kemudian pilih status : Result Pending',
          'Pilih Order date lalu klik search',
          'Kemudian Isi hasil pada kolom result, jika sudah klik Result entered',
          'Maka akan muncul informasi “Result saved successfully”',
          'Pilih status : Result entered, klik search',
          'Maka akan tampil keterangan dari nilai result yang sudah diisi sebelumnya',
          'Lalu klik certify',
          'Isi Certifying employee, kemudian klik certify',
          'Maka akan muncul informasi “Result certified successfully”',
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

    'mencetak-hasil-pemeriksaan-laboratorium': {
    id: 'mencetak-hasil-pemeriksaan-laboratorium',
    menuKey: 'laboratorium',
    submenuId: 'mencetak-hasil-pemeriksaan-laboratorium',
    itemTitle: 'Mencetak Hasil Pemeriksaan Laboratorium',
    steps: [
      {
        id: 'mencetak-hasil-pemeriksaan-laboratorium-step-1',
        number: 1,
        title: 'Mencetak Hasil Pemeriksaan Laboratorium',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps pilih menu Laboratory',
          'Kembali ke menu Apps, pilih Laboratory',
          'Klik menu Perform Test ',
          'Cari pasien berdasarkan no.MRN, pilih status : Result Pending',
          'Pilih ordered date lalu klik search',
          'Jika data pasien sudah ditemukan, lakukan isi hasil lab',
          'Klik tombol result entered , maka data berhasil disimpan',
          'Lakukan pencarian pasien sebelumnya yang sudah dilakukan isi hasil',
          'Pilih status : Result certified, klik tombol search',
          'Klik ceklis pada data pasien',
          'Klik tombol certify, maka akan tampil pilihan certification employee',
          'Pilih dokter lalu klik certify',
          'Jika data sudah dilakukan certified, lakukan cetak hasil pemeriksaan',
          'Klik ceklis pada data pasien, pilih tombol print',
          'Maka akan tampil laporan sebagai berikut :',
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

    'rujuk-ke-laboratorium-antar-cabang-pengguna-hinai': {
    id: 'rujuk-ke-laboratorium-antar-cabang-pengguna-hinai',
    menuKey: 'laboratorium',
    submenuId: 'rujuk-ke-laboratorium-antar-cabang-pengguna-hinai',
    itemTitle: 'Rujuk ke Laboratorium Antar cabang pengguna HINAI',
    steps: [
      {
        id: 'rujuk-ke-laboratorium-antar-cabang-pengguna-hinai-step-1',
        number: 1,
        title: 'Rujuk ke Laboratorium Antar cabang pengguna HINAI',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada menu Apps pilih menu Laboratory',
                  'Kemudian pilih Collect Sample',
                  'Cari pasien berdasarkan no.MRN, kemudian pilih status : Ordered',
                  'Pilih tanggal kemudian klik search',
                  'Setelah itu tampil data pasien, klik tanda centang',
                  'Klik tombol Generate',
                  'Kemudian tampil form print barcode labels, ',
                  'Jika ingin mencetak klik print, jika tidak klik close',
                  'Setelah itu pilih status : Sample generated',
                  'Klik search',
                  'Setelah itu tampil data pasien, klik tanda centang',
                  'Lalu klik collect',
                  'Maka akan tampil informasi “Sample collected successfully”',
                  'Setelah itu pilih status : Sample collected',
                  'Klik search',
                  'Setelah itu tampil data pasien, klik tanda centang',
                  'Lalu klik send',
                  'Maka akan tampil informasi “Sample sent successfully”',
                  'Setelah itu pilih status : Sample send ',
                  'Klik search',
                  'Setelah itu tampil data pasien, klik tanda centang',
                  'Lalu klik Accept sample',
                  'Maka akan tampil informasi “Sample accepted successfully”',
                  'Setelah itu pilih status : Sample received',
                  'Klik search',
                  'Setelah itu tampil data pasien, klik tanda centang',
                  'Kembali ke menu Apps, pilih Laboratory',
                  'Klik menu Perform Test',
                  'Cari pasien berdasarkan no.MRN, kemudian pilih status : Result Pending',
                  'Pilih Order date lalu klik search',
                  'Tampil data pasien, klik tanda centang',
                  'Klik Mark for External Sample',
                  'Maka akan tampil informasi “Record is saved successfully”',
                  'Kemudian klik sisi bilah kiri pilih menu transactions',
                  'Klik external sample',
                  'Setelah tampil data pasien, lalu klik tanda centang',
                  'Klik send to external lab',
                  'Kemudian lengkapi form yaitu isi sending remarks dan pilih site (rumah sakit)',
                  'Maka akan tampil informasi “Record is successfully”',
                  'Bagi RS penerima rujukan lakukan proses penerimaan sampel :',
                  'Pada menu Laboratory pilih Perform Test',
                  'Pilih External sampel pada Menu Transactions',
                  'Ganti External status menjadi External Sample',
                  'Klik Receive Sample',
                  'Kemudian kembali ke Perform Test',
                  'Masukan no MRN pasien dan rubah status menjadi Pending',
                  'Klik search dan isi hasil',
                  'Lakukan certify',
                  'Maka akan muncul “Result Certified Successfully"',
                  'Ganti status menjadi “Result Certified”',
                  'Download hasil dan simpan sebagai dokumen, berikan nama file sesuai nama pasien, jenis pemeriksaan dan tanggal periksa pasien tersebut',
                  'Pada kolom Action pilih File Upload',
                  'Isi nama dokumen',
                  'Klik Add',
                  'Masukkan file yang sudah di download',
                  'Klik Upload kemudian klik Save',
                  'Akan muncul tampilan',
                  'Klik Close',
                  'Pada rumah sakit pengirim rujukan dapat langsung melihat hasil pasien pada EMR pasien tersebut, untuk PPA selain dokter dan perawat :',
                  'Masukkan MRN pasien',
                  'Pilih investigation',
                  'Pilih laboratorium Patologi Klinik',
                  'Klik View All',
                  'Klik upload file',
                  'Klik pada kolom yang berisi nama pasien untuk mengunduh hasil',
                  'Pada rumah sakit pengirim rujukan dapat langsung melihat hasil pasien pada Patient Chart pasien tersebut, untuk PPA dokter dan perawat :',
                  'Pada Menu Lab Result buka “Document”',
                  'Klik file yang akan dilihat hasilnya',
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

      'rujuk-ke-laboratorium-antar-cabang-bukan-pengguna-hinai-dan-lab-rujukan-lainnya': {
    id: 'rujuk-ke-laboratorium-antar-cabang-bukan-pengguna-hinai-dan-lab-rujukan-lainnya',
    menuKey: 'laboratorium',
    submenuId: 'rujuk-ke-laboratorium-antar-cabang-bukan-pengguna-hinai-dan-lab-rujukan-lainnya',
    itemTitle: 'Rujuk ke Laboratorium Antar Cabang Bukan Pengguna HINAI dan Lab Rujukan Lainnya',
    steps: [
      {
        id: 'rujuk-ke-laboratorium-antar-cabang-bukan-pengguna-hinai-dan-lab-rujukan-lainnya-step-1',
        number: 1,
        title: 'Rujuk ke Laboratorium Antar Cabang Bukan Pengguna HINAI dan Lab Rujukan Lainnya',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada menu Apps pilih menu Laboratory',
                  'Kemudian pilih Collect Sample',
                  'Cari pasien berdasarkan no.MRN, kemudian pilih status : Ordered',
                  'Pilih tanggal kemudian klik search',
                  'Setelah itu tampil data pasien, klik tanda centang',
                  'Klik tombol Generate',
                  'Kemudian tampil form print barcode labels',
                  'Jika ingin mencetak klik print, jika tidak klik close',
                  'Setelah itu pilih status : Sample generated ',
                  'Klik search',
                  'Setelah itu tampil data pasien, klik tanda centang',
                  'Lalu klik collect',
                  'Maka akan tampil informasi “Sample collected successfully”',
                  'Setelah itu pilih status : Sample collected',
                  'Klik search',
                  'Setelah itu tampil data pasien, klik tanda centang',
                  'Lalu klik send',
                  'Maka akan tampil informasi “Sample sent successfully”',
                  'Setelah itu pilih status : Sample send ',
                  'Klik search',
                  'Setelah itu tampil data pasien, klik tanda centang',
                  'Lalu klik Accept sample',
                  'Maka akan tampil informasi “Sample accepted successfully”',
                  'Setelah itu pilih status : Sample received',
                  'Klik search',
                  'Setelah itu tampil data pasien, klik tanda centang',
                  'Kembali ke menu Apps, pilih Laboratory',
                  'Klik menu Perform Test',
                  'Cari pasien berdasarkan no.MRN, kemudian pilih status : Result Pending',
                  'Pilih Order date lalu klik search',
                  'Tampil data pasien, klik tanda centang',
                  'Isi hasil “TERLAMPIR”',
                  'Lakukan Certify',
                  'Muncul “Result Certified Successfully”',
                  'Ganti status menjadi “Result Certified”',
                  'Download hasil dan simpan sebagai dokumen, berikan nama file sesuai nama pasien, jenis pemeriksaan dan tanggal periksa pasien tersebut',
                  'Pada kolom Action pilih File Upload ',
                  'Isi nama dokumen',
                  'Klik Add',
                  'Masukkan file yang sudah di download',
                  'Klik Upload kemudian klik Save',
                  'Bila akan melihat hasil maka pilih File Upload pada kolom Action, klik pada “Dokument Name”',
                  'Untuk PPA selain dokter dan perawat bisa melihat hasil pasien pada EMR pasien tersebut dengan cara :',
                  'Masukkan MRN pasien',
                  'Pilih investigation',
                  'Pilih laboratorium Patologi Klinik',
                  'Klik View All',
                  'Klik upload file',
                  'Klik pada kolom yang berisi nama pasien untuk mengunduh hasil',
                  'Untuk PPA dokter dan perawat dapat melihat hasil pasien pada Menu Patient Chart : ',
                  'Pada Menu Lab Result buka “Document”',
                  'Klik file yang akan dilihat hasilnya',
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


    'terima-order-lab-pasien-eksternal': {
    id: 'terima-order-lab-pasien-eksternal',
    menuKey: 'laboratorium',
    submenuId: 'terima-order-lab-eksternal',
    itemTitle: 'Terima Order Lab Pasien Eksternal',
    steps: [
      {
        id: 'terima-order-lab-pasien-eksternal-step-1',
        number: 1,
        title: 'Terima Order Lab Pasien Eksternal',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada menu Apps, pilih Patient Care',
                  'Pilih Menu CPOE Ordering',
                  'Cari pasien berdasarkan informasi nama lengkap / MRN',
                  'Lakukan identifikasi ke pasien dengan meminta pasien menyebutkan nama lengkap dan tanggal lahir',
                  'Lihat pada kolom yang berada dibawah Existing Service Order,  bila ada status “Ordered” dengan Service name pemeriksaan laboratorium ',
                        'perhatikan pada kolom action berikut :',
                  'A.  Jika terdapat tanda lingkar merah  berarti pasien belum melakukan pembayaran, maka pasien dipersilahkan ke kasir untuk melakukan pembayaran',
                  'B.   Jika tidak ada tanda lingkar merah, cek status pembayaran pada kolom action pada gambar kertas dan pencil dengan billing status “Invoiced”',
                  'Kemudian persilahkan pasien masuk untuk dilakukan pengambilan sampel',
                  'Bila tidak ada permintaan pemeriksaan dari dokter pengirim, lakukan :',
                  'Pilih departement dengan : Laboratorium',
                  'Beri tanda centang pada kolom Eksternal Consultant',
                  'Isi kolom Consulting Doctor',
                  'Klik New orders',
                  'Tampil form service order',
                  'Departement dan service center pilih : All',
                  'Cari service name : disesuaikan',
                  'Tanggal order : disesuaikan dengan tanggal order pasien',
                  'Setelah tampil item yang dicari pilih item tersebut',
                  'Klik Add service',
                  'Maka akan tampil data yang telah ditambahkan service pada halaman CPOE entry',
                  'Setelah itu klik save',
                  'Maka akan tampil informasi “Record is saved successfully”',
                  'Kembali ke menu Apps, pilih Laboratory',
                  'Pilih collect sample',
                  'Pada halaman lab orders',
                  'Pilih status : Ordered',
                  'Tanggal order : disesuaikan',
                  'Klik search',
                  'Maka akan tampil data order pasien eksternal',
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


      'laporan-jumlah-pemeriksaan-lab': {
    id: 'laporan-jumlah-pemeriksaan-lab',
    menuKey: 'laboratorium',
    submenuId: 'laporan-jumlah-pemeriksaan-lab',
    itemTitle: 'Laporan Jumlah Pemeriksaan Lab',
    steps: [
      {
        id: 'laporan-jumlah-pemeriksaan-lab-step-1',
        number: 1,
        title: 'Laporan Jumlah Pemeriksaan Lab',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama (Home) klik tab Report',
          'Klik choose module',
          'Kemudian pilih LAB',
          'Klik menu Report',
          'Pilih Test Count',
          'Pilih tanggal sesuai dengan periode yang dibutuhkan (sampai dengan 31 hari)',
          'Klik View Report',
          'Pindahkan ke tampilan Excel dengan memilih ikon excel',
          'Maka akan tampil laporan sebagai berikut :',
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

        'laporan-pemeriksaan-yang-belum-selesai-pending': {
    id: 'laporan-pemeriksaan-yang-belum-selesai-pending',
    menuKey: 'laboratorium',
    submenuId: 'laporan-pemeriksaan-yang-belum-selesai-pending',
    itemTitle: 'Laporan Pemeriksaan yang Belum Selesai (Pending)',
    steps: [
      {
        id: 'laporan-pemeriksaan-yang-belum-selesai-pending-step-1',
        number: 1,
        title: 'Laporan Pemeriksaan yang Belum Selesai (Pending)',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama (Home) klik tab Report',
          'Klik Choose Module',
          'Kemudian pilih LAB',
          'Klik menu report',
          'Pilih Pending List',
          'Pilih tanggal sesuai dengan periode yang dibutuhkan (sampai dengan 30 hari)',
          'Ubah Laboratory : Laboratorium Patologi Klinik',
          'Klik View Report',
          'Pindahkan ke tampilan Excel dengan memilih ikon excel',
          'Maka akan tampil Laporan Pending List sebagai berikut :',
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

          'laporan-turn-around-time-tat': {
    id: 'laporan-turn-around-time-tat',
    menuKey: 'laboratorium',
    submenuId: 'laporan-turn-around-time-tat',
    itemTitle: 'Laporan Turn Around Time (TAT)',
    steps: [
      {
        id: 'laporan-turn-around-time-tat-step-1',
        number: 1,
        title: 'Laporan Turn Around Time (TAT)',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama (Home) klik tab Report',
          'Klik choose module',
          'Kemudian pilih LAB',
          'Klik menu report',
          'Pilih Turn Around Time (hrs) Summary',
          'Pilih tanggal sesuai dengan periode yang dibutuhkan (sampai dengan 31 hari)',
          'Ubah Laboratory : Laboratorium Patologi Klinik',
          'Klik View Report',
          'Pindahkan ke tampilan Excel dengan memilih ikon excel',
          'Maka akan tampil laporan sebagai berikut :',
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
  /* heru-19/11/2025 */





  /* Maul-20/11/2025 */

  'penerimaan-pendaftaran-pasien-rawat-jalan-fisioterapi-dan-ktk': {
    id: 'penerimaan-pendaftaran-pasien-rawat-jalan-fisioterapi-dan-ktk',
    menuKey: 'fisioterapi',
    submenuId: 'penerimaan-pendaftaran',
    itemTitle: 'Penerimaan Pendaftaran Pasien Rawat Jalan Fisioterapi dan KTK',
    steps: [
      {
        id: 'penerimaan-pendaftaran-pasien-rawat-jalan-fisioterapi-dan-ktk-step-1',
        number: 1,
        title: 'Penerimaan Pendaftaran Pasien Rawat Jalan Fisioterapi dan KTK',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pada halaman awal, klik tab preference',
          'Pilih departement : Fisioterapi      Pilih location : Nurse station (NS) Fisioterapi & Rehab Medik',
          'Klik tombol ok',
          'Maka akan tampil informasi “Preference updated successfully”',
          'Klik Apps, pilih menu Ambulatory Care',
          'Pilih menu appointment pada sisi bilah kiri',
          'Klik bay management',
          'Pilih Departement : Fisioterapi',
          'Pilih Unit : Fisioterapi dan Pilih consultant : disesuaikan',
          'Cari nama pasien, lalu klik select',
          'Pilih Mark as arrived (dikarenakan status pasien masih Not Arrived)',
          'Maka akan tampil informasi “Patient marked as arrived”',
          'Kemudian klik select, pilih start consultation',
          'Maka akan tampil informasi “Consultation started for…. “',
          'Kemudian klik select, pilih Patient chart',
          'Pilih widget CPPT, klik ikon tambah (+)',
          'Select encounter yang tersedia',
          'Lengkapi form add note (Title dan Note)',
          'Klik save & publish',
          'Maka akan tampil informasi “Clinical noted saved successfully” ',
          'Klik processed',
          'Kemudian pilih widget Vitals, klik ikon tambah (+) ',
          'Lengkapi form vitals, lalu klik save ',
          'Setelah itu pilih widget Orders, klik ikon tambah (+) ',
          'Cari nama order di kolom search',
          'Kemudian akan tampil daftar order sesuai kata pencarian ',
          'Beri tanda centang item order yang dipilih',
          'Setelah item order dipilih, maka akan tampil keterangan dari item tersebut ',
          'Di dalam keterangan tersebut,  dapat ditambahkan catatan ',
          'Lalu klik save',
          'Maka akan tampil informasi “Service order saved successfully”',
          'Lalu akan tampil data yang sudah diorder',
          'Kembali ke Apps, pilih menu Inpatient',
          'Pilih menu transactions pada sisi bilah kiri, ',
          'klik Service order processor',
          'Kemudian klik search ',
          'Kemudian lakukan pencarian dengan search criteria',
          'Pilih order date, klik search',
          'Maka akan tampil data pasien yang sudah diorder sebelumnya, tetapi keterangan pada kolom finance cleareance masih tanda silang (x)',
          'Jika demikian, pasien tersebut harus melakukan pembayaran terlebih dahulu',
          'Jika pasien sudah membayar maka tanda ( x ) akan berubah menjadi tombol centang, ',
          'Setelah itu beri tanda centang di kolom process, lalu klik save',
        ],
      }
    ]
  },

  'transaksi-resep-rawat-jalan': {
    id: 'transaksi-resep-rawat-jalan',
    menuKey: 'farmasi',
    submenuId: 'e-prescription-rawat-jalan',
    itemTitle: 'Transaksi Resep Rawat Jalan',
    steps: [
      {
        id: 'transaksi-resep-rawat-jalan-step-1',
        number: 1,
        title: 'Transaksi Resep Rawat Jalan',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pada menu Apps, Pilih Pharmacy kemudian klik OP Pharmacy ',
          'Masuk ke halaman menu pending / partially processed ordered untuk melihat order yang masih belum diproses atau baru diproses sebagian',
          'Klik tombol search',
          'Pada tab “Processed Orders” jika hanya ingin melihat order yang sudah selesai diproses',
          'Pada tab “Rejected / cancel orders jika hanya ingin melihat order yang dibatalkan',
          'Layar search criteria akan muncul  untuk dapat melakukan pencarian dengan menggunakan berbagai informasi dasar',
          'Pencarian dapat dilakukan dengan menggunakan beberapa parameter pencarian',
          {type : 'text', content : 'Store Name (Nama Gudang) : Untuk memfilter pencarian semua order yang berhubungan dengan suatu nama gudang', level: 3 },
          {type : 'text', content : 'Ordered location (Lokasi Order)  : untuk memfilter pencarian semua order yang berhubungan dengan suatu lokasi order', level: 3 },
          {type : 'text', content : 'Order Status (Status Order) : untuk memfilter pencarian semua order yang berhubungan dengan suatu status order', level: 3 },
          {type : 'text', content : 'Order No (Nomor Order) : untuk memfilter pencarian semua order yang berhubungan dengan nomor sebuah order', level: 3 },
          {type : 'text', content : 'Consulting Doctor (Dokter yang melakukan Order) : untuk memfilter pencarian semua order yang berhubungan dengan nama seorang dokter', level: 3 },
          {type : 'text', content : 'Ordered Date From (Tanggal Order) : untuk memfilter pencarian semua order yang berhubungan dengan tanggal order', level: 3 },
          'Jika sudah tampil data pasien klik Print prescription ',
          'Kemudian klik tombol select, pilih Dispense',
          'Masuk ke halaman “Issue drugs againts order” lalu muncul daftar pesanan untuk pasien rawat jalan',
          'Ketik “%” untuk menampilkan daftar batch untuk item yang dipesan',
          'Perhatikan item ordered apakah sudah sesuai, isi Frequency, Issue quantity dan Instructions',
          'Jika jumlah stok mencukupi maka jumlah yang di dispense akan sesuai jumlah yang dipesan',
          'Jika pesanan siap untuk di dispense maka klik tombol confirm dispense (Dispense adalah untuk memproses resep)',
          'Jika item obat tidak ada ',
          'Jika obat tidak ada maka dapat diganti di kolom item issued dengan mengklik tombol ceklis dan mencari item obat yang sesuai konfirmasi',
          'Jika tidak mencukupi /  mengurangi jumlah obat maka di ganti pada I.Qty',
          'Jika pesanan tersebut perlu disimpan sebelum didispense maka klik tombol “save as draft” draft pesanan akan muncul di layar “Pending / Partially processed order”',
          'Jika resep hanya didispense sebagian saja dan pasien ingin membeli sisanya di luar, maka klik tombol “Print Prescription untuk mencetak resep yang akan menandakan ada sejumlah obat yang belum didispense sepenuhnya',
        ],
      }
    ]
  },

  'transaksi-resep-umum': {
    id: 'transaksi-resep-umum',
    menuKey: 'farmasi',
    submenuId: 'e-prescription-rawat-jalan',
    itemTitle: 'Transaksi Resep Umum',
    steps: [
      {
        id: 'transaksi-resep-umum-step-1',
        number: 1,
        title: 'Transaksi Resep Umum',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pada menu Apps, Pilih Pharmacy lalu pada bilah sisi kiri pilih menu Transactions',
          'Kemudian pilih “Issue on demand” ',
          'Masuk ke halaman issue on demand, lalu klik tombol “Issue on demand” ',
          'Beri tanda centang di “External patient” untuk isi biodata pasien',
          'Isi form, kolom dengan tanda ( * ) wajib diisi',
          'Apabila data pasien sudah lengkap, klik tombol update',
          'Pilih item obat yang ingin dibeli, kemudian isi “Issue quantity” dan “Instructions”',
          'Jika pesanan siap untuk di dispense maka klik tombol “Confirm dispense”',
          'Setelah itu akan muncul informasi “Drugs dispense successfully” '
        ],
      }
    ]
  },

  'transaksi-resep-parsial-rawat-jalan': {
    id: 'transaksi-resep-parsial-rawat-jalan',
    menuKey: 'farmasi',
    submenuId: 'e-prescription-rawat-jalan',
    itemTitle: 'Transaksi Resep Parsial Rawat Jalan',
    steps: [
      {
        id: 'transaksi-resep-parsial-rawat-jalan-step-1',
        number: 1,
        title: 'Transaksi Resep Parsial Rawat Jalan',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Fitur ini untuk kondisi dimana pasien poliklinik mendapatkan Resep obat yang cukup banyak, beberapa pasien akan menebus obatnya sebagian. ',
          'Apabila di kemudian hari, pasien ingin menebus sebagian dari sisa resep obatnya, maka pasien tidak perlu bertemu kembali dengan dokter.  Mereka dapat langsung ke Farmasi dengan menunjukkan Copy Resep. ',
          'Staff Farmasi dapat melihatnya di menu OP Pharmacy > pada tab Pending / Partially Processed Orders. ',
          'Lakukan Pencarian dengan Criteria : Order Status is Partially Processed dan Ordered Date From Greater than or equal to [tanggal yang tertera di copy resep].',
          'Kemudian lakukan Dispense seperti proses pelayanan transaksi Resep Rawat Jalan.'
        ],
      }
    ]
  },

  'pembuatan-e-tiket-rawat-jalan': {
    id: 'pembuatan-e-tiket-rawat-jalan',
    menuKey: 'farmasi',
    submenuId: 'e-prescription-rawat-jalan',
    itemTitle: 'Pembuatan E Tiket Rawat Jalan',
    steps: [
      {
        id: 'pembuatan-e-tiket-rawat-jalan-step-1',
        number: 1,
        title: 'Pembuatan E Tiket Rawat Jalan',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pada menu Apps, Pilih Pharmacy kemudian klik pilih OP Pharmacy ',
          'Masuk ke halaman menu pending / partially processed ordered',
          'Pilih tanggal “Order date from” kemudian klik search ',
          'Jika sudah tampil data pasien kemudian klik tombol select ',
          'Masuk ke halaman “Issue drugs againts order” yaitu data pasien',
          'Klik “Re-print label” untuk mencetak label obat'
        ],
      }
    ]
  },

  'cek-harga-jual-satuan-obat': {
    id: 'cek-harga-jual-satuan-obat',
    menuKey: 'farmasi',
    submenuId: 'e-prescription-rawat-jalan',
    itemTitle: 'Cek Harga Jual Satuan Obat',
    steps: [
      {
        id: 'cek-harga-jual-satuan-obat-step-1',
        number: 1,
        title: 'Cek Harga Jual Satuan Obat',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pada menu Apps, Pilih Pharmacy ',
          'Pilih menu transactions pada bilah sisi kiri',
          'Lalu pilih menu “Pharmacy estimate”',
          'Pilih item name obat yang dicari',
          'Isi kolom quantity obat',
          'Lalu akan tampil jumlah harga obatnya'
        ],
      }
    ]
  },

  'transaksi-resep-rawat-inap': {
    id: 'transaksi-resep-rawat-inap',
    menuKey: 'farmasi',
    submenuId: 'e-prescription-rawat-inap',
    itemTitle: 'Transaksi Resep Rawat Inap',
    steps: [
      {
        id: 'transaksi-resep-rawat-inap-step-1',
        number: 1,
        title: 'Transaksi Resep Rawat Inap',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pada menu Apps, Pilih Pharmacy kemudian klik IP Pharmacy',
          'Masuk ke halaman menu pending / partially processed ordered untuk melihat order yang masih belum diproses atau baru diproses sebagian',
          'Klik tombol search',
          {type : 'text', content : 'Pada tab “Processed Orders” jika hanya ingin melihat order yang sudah selesai diproses', level: 3 },
          {type : 'text', content : 'Pada tab “Rejected / cancel orders jika hanya ingin melihat order yang dibatalkan', level: 3 },
          'Layar search criteria akan muncul  untuk dapat melakukan pencarian dengan menggunakan berbagai informasi dasar',
          'Pencarian dapat dilakukan dengan menggunakan beberapa parameter pencarian',
          {type : 'text', content : 'Store Name (Nama Gudang) : Untuk memfilter pencarian semua order yang berhubungan dengan suatu nama gudang', level: 3 },
          {type : 'text', content : 'Ordered location (Lokasi Order)  : untuk memfilter pencarian semua order yang berhubungan dengan suatu lokasi order', level: 3 },
          {type : 'text', content : 'Order Status (Status Order) : untuk memfilter pencarian semua order yang berhubungan dengan suatu status order', level: 3 },
          {type : 'text', content : 'Order No (Nomor Order) : untuk memfilter pencarian semua order yang berhubungan dengan nomor sebuah order', level: 3 },
          {type : 'text', content : 'Consulting Doctor (Dokter yang melakukan Order) : untuk memfilter pencarian semua order yang berhubungan dengan nama seorang dokter', level: 3 },
          {type : 'text', content : 'Ordered Date From (Tanggal Order) : untuk memfilter pencarian semua order yang berhubungan dengan tanggal order', level: 3 },
          'Jika sudah tampil data pasien  klik Print prescription ',
          'Kemudian klik tombol select, pilih Dispense',
          'Masuk ke halaman “Issue drugs againts order” lalu muncul daftar pesanan untuk pasien rawat inap',
          'Ketik “%” untuk menampilkan daftar batch untuk item yang dipesan',
          'Perhatikan item ordered apakah sudah sesuai, isi Frequency, Issue quantity dan Instructions',
          'Jika jumlah stok mencukupi maka jumlah yang didispense akan sesuai jumlah yang dipesan',
          'Jika pesanan siap untuk di dispense maka klik tombol confirm dispense (Dispense adalah untuk memproses resep)',
          'Jika item obat tidak ada ',
          'Jika obat tidak ada maka dapat diganti di kolom item issued dengan mengklik tombol ceklis dan mencari item obat yang sesuai konfirmasi',
          'Jika tidak mencukupi /  mengurangi jumlah obat maka di ganti pada I.Qty',
          'Jika pesanan tersebut perlu disimpan sebelum didispense maka klik tombol “save as draft” draft pesanan akan muncul di layar “pending/partially processed order”',
          'Jika resep hanya didispense sebagian saja dan pasien ingin membeli sisanya di luar, maka klik tombol “Print Prescription untuk mencetak resep yang akan menandakan ada sejumlah obat yang belum didispense sepenuhnya'
        ],
      }
    ]
  },

  'pembuatan-e-tiket-rawat-inap': {
    id: 'pembuatan-e-tiket-rawat-inap',
    menuKey: 'farmasi',
    submenuId: 'e-prescription-rawat-inap',
    itemTitle: 'Pembuatan E Tiket Rawat Inap',
    steps: [
      {
        id: 'transaksi-resep-rawat-inap-step-1',
        number: 1,
        title: ' Pembuatan E Tiket Rawat Inap',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pada menu Apps, Pilih Pharmacy kemudian klik pilih IP Pharmacy ',
          'Masuk ke halaman menu pending / partially processed ordered',
          'Pilih tanggal “Order date from” kemudian klik search ',
          'Jika sudah tampil data pasien kemudian klik tombol select',
          'Masuk ke halaman “Issue drugs againts order” yaitu data pasien',
          'Klik “Re-print label” untuk mencetak label obat'
        ],
      }
    ]
  },

  'case-2-clearing-resep-farmasi-rawat-inap': {
    id: 'case-2-clearing-resep-farmasi-rawat-inap',
    menuKey: 'farmasi',
    submenuId: 'e-prescription-rawat-inap',
    itemTitle: 'Case 2 : Clearing Resep Farmasi Rawat Inap',
    steps: [
      {
        id: 'case-2-clearing-resep-farmasi-rawat-inap-step-1',
        number: 1,
        title: ' Case 2 : Clearing Resep Farmasi Rawat Inap',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Masalah yang sering terjadi di saat transaksi pemulangan pasien rawat inap adalah adanya Pending Farmasi. Ada kalanya permintaan obat dari ruang perawatan tidak seluruhnya diberikan kepada pasien, misalnya yang diorder oleh perawat ada obat sebanyak 5 tablet sedangkan yang diconfirm dispense oleh Farmasi hanya 1 tablet. Hal ini akan menyebabkan terjadi Partially Processed order farmasi untuk pasien tersebut sebanyak 4 tablet.',
          'Maka, apabila benar obat tersebut tidak diberikan kepada pasien sampai akhir masa perawatannya, sisa jumlah item tersebut di-Reject.'
        ],
      }
    ]
  },

  'retur-transaksi-resep-rawat-jalan': {
    id: 'retur-transaksi-resep-rawat-jalan',
    menuKey: 'farmasi',
    submenuId: 'retur-transaksi',
    itemTitle: 'Retur Transaksi Resep Rawat Jalan',
    steps: [
      {
        id: 'retur-transaksi-resep-rawat-jalan-step-1',
        number: 1,
        title: 'Retur Transaksi Resep Rawat Jalan',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pada menu Apps, pilih Pharmacy',
          'Klik menu transactions pada sisi bilah kiri',
          'Pilih direct return',
          'Cari pasien berdasarkan informasi nama atau no.MRN ',
          'Kemudian tampil data pasien',
          'Pilih return store',
          'Klik Add items',
          'Tampil  form dispense items',
          'Isi field item name dan issue no',
          'Klik search',
          'Maka item yang dipilih akan  tampil',
          'Klik ikon tambah (+)',
          'Jika tidak ada item yang ingin ditambahkan lagi, klik close',
          'Tampil data item obat',
          'Isi jumlah yang diterur pada kolom Dis. Sale Qty  (disesuaikan) ',
          'Pilih drug return reason',
          'Klik save',
          'Maka akan tampil informasi “Drug return saved successfully”'
        ],
      }
    ]
  },

  'drug-return-request-retur-obat-pasien-rawat-inap': {
    id: 'drug-return-request-retur-obat-pasien-rawat-inap',
    menuKey: 'farmasi',
    submenuId: 'retur-transaksi',
    itemTitle: 'Drug Return Request(Retur Obat Pasien Rawat Inap)',
    steps: [
      {
        id: 'drug-return-request-retur-obat-pasien-rawat-inap-step-1',
        number: 1,
        title: 'Drug Return Request(Retur Obat Pasien Rawat Inap)',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Drug Return Request  dilakukan oleh perawat ruangan ',
          
          'Pada menu Apps, pilih Pharmacy',
          'Klik menu transactions pada sisi bilah kiri',
          'Pilih Drug return request',
          'Klik Create Return request',
          'Cari pasien berdasarkan informasi nama atau no.MRN ',
          'Tampil data pasien, kemudian pilih visit (isi IP)',
          'Pilih return store',
          'Klik add items',
          'Tampil  form dispense items',
          'Isi field item name dan issue no',
          'Klik search',
          'Jika item obat yang dicari sudah tampil, klik ikon tambah',
          'Lalu klik close, jika tidak ada item yang ingin ditambahkan lagi',
          'Tampil data item obat',
          'Isi jumlah yang akan diretur pada kolom dis.return Qty (disesuaikan) ',
          'Pilih drug return reason',
          'Klik create return request',
          'Maka akan tampil informasi “Return request saved successfully”'
        ],
      }
    ]
  },

  'receive-store-pasien-rawat-inap': {
    id: 'receive-store-pasien-rawat-inap',
    menuKey: 'farmasi',
    submenuId: 'retur-transaksi',
    itemTitle: 'Receive Store Pasien Rawat Inap',
    steps: [
      {
        id: 'receive-store-pasien-rawat-inap-step-1',
        number: 1,
        title: 'Receive Store Pasien Rawat Inap',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Receive Store  dilakukan oleh petugas farmasi ',
          'Pada menu Apps, pilih Pharmacy ',
          'Klik menu transactions pada sisi bilah kiri',
          'Pilih Receive store',
          'Cari nama pasien, klik select',
          'Pilih drug return',
          'Tampil data pasien',
          'Cek pada kolom return qty ',
          'Jika sudah sesuai klik save',
          'Maka akan tampil informasi “Drug Return Saved Successfully” ',
          'Kemudian klik print',
          'Maka akan tampil laporan sebagai berikut :'
        ],
      }
    ]
  },

  'case-1-pending-farmasi-return-request': {
    id: 'case-1-pending-farmasi-return-request',
    menuKey: 'farmasi',
    submenuId: 'retur-transaksi',
    itemTitle: 'Case 1 : Pending Farmasi Return Request',
    steps: [
      {
        id: 'case-1-pending-farmasi-return-request-step-1',
        number: 1,
        title: 'Case 1 : Pending Farmasi Return Request',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pada menu Apps, pilih Pharmacy',
          'Kemudian pilih menu transactions pada sisi bilah kiri, klik receive store',
          'Masuk ke halaman receive store, lalu klik search',
          'Setelah itu cari pasien berdasarkan search criteria, pada request status pilih partially closed',
          'Lalu klik search',
          'Setelah pasien ditemukan klik select, pilih drug return',
          'Masuk ke halaman data pasien, cek kembali item obat yang ingin direturn',
          'Jika sudah sesuai lalu klik save'
        ],
      }
    ]
  },

  'pending-dispense-request': {
    id: 'pending-dispense-request',
    menuKey: 'farmasi',
    submenuId: 'pending-dispense',
    itemTitle: 'Pending Dispense Request',
    steps: [
      {
        id: 'pending-dispense-request-step-1',
        number: 1,
        title: 'Pending Dispense Request',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pada halaman utama (home) klik Apps, pilih pharmacy',
          'Klik menu transactions pada sisi bilah kiri',
          'Pilih Pending dispense request',
          'Pada halaman Pending dispense request di kolom FC Clearance terdapat keterangan sebagai berikut :',
          'False artinya : Pasien belum melakukan pelunasan transaksi di kasir',
          'True Artinya : Pasien sudah melakukan pelunasan transaksi di kasir',
          'Ketika obat akan diserahkan klik select, pilih dispense',
          'Klik cancel pada kolom action ketika FC Clearance “False” lebih dari 1x 24 jam',
          'Tujuannya ada stock kembali ke gudang farmasi'
        ],
      }
    ]
  },

  'pembuatan-laporan-resep-dan-sub-resep-farmasi': {
    id: 'pembuatan-laporan-resep-dan-sub-resep-farmasi',
    menuKey: 'farmasi',
    submenuId: 'pending-dispense',
    itemTitle: 'Pembuatan Laporan Resep dan Sub Resep Farmasi',
    steps: [
      {
        id: 'pembuatan-laporan-resep-dan-sub-resep-farmasi-step-1',
        number: 1,
        title: 'Pembuatan Laporan Resep dan Sub Resep Farmasi',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pada halaman utama klik tab Reports',
          'Kemudian pilih menu Pharmacy pada sisi bilah kiri, lalu pilih menu MIS ',
          'Klik patient wise pharmacy consumption',
          'Lalu akan tampil halaman patient wise consumption',
          'Pilih tanggal, Branch, Departement dan pilih Store (pilih sesuai kebutuhan, pada contoh ini yaitu memilih Farmasi Reguler)',
          'Kemudian klik view report',
          'Maka akan tampil report resep dan sub resep farmasi',
          {
            type: 'video',
            title: 'Lihat Video Tutorial',
            content: 'https://drive.google.com/file/d/1Qp1npZXNeKjYOYZChojir1DvoI2lZP__/preview'
          }
        ],
      }
    ]
  },

  /* Maul-20/11/2025 */

  /* heru-20/11/2025 */
        'permintaan-gudang-stock-indent': {
    id: 'permintaan-gudang-stock-indent',
    menuKey: 'inventory',
    submenuId: 'permintaan-gudang-stock-indent',
    itemTitle: 'Permintaan Gudang (Stock Indent)',
    steps: [
      {
        id: 'permintaan-gudang-stock-indent-step-1',
        number: 1,
        title: 'Permintaan Gudang (Stock Indent)',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, Pilih Inventory',
          'Pilih Stock indent',
          'Kemudian klik tombol new',
          'Masuk ke halaman Stock indent',
          'Isi Request Store/Location (Asal ruangan yg meminta)',
          'Isi Issue Store / Location (Tujuan gudang permintaan)',
          'Isi kolom Remarks untuk keterangan',
          'Klik tombol Add Line Item',
          'Kemudian isi Item dan quantity yang di inginkan, setelah itu klik tombol Add',
          'Jika sudah lengkap, klik tombol Save',
          'Maka akan muncul informasi “Stock indent saved”',
          'Proses Approval',
          'Pada menu Apps, pilih inventory',
          'Pilih stock indent',
          'Cari ruangannya (issued store) yang dituju, kemudian klik select pada kolom action, kemudian pilih edit',
          'Masuk ke halaman stock indent, lalu Klik tombol Approve',
          'Muncul informasi bahwa “Stock indent Approved” ',
          'Setelah itu klik Select pada kolom action, pilih SR to PR ',
          'Muncul informasi bahwa “Purchase request created successfully”',
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

        'pengeluaran-barang-stock-issue': {
    id: 'pengeluaran-barang-stock-issue',
    menuKey: 'inventory',
    submenuId: 'pengeluaran-barang-stock-issue',
    itemTitle: 'Pengeluaran Barang (Stock Issue)',
    steps: [
      {
        id: 'pengeluaran-barang-stock-issue-step-1',
        number: 1,
        title: 'Pengeluaran Barang (Stock Issue)',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, Pilih Inventory',
          'Pilih stock issues',
          'Kemudian klik tombol new',
          'Masuk ke halaman stock issues',
          'Pilih Issue Store / Location : Farmasi',
          'Pilih Receipt Store / Location : (Ruangan/gudang yang meminta)',
          'Klik tombol convert form',
          'Kemudian tampil form Convert Handler lalu pilih stock indent',
          'Klik no document sesuai dengan no permintaan dari ruangan tersebut',
          'Kemudian klik select all untuk barang yang akan dikeluarkan',
          'Klik tombol OK',
          'Setelah selesai klik tombol Send for Approval',
          'Maka Pengeluaran Barang berhasil dilakukan',
          'Proses Approval',
          'Pilih menu Apps, pilih inventory',
          'Pilih stock Issue',
          'Cari ruangannya (issued store) yang dituju, kemudian klik select pada kolom action, kemudian pilih edit',
          'Masuk ke halaman stock issue, lalu Klik tombol Approve',
          'Muncul informasi bahwa “Stock Issue Approved”',
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

        'penerimaan-barang-stock-receipt': {
    id: 'penerimaan-barang-stock-receipt',
    menuKey: 'inventory',
    submenuId: 'penerimaan-barang-stock-receipt',
    itemTitle: 'Penerimaan Barang (Stock Receipt)',
    steps: [
      {
        id: 'penerimaan-barang-stock-receipt-step-1',
        number: 1,
        title: 'Penerimaan Barang (Stock Receipt)',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, Pilih Inventory',
          'Pilih stock receipt',
          'Kemudian klik tombol new',
          'Pilih convert from stock issue',
          'Masuk ke halaman Stock Receipt, lalu isi Receipt store / location',
          'Klik Convert form',
          'Kemudian tampil form Convert Handler lalu pilih stock issue',
          'Klik no document pada header details',
          'Kemudian klik select all',
          'Setelah itu klik tombol OK',
          'Lalu klik Send for Approval',
          'Muncul informasi “Stock Receipt sent for approval”',
          'Lalu klik tombol edit pada kolom action',
          'Masuk ke halaman Stock receipt, lalu klik tombol Approve',
          'Muncul informasi “Stock Receipt Approved”',
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

        'retur-barang-internal-stock-return': {
    id: 'retur-barang-internal-stock-return',
    menuKey: 'inventory',
    submenuId: 'retur-barang-internal-stock-return',
    itemTitle: 'Retur Barang Internal (Stock Return)',
    steps: [
      {
        id: 'retur-barang-internal-stock-return-step-1',
        number: 1,
        title: 'Retur Barang Internal (Stock Return)',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, Pilih Inventory',
          'Pilih stock return',
          'Kemudian klik tombol new',
          'Pilih convert from stock receipt',
          'Isi return store, issue store kemudian item barangnya',
          'Isi quantity barang yang ingin diretur',
          'Klik send approval',
          'Setelah itu akan muncul pesan bahwa data sudah terkirim, lalu klik edit pada kolom action',
          'Muncul halaman edit, lalu pilih tombol approve',
          'Setelah itu akan muncul pesan bahwa data sudah diapprove, lalu klik edit pada kolom action',
          'Muncul halaman edit kemudian pilih tombol related document',
          'Klik stock receipt',
          'Lalu pilih tombol print',
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

        'transfer-obat-transfer-kode-barang': {
    id: 'transfer-obat-transfer-kode-barang',
    menuKey: 'inventory',
    submenuId: 'transfer-obat-transfer-kode-barang',
    itemTitle: 'Transfer Obat (Transfer Kode Barang)',
    steps: [
      {
        id: 'transfer-obat-transfer-kode-barang-step-1',
        number: 1,
        title: 'Transfer Obat (Transfer Kode Barang)',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Inventory pilih masters, pada bilah sebelah kiri',
          'Pilih item lalu klik tombol search',
          'Untuk search criteria, pilih item name lalu contains lalu isi nama itemnya',
          'Cari item barangnya, lalu klik edit pada kolom action',
          'Pada tab account dan sales info check kolom purchase / inventory acc : stock account dan pada kolom account : sales account Leaf',
          'Jika sudah sesuai,  pilih tab store/location ',
          'Isi store/location',
          'Kemudian klik tombol save',
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

          'pengaturan-reorder-quantity-min---max': {
    id: 'pengaturan-reorder-quantity-min---max',
    menuKey: 'inventory',
    submenuId: 'pengaturan-reorder-quantity-min---max',
    itemTitle: 'Pengaturan ReOrder Quantity (Min - Max)',
    steps: [
      {
        id: 'pengaturan-reorder-quantity-min---max-step-1',
        number: 1,
        title: 'Pengaturan ReOrder Quantity (Min - Max)',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Unduh spreadshseet dari Item reorder Details Report (Report → Inventory → Report → Item reorder Details Report) sesuai store yang ingin disesuaikan. Contoh : IGD',
          'Pada spreadsheet, pilih item yang akan dilakukan penyesuaian reorder quantity (min-max)',
          'Sesuaikan angka hanya pada kolom berikut :',
          {type : 'text', content : 'Min days,', level: 2 },
          {type : 'text', content : 'Max Days,', level: 2 },
          {type : 'text', content : 'Ideal days', level: 2 },
          {type : 'text', content : 'Lead Days,', level: 2 },
          {type : 'text', content : 'Gap Days ( Order frequency)', level: 2 },
          {type : 'text', content : 'Consumption periode', level: 2 },
          {type : 'text', content : 'Min stock Qty (hanya untuk item emergensi)', level: 2 },
          'Keterangan :',
          {type : 'text', content : 'Locator code : Kode locator / tempat penyimpanan barang', level: 2 },
          {type : 'text', content : 'Min : jumlah hari minimal barang tersedia/tersimpan di gudang', level: 2 },
          {type : 'text', content : 'Max : Jumlah hari maximum barang tersedia/tersimpan di gudang', level: 2 },
          {type : 'text', content : 'Lead Days : Lama hari dari PO terbit sampai dengan barang diterima', level: 2 },
          {type : 'text', content : 'Ideal Days : Lama hari rata-rata barang tersedia/tersimpan di gudang', level: 2 },
          {type : 'text', content : 'Min stok Qty : Jumlah stok minimal (khusus obat life saving)', level: 2 },
          {type : 'text', content : 'Gap Days (Order Frequency) : jumlah hari melakukan PO (berapa hari sekali dilakukan order)', level: 2 },
          {type : 'text', content : 'Consumption Periode :  Jumlah hari yang digunakan untuk menghitung total pemakaian', level: 2 },       
          'Kirim list yang sudah diisi kepada PIC Farmasi Departemen Penunjang Medis untuk dilakuan review dan pembuatan tiket pengajuan kepada CDM',
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

        'pengeluaran-barang-habis-pakaistock-consumption': {
    id: 'pengeluaran-barang-habis-pakaistock-consumption',
    menuKey: 'inventory',
    submenuId: 'pengeluaran-barang-habis-pakaistock-consumption',
    itemTitle: 'Pengeluaran Barang Habis Pakai(Stock Consumption)',
    steps: [
      {
        id: 'pengeluaran-barang-habis-pakaistock-consumption-step-1',
        number: 1,
        title: 'Pengeluaran Barang Habis Pakai(Stock Consumption)',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Berikut adalah cara untuk melakukan Stock Taking Initiation :  Stock Taking Initiation',
                  'Dalam melakukan stock taking initiation dapat dilakukan dengan 2 cara :',
                  'Stock Taking Online',
                  'Stock Taking dengan menggunakan worksheet Offline',
                  'Cara untuk upload worksheet csv adalah sebagai berikut :  Upload worksheet csv',
                  'Pada menu Apps, pilih Menu Inventory',
                  'Lalu pilih menu Stock Taking Initiation',
                  'Kemudian Klik Tombol New ',
                  'Masuk ke halaman Stock Taking',
                  'Isi Store (Ruangan yg akan dilakukan stok opname)',
                  'Isi Team (Tim yang melakukan stok opname)',
                  'Isi User Name (Petugas yang melakukan opname)',
                  'Isi kolom Remarks untuk keterangan',
                  'Setelah itu Klik tombol Add Line Item',
                  'Kemudian pilih Item yang akan dilakukan penghitungan ',
                  'Apabila item akan dipilh semua klik Select All',
                  'Setelah itu klik tombol Submit',
                  'Kemudian Klik Send Approval ',
                  'Cari ruangannya, kemudian klik Action',
                  'Masuk ke halaman Stock Taking, lalu Klik tombol Approve ',
                  'Muncul informasi bahwa “Stock Taking Approved” ',
                  'Kembali ke menu Inventory, lalu pilih Stock Taking',
                  'Cari ruangannya, kemudian klik Action. ',
                  'Masuk ke halaman Stock Taking, ',
                  'Input Stock Quantity berdasarkan perhitungan Stock Fisik  ',
                  'Isi Remarks untuk hasil perhitungan berbeda antara Stock Komputer dengan Stock Fisik',
                  'Kemudian klik Send For Approval',
                  'Secara sistem akan mengelompokan hasil perhitungan positif akan masuk ke dalam adjusment receipt sedangkan hasil perhitungan negatif akan masuk ke adjusment issue pada modul inventory adjusment',
                  'Cari ruangannya, kemudian klik Action ',
                  'Masuk ke halaman Stock Taking, lalu Klik tombol Approve ',
                  'Muncul informasi bahwa “Stock Taking Approved” ',
                  'Stock Taking Penyesuaian adalah sebagai berikut :  Stock Taking Penyesuaian',
                  'Pilih Inventory Adjustment',
                  'Pilih Adjustment Type (Adjustment Receipt / Adjustment Issue)',
                  'Kemudian Klik Send Approval (Adjustment Receipt)',
                  'Muncul informasi "Inventory Adjusment Sent for Approval" Lalu klik Action ',
                  'Masuk ke halaman Inventory Adjustment, kemudian Klik tombol Approve (Adjustment Receipt)',
                  'Muncul informasi bahwa “Inventory Adjustment Approved” (Adjustment Receipt)',
                  'Pilih Adjustment Type (Adjustment Receipt / Adjustment Issue)',
                  'Kemudian Klik Send Approval (Adjustment Issued)',
                  'Muncul Informasi "Inventory Adjusment Sent for Approval" Kemudian klik Action',
                  'Masuk ke halaman Inventory Adjustment, kemudian Klik tombol Approve (Adjustment Issued)',
                  'Muncul informasi bahwa “Inventory Adjustment Approved” (Adjustment Issued)',
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
  /* heru-20/11/2025 */

  /* Maul-21/11/2025 */
  'purchase-request': {
    id: 'purchase-request',
    menuKey: 'procurement',
    submenuId: 'purchase-request',
    itemTitle: 'Purchase Request',
    steps: [
      {
        id: 'purchase-request-step-1',
        number: 1,
        title: 'Purchase Request',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pilih Menu Apps, kemudian pilih Menu Procurement',
          'Setelah itu pilih Purchase Request ',
          'Masuk ke halaman Purchase Request, lalu klik New ',
          'Lalu isi Kolom Remarks, Purchase Store dan Priority',
          'Jika sudah klik tombol ( + ) pada kolom action',
          'Muncul form add purchase request, isi kolom item, quantity, unit dan remarks',
          'Jika sudah klik tombol Add',
          'Maka akan muncul informasi added item berhasil ',
          'Kembali ke halaman strore purchase request, maka akan muncul item-item yang sudah ditambahkan di form add purchase request',
          'Jika sudah sesuai klik tombol save',
          'Maka akan tampil informasi “Store purchase request saved successfully” ',
          'Kemudian klik tombol edit pada kolom action ',
          'Setelah itu klik tombol Send for Approval',
          'Maka akan muncul informasi “Store purchase request sent for approval”',
          'Kemudian klik tombol edit pada kolom action',
          'Setelah itu klik tombol Approve',
          'Maka akan muncul informasi “Store purchase request approved” '
        ],
      }
    ]
  },

  'purchase-order': {
    id: 'purchase-order',
    menuKey: 'procurement',
    submenuId: 'purchase-order',
    itemTitle: 'Purchase Order',
    steps: [
      {
        id: 'purchase-order-step-1',
        number: 1,
        title: 'Purchase Order',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pilih Menu Apps, kemudian pilih Menu Procurement',
          'Setelah itu pilih Purchase Order',
          'Masuk ke halaman Purchase Order, klik New lalu pilih Againts Purchase Request',
          'Kemudian isi kolom pilih store, vendor, tax code, shipping contact details dan tanggal',
          'Lalu klik tombol convert',
          'Tampil form convert handler, kemudian pilih convert form : Purchase Request ',
          'ceklis Document No pada Header details, setelah itu ceklis select all',
          'Kemudian klik tombol ok',
          'Kembali ke halaman Purchase Order, tampil item-item obat yang sudah direquest sebelumnya ',
          'Lalu klik tombol edit',
          'Isi kolom Rate dan discount',
          'Pilih tax structure, jika sudah klik tombol update',
          'Lakukan sesuai dengan item yang ada, kemudian pilih converted currency : IDR',
          'Setelah itu klik tombol save',
          'Muncul informasi “Purchase Order saved successfully”',
          'Setelah itu klik tombol edit',
          'Lalu masuk ke halaman edit purchase order, klik tombol Send for Approval ',
          'Tampil informasi “Purchase Order sent for Approval”',
          'Lalu klik tombol edit kembali',
          'Setelah itu klik tombol approve',
          'Maka akan muncul informasi “Purchase order approved”'
        ],
      }
    ]
  },

  'good-receipt-note': {
    id: 'good-receipt-note',
    menuKey: 'procurement',
    submenuId: 'good-receipt-note',
    itemTitle: 'Good Receipt Note',
    steps: [
      {
        id: 'good-receipt-note-step-1',
        number: 1,
        title: 'Good Receipt Note',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pilih Menu Apps, kemudian pilih Menu Procurement',
          'Pilih Good receipt notes',
          'Masuk ke halaman Good Receipt Notes',
          'Kemudian klik tombol New, lalu pilih From Purchase Order',
          'Setelah itu isi kolom Vendor dan Store ',
          'Kemudian klik tombol Convert from',
          'Muncul form Convert Handler, pilih Convert form : Purchase Order ',
          'Lalu ceklis Document No pada Header Details setelah itu ceklis select all',
          'Kemudian klik tombol Ok',
          'Setelah itu kembali ke halaman good receipt note, isi kolom Gate entry date dan Gate entry No.',
          'Lalu isi kolom Batch code, Expiry Date dan MRP pada item obat',
          'Jika sudah klik tab other details, kemudian isi field Invoice No, Invoice Date, Delivery challan no dan Delivery challan date',
          'Setelah itu klik tab item kembali, lalu klik save',
          'Tampil informasi “Good receipt note saved successfully”',
          'Lalu klik tombol edit',
          'Setelah itu klik tombol Send for Approval',
          'Maka akan muncul informasi “Good receipt note sent for approval” ',
          'Kemudian klik edit pada kolom action',
          'Setelah itu klik tombol approve ',
          'Maka akan muncul informasi “Good Receipt note approved”'
        ],
      }
    ]
  },

  'kriteria-penginputan-purchase-order-dan-good-receipt-note': {
    id: 'kriteria-penginputan-purchase-order-dan-good-receipt-note',
    menuKey: 'procurement',
    submenuId: 'kriteria-po-grn',
    itemTitle: 'Kriteria Penginputan Purchase Order dan Good Receipt Note',
    steps: [
      {
        id: 'good-receipt-note-step-1',
        number: 1,
        title: 'Kriteria Penginputan Purchase Order dan Good Receipt Note',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          {
            type: 'image',
            title: 'Kriteria Penginputan Purchase Order dan Good Receipt Note',
            content: '/images/procurement/kriteria-penginputan-purchase-order-dan-good-receipt-note/grn.jpg'
          }
        ],
      }
    ]
  },

  /* Maul-21/11/2025 */

   /* heru-21/11/2025 */
   'stock-opname': {
    id: 'stock-opname',
    menuKey: 'inventory',
    submenuId: 'stock-opname',
    itemTitle: 'Stock Opname',
    steps: [
      {
        id: 'stock-opname-step-1',
        number: 1,
        title: 'Stock Opname',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Berikut adalah cara untuk melakukan Stock Taking Initiation :  Stock Taking Initiation',
                  'Dalam melakukan stock taking initiation dapat dilakukan dengan 2 cara :',
                  'Stock Taking Online',
                  'Stock Taking dengan menggunakan worksheet Offline',
                  'Cara untuk upload worksheet csv adalah sebagai berikut :  Upload worksheet csv',
                  'Pada menu Apps, pilih Menu Inventory',
                  'Lalu pilih menu Stock Taking Initiation',
                  'Kemudian Klik Tombol New ',
                  'Masuk ke halaman Stock Taking',
                  'Isi Store (Ruangan yg akan dilakukan stok opname)',
                  'Isi Team (Tim yang melakukan stok opname)',
                  'Isi User Name (Petugas yang melakukan opname)',
                  'Isi kolom Remarks untuk keterangan',
                  'Setelah itu Klik tombol Add Line Item',
                  'Kemudian pilih Item yang akan dilakukan penghitungan ',
                  'Apabila item akan dipilh semua klik Select All',
                  'Setelah itu klik tombol Submit',
                  'Kemudian Klik Send Approval ',
                  'Cari ruangannya, kemudian klik Action',
                  'Masuk ke halaman Stock Taking, lalu Klik tombol Approve ',
                  'Muncul informasi bahwa “Stock Taking Approved” ',
                  'Kembali ke menu Inventory, lalu pilih Stock Taking',
                  'Cari ruangannya, kemudian klik Action. ',
                  'Masuk ke halaman Stock Taking, ',
                  'Input Stock Quantity berdasarkan perhitungan Stock Fisik  ',
                  'Isi Remarks untuk hasil perhitungan berbeda antara Stock Komputer dengan Stock Fisik',
                  'Kemudian klik Send For Approval',
                  'Secara sistem akan mengelompokan hasil perhitungan positif akan masuk ke dalam adjusment receipt sedangkan hasil perhitungan negatif akan masuk ke adjusment issue pada modul inventory adjusment',
                  'Cari ruangannya, kemudian klik Action ',
                  'Masuk ke halaman Stock Taking, lalu Klik tombol Approve ',
                  'Muncul informasi bahwa “Stock Taking Approved” ',
                  'Stock Taking Penyesuaian adalah sebagai berikut :  Stock Taking Penyesuaian',
                  'Pilih Inventory Adjustment',
                  'Pilih Adjustment Type (Adjustment Receipt / Adjustment Issue)',
                  'Kemudian Klik Send Approval (Adjustment Receipt)',
                  'Muncul informasi "Inventory Adjusment Sent for Approval" Lalu klik Action ',
                  'Masuk ke halaman Inventory Adjustment, kemudian Klik tombol Approve (Adjustment Receipt)',
                  'Muncul informasi bahwa “Inventory Adjustment Approved” (Adjustment Receipt)',
                  'Pilih Adjustment Type (Adjustment Receipt / Adjustment Issue)',
                  'Kemudian Klik Send Approval (Adjustment Issued)',
                  'Muncul Informasi "Inventory Adjusment Sent for Approval" Kemudian klik Action',
                  'Masuk ke halaman Inventory Adjustment, kemudian Klik tombol Approve (Adjustment Issued)',
                  'Muncul informasi bahwa “Inventory Adjustment Approved” (Adjustment Issued)',
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

        'penyesuaian-barang': {
    id: 'penyesuaian-barang',
    menuKey: 'inventory',
    submenuId: 'penyesuaian-barang',
    itemTitle: 'Penyesuaian Barang',
    steps: [
      {
        id: 'penyesuaian-barang-step-1',
        number: 1,
        title: 'Penyesuaian Barang',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, Pilih Inventory',
          'Pilih inventory adjustment ',
          'Klik tombol new, lalu pilih adjustment issue (Pilih sesuai kebutuhan, dalam contoh kasus ini memilih adjustment Issue)',
          'Note :',
          'Adjustment Receipt : Untuk Penyesuaian Hasil Positif (+)',
          'Adjustment Issue : Untuk Penyesuaian Hasil Negatif (-)',
          'Masuk ke halaman adjustment issue, Isi tanggal dan pilih store  (Store : Ruangan yang akan dilakukan penyesuaian)',
          'Kemudian klik tombol add new (Add New : Untuk memasukkan data penyesuaian)',
          'Isi form inventory adjustment, jika sudah klik tombol add',
          'Klik tombol send approval',
          'Setelah itu akan muncul pesan bahwa data sudah terkirim, lalu klik edit pada kolom action',
          'Muncul halaman edit, lalu pilih tombol approve',
          'Setelah itu akan muncul pesan bahwa data sudah diapprove, lalu klik edit pada kolom action',
          'Muncul halaman edit kemudian pilih tombol related document',
          'Lalu pilih tombol print',
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

       'inventory-adjustment-with-quantity-and-value': {
    id: 'inventory-adjustment-with-quantity-and-value',
    menuKey: 'inventory',
    submenuId: 'Laporan',
    itemTitle: 'Penyesuaian Barang',
    steps: [
      {
        id: 'inventory-adjustment-with-quantity-and-value-step-1',
        number: 1,
        title: 'Inventory Adjustment With Quantity and Value',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama (home) klik tab reports',
          'Pilih inventory pada sisi bilah kiri',
          'Klik inventory adjustment with quantity and value',
          'Pilih branch, store dan tanggal (disesuaikan)',
          'Dalam melihat tampilan laporan terdapat 4 tipe yaitu dalam bentuk tabel di sistem, melalui browser, pdf dan ms.excel',
          'Klik icon report (sesuai pilihan)',
          'Maka akan tampil laporan sebagai berikut :',
          'Jika klik icon report tipe browser',
          'Maka akan tampil laporan sebagai berikut :',
          'Jika klik icon report dalam bentuk pdf',
          'Maka akan tampil laporan sebagai berikut :',
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

       'adjustment-details-report': {
    id: 'adjustment-details-report',
    menuKey: 'inventory',
    submenuId: 'Laporan',
    itemTitle: 'Adjustment Details Report',
    steps: [
      {
        id: 'adjustment-details-report-step-1',
        number: 1,
        title: 'Adjustment Details Report',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama (home) klik tab reports',
          'Pilih inventory pada sisi bilah kiri',
          'Klik inventory adjustment detail reports',
          'Pilih tanggal dan store (disesuaikan)',
          'Dalam melihat tampilan laporan terdapat 4 tipe yaitu dalam bentuk tabel di sistem, html, pdf dan ms.excel',
          'Klik icon report (sesuai pilihan)',
          'Maka akan tampil laporan sebagai berikut :',
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

       'inventory-adjustment-and-receipt': {
    id: 'inventory-adjustment-and-receipt',
    menuKey: 'inventory',
    submenuId: 'Laporan',
    itemTitle: 'Inventory Adjustment and Receipt',
    steps: [
      {
        id: 'inventory-adjustment-and-receipt-step-1',
        number: 1,
        title: 'Inventory Adjustment and Receipt',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama (home) klik tab reports',
          'Pilih inventory pada sisi bilah kiri',
          'Klik inventory adjustment dan receipt',
          'Pilih tanggal, branch dan store (disesuaikan)',
          'Dalam melihat tampilan laporan terdapat 4 tipe yaitu dalam bentuk tabel di sistem, html, pdf dan ms.excel',
          'Klik icon report (sesuai pilihan)',
          'Maka akan tampil laporan sebagai berikut :',
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

         'stock-ledger': {
    id: 'stock-ledger',
    menuKey: 'inventory',
    submenuId: 'Laporan',
    itemTitle: 'Stock Ledger',
    steps: [
      {
        id: 'stock-ledger-step-1',
        number: 1,
        title: 'Stock Ledger',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama (home) klik tab reports',
          'Pilih inventory pada sisi bilah kiri',
          'Klik stock ledger',
          'Pilih tanggal, branch, store dan item name (disesuaikan)',
          'Dalam melihat tampilan laporan terdapat 4 tipe yaitu dalam bentuk tabel di sistem, html, pdf dan ms.excel',
          'Klik icon report (sesuai pilihan)',
          'Maka akan tampil laporan sebagai berikut :',
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

         'stock-position-with-value-report': {
    id: 'stock-position-with-value-report',
    menuKey: 'inventory',
    submenuId: 'Laporan',
    itemTitle: 'Stock Position With Value Report',
    steps: [
      {
        id: 'stock-position-with-value-report-step-1',
        number: 1,
        title: 'Stock Position With Value Report',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama (home) klik tab reports',
          'Pilih inventory pada sisi bilah kiri',
          'Klik stock position with value and report',
          'Pilih branch, store dan item name (disesuaikan)',
          'Dalam melihat tampilan laporan terdapat 4 tipe yaitu dalam bentuk tabel di sistem, html, pdf dan ms.excel',
          'Klik icon report (sesuai pilihan)',
          'Maka akan tampil laporan sebagai berikut :',
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

         'stock-position-report': {
    id: 'stock-position-report',
    menuKey: 'inventory',
    submenuId: 'Laporan',
    itemTitle: 'Stock Position Report',
    steps: [
      {
        id: 'Sstock-position-report-step-1',
        number: 1,
        title: 'Stock Position Report',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama (home) klik tab reports',
          'Pilih inventory pada sisi bilah kiri',
          'Klik stock position report',
          'Pilih till date, store type, branch, store dan item name (disesuaikan)',
          'Dalam melihat tampilan laporan terdapat 4 tipe yaitu dalam bentuk tabel di sistem, html, pdf dan ms.excel',
          'Klik icon report (sesuai pilihan)',
          'Maka akan tampil laporan sebagai berikut :',
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

         'item-movement-summary': {
    id: 'item-movement-summary',
    menuKey: 'inventory',
    submenuId: 'Laporan',
    itemTitle: 'Item Movement Summary',
    steps: [
      {
        id: 'item-movement-summary-step-1',
        number: 1,
        title: 'Item Movement Summary',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama (home) klik tab reports',
          'Pilih inventory pada sisi bilah kiri',
          'Klik item movement summary',
          'Pilih tanggal, branch, store type, store dan item name (disesuaikan)',
          'Dalam melihat tampilan laporan terdapat 4 tipe yaitu dalam bentuk tabel di sistem, html, pdf dan ms.excel',
          'Klik icon report (sesuai pilihan)',
          'Maka akan tampil laporan sebagai berikut :',
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

         'report-fast-slow-non-moving': {
    id: 'report-fast-slow-non-moving',
    menuKey: 'inventory',
    submenuId: 'Laporan',
    itemTitle: 'Report Fast Slow Non Moving',
    steps: [
      {
        id: 'report-fast-slow-non-moving-step-1',
        number: 1,
        title: 'Report Fast Slow Non Moving',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps pilih Reports',
          'Pilih Inventory pada sisi bilah kiri, ',
          'Klik menu reports pilih FSN Reports',
          'Masuk ke halaman FSN Report',
          'Pilih tanggal, Basis of analysis dan store (Disesuaikan)',
          'Dalam melihat tampilan laporan terdapat 4 tipe yaitu dalam bentuk tabel di sistem, html, pdf dan ms.excel',
          'Klik icon report (sesuai pilihan)',
          'Maka akan tampil laporan sebagai berikut :',
          'Kemudian lihat pada kolom F/ S/ N ',
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

  
         'item-reorder-details-report': {
    id: 'item-reorder-details-report',
    menuKey: 'inventory',
    submenuId: 'Laporan',
    itemTitle: 'Item Reorder Details Report',
    steps: [
      {
        id: 'item-reorder-details-report-step-1',
        number: 1,
        title: 'Item Reorder Details Report',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada halaman utama (home) klik tab Reports',
          'Pilih inventory pada sisi bilah kiri',
          'Klik report, lalu pilih Item Reorder Details Report',
          'Pilih branch dan store',
          'Dalam melihat tampilan laporan terdapat 4 tipe yaitu dalam bentuk tabel di sistem, melalui browser, pdf dan ms.excel',
          'Maka akan tampil laporan sebagai berikut jika:',
          {type : 'text', content : '1. Klik icon report ', level: 2 },
          {type : 'text', content : '2. Klik icon report tipe browser', level: 2 },
          {type : 'text', content : '3. Klik icon report dalam bentuk pdf', level: 2 },
          {type : 'text', content : '4. Klik icon ms.excel ', level: 2 },
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
  
         'report-non-moving-dalam-periode-terakhir': {
    id: 'report-non-moving-dalam-periode-terakhir',
    menuKey: 'inventory',
    submenuId: 'Laporan',
    itemTitle: 'Report Non Moving Dalam Periode Terakhir',
    steps: [
      {
        id: 'report-non-moving-dalam-periode-terakhir-step-1',
        number: 1,
        title: 'Report Non Moving Dalam Periode Terakhir',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps pilih Reports',
          'Pilih Inventory pada sisi bilah kiri, ',
          'Klik menu reports pilih Non-moving items report',
          'Masuk ke halaman Non-moving items report',
          'Pilih store dan isi number of days (Disesuaikan)',
          'Dalam melihat tampilan laporan terdapat 4 tipe yaitu dalam bentuk tabel di sistem, html, pdf dan ms.excel',
          'Klik icon report (sesuai pilihan)',
          'Maka akan tampil laporan sebagai berikut :',
          'Kemudian lihat pada kolom Last received date of GRN',
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
  /* heru-21/11/2025 */

  /* Maul-24/11/2025 */
  'update-bed-definition': {
    id: 'update-bed-definition',
    menuKey: 'it-support',
    submenuId: 'update-bed',
    itemTitle: 'Update Bed Definition',
    steps: [
      {
        id: 'update-bed-definition-step-1',
        number: 1,
        title: 'Update Bed Definition',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'PENGERTIAN : ',
          'Bed Definition merupakan pengaturan untuk bed berdasarkan lokasi dan tipe layanan.',
          'TUJUAN :',
          'Memastikan pekerjaan terlaksana dengan benar dan terarah.',
          'DATA TERKAIT :',
          'Bed Type, Service Center, Department',
          'UNIT TERKAIT :',
          'IT Support Rumah Sakit Hermina, Bagian Terkait RS',
          'PELAKSANAAN :',
          'Lokasi Menu Bed Definition',
	          {type : 'text', content : 'Dari halaman app >> masuk ke modul Inpatient', level: 3 },
	          {type : 'text', content : 'Buka Masters >> pilih bed definition', level: 3 },
          'Pembuatan bed',
	          {type : 'text', content : 'Klik tombol “Create”', level: 3 },
	          {type : 'text', content : 'Bed No : diisi dengan nomor tempat tidur (sesaui dengan kondisi fisik, atau pun kebutuhan)', level: 3 },
	          {type : 'text', content : 'Bed Status : Available (jika ingin langsung digunakan)', level: 3 },
	          {type : 'text', content : 'Bed Type : isi dengan kelas atau pelayanan', level: 3 },
	          {type : 'text', content : 'Bed Gender : isi jika ditentukan ada perbedaan peruntukan berdasarkan jenis kelamin', level: 3 },
	          {type : 'text', content : 'Bed Class : isi jika ditentukan ada perbedaan peruntukan berdasarkan jenis kelamin', level: 3 },
	          {type : 'text', content : 'Bed Category : Isi dengan General atau Daycare', level: 3 },
	          {type : 'text', content : 'Department : isi sesuai dengan acuan standar', level: 3 },
	          {type : 'text', content : 'Service Center : isi dengan ruangan yang terdapat di rumah sakit ', level: 3 },
            {type : 'text', content : 'Unit : dikosongkan', level: 3 },
          'Pemutakhiran bed',
	          {type : 'text', content : 'Dari halaman bed definition >> Klik “Modify”', level: 3 },
	          {type : 'text', content : 'Update field data yang ditetapkan', level: 3 },
	          {type : 'text', content : 'Save', level: 3 },
          'Inaktivasi bed',
	          {type : 'text', content : 'Dari halaman bed definition >> Klik “Modify”', level: 3 },
	          {type : 'text', content : 'Lepas centang dari tickbox “Active”', level: 3 },
	          {type : 'text', content : 'Save', level: 3 }
        ],
      }
    ]
  },

  'pengisian-data-karyawan': {
    id: 'pengisian-data-karyawan',
    menuKey: 'it-support',
    submenuId: 'data-karyawan',
    itemTitle: 'Pengisian Data Karyawan',
    steps: [
      {
        id: 'pengisian-data-karyawan-step-1',
        number: 1,
        title: 'Pengisian Data Karyawan',
        description: 'Login ke aplikasi SIMRS Hinai',
        details: [
          'Pada halaman utama (Home) klik Apps ',
          'Tampil beberapa modul pada halaman Apps, pilih modul HR ',
          'Selanjutnya pilih menu Employee',
          'Pada halaman Employees klik New untuk mendaftarkan karyawan baru ',
          'Lakukan pengisian data karyawan, kolom dengan tanda bintang merah adalah mandatory (wajib diisi) di antaranya :',
          {type : 'text', content : '- Isi Employee no', level: 3 },
          {type : 'text', content : '- Pilih Prefix', level: 3 },
          {type : 'text', content : '- Isi nama karyawan pada kolom First name, middle name and last name (disesuaikan)', level: 3 },
          {type : 'text', content : '- Pilih Employee category', level: 3 },
          {type : 'text', content : '- Pilih Status', level: 3 },
          {type : 'text', content : '- Pilih Hospital', level: 3 },
          {type : 'text', content : '- Pilih Department', level: 3 },
          {type : 'text', content : '- Isi Date of birth', level: 3 },
          {type : 'text', content : '- Pilih Gender', level: 3 },
          {type : 'text', content : '- Pilih Designation', level: 3 },
          {type : 'text', content : '- Isi License no', level: 3 },
          {type : 'text', content : '- Untuk kolom License No (SIP) tidak perlu diisi', level: 3 },
          'Klik Save employee',
          'Selanjutnya isi data keterangan Employee Medical License dengan melengkapi kolom sebagai berikut :',
          {type : 'text', content : '-  Pilih Site', level: 3 },
          {type : 'text', content : '-  Isi Registration number', level: 3 },
          {type : 'text', content : '- Isi Licensing Authority', level: 3 },
          {type : 'text', content : '- Isi Valid Till', level: 3 },
          {type : 'text', content : '- Ceklis Active', level: 3 },
          'Klik save, maka data telah tersimpan',
          'Jika ada perubahan data klik edit ',
          'Lakukan perubahan data, klik save ',
          'Maka data berhasil dilakukan perubahan',
          'Jika sudah sesuai klik Save employee',
          'Tampil notifikasi apakah data sudah benar-benar sesuai dan sudah diverifikasi',
          'Kemudian klik Processed',
          'Maka tampil notifikasi data karyawan sudah berhasil disimpan'
        ],
      }
    ]
  },

  /* Maul-24/11/2025 */

  /* heru-24/11/2025 */

  'proses-penerimaan-transaksi-rawat-jalan-tunai': {
    id: 'proses-penerimaan-transaksi-rawat-jalan-tunai',
    menuKey: 'keuangan',
    submenuId: 'pelunasan-rawat-jalan',
    itemTitle: 'Proses Penerimaan Transaksi Rawat Jalan Tunai',
    steps: [
      {
        id: 'proses-penerimaan-transaksi-rawat-jalan-tunai-step-1',
        number: 1,
        title: 'Proses Penerimaan Transaksi Rawat Jalan Tunai',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps pilih menu Hospital Account',
          'Pilih menu Billing pada Sisi Bilah Kiri, kemudian Klik Invoice Billing',
          'Kemudian masuk ke halaman Invoice Billing',
          'Pada menu tab invoice, kemudian klik tombol New',
          'Lalu pilih New',
          'Masuk ke halaman Final invoice',
          'Cari pasien berdasarkan informasi Nama atau MRN',
          'Setelah menemukan pasien, klik pada nama pasien maka surat tagihan untuk pasien akan muncul',
          'Isi nama penanggung jawab kwitansi ( Nama Orang Tua Pasien/Nama Pasien/ Nama Penanggung Jawab/Nama Perusahaan ) di field payor name',
          'Klik ceklis pada kolom cash',
          'Masukan jumlah pembayaran yang diterima dari pasien pada field Collected Cash Amount',
          'Klik di luar Field maka akan muncul jumlah yang harus dikembalikan pada pasien jika ada pada Amount To Be Returned',
          'Klik tombol Save and Send For Approval',
          'Maka akan tampil bukti pembayaran sebagai berikut :',
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

        'proses-penerimaan-transaksi-rawat-jalan-card': {
    id: 'proses-penerimaan-transaksi-rawat-jalan-card',
    menuKey: 'keuangan',
    submenuId: 'pelunasan-rawat-jalan',
    itemTitle: 'Proses Penerimaan Transaksi Rawat Jalan Card',
    steps: [
      {
        id: 'proses-penerimaan-transaksi-rawat-jalan-card-step-1',
        number: 1,
        title: 'Proses Penerimaan Transaksi Rawat Jalan Card',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps pilih menu Hospital Account',
          'Pilih menu Billing pada Sisi Bilah Kiri, kemudian Klik Invoice Billing ',
          'Kemudian masuk ke halaman Invoice Billing',
          'Pada menu tab invoice, kemudian klik tombol New',
          'Lalu pilih New',
          'Kemudian masuk ke halaman Final invoice',
          'Cari pasien berdasarkan informasi Nama atau MRN',
          'Setelah menemukan pasien, data pasien akan muncul',
          'Lengkapi data pada bagian payment details, ceklis card lalu klik pay by credit card',
          'Isi data di credit card details dengan mengisi card no, bank name, authorization no, lalu pilih card equipment dan card type',
          'Jika sudah klik tombol Update',
          'Isi nama penanggung jawab kwitansi ( Nama Orang Tua Pasien/Nama Pasien/ Nama Penanggung Jawab/Nama Perusahaan ) di field payor name ',
          'Jika nilai Amount sudah sesuai klik tombol Save and Send for Approval',
          'Maka akan tampil Bukti Pembayaran sebagai berikut :',
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
  
        'jaminan-dengan-nama-customer-sesuai-dan-dengan-selisih-pembayaran': {
    id: 'jaminan-dengan-nama-customer-sesuai-dan-dengan-selisih-pembayaran',
    menuKey: 'keuangan',
    submenuId: 'pelunasan-rawat-jalan',
    itemTitle: 'Jaminan Dengan Nama Customer Sesuai dan Dengan Selisih Pembayaran',
    steps: [
      {
        id: 'jaminan-dengan-nama-customer-sesuai-dan-dengan-selisih-pembayaran-step-1',
        number: 1,
        title: 'Jaminan Dengan Nama Customer Sesuai dan Dengan Selisih Pembayaran',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada menu Apps pilih menu Hospital Account',
                  'Pilih menu Billing pada Sisi Bilah Kiri, kemudian Klik Invoice Billing',
                  'Kemudian masuk ke halaman Invoice Billing',
                  'Pada menu tab invoice, kemudian klik tombol New',
                  'Lalu pilih New',
                  'Kemudian masuk ke halaman Final invoice',
                  'Cari pasien berdasarkan informasi Nama atau MRN',
                  'Setelah menemukan pasien, data pasien akan muncul',
                  'Kemudian pilih menu care plan pada sisi bilah kir',
                  'Klik patient plan',
                  'Klik New',
                  'Cari pasien berdasarkan informasi Nama atau MRN',
                  'Maka akan tampil data pasien',
                  'Klik ikon kaca pembesar',
                  'Ketik “Plan” pada kolom Name',
                  'Lalu pilih visit type “OP”',
                  'Isi authorization no dan approved ammount',
                  'Klik Add authorization',
                  'Setelah itu klik Update rule',
                  'Klik save plan',
                  'Maka akan tampil informasi “Data jaminan tersebut telah berhasil disimpan”',
                  'Klik Related documents, pilih Patient invoice',
                  'Pada menu tab invoice, kemudian klik tombol New',
                  'Lalu pilih New',
                  'Cari pasien berdasarkan informasi Nama atau MRN',
                  'Maka data pasien akan tampil',
                  'Isi nama penanggung jawab kwitansi ( Nama Orang Tua Pasien/Nama Pasien/ Nama Penanggung Jawab/Nama Perusahaan ) di field payor name',
                  'Klik ceklis pada kolom cash atau card',
                  'Cash yaitu sesuai tahapan cash ',
                  'Card yaitu  sesuai tahapan card',
                  'Masukan jumlah pembayaran yang diterima dari pasien pada field Collected Cash Amount',
                  'Klik di luar Field maka akan muncul jumlah yang harus dikembalikan pada pasien jika ada pada Amount To Be Returned',
                  'Klik tombol Save and Send For Approval',
                  'Maka akan tampil laporan sebagai berikut :',
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

          'jaminan-dengan-nama-customer-sesuai-dan-di-jamin-seluruhnya': {
    id: 'jaminan-dengan-nama-customer-sesuai-dan-di-jamin-seluruhnya',
    menuKey: 'keuangan',
    submenuId: 'pelunasan-rawat-jalan',
    itemTitle: 'Jaminan Dengan Nama Customer Sesuai dan di Jamin Seluruhnya',
    steps: [
      {
        id: 'jaminan-dengan-nama-customer-sesuai-dan-di-jamin-seluruhnya-step-1',
        number: 1,
        title: 'Jaminan Dengan Nama Customer Sesuai dan di Jamin Seluruhnya',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps pilih menu Hospital Account',
          'Pilih menu Billing pada Sisi Bilah Kiri, kemudian Klik Invoice Billing',
          'Masuk ke halaman Invoice Billing',
          'Pada menu tab invoice, klik tombol New',
          'Lalu pilih New',
          'Cari pasien berdasarkan no MRN atau nama',
          'Maka akan tampil data pasien dengan keterangan bahwa pasien tersebut dijamin seluruhnya',
          'Lalu klik save and send for approval',
          'Maka akan tampil laporan sebagai berikut :',
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

            'jaminan-dengan-selisih-pembayaran': {
    id: 'jaminan-dengan-selisih-pembayaran',
    menuKey: 'keuangan',
    submenuId: 'pelunasan-rawat-jalan',
    itemTitle: 'Jaminan Dengan Selisih Pembayaran',
    steps: [
      {
        id: 'jaminan-dengan-selisih-pembayaran-step-1',
        number: 1,
        title: 'Jaminan Dengan Selisih Pembayaran',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps pilih menu Hospital Account',
          'Pilih menu Billing pada sisi bilah kiri',
          'Klik Invoice Billing',
          'Masuk ke halaman Invoice Billing',
          'Pada menu tab invoice, klik tombol New',
          'Lalu pilih New',
          'Masuk ke halaman Final invoice',
          'Cari pasien berdasarkan informasi Nama atau MRN',
          'Data pasien akan tampil',
          'Input selisih pembayaran pasien agar muncul di kolom patient summary',
          'Klik Related document',
          'Pilih jaminan pasien (contoh pilih Admedika  - ABDA)',
          'Masuk ke halaman data jaminan pasien',
          'Cari “Plan OP”',
          'Masuk ke halaman Plan Rule',
          'Isi authorization no dan approved ammount',
          'Klik Add authorization',
          'Data telah berhasil ditambahkan ',
          'Klik update and save',
          'Maka akan tampil informasi “Data jaminan telah berhasil disimpan”',
          'Klik Related documents',
          'Pilih New invoice',
          'Tampil keterangan nominal pada Sponsor Summary dan Patient Summary',
          'Jika sudah sesuai klik tombol Save and Send For Approval',
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

        'jaminan-dengan-plan-exclude-menjadi-tercover': {
    id: 'jaminan-dengan-plan-exclude-menjadi-tercover',
    menuKey: 'keuangan',
    submenuId: 'pelunasan-rawat-jalan',
    itemTitle: 'Jaminan Dengan Plan Exclude Menjadi Tercover',
    steps: [
      {
        id: 'jaminan-dengan-plan-exclude-menjadi-tercover-step-1',
        number: 1,
        title: 'Jaminan Dengan Plan Exclude Menjadi Tercover',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada menu Apps pilih menu Hospital Account',
                  'Pilih menu Billing pada Sisi Bilah Kiri, kemudian Klik Invoice Billing',
                  'Kemudian masuk ke halaman Invoice Billing',
                  'Pada menu tab invoice, kemudian klik tombol New',
                  'Lalu pilih New',
                  'Masuk ke halaman Final invoice',
                  'Cari pasien berdasarkan informasi Nama atau MRN',
                  'Lalu akan tampil data pasien',
                  'Berikut data jaminan dengan plan exclude masih belum tercover',
                  'Pilih menu care plan pada sisi bilah kiri',
                  'Lalu klik patient plan',
                  'Kemudian pilih New',
                  'Cari pasien berdasarkan no. MRN atau nama',
                  'Maka akan tampil data pasien',
                  'Klik ikon kaca pembesar',
                  'Ketik “Plan” pada kolom Name',
                  'Pilih item service yang tidak dijamin',
                  'Klik unchecklist di keterangan Exclusion',
                  'Lalu klik Update rule',
                  'Klik Save plan',
                  'Maka akan tampil informasi bahwa data telah berhasil disimpan',
                  'Klik Related documents',
                  'Pilih patient invoices',
                  'Klik New, lalu pilih New kembali',
                  'Cari nama pasien berdasarkan nama pasien atau no.MRN',
                  'Maka akan tampil data pasien',
                  'Sekarang jaminan dengan plan exclude sudah tercover',
                  'Lalu klik save and send  for approval',
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

        'jaminan-dengan-mengubah-atau-mengedit-nilai-plan-yang-dijamin': {
    id: 'jaminan-dengan-mengubah-atau-mengedit-nilai-plan-yang-dijamin',
    menuKey: 'keuangan',
    submenuId: 'pelunasan-rawat-jalan',
    itemTitle: 'Jaminan Dengan Mengubah atau Mengedit Nilai Plan yang Dijamin',
    steps: [
      {
        id: 'jaminan-dengan-mengubah-atau-mengedit-nilai-plan-yang-dijamin-step-1',
        number: 1,
        title: 'Jaminan Dengan Mengubah atau Mengedit Nilai Plan yang Dijamin',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada menu Apps pilih Hospital Account',
                  'Pada sisi bilah kiri klik menu Care plan',
                  'Pilih patient plan',
                  'Klik search',
                  'Lakukan pencarian data berdasarkan kriteria',
                  'Contoh berikut menggunakan pencarian berdasarkan no.MRN pasien',
                  'Klik search',
                  'Data pasien sudah ditemukan',
                  'Klik plan name pasien',
                  'Tampil data pasien',
                  'Klik ikon kaca pembesar',
                  'Pada kolom name, cari dengan kata “plan”',
                  'Klik Plan dengan Type : OP',
                  'Tampil data plan pasien yang sudah ada',
                  'Klik ikon edit',
                  'Lakukan edit nilai yang dijamin,  bukan menginput nilai approved amount yang baru',
                  'Ubah nilai plan (disesuaikan)',
                  'Klik Add authorization',
                  'Jika nilai plan sudah sesuai klik Update rule',
                  'Kemudian klik save plan',
                  'Maka akan tampil informasi plan sudah berhasil diperbarui',
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

          'jaminan-pemeriksaan-penunjang-medis-yang-dilakukan-dengan-hari-yang-berbeda': {
    id: 'jaminan-pemeriksaan-penunjang-medis-yang-dilakukan-dengan-hari-yang-berbeda',
    menuKey: 'keuangan',
    submenuId: 'pelunasan-rawat-jalan',
    itemTitle: 'Jaminan Pemeriksaan Penunjang Medis yang Dilakukan Dengan Hari Yang Berbeda',
    steps: [
      {
        id: 'jaminan-pemeriksaan-penunjang-medis-yang-dilakukan-dengan-hari-yang-berbeda-step-1',
        number: 1,
        title: 'Jaminan Pemeriksaan Penunjang Medis yang Dilakukan Dengan Hari Yang Berbeda',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada menu Apps pilih menu Hospital Account',
                  'Pilih menu Billing pada Sisi Bilah Kiri, kemudian Klik Invoice Billing',
                  'Kemudian masuk ke halaman Invoice Billing',
                  'Pada menu tab invoice, kemudian klik tombol New',
                  'Lalu pilih New',
                  'Masuk ke halaman Final invoice',
                  'Cari pasien berdasarkan informasi Nama atau MRN',
                  'Kemudian klik item order yang diinginkan',
                  'Lalu klik unbil items',
                  'Pilih reason for unbilling : Penunjang beda hari',
                  'Klik ok',
                  'Klik save and send for approval',
                  'Maka akan tampil informasi “Invoice saved successfully”',
                  'Untuk melunasi transaksi yang diunbill klik New',
                  'Pilih new kembali',
                  'Masuk ke halaman Final invoice',
                  'Cari pasien berdasarkan informasi Nama atau MRN',
                  'Kemudian klik tab change item',
                  'Klik tanda ceklis pada kolom select',
                  'Klik tombol add',
                  'Maka akan tampil informasi “successfully added to invoice”',
                  'Maka item order tersebut tampil kembali',
                  'Kemudian klik save and send for approval',
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

        'jaminan-yang-tidak-dijamin-pada-akhir-transaksi': {
    id: 'jaminan-yang-tidak-dijamin-pada-akhir-transaksi',
    menuKey: 'keuangan',
    submenuId: 'pelunasan-rawat-jalan',
    itemTitle: 'Jaminan yang Tidak Dijamin Pada Akhir Transaksi',
    steps: [
      {
        id: 'jaminan-yang-tidak-dijamin-pada-akhir-transaksi-step-1',
        number: 1,
        title: 'Jaminan yang Tidak Dijamin Pada Akhir Transaksi',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada menu Apps pilih menu Hospital Account',
                  'Pilih menu Billing pada Sisi Bilah Kiri, kemudian Klik Invoice Billing',
                  'Kemudian masuk ke halaman Invoice Billing',
                  'Pada menu tab invoice, kemudian klik tombol New',
                  'Lalu pilih New',
                  'Masuk ke halaman Final invoice',
                  'Cari pasien berdasarkan informasi Nama atau MRN',
                  'Tampil data pasien',
                  'Tampil jumlah nominal yang dijaminkan',
                  'Klik care plan, kemudian hilangkan tanda centang pada kolom penjamin',
                  'Kemudian data penjamin telah tercover',
                  'Setelah itu klik ptanda centang pada field cash',
                  'Isi jumlah nominal',
                  'Klik save and send for approval',
                  'Maka data pasien telah berhasil tersimpan',
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

        'pembayaran-jaminan-dengan-ganti-customer-penjamin': {
    id: 'pembayaran-jaminan-dengan-ganti-customer-penjamin',
    menuKey: 'keuangan',
    submenuId: 'pelunasan-rawat-jalan',
    itemTitle: 'Pembayaran Jaminan Dengan Ganti Customer Penjamin',
    steps: [
      {
        id: 'pembayaran-jaminan-dengan-ganti-customer-penjamin-step-1',
        number: 1,
        title: 'Pembayaran Jaminan Dengan Ganti Customer Penjamin',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada menu Apps pilih menu Hospital Account',
                  'Pilih menu Billing pada sisi bilah kiri',
                  'Klik Invoice Billing',
                  'Masuk ke halaman Invoice',
                  'Klik New, pilih New',
                  'Cari pasien berdasarkan nama atau no.MRN',
                  'Tampil data pasien, cek data jaminan pasien',
                  'Kemudian jaminan tersebut ingin diganti dengan jaminan yang baru',
                  'Klik menu care plan, pilih patient policy details',
                  'Cari pasien berdasarkan nama atau no.MRN',
                  'Lengkapi form pada kolom sebagai berikut :',
                  'Plan name',
                  'Policy valid until',
                  'Policy start date',
                  'Group id/policy no',
                  'Billing order',
                  'Klik pada kolom active',
                  'Klik tombol save',
                  'Maka akan tampil informasi “Policy details saved successfully”',
                  'Sekarang pasien memiliki dua data jaminan, dan keduanya aktif.',
                  'Untuk menonaktifkan salah satu jaminan yaitu pilih salah satu data jaminan yang ingin dinonaktifkan',
                  'Klik edit',
                  'Hilangkan tanda centang pada kolom active',
                  'Klik tombol save',
                  'Maka akan tampil informasi “Policy details saved successfully”',
                  'Kemudian klik related documents',
                  'Pilih patient invoices',
                  'Kembali ke halaman invoices',
                  'Klik New, pilih new',
                  'Cari pasien berdasarkan nama atau no.MRN',
                  'Maka data jaminan pasien tersebut sudah terganti',
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

        'prosedur-penginputan-transaksi-pasien-masalah-rawat-jalan': {
    id: 'prosedur-penginputan-transaksi-pasien-masalah-rawat-jalan',
    menuKey: 'keuangan',
    submenuId: 'pelunasan-rawat-jalan',
    itemTitle: 'Prosedur Penginputan Transaksi Pasien Masalah Rawat Jalan',
    steps: [
      {
        id: 'prosedur-penginputan-transaksi-pasien-masalah-rawat-jalan-step-1',
        number: 1,
        title: 'Prosedur Penginputan Transaksi Pasien Masalah Rawat Jalan',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
          'Pada menu Apps, pilih Hospital Account',
          'Pada sisi bilah kiri klik menu Billing',
          'Pilih invoice billing',
          'Pada halaman invoice billing klik New',
          'Pilih new',
          'Cari pasien berdasarkan no.MRN atau nama',
          'Tampil data pasien  sebagai berikut :',
          'Keterangan :',
          {type : 'text', content : '1.  Input nilai kekurangan pembayaran pasien menjadi "JAMINAN PASIEN MASALAH RAWAT JALAN"', level: 2 },
          {type : 'text', content : '2.  Lakukan penginputan nama penjamin dahulu di Patient Policy Details', level: 2 },
          'Pada sisi bilah kiri klik menu care plan',
          'Pilih patient policy details',
          'Cari pasien berdasarkan no. MRN atau nama',
          'Pilih plan name dengan Pasien Masalah Rawat Jalan',
          'Lengkapi form pada kolom sebagai berikut :',
          {type : 'text', content : 'Policy valid until', level: 2 },
          {type : 'text', content : 'Policy start date', level: 2 },
          {type : 'text', content : 'Group id/policy no', level: 2 },
          {type : 'text', content : 'Billing order', level: 2 },
          {type : 'text', content : 'Klik pada kolom active', level: 2 },
          {type : 'text', content : 'Klik tombol save', level: 2 },
          'Maka akan tampil informasi “Policy details saved successfully”',
          'Pada sisi bilah kiri klik menu care plan',
          'Pilih patient plan',
          'Setelah itu input nilai kekurangan pembayaran pasien',
          'Klik New',
          'Cari pasien berdasarkan no. MRN atau nama',
          'Tampil data pasien',
          'Untuk menginput plan, klik ikon kaca pembesar',
          'Pada kolom name, cari dengan kata “plan”',
          'Klik Plan dengan Type : OP',
          'Isi kolom authorization. no dan approved amount (Nilai kekurangan pembayaran pasien)',
          'Klik add authorization',
          'Jika sudah sesuai klik update rule',
          'Kemudian klik save plan',
          'Maka akan tampil informasi “Pasien Masalah Rawat Jalan is successfully saved”',
          'Pada sisi bilah kiri klik menu Billing',
          'Pilih invoice billing',
          'Pada halaman invoice billing klik New',
          'Pilih new',
          'Cari pasien berdasarkan no.MRN atau nama',
          'Pada keterangan care plan pasien sudah tercover dengan plan Pasien masalah rawat jalan',
          'Klik save and send for approval',
          'Maka akan tampil laporan sebagai berikut :',
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

        'pelunasan-transaksi-rawat-inap-dengan-cara-bayar-tunai': {
    id: 'pelunasan-transaksi-rawat-inap-dengan-cara-bayar-tunai',
    menuKey: 'keuangan',
    submenuId: 'pelunasan-rawat-inap',
    itemTitle: 'Pelunasan Transaksi Rawat Inap Dengan Cara Bayar Tunai',
    steps: [
      {
        id: 'pelunasan-transaksi-rawat-inap-dengan-cara-bayar-tunai-step-1',
        number: 1,
        title: 'Pelunasan Transaksi Rawat Inap Dengan Cara Bayar Tunai',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada menu Apps pilih menu Hospital Account',
                  'Pilih menu Billing pada Sisi Bilah Kiri, kemudian Klik Invoice Billing',
                  'Masuk ke halaman invoice billing',
                  'Klik select, pilih settle invoice',
                  'Kemudian akan tampil data pasien',
                  'Klik item pada tab adjust receipt',
                  'Lalu klik kolom cash, isi jumlah nominal',
                  'Klik settle invoice',
                  'Maka akan tampil laporan sebagai berikut:',         {
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

        'pelunasan-transaksi-rawat-inap-dengan-cara-bayar-card': {
    id: 'pelunasan-transaksi-rawat-inap-dengan-cara-bayar-card',
    menuKey: 'keuangan',
    submenuId: 'pelunasan-rawat-inap',
    itemTitle: 'Pelunasan Transaksi Rawat Inap Dengan Cara Bayar Card',
    steps: [
      {
        id: 'pelunasan-transaksi-rawat-inap-dengan-cara-bayar-card-step-1',
        number: 1,
        title: 'Pelunasan Transaksi Rawat Inap Dengan Cara Bayar Card',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada menu Apps pilih menu Hospital Account',
                  'Pilih menu Billing pada Sisi Bilah Kiri, kemudian Klik Invoice Billing',
                  'Masuk ke halaman invoice billing',
                  'Klik select, pilih settle invoice',
                  'Kemudian akan tampil data pasien',
                  'Klik item pada tab adjust receipt',
                  'Lalu klik kolom card',
                  'Klik pay by credit card',
                  'Isi data di credit card details dengan mengisi card no, bank name, authorization no, ',
                  'lalu pilih card equipment dan card type',
                  'Jika sudah klik tombol Update',
                  'Lalu klik settle invoice',
                  'Maka akan tampil laporan sebagai berikut:',
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

        'pelunasan-rawat-inap-dengan-selisih-biaya-dibayar-di-rs': {
    id: 'pelunasan-rawat-inap-dengan-selisih-biaya-dibayar-di-rs',
    menuKey: 'keuangan',
    submenuId: 'pelunasan-rawat-inap',
    itemTitle: 'Pelunasan Rawat Inap Dengan Selisih Biaya Dibayar Di RS',
    steps: [
      {
        id: 'pelunasan-rawat-inap-dengan-selisih-biaya-dibayar-di-rs-step-1',
        number: 1,
        title: 'Pelunasan Rawat Inap Dengan Selisih Biaya Dibayar Di RS',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada menu Apps pilih menu Hospital Account',
                  'Pilih menu Billing pada Sisi Bilah Kiri, kemudian Klik Invoice Billing',
                  'Cari nama pasien, dengan invoice status “Pending” dan status sudah di approved',
                  'Klik select',
                  'Pilih settle invoice',
                  'Tampil data pasien',
                  'Pilih metode pembayaran (disesuaikan)',
                  'Klik settle invoice',
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

        'pelunasan-rawat-inap-yang-dijamin-seluruhnya-oleh-jaminan-atau-asuransi': {
    id: 'pelunasan-rawat-inap-yang-dijamin-seluruhnya-oleh-jaminan-atau-asuransi',
    menuKey: 'keuangan',
    submenuId: 'pelunasan-rawat-inap',
    itemTitle: 'Pelunasan Rawat Inap yang Dijamin Seluruhnya Oleh Jaminan atau Asuransi',
    steps: [
      {
        id: 'pelunasan-rawat-inap-yang-dijamin-seluruhnya-oleh-jaminan-atau-asuransi-step-1',
        number: 1,
        title: 'Pelunasan Rawat Inap yang Dijamin Seluruhnya Oleh Jaminan atau Asuransi',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada halaman utama (home) pilih jumlah pending tasks',
                  'Cari nama pasien',
                  'Lalu klik form',
                  'Tampil data pasien',
                  'Cek kembali data pasien tersebut',
                  'Lalu klik save and send for approval',
                  'Maka akan tampil laporan sebagai berikut :',
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

        'prosedur-pengajuan-pembatalan-transaksi': {
    id: 'prosedur-pengajuan-pembatalan-transaksi',
    menuKey: 'keuangan',
    submenuId: 'pembatalan-transaksi',
    itemTitle: 'Prosedur Pengajuan Pembatalan Transaksi',
    steps: [
      {
        id: 'prosedur-pengajuan-pembatalan-transaksi-step-1',
        number: 1,
        title: 'Prosedur Pengajuan Pembatalan Transaksi',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada menu Apps pilih menu Hospital Account',
                  'Pilih menu billing klik invoice billing',
                  'Cari pasien, klik select',
                  'Pilih cancel invoice',
                  'Maka akan tampil data pasien',
                  'Pilih Reason dan isi cancel remarks',
                  'Klik Request for cancel approval',
                  'Maka akan tampil informasi “Invoice cancelled successfully”',
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

        'prosedur-approval-transaksi-pembatalan': {
    id: 'prosedur-approval-transaksi-pembatalan',
    menuKey: 'keuangan',
    submenuId: 'pembatalan-transaksi',
    itemTitle: 'Prosedur Approval Transaksi Pembatalan',
    steps: [
      {
        id: 'prosedur-approval-transaksi-pembatalan-step-1',
        number: 1,
        title: 'Prosedur Approval Transaksi Pembatalan',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada halaman utama home klik Pending task',
                  'Cari nama pasien',
                  'Kemudian klik form',
                  'Tampil data pasien',
                  'Lalu klik Approve',
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

        'prosedur-penginputan-revisi-transaksi': {
    id: 'prosedur-penginputan-revisi-transaksi',
    menuKey: 'keuangan',
    submenuId: 'pembatalan-transaksi',
    itemTitle: 'Prosedur Penginputan Revisi Transaksi',
    steps: [
      {
        id: 'prosedur-penginputan-revisi-transaksi-step-1',
        number: 1,
        title: 'Prosedur Penginputan Revisi Transaksi',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada menu Apps pilih menu Hospital Account',
                  'Pilih menu billing klik invoice billing',
                  'Klik New, lalu pilih new kembali',
                  'Cari pasien berdasarkan nama atau no MRN',
                  'Tampil data pasien',
                  'Klik ceklis kolom cash',
                  'Isi collected cash amount',
                  'Klik save and send for approval',
                  'Maka akan tampil laporan sebagai berikut :',
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

        'proses-penerimaan-uang-muka-dengan-cara-bayar-tunai': {
    id: 'proses-penerimaan-uang-muka-dengan-cara-bayar-tunai',
    menuKey: 'keuangan',
    submenuId: 'uang-muka',
    itemTitle: 'Proses Penerimaan Uang Muka Dengan Cara Bayar Tunai',
    steps: [
      {
        id: 'proses-penerimaan-uang-muka-dengan-cara-bayar-tunai-step-1',
        number: 1,
        title: 'Proses Penerimaan Uang Muka Dengan Cara Bayar Tunai',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada menu Apps, pilih hospital account pada sisi bilah kiri',
                  'Klik collection request',
                  'Cari nama pasien, klik select',
                  'Pilih create receipt',
                  'Maka akan tampil data pasien',
                  'Klik ceklis pada kolom cash',
                  'Lalu klik Accept Deposit and Print',
                  'Maka akan tampil laporan sebagai berikut :',
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

        'proses-penerimaan-uang-muka-dengan-cara-bayar-card': {
    id: 'proses-penerimaan-uang-muka-dengan-cara-bayar-card',
    menuKey: 'keuangan',
    submenuId: 'uang-muka',
    itemTitle: 'Proses Penerimaan Uang Muka Dengan Cara Bayar Card',
    steps: [
      {
        id: 'proses-penerimaan-uang-muka-dengan-cara-bayar-card-step-1',
        number: 1,
        title: 'Proses Penerimaan Uang Muka Dengan Cara Bayar Card',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada menu Apps, pilih hospital account pada sisi bilah kiri',
                  'Klik collection request',
                  'Cari nama pasien, klik select',
                  'Pilih create receipt',
                  'Maka akan tampil data pasien',
                  'ceklis card lalu klik pay by credit card',
                  'Isi data di credit card details dengan mengisi card no, bank name, authorization no, lalu pilih card equipment dan card type',
                  'Jika sudah klik tombol Update',
                  'Klik Accept Deposit and Print',
                  'Maka akan tampilan sebagai berikut :',
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

        'penerimaan-uang-muka-berdasarkan-collection-type': {
    id: 'penerimaan-uang-muka-berdasarkan-collection-type',
    menuKey: 'keuangan',
    submenuId: 'uang-muka',
    itemTitle: 'Penerimaan Uang Muka Berdasarkan Collection Type',
    steps: [
      {
        id: 'penerimaan-uang-muka-berdasarkan-collection-type-step-1',
        number: 1,
        title: 'Penerimaan Uang Muka Berdasarkan Collection Type',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada menu Apps, pilih hospital account ',
                  'Pilih menu billing pada sisi bilah kiri',
                  'Klik collection request',
                  'Lalu klik New',
                  'Cari pasien berdasarkan no MRN atau nama',
                  'Tampil data pasien, klik add request',
                  'Pilih collection type',
                  'Catatan : ',
                      {type : 'text', content : 'Collection type on account    : Digunakan untuk deposit atau uang muka yang akan mengurangi total transaksi ', level: 2 },
                     {type : 'text', content : 'Collection type security deposit  : ', level: 2 },
                     {type : 'text', content : '1. Digunakan untuk deposit hanya sebagai jaminan dan tidak mengurangi total biaya ', level: 3 },
                     {type : 'text', content : '2. Digunakan untuk cicilan depomil', level: 3 },
                  'Isi jumlah pada field amount',
                  'Lalu klik Add',
                  'Klik ceklis pada kolom cash atau card (disesuaikan)',
                  'Lalu klik Accept deposit and print',
                  'Maka akan tampil laporan sebagai berikut :',
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

          'penerimaan-uang-muka-untuk-transaksi-deposit-kedua-dan-selanjutnya': {
    id: 'penerimaan-uang-muka-untuk-transaksi-deposit-kedua-dan-selanjutnya',
    menuKey: 'keuangan',
    submenuId: 'uang-muka',
    itemTitle: 'Penerimaan Uang Muka Untuk Transaksi Deposit Kedua dan Selanjutnya',
    steps: [
      {
        id: 'penerimaan-uang-muka-untuk-transaksi-deposit-kedua-dan-selanjutnya-step-1',
        number: 1,
        title: 'Penerimaan Uang Muka Untuk Transaksi Deposit Kedua dan Selanjutnya',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada menu Apps, pilih Hospital Account',
                  'Pada sisi bilah kiri klik menu Billing',
                  'Pilih Collection request',
                  'Klik New',
                  'Cari pasien berdasarkan no. MRN atau nama',
                  'Maka akan tampil data pasien',
                  'Kemudian klik Add Request',
                  'Pilih collection type dengan On Account',
                  'Isi jumlah Amount',
                  'Lalu klik Add ',
                  'Maka data berhasil ditambahkan ',
                  'Untuk pembayaran dapat dilakukan dengan cash atau card',
                  'Cash : sesuai prosedur cash',
                  'Card : sesuai prosedur card',
                  'Contoh pembayaran dengan Cash',
                  'Contoh pembayaran dengan Card ',
                  'Pada contoh berikut pembayaran dilakukan dengan Cash',
                  'Jika sudah sesuai klik Accept deposit and Print',
                  'Maka akan tampil Bukti Pembayaran sebagai berikut :',
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
    /* heru-24/11/2025 */

    /* heru-25/11/2025 */
    
        'deposit-transfer': {
    id: 'deposit-transfer',
    menuKey: 'keuangan',
    submenuId: 'deposit',
    itemTitle: 'Deposit Transfer',
    steps: [
      {
        id: 'deposit-transfer-step-1',
        number: 1,
        title: 'Deposit Transfer',
        description: 'Saat pasien masuk rawat inap ubah collection type cicilan depomil sebelumnya menjadi on account',
        details: [
                  'Pada menu Apps pilih menu Hospital Account',
                  'Pilih menu billing klik deposit transfer',
                  'Kemudian klik New',
                  'Cari pasien berdasarkan no MRN atau nama',
                  'Tampil data pasien, pilih transfer type : On Account',
                  'Jika sudah klik transfer',
                  'Maka akan tampil informasi “Deposit transfer saved successfully”',
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

        'prosedur-penerimaan-transaksi-cicilan-depomil-deposit-ibu-hamil': {
    id: 'prosedur-penerimaan-transaksi-cicilan-depomil-deposit-ibu-hamil',
    menuKey: 'keuangan',
    submenuId: 'deposit',
    itemTitle: 'Prosedur Penerimaan Transaksi Cicilan Depomil (Deposit Ibu Hamil)',
    steps: [
      {
        id: 'prosedur-penerimaan-transaksi-cicilan-depomil-deposit-ibu-hamil-step-1',
        number: 1,
        title: 'Prosedur Penerimaan Transaksi Cicilan Depomil (Deposit Ibu Hamil)',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada menu Apps pilih menu Hospital Account',
                  'Pilih menu billing klik collection request',
                  'Kemudian klik New',
                  'Cari nama pasien berdasarkan nama atau no MRN',
                  'Tampil data pasien, kemudian klik Add request',
                  'Pilih collection type : security deposit',
                  'Isi field amount',
                  'Klik tombol add',
                  'Klik ceklis pada kolom cash atau card (disesuaikan)',
                  'Klik Accept Deposit and Print',
                  'Maka akan tampil laporan sebagai berikut :',
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

        'prosedur-penerimaan-transaksi-depomil-di-rawat-inap': {
    id: 'prosedur-penerimaan-transaksi-depomil-di-rawat-inap',
    menuKey: 'keuangan',
    submenuId: 'deposit',
    itemTitle: 'Prosedur Penerimaan Transaksi Depomil di Rawat Inap',
    steps: [
      {
        id: 'prosedur-penerimaan-transaksi-depomil-di-rawat-inap-step-1',
        number: 1,
        title: 'Prosedur Penerimaan Transaksi Depomil di Rawat Inap',
        description: 'Saat pasien masuk rawat inap ubah collection type cicilan depomil sebelumnya menjadi on account',
        details: [
                  'Pada menu Apps pilih menu Hospital Account',
                  'Pilih menu billing klik deposit transfer',
                  'Kemudian klik New',
                  'Cari pasien berdasarkan no MRN atau nama',
                  'Tampil data pasien, pilih transfer type : On Account',
                  'Jika sudah klik transfer',
                  'Maka akan tampil informasi “Deposit transfer saved successfully”',
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

        'prosedur-finance-clearence-di-rawat-jalan': {
    id: 'prosedur-finance-clearence-di-rawat-jalan',
    menuKey: 'keuangan',
    submenuId: 'finance-clearance',
    itemTitle: 'Prosedur Finance Clearence di Rawat Jalan',
    steps: [
      {
        id: 'prosedur-finance-clearence-di-rawat-jalan-step-1',
        number: 1,
        title: 'Prosedur Finance Clearence di Rawat Jalan',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                    'Pada menu Apps pilih menu Hospital Account',
                    'Pilih menu billing klik finance clearence',
                    'Cari nama pasien, kemudian klik ceklis pada pasien tersebut',
                    'Klik save',
                    'Pilih reason for manual finance clearence',
                    'Klik save',
                    'Maka akan tampil informasi “Saved successfully”',
                    'Klik close',
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

        'prosedur-finance-clearence-di-rawat-inap': {
    id: 'prosedur-finance-clearence-di-rawat-inap',
    menuKey: 'keuangan',
    submenuId: 'finance-clearance',
    itemTitle: 'Prosedur Finance Clearence di Rawat Inap',
    steps: [
      {
        id: 'prosedur-finance-clearence-di-rawat-inap-step-1',
        number: 1,
        title: 'Prosedur Finance Clearence di Rawat Inap',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada menu Apps pilih menu Hospital Account',
                  'Pilih menu billing klik finance clearence',
                  'Cari nama pasien, kemudian klik ceklis pada pasien tersebut',
                  'Klik save',
                  'Pilih reason for manual finance clearence',
                  'Klik save',
                  'Maka akan tampil informasi “Saved successfully”',
                  'Klik close',
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

        'prosedur-penginputan-nilai-diskon': {
    id: 'prosedur-penginputan-nilai-diskon',
    menuKey: 'keuangan',
    submenuId: 'discount',
    itemTitle: 'Prosedur Penginputan Nilai Diskon',
    steps: [
      {
        id: 'prosedur-penginputan-nilai-diskon-step-1',
        number: 1,
        title: 'Prosedur Penginputan Nilai Diskon',
        description: 'Buka aplikasi dan pilih menu Apps',
        details: [
                  'Pada menu Apps pilih menu Hospital Account',
                  'Pilih menu billing, klik invoice billing',
                  'Kemudian masuk ke halaman Invoice Billing',
                  'Pada menu tab invoice, kemudian klik tombol New',
                  'Lalu pilih New',
                  'Cari pasien berdasarkan no MRN atau nama',
                  'Maka akan tampil data pasien',
                  'Pilih discount',
                  'Isi nominal diskon yang diberikan',
                  'Klik item yang akan diberikan diskon',
                  'Klik Apply',
                  'Pilih discount reason (disesuaikan) ',
                  'Kemudian klik save and send for approval',
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

        'proses-approval-diskon': {
    id: 'proses-approval-diskon',
    menuKey: 'keuangan',
    submenuId: 'discount',
    itemTitle: 'Proses Approval Diskon',
    steps: [
      {
        id: 'proses-approval-diskon-step-1',
        number: 1,
        title: 'Proses Approval Diskon',
        description: 'Dalam proses melakukan approval diskon dilakukan oleh user Manager atau PIC Keuangan',
        details: [
                  'Pada halaman utama (home) pilih pending task',
                  'Cari task lalu klik Form',
                  'Tampil data pasien',
                  'Cek kembali data pasien, jika sudah sesuai',
                  'Kemudian klik Approve',
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

        'prosedur-penginputan-transaksi-setelah-approval-diskon': {
    id: 'prosedur-penginputan-transaksi-setelah-approval-diskon',
    menuKey: 'keuangan',
    submenuId: 'discount',
    itemTitle: 'Prosedur Penginputan Transaksi Setelah Approval Diskon',
    steps: [
      {
        id: 'prosedur-penginputan-transaksi-setelah-approval-diskon-step-1',
        number: 1,
        title: 'Prosedur Penginputan Transaksi Setelah Approval Diskon',
        description: 'Dalam proses melakukan approval diskon dilakukan oleh user Manager atau PIC Keuangan',
        details: [
                  'Pada menu Apps pilih menu Hospital Account',
                  'Pilih menu billing, klik invoice billing',
                  'Cari nama pasien, klik select',
                  'Pilih settle invoice',
                  'Tampil data pasien',
                  'Cek kembali data pasien, jika sudah sesuai',
                  'Klik settle invoice',
                  'Maka akan tampil laporan sebagai berikut :',
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
    /* heru-25/11/2025 */

    /* heru-26/11/2025 */
    'prosedur-refund-karena-pembatalan-transaksi': {
      id: 'prosedur-refund-karena-pembatalan-transaksi',
      menuKey: 'keuangan',
      submenuId: 'refund',
      itemTitle: 'Prosedur Refund Karena Pembatalan Transaksi',
      steps: [
        {
          id: 'prosedur-refund-karena-pembatalan-transaksi-step-1',
          number: 1,
          title: 'Prosedur Refund Karena Pembatalan Transaksi',
          description: 'Buka aplikasi dan pilih menu Apps',
          details: [
                    'Pada menu Apps, pilih menu Hospital Account',
                    'Pada sisi bilah kiri, klik menu Billing',
                    'Pilih invoice billing',
                    'Cari data pasien (disesuaikan)',
                    'Klik select',
                    'Pilih cancel invoice',
                    'Tampil data pasien sebagai berikut : ',
                    'Isi keterangan pembatalan (Cancel Remarks) dan pilih alasannya (Reason)',
                    'Klik Request for cancel approval',
                    'Tampil notifikasi sebagai berikut :',
                    'Pilih OK',
                    'Maka akan tampil informasi “Invoice cancelled successfully”',
                    'Selanjutnya klik Settings',
                    'Klik menu Workflow',
                    'Pilih Pending tasks',
                    'Klik tab Pending grup tasks',
                    'Cari task pasien dengan keterangan reason for cancellation pada kolom description',
                    'Klik edit ',
                    'Pilih user terkait pada new assignee (disesuaikan)',
                    'Klik update',
                    'Klik Home',
                    'Klik jumlah pada pending tasks',
                    'Pada halaman personal task akan tampil beberapa task yang harus diselesaikan',
                    'Selanjutnya klik form',
                    'Tampil data pasien yang sebelumnya sudah diajukan permintaan untuk persetujuan cancel invoice',
                    'Cek kembali data tersebut',
                    'Jika sudah sesuai klik Approve',
                    'Maka akan tampil informasi “Invoice approve successfully”',
                    'Kembali ke menu Apps, klik Hospital account',
                    'Pada sisi bilah kiri, klik menu Billing',
                    'Pilih Invoice billing',
                    'Klik New, lalu pilih new',
                    'Cari pasien berdasarkan no.MRN atau nama ',
                    'Beri tanda centang pada item yang akan dilakukan unbill (disesuaikan)',
                    'Selanjutnya klik Unbil items',
                    'Pilih alasan dilakukannya pembatalan transaksi (Reason for unbilling)',
                    'Klik OK',
                    'Maka akan tampil informasi pembatalan transaksi tersebut berhasil dilakukan',
                    'Selanjutnya akan tampil data penerimaan penyesuaian pada kolom Adjust Receipt ',
                    'Beri tanda centang pada data adjust receipt tersebut',
                    'Kemudian akan tampil nilai penyesuaian pada kolom adjusting amount',
                    'Klik Save and send for approval',
                    'Maka akan tampil informasi “Invoice saved successfully” ',
                    'Pada sisi bilah kiri, klik menu Billing',
                    'Pilih Refund request list',
                    'Klik New',
                    'Cari pasien berdasarkan no.MRN atau nama',
                    'Maka akan tampil data refund request pasien',
                    'Pilih Refund mode : Cash',
                    'Isi Remarks (disesuaikan)',
                    'Klik Create',
                    'Maka akan tampil informasi "Refund request saved successfully”',
                    'Pada sisi bilah kiri klik menu Billing',
                    'Pilih Refund',
                    'Klik New',
                    'Cari pasien berdasarkan no.MRN atau nama',
                    'Tampil data Refund pasien',
                    'Kemudian isi kolom Remarks',
                    'Klik Refund',
                    'Maka akan tampil laporan sebagai berikut :',
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
  
          'prosedur-refund-karena-pengembalian-kelebihan-deposit': {
      id: 'prosedur-refund-karena-pengembalian-kelebihan-deposit',
      menuKey: 'keuangan',
      submenuId: 'refund',
      itemTitle: 'Prosedur Refund Karena Pengembalian Kelebihan Deposit',
      steps: [
        {
          id: 'prosedur-refund-karena-pengembalian-kelebihan-deposit-step-1',
          number: 1,
          title: 'Prosedur Refund Karena Pengembalian Kelebihan Deposit',
          description: 'Buka aplikasi dan pilih menu Apps',
          details: [
                    'Pada menu Apps pilih menu Hospital Account',
                    'Pilih menu billing klik invoice billing',
                    'Klik New, pilih new kembali',
                    'Cari nama pasien berdasarkan nama atau no MRN',
                    'Klik ceklis pada item di bagian adjust receipt',
                    'Klik save and send for approval',
                    'Maka akan tampil informasi “Invoice saved successfully”',
                    'Maka akan tampil laporan sebagai berikut :',
                    'Klik menu billing pada sisi bilah kiri',
                    'Pilih refund request list',
                    'Lalu klik new',
                    'Cari nama pasien, kemudian pilih remarks',
                    'Klik tombol create',
                    'Maka akan tampil informasi “Refund request saved successfully”',
                    'Kemudian klik Billing pilih refunds',
                    'Lalu klik new',
                    'Cari nama pasien tersebut, lalu isi remarks',
                    'Klik refund',
                    'Maka akan tampil laporan sebagai berikut :',
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
  
          'proses-refund-dengan-tunai': {
      id: 'proses-refund-dengan-tunai',
      menuKey: 'keuangan',
      submenuId: 'refund',
      itemTitle: 'Proses Refund Dengan Tunai',
      steps: [
        {
          id: 'proses-refund-dengan-tunai-step-1',
          number: 1,
          title: 'Proses Refund Dengan Tunai',
          description: 'Buka aplikasi dan pilih menu Apps',
          details: [
                    'Pada menu Apps, pilih menu Hospital Account ',
                    'Pada sisi bilah kiri klik menu Billing',
                    'Pilih Refund request list',
                    'Klik New',
                    'Cari pasien berdasarkan no.MRN atau nama',
                    'Tampil data refund request pasien ',
                    'Cek data pasien apakah sudah sesuai',
                    'Refund mode pilih Cash',
                    'Lengkapi kolom remarks dengan memilih pilihan yang tersedia (disesuaikan)',
                    'Jika sudah sesuai datanya klik Create ',
                    'Maka akan tampil informasi “Refund request saved successfully”',
                    'Selanjutnya, pada sisi bilah kiri klik menu Billing',
                    'Pilih Refund',
                    'Klik New ',
                    'Cari pasien berdasarkan no.MRN atau nama',
                    'Tampil data pasien',
                    'Kemudian isi kolom Remarks',
                    'Jika data refund pasien sudah sesuai dan kolom remarks sudah dilengkapi',
                    'Klik Refund',
                    'Maka akan tampil laporan sebagai berikut :',
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
  
          'proses-refund-dengan-transfer-bank': {
      id: 'proses-refund-dengan-transfer-bank',
      menuKey: 'keuangan',
      submenuId: 'refund',
      itemTitle: 'Proses Refund Dengan Transfer Bank',
      steps: [
        {
          id: 'proses-refund-dengan-transfer-bank-step-1',
          number: 1,
          title: 'Proses Refund Dengan Transfer Bank',
          description: 'Buka aplikasi dan pilih menu Apps',
          details: [
                    'Pada menu Apps pilih menu Hospital Account',
                    'Klik menu billing pada sisi bilah kiri',
                    'Pilih refund request list',
                    'Lalu klik new',
                    'Cari nama pasien',
                    'Isi field-field pada bagian refund request sebagai berikut :',
                    'Pilih refund mode : Bank ',
                    'Pilih payment terms : Bank Transfer',
                    'Isi account no ( Account no adalah no. rekening  penerima atau pasien )',
                    'Pilih remarks ( Remarks adalah alasan refund sesuai dengan alasan pengembalian )',
                    'Isi nama ( Nama diisi dengan nama penerima sesuai dengan no. rekening penerima refund )',
                    'Pada bagian Card Equipment  TIDAK BOLEH DIISI',
                    'Isi vendor bank name ( Vendor bank name adalah nama bank penerima pasien atau penerima refund )',
                    'Klik create',
                    'Maka akan tampil informasi “Refund request saved successfully”',
                    'Lalu klik print',
                    'Maka akan tampil laporan sebagai berikut :',
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
  
          'penerimaan-transaksi-pembelian-obat-tanpa-resep-obat-bebas': {
      id: 'penerimaan-transaksi-pembelian-obat-tanpa-resep-obat-bebas',
      menuKey: 'keuangan',
      submenuId: 'transaksi-lainnya',
      itemTitle: 'Penerimaan Transaksi Pembelian Obat Tanpa Resep (Obat Bebas)',
      steps: [
        {
          id: 'penerimaan-transaksi-pembelian-obat-tanpa-resep-obat-bebas-step-1',
          number: 1,
          title: 'Penerimaan Transaksi Pembelian Obat Tanpa Resep (Obat Bebas)',
          description: 'Buka aplikasi dan pilih menu Apps',
          details: [
                    'Pada menu Apps pilih menu Hospital Account',
                    'Pilih menu billing klik Invoice billing',
                    'Klik New, lalu pilih new kembali',
                    'Cari nama pasien berdasarkan no MRN atau nama',
                    'Isi field payor name',
                    'Klik save and send for approval',
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
  
          'penerimaan-transaksi-pembayaran-seminar-pasien-eksternal': {
      id: 'penerimaan-transaksi-pembayaran-seminar-pasien-eksternal',
      menuKey: 'keuangan',
      submenuId: 'transaksi-lainnya',
      itemTitle: 'Penerimaan Transaksi Pembayaran Seminar (Pasien Eksternal)',
      steps: [
        {
          id: 'penerimaan-transaksi-pembayaran-seminar-pasien-eksternal-step-1',
          number: 1,
          title: 'Penerimaan Transaksi Pembayaran Seminar (Pasien Eksternal)',
          description: 'Buka aplikasi dan pilih menu Apps',
          details: [
                    'Pada menu Apps pilih menu Hospital Account',
                    'Pilih menu billing klik Invoice Billing',
                    'Klik new, lalu pilih New kembali',
                    'Klik ceklis pada external patient',
                    'Lengkapi data pasien lalu klik update',
                    'Maka data pasien telah tersimpan',
                    'Lalu klik Add service package',
                    'Lengkapi form service yaitu sebagai berikut :',
                    'Pilih departement ',
                    'Ceklis is referral consultant',
                    'Pilih referral consultant lalu ketik "Self"',
                    'Pilih service',
                    'Isi tarif',
                    'Klik Add service',
                    'Isi field payor name',
                    'Pilih payment details',
                    'Isi collected cash amount',
                    'Klik save and send for approve ',
                    'Maka data telah tersimpan',
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
  
          'prosedur-penerimaan-transaksi-klinik-tumbuh-kembang-paket': {
      id: 'prosedur-penerimaan-transaksi-klinik-tumbuh-kembang-paket',
      menuKey: 'keuangan',
      submenuId: 'transaksi-lainnya',
      itemTitle: 'Prosedur Penerimaan Transaksi Klinik Tumbuh Kembang Paket',
      steps: [
        {
          id: 'prosedur-penerimaan-transaksi-klinik-tumbuh-kembang-paket-step-1',
          number: 1,
          title: 'Prosedur Penerimaan Transaksi Klinik Tumbuh Kembang Paket',
          description: 'Buka aplikasi dan pilih menu Apps',
          details: [
                    'Pada menu Apps pilih menu Hospital Account',
                    'Pilih menu billing klik invoice billing',
                    'Klik New, pilih new kembali',
                    'Cari nama pasien berdasarkan no MRN atau nama',
                    'Lalu klik ikon (P) pada bagian Package',
                    'Klik print jika ingin mencetak ',
                    'Jika tidak klik close',
                    'Lalu klik add service package',
                    'Lengkapi form service yaitu sebagai berikut :',
                    'Pilih service',
                    'Klik Add service',
                    'Klik save and send for approval',
                    'Maka akan tampil laporan sebagai berikut :',
                    'Maka akan tampil informasi “Invoiced saved successfully”',
                    'Klik view all',
                    'Klik tombol new, pilih new',
                    'Cari nama pasien tersebut',
                    'Lalu klik ikon (P) pada bagian Package',
                    'Maka akan tampil data package details',
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
      /* heru-26/11/2025 */

       /* heru-27/11/2025 */
       'laporan-tunai-dan-card-tanpa-detail': {
        id: 'laporan-tunai-dan-card-tanpa-detail',
        menuKey: 'keuangan',
        submenuId: 'laporan',
        itemTitle: 'Laporan Tunai dan Card Tanpa Detail',
        steps: [
          {
            id: 'laporan-tunai-dan-card-tanpa-detail-step-1',
            number: 1,
            title: 'Laporan Tunai dan Card Tanpa Detail',
            description: 'Buka aplikasi dan pilih menu Apps',
            details: [
                      'Pada menu halaman utama klik Reports',
                      'Pilih menu Billing',
                      'Klik counter wise collection reports',
                      'Pilih tanggal',
                      'Isi field user',
                      'Klik report dalam bentuk pdf',
                      'Maka akan tampil laporan sebagai berikut :',
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
    
            'laporan-pendapatan-asuransi': {
        id: 'laporan-pendapatan-asuransi',
        menuKey: 'keuangan',
        submenuId: 'laporan',
        itemTitle: 'Laporan Pendapatan Asuransi',
        steps: [
          {
            id: 'laporan-pendapatan-asuransi-step-1',
            number: 1,
            title: 'Laporan Pendapatan Asuransi',
            description: 'Buka aplikasi dan pilih menu Apps',
            details: [
                      'Pada menu halaman utama klik Reports',
                      'Pilih menu Billing',
                      'Klik sponsor invoice statement',
                      'Pilih tanggal',
                      'Klik ikon report dalam bentuk ms.excel, html, pdf atau klik view report',
                      'Maka akan tampil laporan sebagai berikut :',
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
    
            'laporan-transaksi-detail': {
        id: 'laporan-transaksi-detail',
        menuKey: 'keuangan',
        submenuId: 'laporan',
        itemTitle: 'Laporan Transaksi Detail',
        steps: [
          {
            id: 'laporan-transaksi-detail-step-1',
            number: 1,
            title: 'Laporan Transaksi Detail',
            description: 'Buka aplikasi dan pilih menu Apps',
            details: [
                      'Pada menu halaman utama klik Reports',
                      'Pilih menu Billing',
                      'Pilih menu MIS',
                      'Klik collection Details',
                      'Pilih tanggal (From date - To Date)',
                      'Klik ikon ms.Excel',
                      'Maka akan tampil laporan sebagai berikut :',
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
    
            'laporan-rekap-pembatalan-transaksi': {
        id: 'laporan-rekap-pembatalan-transaksi',
        menuKey: 'keuangan',
        submenuId: 'laporan',
        itemTitle: 'Laporan Rekap Pembatalan Transaksi',
        steps: [
          {
            id: 'laporan-rekap-pembatalan-transaksi-step-1',
            number: 1,
            title: 'Laporan Rekap Pembatalan Transaksi',
            description: 'Buka aplikasi dan pilih menu Apps',
            details: [
                      'Pada menu Apps, pilih Hospital account',
                      'Pilih menu Billing, klik invoice billing',
                      'Pilih tab Credit memo',
                      'Klik search',
                      'Lakukan pencarian berdasarkan kriteria',
                      'search kriteria : Invoice date -> Less than or equal to -> pilih tanggal',
                      'Klik search',
                      'Lalu klik Excel',
                      'Lalu akan tampil laporan sebagai berikut :',
                      'Lakukan filter data (disesuaikan)',
                      'Untuk melihat alasan pembatalan transaksi ada di kolom Reason for cancellation',
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
    
            'report-recap-card-seluruh-user': {
        id: 'report-recap-card-seluruh-user',
        menuKey: 'keuangan',
        submenuId: 'laporan',
        itemTitle: 'Report Recap Card Seluruh User',
        steps: [
          {
            id: 'report-recap-card-seluruh-user-step-1',
            number: 1,
            title: 'Report Recap Card Seluruh User',
            description: 'Buka aplikasi dan pilih menu Apps',
            details: [
                      'Pada halaman utama pilih menu Reports',
                      'Pilih menu Billing pada sisi bilah kiri',
                      'Klik menu reports',
                      'Pilih Recap report user wise',
                      'Pilih tanggal disesuaikan (from date - to date)',
                      'Pilih Branch',
                      'Pada kolom user tidak perlu diisi (karena untuk menampilkan laporan seluruh user)',
                      'Klik view report',
                      'Maka akan tampil laporan sebagai berikut:',
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
    
              'report-recap-card-per-user': {
        id: 'report-recap-card-per-user',
        menuKey: 'keuangan',
        submenuId: 'laporan',
        itemTitle: 'Report Recap Card Per User',
        steps: [
          {
            id: 'report-recap-card-per-user-step-1',
            number: 1,
            title: 'Report Recap Card Per User',
            description: 'Buka aplikasi dan pilih menu Apps',
            details: [
                      'Pada halaman utama pilih menu Reports',
                      'Pilih menu Billing pada sisi bilah kiri',
                      'Klik menu reports',
                      'Pilih Recap report user wise',
                      'Pilih tanggal disesuaikan (from date - to date)',
                      'Pilih Branch',
                      'Pilih user (disesuaikan)',
                      'Klik view report',
                      'Maka akan tampil laporan sebagai berikut:',
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
    
            'rawat-inap-pasien-pribadi': {
        id: 'rawat-inap-pasien-pribadi',
        menuKey: 'keuangan',
        submenuId: 'admin-rawat-inap',
        itemTitle: 'Rawat Inap Pasien Pribadi',
        steps: [
          {
            id: 'rawat-inap-pasien-pribadi-step-1',
            number: 1,
            title: 'Rawat Inap Pasien Pribadi',
            description: 'Buka aplikasi dan pilih menu Apps',
            details: [
                      'Pada Menu Home ',
                      'Klik pada Jumlah Group Task',
                      'Maka akan masuk ke halaman Group Tasks',
                      'Kemudian Klik pada Perform',
                      'Kemudian kembali ke Menu Home',
                      'Kemudian Klik pada Jumlah Pending Tasks',
                      'Maka akan masuk ke halaman Personal Tasks',
                      'Kemudian pilih data yang ingin di lunasi, lalu klik View pada kolom Task Detail',
                      'Maka tampil Alur Task Detail, kemudian klik tombol Complete',
                      'Kemudian ke Menu App, lalu pilih Hospital Accounts',
                      'Kemudian pilih Invoice',
                      'Kemudian Klik tombol New, kemudian pilih Draft',
                      'Cari nama pasien berdasarkan informasi MRN',
                      'Kemudian klik tombol Save As Draft',
                      'Kemudian muncul invoice Perincian Kwitansi Pasien',
                      'Kemudian kembali ke Home ',
                      'Klik pada setting, pilih workflow kemudian pilih Pending Tasks',
                      'Kemudian klik pada tab Pending Group Tasks',
                      'Kemudian klik edit',
                      'Kemudian pilih pada New Assignee, lalu klik update',
                      'Kemudian klik pada Menu Home, lalu klik pada Pending Tasks',
                      'Kemudian klik pada Form pada kolom Go To',
                      'Isi pada Payor Name',
                      'Klik tombol Save And Send For Approval',
                      'Kemudian klik pada tombol Print Preview',
                      'Kemudian muncul invoice Perincian Kwitansi Pasien',
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
    
            'pasien-pribadi-menjadi-jaminan': {
        id: 'pasien-pribadi-menjadi-jaminan',
        menuKey: 'keuangan',
        submenuId: 'admin-rawat-inap',
        itemTitle: 'Pasien Pribadi Menjadi Jaminan',
        steps: [
          {
            id: 'pasien-pribadi-menjadi-jaminan-step-1',
            number: 1,
            title: 'Pasien Pribadi Menjadi Jaminan',
            description: 'Buka aplikasi dan pilih menu Apps',
            details: [
                      'Pada menu Apps pilih menu Hospital Account',
                      'Pilih care plan pada sisi bilah kiri,',
                      'Klik patient policy details',
                      'Cari pasien berdasarkan nama atau no.MRN',
                      'Lengkapi form pada kolom sebagai berikut :',
                      'Plan name',
                      'Policy valid until',
                      'Policy start date',
                      'Group id/policy no',
                      'Billing order',
                      'Klik pada kolom active',
                      'Klik tombol save',
                      'Maka akan tampil informasi “Policy details saved successfully”',
                      'Berikut data jaminan pasien yang sudah berhasil disimpan',
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
    
            'input-nilai-jaminan-asuransi': {
        id: 'input-nilai-jaminan-asuransi',
        menuKey: 'keuangan',
        submenuId: 'admin-rawat-inap',
        itemTitle: 'Input Nilai Jaminan Asuransi',
        steps: [
          {
            id: 'input-nilai-jaminan-asuransi-step-1',
            number: 1,
            title: 'Input Nilai Jaminan Asuransi',
            description: 'Buka aplikasi dan pilih menu Apps',
            details: [
                      'Pada menu Apps pilih menu inpatients',
                      'Kemudian pilih menu Nursing Work Bench',
                      'Masuk ke halaman Nursing Work Bench, kemudian klik Search',
                      'Setelah itu lakukan search criteria, pada patient status pilih Under IP Care, klik tombol search ',
                      'Kemudian cari data pasien',
                      'Setelah itu klik administrative, pilih view draft invoice',
                      'Masuk ke halaman draft invoice, cek data pasien',
                      'Kembali ke menu Apps, pilih Hospital Account',
                      'Lalu klik menu Care Plan pada sisi bilah kiri, pilih Patient plan',
                      'Setelah itu klik New',
                      'Cari pasien berdasarkan no.MRN atau nama',
                      'Kemudian pada bagian plan rule pilih type “Plan”',
                      'Dan pada bagian Plan Rules ketik Plan pada kolom name',
                      'Plih type plan dengan visit type IP',
                      'Lalu isi field authorization no dan approval amount',
                      'Setelah itu klik Add authorization ',
                      'Jika sudah klik tombol add authorization, maka akan tampil data yang sudah diadd',
                      'Lalu klik Update Rule',
                      'Kemudian klik Save plan',
                      'Maka akan tampil informasi bahwa data tersebut sudah berhasil disimpan',
                      'Kembali ke menu Apps, Pilih Hospital Account',
                      'Kemudian pilih menu Nursing Work Bench',
                      'Masuk ke halaman Nursing Work Bench, kemudian klik Search',
                      'Setelah itu lakukan search criteria, pada patient status pilih Under IP Care, klik tombol search ',
                      'Kemudian cari data pasien',
                      'Setelah itu klik administrative, pilih view draft invoice',
                      'Kemudian cek data pasien pada bagian sponsor, nilai plan yang sebelumnya ditambahkan sekarang sudah tampil di data pasien tersebut',
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
    
            'pasien-jaminan-a-berubah-menjadi-b': {
        id: 'pasien-jaminan-a-berubah-menjadi-b',
        menuKey: 'keuangan',
        submenuId: 'admin-rawat-inap',
        itemTitle: 'Pasien Jaminan A Berubah Menjadi B',
        steps: [
          {
            id: 'pasien-jaminan-a-berubah-menjadi-b-step-1',
            number: 1,
            title: 'Pasien Jaminan A Berubah Menjadi B',
            description: 'Buka aplikasi dan pilih menu Apps',
            details: [
                      'Pada menu Apps pilih menu inpatients',
                      'Kemudian pilih menu Nursing Work Bench',
                      'Masuk ke halaman Nursing Work Bench, kemudian klik Search',
                      'Setelah itu lakukan search criteria, pada patient status pilih Under IP Care, klik tombol search ',
                      'Kemudian cari data pasien (cari no.MRN Pasien)',
                      'Kembali ke menu Apps, pilih Hospital Account',
                      'Lalu klik menu Care Plan pada sisi bilah kiri, pilih Patient Policy Details',
                      'Di halaman patient policy details isi form, kolom dengan tanda bintang (*) wajib diisi',
                      'Setelah itu klik save',
                      'Maka akan muncul informasi “Patient policy details saved successfully”',
                      'Dan data telah tersimpan di bagian policy details',
                      'Untuk menonaktifkan salah satu plan jika terdapat beberapa plan pada data pasien tersebut ',
                      'Klik edit pada kolom action, setelah itu hilangkan tanda centang pada field active',
                      'Lalu klik save',
                      'Kembali ke menu Apps, Pilih Hospital Account',
                      'Kemudian pilih menu Nursing Work Bench',
                      'Masuk ke halaman Nursing Work Bench, kemudian klik Search',
                      'Setelah itu lakukan search criteria, pada patient status pilih Under IP Care, klik tombol search ',
                      'Kemudian cari data pasien, jika sudah menemukan pasien tersebut',
                      'Cek pada bagian kolom sponsor untuk plan yang sebelumnya plan A diganti menjadi plan B',
                      'Dan data sudah berhasil berubah menjadi plan B',
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
    
            'posting-transaksi-rwi-jaminan-dicover-semua': {
        id: 'posting-transaksi-rwi-jaminan-dicover-semua',
        menuKey: 'keuangan',
        submenuId: 'admin-rawat-inap',
        itemTitle: 'Posting Transaksi RWI Jaminan Dicover Semua',
        steps: [
          {
            id: 'posting-transaksi-rwi-jaminan-dicover-semua-step-1',
            number: 1,
            title: 'Posting Transaksi RWI Jaminan Dicover Semua',
            description: 'Buka aplikasi dan pilih menu Apps',
            details: [
                      'Pada halaman Apps, klik setting',
                      'Klik menu workflow, pilih pending task',
                      'Klik tab pending group tasks',
                      'Cari nama pasien klik edit',
                      'Tampil form update task',
                      'Pilih new assigne, klik update',
                      'Setelah itu klik Home',
                      'Lalu klik jumlah Pending tasks',
                      'Cari nama pasien, lalu klik view',
                      'Kemudian klik complete',
                      'Kembali ke menu Apps',
                      'Pilih Hospital account',
                      'Klik menu Billing, pilih invoice billing',
                      'Klik New, pilih draft',
                      'Cari pasien berdasarkan nama atau no. MRN',
                      'Berikut data pasien',
                      'Kemudian isi payor name dengan nama jaminan ',
                      'Klik save as draft',
                      'Maka akan tampil informasi “Invoice saved as draft successfully”',
                      'Kembali ke halaman utama (home)',
                      'Klik jumlah group tasks',
                      'Cari nama pasien',
                      'Cek keterangan pasien pada bagian description',
                      'Lalu klik setting',
                      'Klik menu workflow, pilih pending task',
                      'Klik pending grup tasks',
                      'Cari nama pasien, klik edit',
                      'Tampil form update tasks',
                      'Pilih new assignee',
                      'Klik update',
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
    
            'pasien-jaminan-selisih-bayar-rawat-inap': {
        id: 'pasien-jaminan-selisih-bayar-rawat-inap',
        menuKey: 'keuangan',
        submenuId: 'admin-rawat-inap',
        itemTitle: 'Pasien Jaminan Selisih Bayar Rawat Inap',
        steps: [
          {
            id: 'pasien-jaminan-selisih-bayar-rawat-inap-step-1',
            number: 1,
            title: 'Pasien Jaminan Selisih Bayar Rawat Inap',
            description: 'Buka aplikasi dan pilih menu Apps',
            details: [
                      'Setelah berhasil login pada halaman awal klik Settings',
                      'Klik menu Workflow, pilih Pending task',
                      'Kemudian klik tab Pending grup task, pilih task lalu klik edit',
                      'Pilih new assigne, lalu klik update',
                      'Kemudian klik tab home',
                      'Klik jumlah pending task',
                      'Masuk ke halaman personal task, pilih task lalu klik view',
                      'Berikut tampilan task yang dipilih kemudian klik back',
                      'Lalu pilih tab Home',
                      'Setelah klik jumlah pending task kembali',
                      'Kemudian klik form',
                      'Masuk ke halaman data pasien, lalu isi field payor name ',
                      'Jika sudah sesuai klik Save and send for approval',
                      'Kemudian akan tampil laporan perincian kwitansi pasien',
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
    
            'bpjs-ada-selisih-bayar': {
        id: 'bpjs-ada-selisih-bayar',
        menuKey: 'keuangan',
        submenuId: 'admin-rawat-inap',
        itemTitle: 'BPJS Ada Selisih Bayar',
        steps: [
          {
            id: 'bpjs-ada-selisih-bayar-step-1',
            number: 1,
            title: 'BPJS Ada Selisih Bayar',
            description: 'Buka aplikasi dan pilih menu Apps',
            details: [
                      'Pada menu Apps, pilih Inpatient',
                      'Kemudian pilih Nursing work bench',
                      'Kemudian klik search',
                      'Setelah itu lakukan search criteria, pada patient status pilih Mark for discharge',
                      'Lalu klik tombol search',
                      'Cari nama pasien, kemudian klik administrative pilih view draft invoice ',
                      'Masuk ke halaman data pasien, lalu cek data pasien tersebut',
                      'Setelah itu kembali ke menu Apps, pilih Hospital Account ',
                      'Klik menu care plan pada sisi bilah kiri, lalu pilih patient plan ',
                      'Setelah itu klik New ',
                      'Kemudian cari pasien berdasarkan no.MRN atau nama pasien ',
                      'Pada bagian plan rule, field type pilih plan ',
                      'Dan pada kolom name isi field dengan plan',
                      'Kemudian klik plan pada bagian bawah',
                      'Setelah itu isi field authorization no dan approval amount',
                      'Jika sudah klik tombol add authorization',
                      'Maka data akan tampil setelah tersimpan',
                      'Setelah itu klik Update Role',
                      'Lalu klik Save plan',
                      'Maka akan muncul informasi bahwa data berhasil disimpan',
                      'Maka akan muncul informasi bahwa data berhasil disimpan',
                      'Kembali ke menu Apps, kemudian pilih Inpatient',
                      'Kemudian pilih Nursing work bench ',
                      'Kemudian klik search ',
                      'Setelah itu lakukan search criteria, pada patient status pilih Mark for discharge',
                      'Lalu klik tombol search',
                      'Cari nama pasien, kemudian klik administrative pilih view draft invoice',
                      'Masuk ke halaman data pasien, cek data pasien tersebut',
                      'Setelah itu kembali ke menu Apps, pilih Hospital Account ',
                      'Pilih menu billing pada sisi bilah kiri, kemudian klik invoice billing',
                      'Masuk ke halaman invoice, lalu klik tombol New',
                      'Pilih new',
                      'Cari pasien berdasarkan no.MRN atau nama pasien ',
                      'Lalu klik Add service package',
                      'Tampil form add new service, Isi field service dan consultant',
                      'Kemudian klik Add service ',
                      'Kemudian tampil data service yang sudah ditambahkan pada form add service',
                      'Lalu klik ikon berwarna kuning',
                      'Tampil form package details, sesuaikan tanggal ',
                      'Setelah itu klik Apply',
                      'Setelah itu beri tanda centang pada data yang diperlukan',
                      'Kemudian klik Move to, pilih BPJS Package',
                      'Lalu isi kolom service price sesuai nominal ',
                      'Jika sudah klik tombol save as draft',
                      'Maka akan tampil perincian kwitansi pasien ',
                      'Dan akan tampil informasi “Invoice saved as draft successfully”',
                      'Setelah itu klik settings',
                      'Lalu klik menu Workflow, pilih pending tasks ',
                      'Pilih tab pending group tasks, lalu pilih task',
                      'Setelah itu klik edit',
                      'Tampil form update task, pilih new assignee, lalu klik Update',
                      'Kemudian klik tab Home',
                      'Lalu klik jumlah pending task',
                      'Masuk ke halaman personal tasks, lalu klik view ',
                      'Kemudian klik complete ',
                      'Setelah itu klik jumlah grup tasks ',
                      'Masuk ke halaman grup tasks, pilih task',
                      'Lalu klik assign to me perform',
                      'Cek kembali data pasien tersebut, jika seudah sesuai klik Save and send for approval',
                      'Maka akan muncul informasi “Invoice saved successfully”',
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
    
            'input-transaksi-direct-service-materai-pantry': {
        id: 'input-transaksi-direct-service-materai-pantry',
        menuKey: 'keuangan',
        submenuId: 'admin-rawat-inap',
        itemTitle: 'Input Transaksi Direct service (Materai, Pantry)',
        steps: [
          {
            id: 'input-transaksi-direct-service-materai-pantry-step-1',
            number: 1,
            title: 'Input Transaksi Direct service (Materai, Pantry)',
            description: 'Buka aplikasi dan pilih menu Apps',
            details: [
                      'Pada menu Apps, pilih menu Inpatient',
                      'Pilih nursing work bench',
                      'Cari nama pasien, salin no. mrn pasien',
                      'Kembali ke menu Apps',
                      'Pilih hospital account',
                      'Klik invoice',
                      'Pada halaman Invoice Klik New, pilih Draft',
                      'Cari nama pasien berdasarkan nama atau no.Mrn',
                      'Tampil data pasien ',
                      'Lalu klik Add service package',
                      'Isi field Service dan tarif',
                      'Lalu klik Add service',
                      'Maka service berhasil ditambahkan',
                      'Setelah itu klik save as draft',
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
    
            'pasien-pribadi-pulang': {
        id: 'pasien-pribadi-pulang',
        menuKey: 'keuangan',
        submenuId: 'admin-rawat-inap',
        itemTitle: 'Pasien Pribadi Pulang',
        steps: [
          {
            id: 'pasien-pribadi-pulang-step-1',
            number: 1,
            title: 'Pasien Pribadi Pulang',
            description: 'Buka aplikasi dan pilih menu Apps',
            details: [
                      'Pada menu Apps, pilih menu Inpatient',
                      'Pilih nursing work bench',
                      'Cari nama pasien, salin no. mrn pasien',
                      'Lalu klik settings',
                      'Klik menu workflow',
                      'Pilih pending tasks',
                      'Klik tab Pending grup tasks',
                      'Cari nama pasien, lalu klik edit',
                      'Tampil form update tasks, pilih new assignee',
                      'Klik update',
                      'Kembali ke menu home',
                      'Klik jumlah pending tasks',
                      'Cari nama pasien, lalu klik view',
                      'Lalu klik complete',
                      'Kembali ke menu home',
                      'Klik jumlah group tasks',
                      'Cari nama pasien, klik assign to me',
                      'Maka akan tampil informasi “Task is added to personal task”',
                      'Kembali ke menu home',
                      'Klik jumlah pending tasks',
                      'Cari nama pasien, lalu klik form',
                      'Tampil data pasien',
                      'Cek data tersebut',
                      'Lalu klik save and send for approval',
                      'Maka akan tampil informasi “Invoice saved successfully”',
                      'Maka akan tampil laporan sebagai berikut :',
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
    
            'cara-input-nilai-yang-dicover-asuransi': {
        id: 'cara-input-nilai-yang-dicover-asuransi',
        menuKey: 'keuangan',
        submenuId: 'admin-rawat-inap',
        itemTitle: 'Cara Input Nilai yang Dicover Asuransi',
        steps: [
          {
            id: 'cara-input-nilai-yang-dicover-asuransi-step-1',
            number: 1,
            title: 'Cara Input Nilai yang Dicover Asuransi',
            description: 'Buka aplikasi dan pilih menu Apps',
            details: [
                      'Pada menu Apps, pilih Inpatient',
                      'Pilih nursing work bench',
                      'Cari nama pasien, salin no. mrn pasien',
                      'Lalu klik menu Apps',
                      'Pilih menu Hospital Accounts',
                      'Klik menu care plan pada sisi bilah kiri',
                      'Pilih patient plan ',
                      'Lalu klik new',
                      'Cari pasien berdasarkan nama atau no.MRN',
                      'Tampil data pasien, kemudian pada bagian plan rule pilih tipe dengan plan ',
                      'Klik ikon kaca pembesar ',
                      'Ketik “plan” pada kolom name',
                      'Kemudian klik plan dengan visit type IP',
                      'Maka visit type telah terisi dengan keterangan IP',
                      'Lalu isi field authrization dan approve amount',
                      'Klik Add Authrization',
                      'Maka data berhasil disimpan',
                      'Lalu klik Update rule',
                      'Klik save plan ',
                      'Maka akan tampil informasi jaminan telah berhasi disimpan',
                      'Cara Pelunasan Pasien Ada Selisih Bayar ',
                      'Kembali ke menu Apps, pilih Inpatient',
                      'Pilih nursing work bench',
                      'Cari nama pasien, klik admiistrative',
                      'Pilih view draft invoice',
                      'Berikut tampil data pasien',
                      'Lalu klik settings',
                      'Klik menu workflow, pilih pending task',
                      'Klik tab pending group tasks',
                      'Cari nama pasien, klik edit',
                      'Tampil form update task',
                      'Pilih new assigne, klik update',
                      'Kembali ke Home',
                      'Lalu klik jumlah Pending tasks',
                      'Cari nama pasien, lalu klik view',
                      'Kemudian klik complete',
                      'Lalu klik Home',
                      'Klik jumlah group tasks',
                      'Cari nama pasien',
                      'Cek keterangan pasien pada bagian description',
                      'Lalu klik setting',
                      'Maka akan tampil informasi “Task is added to personal task” ',
                      'Kembali ke Home',
                      'Klik klik jumlah Pending tasks',
                      'Cari nama pasien, lalu klik form',
                      'Maka akan tampil data pasien',
                      'Cek data pasien tersebut, ',
                      'jika sudah sesuai maka klik save and send for approval',
                      'Maka akan tampil laporan sebagai berikut :',
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
    
            'pembuatan-surat-tagihan-rawat-inap': {
        id: 'pembuatan-surat-tagihan-rawat-inap',
        menuKey: 'keuangan',
        submenuId: 'admin-rawat-inap',
        itemTitle: 'Pembuatan Surat Tagihan Rawat Inap',
        steps: [
          {
            id: 'pembuatan-surat-tagihan-rawat-inap-step-1',
            number: 1,
            title: 'Pembuatan Surat Tagihan Rawat Inap',
            description: 'Buka aplikasi dan pilih menu Apps',
            details: [
                      'Pada halaman utama (home) klik Apps',
                      'Pilih menu Hospital account pada sisi bilah kiri',
                      'Klik menu care plan pada sisi bilah kiri',
                      'Pilih sponsor invoice',
                      'Lakukan pencarian, klik search',
                      'Pilih tanggal invoice, klik search',
                      'Cari nama pasien, klik select pilih print',
                      'Maka akan tampil surat tagihan rawat inap sebagai berikut :',
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
        /* heru-27/11/2025 */

};