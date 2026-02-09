let emails = [
  "Andi@gmail.com",
  "Budi@gmail.com",
  "Sari@gmail.com",
  "Andi@gmail.com",
  "Rina@gmail.com",
  "Budi@gmail.com"
];

let sudahAda = {};
let duplikat = [];

for (let i = 0; i < emails.length; i++) {
  let email = emails[i];

  if (sudahAda[email]) {
    if (!duplikat.includes(email)) {
      duplikat.push(email);
    }
  } else {
    sudahAda[email] = true;
  }
}

if (duplikat.length > 0) {
  console.log("Email duplikat:", duplikat);
} else {
  console.log("Tidak ada data duplikat");
}
