let pendaftar = [
  { nama: "Alya", status: "active", nilai: 85 },
  { nama: "Bima", status: "inactive", nilai: 90 },
  { nama: "Citra", status: "active", nilai: 70 },
  { nama: "Doni", status: "active", nilai: 95 },
  { nama: "Eka", status: "inactive", nilai: 60 }
];

let hasil = [];

for (let i = 0; i < pendaftar.length; i++) {
  if (pendaftar[i].status === "active" && pendaftar[i].nilai >= 80) {
    hasil.push({
      namaPeserta: pendaftar[i].nama,
      nilaiSeleksi: pendaftar[i].nilai
    });
  }
}

console.log(hasil);
