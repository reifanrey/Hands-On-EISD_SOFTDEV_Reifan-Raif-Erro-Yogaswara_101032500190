let namaPendaftar = ["Alya", "Bima", "Citra", "Doni", "Eka"];
let kuota = 3;
let daftarDiterima = [];
let daftarDitolak = [];

for (let i = 0; i < namaPendaftar.length; i++) {
    if (daftarDiterima.length < kuota) {
        daftarDiterima.push(namaPendaftar[i]);
    } else {
        daftarDitolak.push(namaPendaftar[i]);
    }
}

console.log("Nama pendaftar yang diterima:", daftarDiterima);
console.log("Nama pendaftar yang ditolak:", daftarDitolak);