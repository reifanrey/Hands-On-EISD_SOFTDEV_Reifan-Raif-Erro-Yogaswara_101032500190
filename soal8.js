let dataPeserta = [
    {nama: "Alya", status: "active", kategori: "Web", nilaiEvaluasi: 85},
    {nama: "Bima", status: "active", kategori: "Data", nilaiEvaluasi: 75},
    {nama: "Citra", status: "inactive", kategori: "Web", nilaiEvaluasi: 901},
    {nama: "Doni", status: "active", kategori: "Web", nilaiEvaluasi: 95},
    {nama: "Eka", status: "active", kategori: "Data", nilaiEvaluasi: 80}
]

let hasilSeleksi = [];

for (let i = 0; i < dataPeserta.length; i++) {
    if (dataPeserta[i].status === "active" && dataPeserta[i].kategori === "Web" && dataPeserta[i].nilaiEvaluasi >= 80) {
        hasilSeleksi.push({
            namaPeserta: dataPeserta[i].nama,
            nilaiEvaluasi: dataPeserta[i].nilaiEvaluasi
        })
    }
}
console.log(hasilSeleksi);