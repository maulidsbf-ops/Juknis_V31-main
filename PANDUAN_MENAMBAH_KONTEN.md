# Panduan Lengkap: Menambahkan Konten dengan Gambar dan Video

## Struktur Data Konten

Semua konten detail disimpan di file: `src/data/contentData.ts`

### Format Data Konten:

```typescript
export interface ContentStep {
  id: string;
  number: number;
  title: string;
  description: string;
  details?: string[];
  image?: string;    // URL gambar
  video?: string;    // URL video (YouTube embed)
}

export interface ContentItem {
  id: string;
  menuKey: string;
  submenuId: string;
  itemTitle: string;
  steps: ContentStep[];
}
```

---

## Cara 1: Menambah Konten Baru dengan Kode

### Step 1: Identifikasi ID Konten

ID konten dibentuk otomatis dari judul item menu dengan format:
- Ubah ke lowercase
- Ganti spasi dengan `-`
- Hapus karakter khusus

**Contoh:**
- "Pendaftaran Pasien Baru" → `pendaftaran-pasien-baru`
- "Mengubah Rincian Pasien" → `mengubah-rincian-pasien`

### Step 2: Tambahkan di contentData.ts

**Struktur Lengkap:**

```typescript
export const contentData: Record<string, ContentItem> = {
  'pendaftaran-pasien-baru': {
    id: 'pendaftaran-pasien-baru',
    menuKey: 'front-office',          // Menu utama
    submenuId: 'registrasi-pasien',   // ID submenu
    itemTitle: 'Pendaftaran Pasien Baru',
    steps: [
      {
        id: 'step-1',
        number: 1,
        title: 'Judul Step',
        description: 'Deskripsi singkat step',
        details: [
          'Detail 1',
          'Detail 2',
          'Detail 3'
        ],
        image: 'https://url-gambar.com/image.jpg',
        video: 'https://www.youtube.com/embed/VIDEO_ID'
      },
      // Step berikutnya...
    ]
  },
  // Konten lain...
};
```

---

## Cara 2: Menambah Gambar

### Format URL Gambar

Gunakan salah satu dari:

#### 1. **URL External (Recommended)**
```typescript
image: 'https://example.com/path/to/image.jpg'
```

#### 2. **URL Lokal dari Public Folder**
1. Simpan gambar di folder `public/images/`
2. Gunakan path relatif:
```typescript
image: '/images/nama-gambar.jpg'
```

#### 3. **Gambar dari Layanan Gratis**
- Pexels: `https://images.pexels.com/...`
- Unsplash: `https://images.unsplash.com/...`
- Pixabay: `https://pixabay.com/...`

### Contoh Lengkap dengan Gambar:

```typescript
{
  id: 'step-2',
  number: 2,
  title: 'Membuka Form Registrasi',
  description: 'Navigasi ke menu registration',
  details: [
    'Klik menu Registration dari menu bar',
    'Tunggu halaman dimuat'
  ],
  image: '/images/registration-form.png'
}
```

---

## Cara 3: Menambah Video

### Format URL Video

Gunakan YouTube embed URL dengan format:
```
https://www.youtube.com/embed/VIDEO_ID
```

### Cara Mendapatkan VIDEO_ID:

1. **Dari URL YouTube Normal:**
   - URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
   - VIDEO_ID: `dQw4w9WgXcQ`

   

2. **Dari URL YouTube Disingkat:**
   - URL: `https://youtu.be/QADH7-SrxTQ`
   - VIDEO_ID: `dQw4w9WgXcQ`

### Contoh Lengkap dengan Video:

```typescript
{
  id: 'step-3',
  number: 3,
  title: 'Tutorial Lengkap Registrasi',
  description: 'Tonton video tutorial cara registrasi pasien',
  details: [
    'Video ini menunjukkan seluruh proses',
    'Durasi: 10 menit'
  ],
  video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
}
```

---

## Cara 4: Kombinasi Gambar dan Video

Setiap step bisa memiliki BOTH gambar dan video:

```typescript
{
  id: 'step-4',
  number: 4,
  title: 'Langkah Lengkap',
  description: 'Kombinasi gambar dan video',
  details: [
    'Detail 1',
    'Detail 2'
  ],
  image: '/images/step-preview.jpg',
  video: 'https://www.youtube.com/embed/VIDEO_ID'
}
```

---

## Contoh Praktis Lengkap: Registrasi Pasien Baru

```typescript
export const contentData: Record<string, ContentItem> = {
  'pendaftaran-pasien-baru': {
    id: 'pendaftaran-pasien-baru',
    menuKey: 'front-office',
    submenuId: 'registrasi-pasien',
    itemTitle: 'Pendaftaran Pasien Baru',
    steps: [
      {
        id: 'step-1',
        number: 1,
        title: 'Akses Menu Aplikasi',
        description: 'Buka aplikasi dan pilih menu utama',
        details: [
          'Pada menu Apps, pilih Ambulatory Care',
          'Tunggu hingga halaman dimuat sepenuhnya'
        ],
        image: '/images/ambulatory-care.png'
      },
      {
        id: 'step-2',
        number: 2,
        title: 'Pilih Menu Registration',
        description: 'Navigasi ke menu registrasi pasien',
        details: [
          'Pilih menu Registration dari menu bar',
          'Klik tombol Registration untuk membuka form'
        ],
        image: '/images/registration-menu.png',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        id: 'step-3',
        number: 3,
        title: 'Isi Form Pendaftaran',
        description: 'Lengkapi semua field yang tersedia',
        details: [
          'Isi form selengkap-lengkapnya',
          'Kolom dengan tanda (*) wajib diisi',
          'Periksa kembali data sebelum melanjutkan'
        ],
        image: '/images/registration-form.png'
      },
      {
        id: 'step-4',
        number: 4,
        title: 'Input Data Jaminan (Opsional)',
        description: 'Jika pasien menggunakan jaminan',
        details: [
          'Buka bagian patient eligibility',
          'Lengkapi field:',
          '  • Eligibility name',
          '  • Group id/policy no',
          '  • Policy start date',
          '  • Policy valid until',
          '  • Relationship',
          '  • Billing order',
          'Klik checkbox Active',
          'Klik tombol Add'
        ],
        image: '/images/eligibility-form.png'
      },
      {
        id: 'step-5',
        number: 5,
        title: 'Simpan Registrasi',
        description: 'Finalisasi pendaftaran pasien',
        details: [
          'Klik tombol Register',
          'Tunggu notifikasi "Registration saved successfully"',
          'Nomor MRN otomatis terbentuk'
        ],
        video: 'https://www.youtube.com/embed/VIDEO_ID'
      },
      {
        id: 'step-6',
        number: 6,
        title: 'Cetak Sticker Pasien',
        description: 'Dapatkan dan cetak sticker pasien',
        details: [
          'Preview sticker akan ditampilkan',
          'Sticker berisi info pasien dan MRN',
          'Cetak untuk diberikan ke pasien'
        ],
        image: '/images/sticker-preview.png'
      }
    ]
  }
};
```

---

## Parameter yang Dibutuhkan

### Menu Keys:
- `front-office`
- `medical-record`
- `perawat`
- `dokter`
- `radiologi`
- `fisioterapi`
- `laboratorium`
- `farmasi`
- `inventory`
- `procurement`
- `keuangan`
- `it-support`

### Submenu IDs (Contoh Front Office):
- `registrasi-pasien`
- `rawat-jalan`
- `rawat-inap`
- `one-day-care`
- `igd`
- `penjadwalan-janji`
- `jadwal-dokter`

---

## Tips dan Best Practices

### 1. Naming Convention untuk ID
```typescript
// Benar
'step-1', 'step-2', 'step-3'

// Gunakan format yang konsisten dan deskriptif
'pendaftaran-pasien-baru'
'mengubah-rincian-pasien'
```

### 2. Details Format
```typescript
// Gunakan bullet points untuk list panjang
details: [
  'Klik menu Registration',
  'Tunggu halaman dimuat',
  'Isi semua field yang ada'
]

// Untuk list bersarang, gunakan indentasi
details: [
  'Lengkapi field berikut:',
  '  • Field 1',
  '  • Field 2',
  '  • Field 3'
]
```

### 3. Gambar Quality
- Resolusi: Minimal 800x600px
- Format: JPG, PNG, WebP
- File size: < 2MB untuk performa optimal

### 4. Video Quality
- Upload ke YouTube untuk best performance
- Durasi: 3-15 menit per video
- Subtitle/Caption direkomendasikan

### 5. Testing
Setelah menambah konten:
1. Buka aplikasi
2. Navigasi ke menu yang sesuai
3. Klik "Baca Selengkapnya" pada item
4. Verifikasi semua step tampil dengan benar
5. Cek gambar dan video terbuka dengan baik

---

## Troubleshooting

### Konten tidak muncul?
1. Cek ID konten sudah match dengan nama item menu
2. Verifikasi `menuKey` dan `submenuId` benar
3. Reload browser (Ctrl+F5)

### Gambar tidak tampil?
1. Verifikasi URL gambar benar dan accessible
2. Cek format URL untuk lokal: `/images/nama-file.jpg`
3. Cek ukuran file, jika > 5MB mungkin error

### Video tidak tampil?
1. Gunakan YouTube embed URL, bukan normal URL
2. Verifikasi VIDEO_ID benar
3. Cek video tidak private/restricted

---

## Quick Reference

**Tambah konten baru:**
```typescript
'id-konten': {
  id: 'id-konten',
  menuKey: 'menu-key',
  submenuId: 'submenu-id',
  itemTitle: 'Judul Item',
  steps: [
    {
      id: 'step-1',
      number: 1,
      title: 'Judul Step',
      description: 'Deskripsi',
      details: ['Detail 1', 'Detail 2'],
      image: 'https://...',
      video: 'https://www.youtube.com/embed/...'
    }
  ]
}
```

**Struktur folder untuk gambar lokal:**
```
project/
├── public/
│   └── images/
│       ├── ambulatory-care.png
│       ├── registration-form.png
│       └── ...
└── src/
```
