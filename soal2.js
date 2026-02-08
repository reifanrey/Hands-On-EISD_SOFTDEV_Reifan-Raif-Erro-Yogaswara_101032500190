const dataPendaftaran = [
  { namaStudygroup: "Software Development", kuota: 20, jumlahTerdaftar: 18 },
  { namaStudygroup: "UI/UX Design", kuota: 15, jumlahTerdaftar: 15 },
  { namaStudygroup: "Technopreneur", kuota: 25, jumlahTerdaftar: 10 },
  { namaStudygroup: "Intelligence System", kuota: 10, jumlahTerdaftar: 10 }
];

let tersedia = [];
let penuh = [];

for (let i = 0; i < dataPendaftaran.length; i++) {
  if (dataPendaftaran[i].jumlahTerdaftar < dataPendaftaran[i].kuota) {
    tersedia.push(dataPendaftaran[i].namaStudygroup);
  } else {
    penuh.push(dataPendaftaran[i].namaStudygroup);
  }
}

console.log("Study group yang masih tersedia adalah %s", tersedia);
console.log("Study group yang sudah penuh adalah %s", penuh);
