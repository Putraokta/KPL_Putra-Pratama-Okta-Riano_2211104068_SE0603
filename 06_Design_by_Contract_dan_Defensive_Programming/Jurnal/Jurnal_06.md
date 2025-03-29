<div align="center">

# **TUGAS JURNAL**  
## **KONSTRUKSI PERANGKAT LUNAK**  
### **MODUL VI**  
### **Design by Contract dan Defensive Programming**

![logo tel-u](https://github.com/user-attachments/assets/3a44181d-9c92-47f6-8cf0-87755117fd99)

**Disusun Oleh:**  
**PUTRA PRATAMA OKTA RIANO (2211104068)**  
**SE06-03**

**Asisten Praktikum:**  
Vaninside  
rizqiiirz

**Dosen Pengampu:**  
riyandwwi

PROGRAM STUDI S1 REKAYASA PERANGKAT LUNAK  
FAKULTAS DIREKTORAT KAMPUS PURWOKERTO  
TELKOM UNIVERSITY PURWOKERTO  
2024

</div>

---

# TUGAS JURNAL

## A. Soal Nomor 1

Buatlah dua file class baru yang berisi detail sebagai berikut:

### A. Class Bernama “SayaTubeUser” dan “SayaTubeVideo”

Struktur dari class tersebut dapat dilihat pada gambar di bawah ini:

### SayaTubeUser

| **SayaTubeUser**                  |
|----------------------------------|
| - id: int                         |
| - uploadedVideos: List<SayaTubeVideo> |
| + Username: string               |
| + SayaTubeUser(string)           |
| + GetTotalVideoPlayCount(): int  |
| + AddVideo(SayaTubeVideo): void  |
| + PrintAllVideoPlaycount(): void |

---

### SayaTubeVideo

| **SayaTubeVideo**                 |
|----------------------------------|
| - id: int                         |
| - title: string                   |
| - playCount: int                  |
| + SayaTubeVideo(string)          |
| + IncreasePlayCount(int): void   |
| + PrintVideoDetails(): void      |

---

### Relasi:
- SayaTubeUser memiliki hubungan 1-N dengan SayaTubeVideo (1 user bisa memiliki banyak video).

### B. Detail Implementasi
- Konstruktor SayaTubeVideo menerima parameter judul video.
- Nilai id akan di-generate secara random (5 digit), dan playCount diisi dengan 0.
- Tambahkan method `IncreasePlayCount(int)` pada SayaTubeVideo.
- Tambahkan method `PrintVideoDetails()` untuk mencetak id, title, dan playCount.
- Konstruktor SayaTubeUser menerima parameter username dan menginisialisasi uploadedVideos sebagai list kosong.
- Method `GetTotalVideoPlayCount()` mengembalikan total playCount dari seluruh video.
- Method `AddVideo()` menambahkan video ke uploadedVideos.
- Method `PrintAllVideoPlaycount()` menampilkan:
  ```
  User: <username>
  Video 1 judul: <judul_video1>
  Video 2 judul: <judul_video2>
  ...
  ```

### C. Implementasi Method Utama
- Buat objek dari kedua kelas.
- Gunakan nama praktikan sebagai username.
- Tambahkan minimal 10 judul video dengan format:
  ```
  Review Film <judul_film> oleh <nama_praktikan>
  ```

**Commit:**  
`menambahkan dua class SayaTubeVideo dan SayaTubeUser`

---

## B. Soal Nomor 2

Tambahkan implementasi Design by Contract pada class yang telah dibuat.

### A. Precondition
1. Judul video maksimal 200 karakter.
2. Judul video tidak null.
3. Input penambahan playCount maksimal 25.000.000.
4. Input playCount tidak boleh negatif.
5. Username maksimal 100 karakter.
6. Username tidak null.
7. Video yang ditambahkan tidak null.
8. Video memiliki playCount < `int.MaxValue`.

### B. Exception Handling
- Gunakan `checked` pada operasi penambahan playCount untuk mencegah overflow.
- Tambahkan blok `try-catch` agar program tidak berhenti jika terjadi error.

### C. Postcondition
- Jumlah video yang dicetak oleh `PrintAllVideoPlaycount()` maksimal 8 video.

### D. Pengujian
- Buat objek dari class SayaTubeVideo dan SayaTubeUser untuk menguji precondition, exception, dan postcondition.
- Gunakan perulangan (for loop) jika perlu untuk memicu exception (misalnya overflow).

**Commit:**  
`penambahan design by contract pada semua kelas`


## Jawaban
### Jawaban 1
**Index.js**
```
const SayaTubeVideo = require('./SayaTubeVideo');
const SayaTubeUser = require('./SayaTubeUser');

function main() {
  // Membuat objek SayaTubeUser
  const user = new SayaTubeUser("Nama Praktikan");

  // Membuat objek SayaTubeVideo dan menambahkannya ke daftar video pengguna
  const video1 = new SayaTubeVideo("Review Film Interstellar oleh Nama Praktikan");
  const video2 = new SayaTubeVideo("Review Film Inception oleh Nama Praktikan");
  const video3 = new SayaTubeVideo("Review Film The Dark Knight oleh Nama Praktikan");
  const video4 = new SayaTubeVideo("Review Film Parasite oleh Nama Praktikan");
  const video5 = new SayaTubeVideo("Review Film Whiplash oleh Nama Praktikan");
  const video6 = new SayaTubeVideo("Review Film The Godfather oleh Nama Praktikan");
  const video7 = new SayaTubeVideo("Review Film Pulp Fiction oleh Nama Praktikan");
  const video8 = new SayaTubeVideo("Review Film Fight Club oleh Nama Praktikan");
  const video9 = new SayaTubeVideo("Review Film The Matrix oleh Nama Praktikan");
  const video10 = new SayaTubeVideo("Review Film Seven Samurai oleh Nama Praktikan");

  user.AddVideo(video1);
  user.AddVideo(video2);
  user.AddVideo(video3);
  user.AddVideo(video4);
  user.AddVideo(video5);
  user.AddVideo(video6);
  user.AddVideo(video7);
  user.AddVideo(video8);
  user.AddVideo(video9);
  user.AddVideo(video10);

  // Menambah playCount untuk beberapa video
  video1.IncreasePlayCount(100);
  video3.IncreasePlayCount(250);
  video5.IncreasePlayCount(150);

  // Menampilkan detail video
  video1.PrintVideoDetails();
  video3.PrintVideoDetails();
  video5.PrintVideoDetails();

  // Menampilkan total playCount semua video
  console.log(`Total Play Count: ${user.GetTotalVideoPlayCount()}`);

  // Menampilkan daftar judul video pengguna
  user.PrintAllVideoPlaycount();
}

// Memanggil fungsi utama
main();
```
**SayaTubeVideo.js**
```
class SayaTubeVideo {
  constructor(title) {
    this.id = Math.floor(10000 + Math.random() * 90000);
    this.title = title;
    this.playCount = 0;
  }

  IncreasePlayCount(count) {
    this.playCount += count;
  }

  PrintVideoDetails() {
    console.log(`ID: ${this.id}`);
    console.log(`Judul: ${this.title}`);
    console.log(`Jumlah Putar: ${this.playCount}`);
  }
}

module.exports = SayaTubeVideo;
```
**SayaTubeUser.js**
```
class SayaTubeUser {
  constructor(username) {
    this.username = username;
    this.uploadedVideos = [];
  }

  GetTotalVideoPlayCount() {
    return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
  }

  AddVideo(video) {
    this.uploadedVideos.push(video);
  }

  PrintAllVideoPlaycount() {
    console.log(`User: ${this.username}`);
    this.uploadedVideos.forEach((video, index) => {
      console.log(`Video ${index + 1} judul: ${video.title}`);
    });
  }
}

module.exports = SayaTubeUser;
```
**OUTPUT** <br>
![Image](https://github.com/user-attachments/assets/67aa68e2-1e99-4775-828f-207c6caf647c) <br>
![Image](https://github.com/user-attachments/assets/0fac02b0-663e-4d28-9a08-171fad9ad28d) <br>

**PENJELASAN**
<p align="justify"> Program ini dibuat menggunakan konsep <b>Object-Oriented Programming (OOP)</b> dengan dua kelas utama, yaitu <code>SayaTubeVideo</code> dan <code>SayaTubeUser</code>. Kelas <code>SayaTubeVideo</code> digunakan untuk merepresentasikan sebuah video dengan atribut seperti <i>id</i>, <i>title</i>, dan <i>playCount</i>. Setiap video memiliki ID unik yang dibuat secara acak dengan lima digit angka. Saat pertama kali dibuat, jumlah <i>playCount</i> untuk setiap video adalah 0. Selain itu, kelas ini memiliki metode <code>IncreasePlayCount()</code> untuk menambah jumlah putaran video dan <code>PrintVideoDetails()</code> untuk menampilkan informasi lengkap video. </p> <p align="justify"> Di sisi lain, kelas <code>SayaTubeUser</code> digunakan untuk merepresentasikan seorang pengguna yang memiliki daftar video yang diunggah. Setiap objek pengguna memiliki atribut <i>username</i> dan daftar <i>uploadedVideos</i>. Metode <code>AddVideo()</code> memungkinkan pengguna untuk menambahkan video baru ke dalam daftar mereka. Selain itu, metode <code>GetTotalVideoPlayCount()</code> akan menghitung total jumlah putaran dari seluruh video yang diunggah oleh pengguna. Metode <code>PrintAllVideoPlaycount()</code> digunakan untuk mencetak daftar semua judul video yang telah diunggah oleh pengguna. </p> <p align="justify"> Dalam fungsi <code>main()</code>, dibuat satu objek <code>SayaTubeUser</code> dengan nama pengguna tertentu. Kemudian, 10 objek <code>SayaTubeVideo</code> dibuat dengan judul yang berbeda dan ditambahkan ke dalam daftar video milik pengguna tersebut. Beberapa video diberikan peningkatan jumlah putaran menggunakan metode <code>IncreasePlayCount()</code>. Setelah itu, detail dari beberapa video tertentu dicetak menggunakan metode <code>PrintVideoDetails()</code>, lalu total jumlah putaran semua video ditampilkan. Terakhir, daftar judul video yang diunggah oleh pengguna dicetak. </p> 

### Jawaban 2
**Index.js**
```
const SayaTubeVideo = require('./SayaTubeVideo');
const SayaTubeUser = require('./SayaTubeUser');

function main() {
  try {
    const user = new SayaTubeUser("Putra Pratama Okta Riano");

    const video1 = new SayaTubeVideo("Review Film Interstellar oleh Putra Pratama Okta Riano");
    const video2 = new SayaTubeVideo("Review Film Inception oleh Putra Pratama Okta Riano");
    const video3 = new SayaTubeVideo("Review Film The Dark Knight oleh Putra Pratama Okta Riano");
    const video4 = new SayaTubeVideo("Review Film Parasite oleh Putra Pratama Okta Riano");
    const video5 = new SayaTubeVideo("Review Film Whiplash oleh Putra Pratama Okta Riano");
    const video6 = new SayaTubeVideo("Review Film The Godfather oleh Putra Pratama Okta Riano");
    const video7 = new SayaTubeVideo("Review Film Pulp Fiction oleh Putra Pratama Okta Riano");
    const video8 = new SayaTubeVideo("Review Film Fight Club oleh Putra Pratama Okta Riano");
    const video9 = new SayaTubeVideo("Review Film The Matrix oleh Putra Pratama Okta Riano");
    const video10 = new SayaTubeVideo("Review Film Seven Samurai oleh Putra Pratama Okta Riano");

    user.AddVideo(video1);
    user.AddVideo(video2);
    user.AddVideo(video3);
    user.AddVideo(video4);
    user.AddVideo(video5);
    user.AddVideo(video6);
    user.AddVideo(video7);
    user.AddVideo(video8);
    user.AddVideo(video9);
    user.AddVideo(video10);

    video1.IncreasePlayCount(100);
    video3.IncreasePlayCount(250);
    video5.IncreasePlayCount(150);

    video1.PrintVideoDetails();
    video3.PrintVideoDetails();
    video5.PrintVideoDetails();

    console.log(`Total Play Count: ${user.GetTotalVideoPlayCount()}`);
    user.PrintAllVideoPlaycount();

    // Uji exception overflow play count
    for (let i = 0; i < 1000; i++) {
      video1.IncreasePlayCount(Number.MAX_SAFE_INTEGER);
    }
  } catch (error) {
    console.error("Terjadi error:", error.message);
  }
}

main();
```
**SayaTubeVideo.js**
```
class SayaTubeVideo {
  constructor(title) {
    if (!title || title.length > 200) {
      throw new Error("Judul video tidak valid.");
    }
    this.id = Math.floor(10000 + Math.random() * 90000);
    this.title = title;
    this.playCount = 0;
  }

  IncreasePlayCount(count) {
    if (count <= 0 || count > 25000000) {
      throw new Error("Input play count tidak valid.");
    }
    try {
      if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
        throw new Error("Overflow play count.");
      }
      this.playCount += count;
    } catch (error) {
      console.error("Terjadi exception:", error.message);
    }
  }

  PrintVideoDetails() {
    console.log(`ID: ${this.id}`);
    console.log(`Judul: ${this.title}`);
    console.log(`Jumlah Putar: ${this.playCount}`);
  }
}

module.exports = SayaTubeVideo;
```
**SayaTubeUser.js**
```
class SayaTubeUser {
  constructor(username) {
    if (!username || username.length > 100) {
      throw new Error("Username tidak valid.");
    }
    this.username = username;
    this.uploadedVideos = [];
  }

  GetTotalVideoPlayCount() {
    return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
  }

  AddVideo(video) {
    if (!video || video.playCount > Number.MAX_SAFE_INTEGER) {
      throw new Error("Video tidak valid.");
    }
    this.uploadedVideos.push(video);
  }

  PrintAllVideoPlaycount() {
    console.log(`User: ${this.username}`);
    const maxPrint = Math.min(8, this.uploadedVideos.length);
    for (let i = 0; i < maxPrint; i++) {
      console.log(`Video ${i + 1} judul: ${this.uploadedVideos[i].title}`);
    }
  }
}

module.exports = SayaTubeUser;
```
**OUTPUT** <br>
![Image](https://github.com/user-attachments/assets/4a660fa0-f0dd-467e-bf40-1abe36326b6b) <br>
![Image](https://github.com/user-attachments/assets/b59ae647-bdaf-43eb-bf8f-809805f216a5) <br>
**Penjelasan**
<p align="justify">
Program ini dibuat menggunakan konsep <b>Object-Oriented Programming (OOP)</b> dengan dua kelas utama, yaitu <code>SayaTubeVideo</code> dan <code>SayaTubeUser</code>. Program ini bertujuan untuk mensimulasikan sistem manajemen video dan pengguna yang memiliki daftar video yang diunggah. Setiap video memiliki atribut unik seperti ID, judul, dan jumlah pemutaran (<i>playCount</i>). Selain itu, program ini mengimplementasikan konsep <i>Design by Contract</i> dan <i>Defensive Programming</i> untuk memastikan validitas data dan menghindari kesalahan selama eksekusi program.
</p>

<p align="justify">
Pada kelas <code>SayaTubeVideo</code>, konstruktor menerima parameter berupa judul video dengan syarat bahwa judul tidak boleh lebih dari 200 karakter dan tidak boleh kosong. ID video dihasilkan secara acak dengan panjang lima digit. Setiap video memiliki atribut <i>playCount</i> yang awalnya diset ke 0. Metode <code>IncreasePlayCount()</code> digunakan untuk menambah jumlah pemutaran video dengan batas maksimal 25.000.000 per pemanggilan. Jika nilai input negatif atau melebihi batas, program akan melemparkan error. Selain itu, metode ini juga mengantisipasi kemungkinan terjadinya <i>integer overflow</i> dengan membandingkan nilai yang akan ditambahkan terhadap batas maksimum bilangan yang dapat ditampung oleh JavaScript (<code>Number.MAX_SAFE_INTEGER</code>).
</p>

<p align="justify">
Kelas <code>SayaTubeUser</code> digunakan untuk merepresentasikan pengguna yang memiliki daftar video yang diunggah. Konstruktor kelas ini memastikan bahwa nama pengguna tidak boleh kosong dan tidak boleh lebih dari 100 karakter. Atribut <code>uploadedVideos</code> menyimpan daftar video yang telah ditambahkan oleh pengguna. Metode <code>AddVideo()</code> digunakan untuk menambahkan video ke dalam daftar, dengan validasi bahwa video yang ditambahkan tidak boleh kosong dan tidak boleh memiliki jumlah pemutaran melebihi batas aman bilangan dalam JavaScript. Metode <code>GetTotalVideoPlayCount()</code> menghitung total jumlah pemutaran dari semua video yang diunggah oleh pengguna, sedangkan metode <code>PrintAllVideoPlaycount()</code> mencetak daftar judul video dengan batas maksimal 8 video agar tidak terlalu panjang.
</p>

<p align="justify">
Pada file <code>Index.js</code>, program dimulai dengan membuat objek <code>SayaTubeUser</code> dengan nama "Putra Pratama Okta Riano". Kemudian, 10 objek <code>SayaTubeVideo</code> dibuat dengan judul yang berbeda dan ditambahkan ke dalam daftar video milik pengguna tersebut. Beberapa video diberikan peningkatan jumlah pemutaran menggunakan metode <code>IncreasePlayCount()</code>. Setelah itu, detail dari beberapa video tertentu dicetak menggunakan metode <code>PrintVideoDetails()</code>, lalu total jumlah pemutaran semua video ditampilkan. Terakhir, program menguji skenario pengecualian (<i>exception handling</i>) dengan mencoba menambahkan jumlah pemutaran dalam jumlah yang sangat besar secara berulang-ulang hingga menyebabkan <i>integer overflow</i>, yang kemudian ditangani dengan menampilkan pesan kesalahan tanpa menghentikan jalannya program.
</p>

<p align="justify">
Dengan penerapan konsep <i>Design by Contract</i>, program ini dapat menjamin bahwa setiap objek dan metode hanya menerima nilai yang valid, mencegah kesalahan runtime, serta meningkatkan keandalan kode. <i>Defensive Programming</i> diterapkan untuk menangani skenario yang tidak diinginkan seperti input yang salah, <i>null references</i>, dan <i>integer overflow</i>, sehingga program tetap berjalan dengan stabil meskipun menghadapi kondisi ekstrem.
</p>


