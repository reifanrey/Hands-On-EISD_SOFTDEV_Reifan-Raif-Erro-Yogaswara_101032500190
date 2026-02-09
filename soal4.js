function validasiData(nama, email, divisi, jumlah) {
  if (nama === "" || nama === null) {
    return "Data tidak valid";
  }

  if (email === "" || !email.includes("@")) {
    return "Data tidak valid";
  }

  if (divisi === "" || divisi === null) {
    return "Data tidak valid";
  }

  if (typeof jumlah !== "number" || jumlah < 1) {
    return "Data tidak valid";
  }

  return "Data valid";
}

console.log("nama : Reifan, email : reifan@gmail.com, divisi : Webdev, jumlah : 5 |", validasiData("Reifan", "reifan@gmail.com", "Webdev", 5));
console.log("nama : Reifan, email : reifan@gmail.com, divisi : Webdev, jumlah : 5 |", validasiData("Agus", "agus@gmail.com", "Webdev", 5));