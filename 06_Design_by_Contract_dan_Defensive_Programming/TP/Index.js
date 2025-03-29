const SayaTubeVideo = require('./SayaTubeVideo');

function main() {
  try {
    const video = new SayaTubeVideo("Tutorial Design By Contract - [Putra Pratama Okta Riano]");
    video.IncreasePlayCount(100);
    console.log(video.PrintVideoDetails());
  } catch (error) {
    console.error("Terjadi error:", error.message);
  }

  try {
    const video2 = new SayaTubeVideo(); // Akan memicu error karena judul kosong
  } catch (error) {
    console.error("Terjadi error:", error.message);
  }

  try {
    const video3 = new SayaTubeVideo("Video dengan judul");
    video3.IncreasePlayCount(-10); // Akan memicu error karena jumlah putar negatif
  } catch (error) {
    console.error("Terjadi error:", error.message);
  }
}

main();