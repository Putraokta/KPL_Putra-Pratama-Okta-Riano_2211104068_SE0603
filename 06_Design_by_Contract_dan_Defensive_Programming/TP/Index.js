const SayaTubeVideo = require('./SayaTubeVideo');

function main() {
  try {
    const video = new SayaTubeVideo("Tutorial Design By Contract - [Putra Pratama Okta Riano - 2211104068]");
    video.IncreasePlayCount(1000000);
    video.PrintVideoDetails();

    // Uji exception overflow play count
    for (let i = 0; i < 1000; i++) {
      video.IncreasePlayCount(Number.MAX_SAFE_INTEGER);
    }
  } catch (error) {
    console.error("Terjadi error:", error.message);
  }

  try {
    const video2 = new SayaTubeVideo(); // Akan memicu error karena judul kosong
  } catch (error) {
    console.error("Terjadi error:", error.message);
  }

  try {
    const video3 = new SayaTubeVideo("Video dengan judul yang sangat panjang lebih dari 100 karakter"); // Akan memicu error karena judul terlalu panjang
  } catch (error) {
    console.error("Terjadi error:", error.message);
  }

  try {
    const video4 = new SayaTubeVideo("Video dengan judul");
    video4.IncreasePlayCount(-10); // Akan memicu error karena jumlah putar negatif
  } catch (error) {
    console.error("Terjadi error:", error.message);
  }

  try {
    const video5 = new SayaTubeVideo("Video dengan judul");
    video5.IncreasePlayCount(20000000); // Akan memicu error karena jumlah putar melebihi batas maksimum
  } catch (error) {
    console.error("Terjadi error:", error.message);
  }
}

main();