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