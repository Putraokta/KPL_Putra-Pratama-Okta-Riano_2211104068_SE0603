class SayaTubeVideo {
    constructor(title) {
      if (!title || title.length > 100) {
        throw new Error("Judul video tidak valid.");
      }
      this.id = Math.floor(10000 + Math.random() * 90000);
      this.title = title;
      this.playCount = 0;
    }
  
    IncreasePlayCount(count) {
      if (count <= 0 || count > 10000000) {
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