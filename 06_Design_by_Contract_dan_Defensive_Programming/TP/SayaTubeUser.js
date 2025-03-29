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