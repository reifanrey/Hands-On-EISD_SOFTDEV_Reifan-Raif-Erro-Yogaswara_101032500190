function cekStatus(kuota, terdaftar) {
  if (terdaftar > kuota) {
    return "Pendaftaran ditolak";
  } else if (terdaftar === kuota) {
    return "Pendaftaran ditutup";
  } else if (terdaftar >= kuota - 3) {
    return "Hampir penuh";
  } else {
    return "Pendaftaran diterima";
  }
}

console.log("Study group dengan kuota 20 dan terdaftar 15: ", cekStatus(20, 15));
console.log("Study group dengan kuota 20 dan terdaftar 18: ", cekStatus(20, 18));
console.log("Study group dengan kuota 20 dan terdaftar 20: ", cekStatus(20, 20));
console.log("Study group dengan kuota 20 dan terdaftar 23: ", cekStatus(20, 23));
    