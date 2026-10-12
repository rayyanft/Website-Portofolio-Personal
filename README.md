# Portfolio Rayyan Fathanza

Website portfolio pribadi yang menampilkan profil, latar pendidikan, keterampilan, proyek, pencapaian, dan informasi kontak Rayyan Fathanza. Halaman dirancang responsif agar nyaman diakses melalui desktop maupun perangkat seluler.

## Fitur

- Navigasi ke setiap bagian halaman, termasuk menu yang dapat dibuka di perangkat seluler.
- Profil singkat dan tombol untuk mengunduh CV.
- Informasi pendidikan, keterampilan, proyek, dan pencapaian.
- Formulir kontak yang menyiapkan pesan melalui aplikasi email bawaan perangkat.
- Tampilan responsif dengan animasi sederhana pada kartu proyek.

## Teknologi

- HTML untuk struktur halaman.
- Tailwind CSS melalui CDN dan CSS lokal untuk tampilan.
- JavaScript vanilla untuk interaksi menu dan tahun pada footer.
- Font Awesome untuk ikon, serta Google Fonts untuk tipografi.

## Struktur Folder

```text
.
├── index.html
├── assets/
│   ├── cv/
│   │   └── my-cv.pdf
│   └── img/
│       ├── profile.jpg
│       └── dokumentasi-mage-rythme-quit.png
├── css/
│   └── style.css
└── js/
    └── script.js
```

## Menjalankan Secara Lokal

1. Unduh atau clone repositori ini.
2. Buka `index.html` di browser.

Tidak diperlukan instalasi dependency atau proses build. Koneksi internet diperlukan agar Tailwind CSS, Font Awesome, dan Google Fonts dapat dimuat dari CDN.

## Kustomisasi

- Ubah konten halaman dan tautan di `index.html`.
- Sesuaikan aturan tampilan dan animasi di `css/style.css`.
- Sesuaikan interaksi halaman di `js/script.js`.
- Ganti CV dan gambar di dalam folder `assets/`, lalu perbarui referensi berkasnya di `index.html` jika nama atau lokasinya berubah.

Formulir kontak menggunakan tautan `mailto`, sehingga pengiriman pesan bergantung pada aplikasi email yang tersedia dan dikonfigurasi pada perangkat pengunjung.