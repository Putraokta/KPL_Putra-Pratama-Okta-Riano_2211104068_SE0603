const SayaTubeVideo = require('./SayaTubeVideo');
const SayaTubeUser = require('./SayaTubeUser');

function main() {
  try {
    const user = new SayaTubeUser("Putra Pratama Okta Riano");

    const video1 = new SayaTubeVideo("Review Film Interstellar oleh Putra Pratama Okta Riano");
    const video2 = new SayaTubeVideo("Review Film Inception oleh Putra Pratama Okta Riano");
    const video3 = new SayaTubeVideo("Review Film The Dark Knight oleh Putra Pratama Okta Riano");
    const video4 = new SayaTubeVideo("Review Film Parasite oleh Putra Pratama Okta Riano");
    const video5 = new SayaTubeVideo("Review Film Whiplash oleh Putra Pratama Okta Riano");
    const video6 = new SayaTubeVideo("Review Film The Godfather oleh Putra Pratama Okta Riano");
    const video7 = new SayaTubeVideo("Review Film Pulp Fiction oleh Putra Pratama Okta Riano");
    const video8 = new SayaTubeVideo("Review Film Fight Club oleh Putra Pratama Okta Riano");
    const video9 = new SayaTubeVideo("Review Film The Matrix oleh Putra Pratama Okta Riano");
    const video10 = new SayaTubeVideo("Review Film Seven Samurai oleh Putra Pratama Okta Riano");

    user.AddVideo(video1);
    user.AddVideo(video2);
    user.AddVideo(video3);
    user.AddVideo(video4);
    user.AddVideo(video5);
    user.AddVideo(video6);
    user.AddVideo(video7);
    user.AddVideo(video8);
    user.AddVideo(video9);
    user.AddVideo(video10);

    video1.IncreasePlayCount(100);
    video3.IncreasePlayCount(250);
    video5.IncreasePlayCount(150);

    video1.PrintVideoDetails();
    video3.PrintVideoDetails();
    video5.PrintVideoDetails();

    console.log(`Total Play Count: ${user.GetTotalVideoPlayCount()}`);
    user.PrintAllVideoPlaycount();

    // Uji exception overflow play count
    for (let i = 0; i < 1000; i++) {
      video1.IncreasePlayCount(Number.MAX_SAFE_INTEGER);
    }
  } catch (error) {
    console.error("Terjadi error:", error.message);
  }
}

main();