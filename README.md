# Sistem Manajemen Acara

Sistem Manajemen Acara adalah aplikasi yang digunakan untuk mengelola berbagai jenis acara seperti seminar, workshop, dan konferensi. Sistem ini memungkinkan pengguna untuk membuat, mengatur, dan mengelola acara, serta mengelola peserta yang berpartisipasi dalam acara tersebut. Selain itu, sistem ini juga menyediakan fitur notifikasi untuk memberi tahu peserta mengenai detail dan pembaruan acara.

## Kontribusi

 Kelompok Sunshine:
10120087 – Luthfi Zufar Hermina
10120094 – Tiara Trisanti Ramadhani
10120121 – Muhammad Emir Fadlyanto

## Fitur Utama
- Membuat dan mengelola acara.
- Mendaftarkan dan mengelola peserta acara.
- Mengirim notifikasi kepada peserta.
- Menyimpan dan memulihkan status acara.

## Design Patterns yang Digunakan

### Creational Patterns
1. **Abstract Factory**: Membuat objek acara tanpa mengikat kode ke kelas spesifik.
2. **Prototype**: Menyediakan metode `clone()` untuk menyalin objek acara.
3. **Object Pool**: Mengelola pembuatan dan penggunaan kembali objek acara.

### Structural Patterns
1. **Facade**: Menyederhanakan antarmuka subsistem manajemen acara.
2. **Bridge**: Memisahkan antarmuka notifikasi dari implementasi spesifik.
3. **Flyweight**: Mengelola objek peserta dengan berbagi data untuk efisiensi memori.

### Behavioral Patterns
1. **Mediator**: Mengelola komunikasi antar peserta dalam acara.
2. **Chain of Responsibility**: Memproses berbagai jenis permintaan melalui rantai tanggung jawab.
3. **Memento**: Menyimpan dan memulihkan status objek acara.

## Detail Implementasi

### Abstract Factory
- **Tujuan**: Membuat objek acara tanpa mengikat kode ke kelas spesifik.
- **Implementasi**: `EventAbstractFactory`, `EventFactory`, `Seminar`, `Workshop`, `Conference`.

### Prototype
- **Tujuan**: Menyediakan metode `clone()` untuk menyalin objek acara.
- **Implementasi**: `Event`, `Memento`, `Caretaker`.

### Object Pool
- **Tujuan**: Mengelola pembuatan dan penggunaan kembali objek acara.
- **Implementasi**: `EventPool`, `Event`.

### Facade
- **Tujuan**: Menyederhanakan antarmuka subsistem manajemen acara.
- **Implementasi**: `EventManagementFacade`, `EventCreation`, `EventRegistration`, `EventNotification`.

### Bridge
- **Tujuan**: Memisahkan antarmuka notifikasi dari implementasi spesifik.
- **Implementasi**: `NotificationService`, `EmailNotification`, `SMSNotification`.

### Flyweight
- **Tujuan**: Mengelola objek peserta dengan berbagi data.
- **Implementasi**: `EventParticipantFactory`, `Participant`.

### Mediator
- **Tujuan**: Mengelola komunikasi antar peserta.
- **Implementasi**: `EventMediator`, `Participant`.

### Chain of Responsibility
- **Tujuan**: Memproses permintaan melalui rantai tanggung jawab.
- **Implementasi**: `Handler`, `Manager`, `Director`, `CEO`.

### Memento
- **Tujuan**: Menyimpan dan memulihkan status objek acara.
- **Implementasi**: `Event`, `Memento`, `Caretaker`.

## Instalasi dan Penggunaan

### Prasyarat
- Node.js (versi terbaru disarankan)
- NPM atau Yarn

### Langkah Instalasi
1. Clone repositori ini:
    ```bash
    git clone https://github.com/username/sistem-manajemen-acara.git
    ```
2. Masuk ke direktori proyek:
    ```bash
    cd sistem-manajemen-acara
    ```
3. Instal dependensi:
    ```bash
    npm install
    ```
    atau
    ```bash
    yarn install
    ```

### Menjalankan Proyek
Jalankan aplikasi dengan perintah berikut:
```bash
node index.js
```

Untuk menjalankan pengujian, gunakan Jest:
```bash
npm test
```
## Lisensi

MIT License. Lihat `LICENSE` untuk informasi lebih lanjut.

---