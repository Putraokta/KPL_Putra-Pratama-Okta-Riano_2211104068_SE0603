let globalVariable = "Putra Pratama Okta Riano"; // Perbaikan typo

function getMyIdentity() {
    let localVariable = 2211102016; // Tetap lokal dalam fungsi

    console.log(`Nama saya ${globalVariable} nim ${localVariable}`); 
}

console.log(globalVariable); 
// console.log(localVariable); // Tidak dapat diakses di luar fungsi

getMyIdentity(); 
