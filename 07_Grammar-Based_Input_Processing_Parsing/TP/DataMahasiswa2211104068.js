const fs = require("fs");

class DataMahasiswa2211104068 {
  static ReadJSON() {
    const filePath = "./tp7_1_2211104068.json";
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const mahasiswa = JSON.parse(jsonData);

    console.log(
      `Nama ${mahasiswa.nama.toLowerCase()} dengan nim ${
        mahasiswa.nim
      } dari fakultas ${mahasiswa.fakultas.toLowerCase()}`
    );
  }
}

module.exports = DataMahasiswa2211104068;