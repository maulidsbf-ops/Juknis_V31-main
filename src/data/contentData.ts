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
        description: 'Buka aplikasi dan pilih menu utama',
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
        description: 'Buka aplikasi dan pilih menu utama',
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
        description: 'Buka aplikasi dan pilih menu utama',
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
        description: 'Buka aplikasi dan pilih menu utama',
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
        description: 'Buka aplikasi dan pilih menu utama',
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
        description: 'Buka aplikasi dan pilih menu utama',
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
        description: 'Buka aplikasi dan pilih menu utama',
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
        description: 'Buka aplikasi dan pilih menu utama',
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
  }
  /* Maul-15/11/2025 */
  
};