const KodePos = require('./kodepos');

// Program utama
const kodePosLookup = new KodePos();

// Contoh pemanggilan method getKodePos
console.log(kodePosLookup.getKodePos("Batununggal")); // Output: 40266
console.log(kodePosLookup.getKodePos("Kujangsari")); // Output: 40287
console.log(kodePosLookup.getKodePos("TidakAda"));   // Output: Kode pos tidak ditemukan
