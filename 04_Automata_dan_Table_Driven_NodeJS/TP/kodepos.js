class KodePos {
    constructor() {
        this.dataKodePos = {
            "Batununggal": 40266,
            "Kujangsari": 40287,
            "Mengger": 40267,
            "Wates": 40256,
            "Cijaura": 40287,
            "Jatisari": 40286,
            "Margasari": 40286,
            "Sekejati": 40286,
            "Kebonwaru": 40272,
            "Maleer": 40274,
            "Samoja": 40273
        };
    }

    // Method untuk mendapatkan kode pos berdasarkan kelurahan
    getKodePos(kelurahan) {
        return this.dataKodePos[kelurahan] || "Kode pos tidak ditemukan";
    }
}

// Program utama
const kodePosLookup = new KodePos();

// Contoh pemanggilan method getKodePos
testKelurahan("Batununggal");
testKelurahan("Kujangsari");
testKelurahan("TidakAda");

// Fungsi untuk menguji pemanggilan getKodePos
function testKelurahan(kelurahan) {
    console.log(`Kode pos untuk ${kelurahan}: ${kodePosLookup.getKodePos(kelurahan)}`);
}