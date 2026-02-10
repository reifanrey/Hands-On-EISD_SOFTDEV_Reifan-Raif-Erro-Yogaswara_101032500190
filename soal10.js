let namaPeminjam = ["Alya", "Bima", "Cintra", "Doni", "Eka", "Farah"];
let bukuTersedia = 4;
let peminjamanBerhasil = [];

for (let i = 0; i < namaPeminjam.length; i++) {
    if (bukuTersedia > 0) {
        peminjamanBerhasil.push(namaPeminjam[i]);
        console.log("Nama peminjam yang berhasil:", peminjamanBerhasil);
        bukuTersedia--;
    } else { 
        console.log("Mohon maaf, buku sudah habis");break;
    }
}