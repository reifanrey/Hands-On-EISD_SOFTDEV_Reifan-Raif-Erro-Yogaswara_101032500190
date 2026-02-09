const dataStudygroup = [
  { namaStudygroup: "Web Development", jumlahPeserta:18 }, 
  { namaStudygroup: "Logic & Algorithm", jumlahPeserta:15 }, 
  { namaStudygroup: "Frontend Fundamental", jumlahPeserta:10 }, 
  { namaStudygroup: "Backend Introduction", jumlahPeserta:10 }
];

let total = 0;

for (let i = 0; i < dataStudygroup.length; i++) {
  total += dataStudygroup[i].jumlahPeserta;
}

let rataRata = total / dataStudygroup.length;

console.log("Total peserta:", total);
console.log("Rata-rata peserta:", rataRata);
