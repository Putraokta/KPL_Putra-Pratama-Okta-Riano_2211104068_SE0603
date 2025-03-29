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