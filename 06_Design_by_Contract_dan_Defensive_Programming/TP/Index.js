const SayaTubeVideo = require('./SayaTubeVideo');
const SayaTubeUser = require('./SayaTubeUser');

function main() {
  // Membuat objek SayaTubeUser
  const user = new SayaTubeUser("Putra Pratama Okta Riano");

  // Membuat objek SayaTubeVideo dan menambahkannya ke daftar video pengguna
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

  // Menambah playCount untuk beberapa video
  video1.IncreasePlayCount(100);
  video3.IncreasePlayCount(250);
  video5.IncreasePlayCount(150);

  // Menampilkan detail video
  video1.PrintVideoDetails();
  video3.PrintVideoDetails();
  video5.PrintVideoDetails();

  // Menampilkan total playCount semua video
  console.log(`Total Play Count: ${user.GetTotalVideoPlayCount()}`);

  // Menampilkan daftar judul video pengguna
  user.PrintAllVideoPlaycount();
}

// Memanggil fungsi utama
main();