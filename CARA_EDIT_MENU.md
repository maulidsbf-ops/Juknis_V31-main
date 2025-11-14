# Cara Merubah List Menu pada Aplikasi JUKNIS

## Struktur Data Menu

Semua data menu disimpan di file: `src/data/menuData.ts`

Struktur data:
```typescript
{
  'menu-key': [
    {
      id: 'submenu-id',
      title: 'Judul Submenu',
      items: ['Item 1', 'Item 2', 'Item 3']
    }
  ]
}
```

## Cara 1: Edit Langsung File menuData.ts

### Menambah Item Baru
1. Buka file `src/data/menuData.ts`
2. Cari menu dan submenu yang ingin diubah
3. Tambahkan item baru di dalam array `items`

**Contoh:**
```typescript
'front-office': [
  {
    id: 'registrasi-pasien',
    title: 'Registrasi Pasien',
    items: [
      'Pendaftaran Pasien Baru',
      'Mengubah Rincian Pasien Yang sudah Teregistrasi',
      'Item Baru Yang Ditambahkan'  // Item baru
    ]
  }
]
```

### Menghapus Item
Hapus baris item yang tidak diinginkan dari array `items`

### Mengubah Item
Edit teks item yang sudah ada

## Cara 2: Menggunakan Fungsi Helper (Programmatic)

File `src/utils/menuEditor.ts` menyediakan fungsi-fungsi helper:

### Menambah Item Baru
```typescript
import { addMenuItem } from './utils/menuEditor';

addMenuItem('front-office', 'registrasi-pasien', 'Item Baru');
```

### Menghapus Item
```typescript
import { removeMenuItem } from './utils/menuEditor';

// Menghapus item pada index ke-2 (dimulai dari 0)
removeMenuItem('front-office', 'registrasi-pasien', 2);
```

### Mengubah Item
```typescript
import { updateMenuItem } from './utils/menuEditor';

// Mengubah item pada index ke-1
updateMenuItem('front-office', 'registrasi-pasien', 1, 'Teks Baru');
```

### Mendapatkan List Item
```typescript
import { getMenuItems } from './utils/menuEditor';

const items = getMenuItems('front-office', 'registrasi-pasien');
console.log(items);
```

## Cara 3: Export/Import Data Menu

### Export Data Menu ke JSON
```typescript
import { exportMenuData } from './utils/menuEditor';

const jsonData = exportMenuData();
console.log(jsonData); // atau simpan ke file
```

### Import Data Menu dari JSON
```typescript
import { importMenuData } from './utils/menuEditor';

const jsonString = '{"menu-key": [...]}';
importMenuData(jsonString);
```

## Parameter yang Dibutuhkan

### Menu Keys yang Tersedia:
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

### Submenu IDs (Contoh untuk Front Office):
- `registrasi-pasien`
- `rawat-jalan`
- `rawat-inap`
- `one-day-care`
- `igd`
- `penjadwalan-janji`
- `jadwal-dokter`

## Tips

1. **Backup Data**: Selalu backup file `menuData.ts` sebelum melakukan perubahan besar
2. **Format Konsisten**: Pastikan format data tetap konsisten dengan struktur yang sudah ada
3. **Validasi**: Periksa console browser untuk error setelah melakukan perubahan
4. **Testing**: Test setiap perubahan dengan mengklik menu di aplikasi

## Contoh Lengkap: Menambah Submenu Baru

Jika ingin menambah submenu baru pada menu Front Office:

```typescript
'front-office': [
  // ... submenu yang sudah ada ...
  {
    id: 'submenu-baru',
    title: 'Submenu Baru',
    items: [
      'Item Pertama',
      'Item Kedua',
      'Item Ketiga'
    ]
  }
]
```

Jangan lupa tambahkan juga di `src/components/Sidebar.tsx`:

```typescript
{
  key: 'front-office',
  label: 'Front Office',
  submenus: [
    // ... submenu yang sudah ada ...
    { id: 'submenu-baru', label: 'Submenu Baru' }
  ]
}
```
