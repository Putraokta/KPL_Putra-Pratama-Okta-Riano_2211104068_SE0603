<div align="center">

**TUGAS JURNAL**
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL XII**
**ANALISIS KINERJA, UNIT TESTING & DEBUGGING**

![logo tel-u](https://github.com/user-attachments/assets/3a44181d-9c92-47f6-8cf0-87755117fd99)

Disusun Oleh :

**PUTRA PRATAMA OKTA RIANO (2211104068)**
**SE06-03**

Asisten Praktikum :
Vaninside
rizqiiirz

Dosen Pengampu :
riyandwwi

PROGRAM STUDI S1 REKAYASA PERANGKAT LUNAK
FAKULTAS DIREKTORAT KAMPUS PURWOKERTO
TELKOM UNIVERSITY PURWOKERTO
2025

</div>

---

# TUGAS JURNAL

## A. Soal Nomor 1: Pembentukan Proyek GUI Baru

Bagian ini berfokus pada langkah awal pembangunan proyek, yaitu inisialisasi proyek GUI.

1.  Buka lingkungan pengembangan terintegrasi (IDE) Anda, misalnya Visual Studio.
2.  Buatlah sebuah proyek baru. Berikan nama proyek dengan format `modul12_NIM` Anda, contoh: `modul12_2211104068`.
3.  Pastikan jenis proyek yang Anda pilih mendukung pengembangan antarmuka pengguna grafis (GUI). Jika menggunakan Visual Studio, pastikan Anda memilih template seperti "Windows Forms App" atau yang serupa.

## B. Soal Nomor 2: Pengembangan GUI dan Logika Kustom

Setelah proyek terbentuk, langkah selanjutnya adalah mendesain antarmuka dan mengimplementasikan fungsionalitas inti.

1.  Dalam proyek yang telah Anda buat, rancanglah sebuah Form atau tampilan GUI sederhana. Antarmuka ini harus memiliki elemen-elemen berikut:
    * Dua buah **textbox** untuk menerima input numerik.
    * Satu **tombol** (button) untuk memicu proses komputasi.
    * Satu **label** yang akan digunakan untuk menampilkan hasil atau output.
2.  Implementasikan sebuah metode atau fungsi baru dengan nama `CariNilaiPangkat(int a, int b)`. Fungsi ini harus menerima dua argumen integer (`a` dan `b`) dan mengembalikan nilai berupa hasil perpangkatan $a^b$. Penting: Implementasi perpangkatan harus dilakukan secara iteratif (misalnya dengan loop), **tanpa menggunakan fungsi perpangkatan bawaan dari library (`Math.Pow` di C# atau operator `**` di JavaScript) atau fungsi serupa**.
3.  Di dalam metode `CariNilaiPangkat` tersebut, terapkan aturan-aturan khusus berikut (aturan ini berbeda dari definisi perpangkatan standar):
    * i. Apabila nilai input `b` adalah 0, maka nilai yang dikembalikan harus selalu 1, terlepas dari nilai `a` (bahkan jika `a` adalah 0).
    * ii. Apabila nilai input `b` adalah bilangan negatif, maka nilai yang dikembalikan adalah -1.
    * iii. Apabila nilai input `b` lebih dari 10, **atau** nilai input `a` lebih dari 100, maka nilai yang dikembalikan adalah -2.
    * iv. Apabila hasil perhitungan pangkat melebihi batas nilai maksimal bilangan positif integer (misalnya, gunakan `checked` keyword di C# untuk mendeteksi overflow), maka nilai yang dikembalikan adalah -3.
4.  Pada tampilan GUI, kaitkan fungsi tombol dengan event klik. Saat tombol ditekan, ambil nilai dari kedua textbox, panggil fungsi `CariNilaiPangkat` dengan input tersebut, dan tampilkan hasil return dari fungsi ke dalam label output.

## C. Soal Nomor 3: Pengujian Kinerja Aplikasi (Software Profiling)

Bagian ini bertujuan untuk menganalisis penggunaan sumber daya sistem oleh aplikasi Anda.

1.  Jalankan proyek yang telah Anda buat. Saat aplikasi berjalan namun belum ada interaksi pengguna (tanpa input apa pun), gunakan alat profiling (seperti Performance Profiler di Visual Studio, Task Manager di Windows, atau Activity Monitor di macOS) untuk **mencatat dan mengamati penggunaan CPU** oleh aplikasi.
2.  Pada kondisi yang sama (aplikasi berjalan tanpa input), **catat dan amati penggunaan memori (RAM)** aplikasi Anda menggunakan alat profiling yang sama.
3.  Lakukan eksperimen: Masukkan nilai "3" pada textbox pertama dan "19" pada textbox kedua. Tekan tombol dan segera **catat serta amati penggunaan memori** aplikasi.
4.  Laporkan hasil pengamatan Anda: Jelaskan apakah terdapat perubahan yang signifikan pada penggunaan CPU dan memori setelah interaksi input. Apabila tidak ada perubahan, hal tersebut juga perlu dilaporkan dalam dokumen akhir (misalnya file .docx).
5.  Ulangi eksperimen dengan input: Masukkan nilai "9" pada textbox pertama dan "30" pada textbox kedua. Tekan tombol, lalu laporkan apakah terdapat perubahan pada penggunaan CPU dan memori dibandingkan dengan kondisi sebelumnya.

## D. Soal Nomor 4: Penambahan Unit Testing

Langkah terakhir adalah memastikan keandalan fungsi inti aplikasi melalui unit testing.

1.  Di dalam proyek yang sama, buatlah kode unit test khusus untuk menguji metode `CariNilaiPangkat` yang telah Anda implementasikan.
2.  Pastikan bahwa unit test yang Anda buat memiliki cakupan percabangan (branch coverage) yang memadai untuk metode `CariNilaiPangkat`. Ini berarti setiap kondisi dan jalur eksekusi yang mungkin (seperti `b == 0`, `b < 0`, `b > 10 || a > 100`, overflow, dan perhitungan normal) harus memiliki setidaknya satu test case yang mencakupnya.
3.  Jalankan semua unit test yang telah Anda buat dan sertakan tangkapan layar (screenshot) dari hasil eksekusi unit testing sebagai bukti.

**Input**

- index.html

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Modul12_2211104068</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <style>
        body {
          font-family: "Inter", sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #f3f4f6;
        }

        .container {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
        }

        h2 {
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
          color: #111827;
          text-align: center;
        }

        input[type="number"] {
          width: 100%;
          padding: 0.75rem;
          margin-bottom: 1rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          font-size: 1rem;
        }

        button {
          width: 100%;
          padding: 0.75rem;
          background-color: #2563eb;
          color: white;
          font-weight: 600;
          font-size: 1rem;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        button:hover {
          background-color: #1e40af;
        }

        p#outputLabel {
          margin-top: 1rem;
          font-size: 1rem;
          color: #374151;
          text-align: center;
        }

        @media (max-width: 480px) {
          .container {
            padding: 1.5rem;
            border-radius: 0.75rem;
          }

          h2 {
            font-size: 1.25rem;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>Hitung Pangkat</h2>
        <input type="number" id="inputA" placeholder="Nilai a" />
        <input type="number" id="inputB" placeholder="Nilai b" />
        <button onclick="hitung()">Hitung Pangkat</button>
        <p id="outputLabel">Hasil:</p>
      </div>

      <script src="script.js"></script>
    </body>
  </html>
  ```

- script.js

  ```js
  function CariNilaiPangkat(a, b) {
    if (b === 0) return 1;
    if (b < 0) return -1;
    if (b > 10 || a > 100) return -2;

    let result = 1;
    try {
      for (let i = 0; i < b; i++) {
        result = checkOverflow(result * a);
      }
    } catch {
      return -3;
    }
    return result;
  }

  function checkOverflow(num) {
    if (num > Number.MAX_SAFE_INTEGER) throw new Error("Overflow");
    return num;
  }

  function hitung() {
    const a = parseInt(document.getElementById("inputA").value);
    const b = parseInt(document.getElementById("inputB").value);
    const hasil = CariNilaiPangkat(a, b);
    document.getElementById("outputLabel").innerText = `Hasil: ${hasil}`;
  }
  ```

- pangkat.js

  ```js
  function CariNilaiPangkat(a, b) {
    if (b === 0) return 1;
    if (b < 0) return -1;
    if (b > 10 || a > 100) return -2;

    let result = 1;
    try {
      for (let i = 0; i < b; i++) {
        result = checkOverflow(result * a);
      }
    } catch {
      return -3;
    }
    return result;
  }
  function checkOverflow(num) {
    if (num > Number.MAX_SAFE_INTEGER) throw new Error("Overflow");
    return num;
  }
  module.exports = { CariNilaiPangkat };
  ```

- test/pangkat.test.js

  ```js
  const { CariNilaiPangkat } = require("../pangkat");

  test("pangkat biasa", () => {
    expect(CariNilaiPangkat(2, 3)).toBe(8);
  });

  test("pangkat 0", () => {
    expect(CariNilaiPangkat(5, 0)).toBe(1);
    expect(CariNilaiPangkat(0, 0)).toBe(1);
  });

  test("bilangan negatif", () => {
    expect(CariNilaiPangkat(3, -2)).toBe(-1);
  });

  test("batas input", () => {
    expect(CariNilaiPangkat(101, 2)).toBe(-2);
    expect(CariNilaiPangkat(2, 11)).toBe(-2);
  });

  test("overflow", () => {
    expect(CariNilaiPangkat(100, 10)).toBe(-3);
  });
  ```

**Output**

- Soal 1 & 2 <br>
![Image](https://github.com/user-attachments/assets/1dede5d0-09ce-4caa-96fb-813213c45a58) <br>

- Soal 3
![Image](https://github.com/user-attachments/assets/2d1d326a-6597-4752-bdb8-b29ec57f44cc) <br>
![Image](https://github.com/user-attachments/assets/bbed4c52-9e56-47ba-9821-5467b7edaeef)<br>
![Image](https://github.com/user-attachments/assets/aa68704c-31d1-406c-bb95-6b7fa763e435)<br>

- Soal 4
![Image](https://github.com/user-attachments/assets/6c3390e2-2076-4913-8e7f-aa2b7a7164d7) <br>

---
