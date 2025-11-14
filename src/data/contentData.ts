export interface ContentStep {
  id: string;
  number: number;
  title: string;
  description: string;
  details?: string[];
  image?: string;
  video?: string;
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
          'Pilih menu registration, klik registration',
          'Isi form selengkap-lengkapnya, kolom dengan tanda (*) wajib diisi',
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
          'Maka data jaminan sudah tersimpan',
          'Klik tombol register',
          'Maka akan tampil informasi “Registration saved successfully”',
          'Nomor MRN akan otomatis terbentuk oleh system',
          'Maka akan tampil preview sticker untuk pasien'
        ], image : '/images/1.png'
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
          'Pilih menu registered patients list',
          'Maka akan tampil halaman registered patients list, cari pasien menggunakan MRN, kemudian klik select lalu pilih modify details',
          'Edit data yang ingin dilakukan perubahan',
          'Klik tombol save ',
          'Tampil form reason for modification',
          'Pilih reason yang sesuai',
          'Klik tombol save',
          'Maka akan tampil print reports',
          'Klik tombol close ',
          'Maka akan tampil informasi “Registration Saved Successfully”'

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
          'Pilih menu Registration pada sisi bilah kiri',
          'Pilih external patient list',
          'Maka akan tampil halaman external patient list',
          'Jika nama pasien tidak muncul, gunakan fitur search ',
          'Cari berdasarkan registration date',
          'Klik tombol search',
          'Setelah data pasien muncul, klik register',
          'Pilih General',
          'Maka akan masuk ke halaman patient registration',
          'Cek kembali data pasien',
          'Jika sudah sesuai klik tombol register'
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
          'Pilih care plan pada sisi bilah kiri, ',
          'Klik patient policy details',
          'Cari pasien berdasarkan nama atau no.MRN',
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
          'Sekarang pasien memiliki dua data jaminan, dan keduanya aktif. ',
          'Untuk menonaktifkan salah satu jaminan yaitu pilih salah satu data jaminan yang ingin dinonaktifkan',
          'Klik edit',
          'Hilangkan tanda centang pada kolom active',
          'Klik tombol save',
          'Maka jaminan tersebut sudah tidak aktif'
        ],
        image :'/images/front_office/registrasi_pasien/perubahan_jaminan_pasien/1.png'
        
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
  }


  /* Maul-14/11/2025 */ 
};