class SayaTubeVideo {
    constructor(title) {
      if (!title) {
        throw new Error("Judul video harus diisi.");
      }
      this.id = Math.floor(10000 + Math.random() * 90000);
      this.title = title;
      this.playCount = 0;
    }
  
    IncreasePlayCount(count) {
      if (count <= 0) {
        throw new Error("Jumlah putar harus lebih dari 0.");
      }
      this.playCount += count;
    }
  
    PrintVideoDetails() {
      return `ID: ${this.id}, Judul: ${this.title}, Jumlah Putar: ${this.playCount}`;
    }
  }
  
  module.exports = SayaTubeVideo;