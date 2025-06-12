<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL V**  
**GENERICS**

![logo tel-u](https://github.com/user-attachments/assets/3a44181d-9c92-47f6-8cf0-87755117fd99)

Disusun Oleh :

**PUTRA PRATAMA OKTA RIANO (2211104068)**  
**SE06-03**

Asisten Praktikum :  
Vaninside
rizqiiirz

Dosen Pengampu :  <br>
riyandwwi

PROGRAM STUDI S1 REKAYASA PERANGKAT LUNAK  
FAKULTAS DIREKTORAT KAMPUS PURWOKERTO  
TELKOM UNIVERSITY PURWOKERTO  
2024

</div>

---

# TUGAS JURNAL

## SOAL 1
MENAMBAHKAN METHOD DENGAN GENERIC tanpa membuat file baru (gunakan file yang dibuat saat membuat project): <br>
A. Buatlah sebuah class bernama “Penjumlahan”. </P>
B. Pada class tersebut, tambahkan sebuah method dengan nama “JumlahTigaAngka” yang
memiliki tiga parameter generic yang sama yaitu “T” </P>
C. Method tersebut dapat melakukan penjumalahan dari tiga input/argument yang diberikan pada
method tersebut. </P>
D. Hint: gunakan variable sementara dengan tipe data dynamic untuk memungkinkan operasi
matematis misalnya penjumlahan. </P>
E. Panggil method tersebut pada fungsi/method utama dengan tiga input angka yaitu 2-digit dari
NIM. Misalnya NIM 12345678, maka tiga input angka yaitu “12”, “34” dan “56” dengan tipe data
sebagai berikut: </P>
i. NIM berakhiran 1 atau 2: tipe data input float </P>
ii. NIM berakhiran 3, 4 atau 5: tipe data input double </P>
iii. NIM berakhiran 6, 7 atau 8: tipe data input int </P>
iv. NIM berakhiran 9 atau 0: tipe data input long </P>

## SOAL 2
MENAMBAHKAN METHOD DENGAN GENERIC
Tanpa membuat file baru (gunakan file yang dibuat saat membuat project dan pastikan branch
aktif adalah pada branch implementasi-generic-class): <br>
A. Buatlah sebuah class bernama “SimpleDataBase” dengan mengikuti class model yang
ditunjukkan pada gambar/tabel di bawah ini. </P>
SimpleDataBase 
- <P>-storedData: List<T> </P>
- <P>-inputDates: List<Date> </P>
- <P>+SimpleDataBase() </P>
- <P>+AddNewData(T) </P>
- <P>+PrintAllData(): void </P>
B. Class tersebut memiliki dua property yaitu: </P>
i. Property “storedData” yang merupakan suatu List (struktur data bawaan/default) yang
berisi data bertipe generic “T”. </P>
ii. Property “inputDates” yang bertipe List<Date> (atau tipe data List<DateTime> di C#) yang
akan list dari waktu input. </P>
C. Class tersebut juga memiliki beberapa method yaitu: </P>
i. Konstruktor SimpleDataBase() yang akan membuat property “storedData” berisi List </P>
kosong.
ii. Method AddNewData(T) yang akan menambahkan data baru bertipe T ke dalam list
“storedData” dan waktu saat itu (Now) ke dalam list “inputDates”. </P>
iii. Method PrintAllData() yang akan memberikan output console berupa teks yang
menampilkan seluruh data yang tersimpan pada “storedData” dan “inputDates”, contohnya: </P>
- Data 1 berisi: 12, yang disimpan pada waktu UTC: 3/10/2022 5:32:01 AM
- Data 2 berisi: 34, yang disimpan pada waktu UTC: 3/10/2022 5:32:02 AM
- Data 2 berisi: 56, yang disimpan pada waktu UTC: 3/10/2022 5:32:02 AM <br>
D. Panggil method PrintAllData() pada fungsi/method utama setelah menambahkan tiga data
yang berisi dan bertipe dua-digit NIM seperti pada bagian 4E. <br>

## Jawaban
**Index.js**
```
const Penjumlahan = require("./implementasi-generic-method");
const SimpleDataBase = require("./implementasi-generic-class");

const nim = "2211104068"; 
const lastDigit = parseInt(nim[nim.length - 1]); 

const name = "Putra Pratama Okta Riano";

console.log(`Nama saya: ${name}`);

// Menentukan tipe data berdasarkan digit terakhir NIM
let angka1, angka2, angka3;

if (lastDigit === 1 || lastDigit === 2) {
    angka1 = parseFloat("22");
    angka2 = parseFloat("11");
    angka3 = parseFloat("10");
} else if (lastDigit === 3 || lastDigit === 4 || lastDigit === 5) {
    angka1 = parseFloat("22");
    angka2 = parseFloat("11");
    angka3 = parseFloat("10");
} else if (lastDigit === 6 || lastDigit === 7 || lastDigit === 8) {
    angka1 = parseInt("22");
    angka2 = parseInt("11");
    angka3 = parseInt("10");
} else {
    angka1 = BigInt("22");
    angka2 = BigInt("11");
    angka3 = BigInt("10");
}

// --- Menggunakan Class Penjumlahan ---
const penjumlahan = new Penjumlahan();
const hasil = penjumlahan.penjumlahanTigaAngka(angka1, angka2, angka3);
console.log(`Hasil penjumlahan tiga angka adalah: ${hasil}`);

// --- Menggunakan Class SimpleDataBase ---
const database = new SimpleDataBase();

// Menambahkan data ke dalam database
database.AddNewData(angka1);
database.AddNewData(angka2);
database.AddNewData(angka3);

// Menampilkan semua data yang tersimpan
database.PrintAllData();
```

**Implementasi-generic-method.js**
```
class Penjumlahan {
    penjumlahanTigaAngka(a, b, c) {
        let hasil = a + b + c;
        return hasil;
    }
}

module.exports = Penjumlahan;  // Menambahkan export agar bisa dipakai di file lain
```

**Implementasi-generic-class.js**
```
class SimpleDataBase {
    constructor() {
        this.storedData = [];  
        this.inputDates = [];  
    }

    AddNewData(data) {
        this.storedData.push(data);
        this.inputDates.push(new Date().toUTCString()); 
    }

    PrintAllData() {
        this.storedData.forEach((data, index) => {
            console.log(`Data ${index + 1} berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[index]}`);
        });
    }
}

module.exports = SimpleDataBase;  // Menambahkan export agar bisa dipakai di file lain
```

**Output**
![Image](https://github.com/user-attachments/assets/0dbc857d-0b7d-40cf-a904-88c30f850adf)

**Penjelasan**
<p>Ketiga file dalam proyek ini memiliki fungsi yang saling berkaitan dalam mengimplementasikan konsep generic class dan generic method dalam JavaScript. File implementasi-generic-method.js berisi kelas Penjumlahan yang memiliki metode penjumlahanTigaAngka() untuk menjumlahkan tiga angka dengan tipe data yang ditentukan berdasarkan digit terakhir NIM. Program akan menentukan tipe data angka yang sesuai dan menghitung hasil penjumlahannya. Kemudian, implementasi-generic-class.js berisi kelas SimpleDataBase yang digunakan untuk menyimpan data dalam list (array) serta mencatat waktu saat data ditambahkan. Metode AddNewData() menambahkan data ke dalam array, sementara PrintAllData() menampilkan semua data beserta waktu penyimpanannya dalam format UTC. Terakhir, index.js berfungsi sebagai file utama yang menghubungkan kedua file sebelumnya dan menjalankan program secara otomatis dengan menggunakan require(). File ini memastikan bahwa semua proses berjalan dalam satu eksekusi tanpa perlu menjalankan file secara terpisah. Dengan struktur ini, proyek dapat berjalan dengan baik, mengimplementasikan konsep generik dalam operasi matematika dan penyimpanan data.</p>
