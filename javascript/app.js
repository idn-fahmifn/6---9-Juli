const brand = "IDNetworkers";
// brand = "PT ABCD"

let nama_lengkap = "Asep";

var a = "test"; //abaikan, tidak digunakan lagi di modern

console.log("Hallo nama saya " + nama_lengkap + " saya bekerja di : " + brand);

let output = `Hallo nama saya ${nama_lengkap}, saya bekerja di ${brand} `;
console.log(output);

// tipe data

// String = mewakili nilai karakter / kata
//  "" , '', ``

const nama = "Fahmi"; // tipe data string
const meja = 40;
console.log(nama);

// tipe data number :
// desimal, - +, NaN

let angka1 = "10"; //bukan lagi tipe data number, melainkan string
let angka2 = 0.5; // 5
let angka3 = meja;
// let angka = prompt("Masukan angka : ")
// let tambah = prompt("Masukan angka : ")

// console.log(Number(angka) + Number(tambah))

// boolean = kebenaran
let active = true;
active = false;

console.log(active);

// array
let makanan = ["ayam goreng", "bakso", "mie Ayam", "Gorengan"];
// modifkasi array dibelakang :
makanan.push("Seblak"); //nambah
makanan.pop(); //hapus

// modifikasi array di depan :
makanan.unshift("Ketoprak"); //nambahin
makanan.shift();

// modifikasi custom
let updateMakan = makanan.with(1, "Bakso Malang");

console.log(makanan);
console.log(updateMakan);
console.log("hallo saya sarapan dengan" + makanan[2]);

// tipe data object

let biodata = {
  nama: "Asep Saefulloh",
  umur: 20,
  skill: ["front-end", "ui/ux Design"],
  pendidikan: {
    instansi: "Universitas Indonesia",
    kompetensi_keahlian: "Teknik Informatika",
    "Tahun Lulus": "2026",
    ipk: 3.67,
  },
};

console.log("nama saya " + biodata.nama + " umur saya " + biodata["umur"]);
console.log("Saya kuliah di : " + biodata.pendidikan.instansi);

let hasil; //undifined = hanya didefinikan nama saja
console.log(hasil);

let saldo = null;
console.log(saldo);

// Struktur Logika

// if kondisional

let nilai = 90;

// Nilai 85 - 100 = grade A
// Nilai 75 - 84 = grade B
// Nilai 60 - 74 = grade C
// nilai dibawah 60 = Remidial

if (Number(nilai) < 0 || Number(nilai) > 100) {
  console.log("Nilai yang kamu masukan tidak sesuai");
} else if (Number(nilai) >= 85) {
  console.log("Nilai kamu sempurna (A)");
} else if (Number(nilai) >= 75) {
  console.log("Nilai kamu baik (B)");
} else if (Number(nilai) >= 60) {
  console.log("Nilai kamu cukup (C)");
} else if (Number(nilai) < 60) {
  console.log("Nilai kamu perlu perbaikan (remedial)");
} else {
  console.log("Input yang kamu masukan ga sesuai");
}

// switch Conditional
let hari = "Senin";
switch (hari.toLocaleLowerCase()) {
  case "senin":
    console.log("Masih inget liburan kemarin.");
    break;

  case "selasa":
    console.log("Mulai kerja");
    break;

  case "rabu":
    console.log("kerja cukup semangat.");
    break;

  case "kamis":
    console.log("kerja lumayan cape.");
    break;

  case "jumat":
    console.log("semangat karena besok libur.");
    break;
  case "sabtu":
  case "minggu":
    console.log("Yeay libur!!!");
    break;

  default:
    console.log("Kamu salah masukin hari.");
    break;
}

// Operator Aritmatik
let bilangan1 = 10;
let bilangan2 = 30;
let bilangan3 = 100;
let bilangan4 = 7;

console.log(bilangan1 + bilangan4);
console.log(bilangan3 - bilangan4);
console.log(bilangan1 * bilangan2);
console.log(bilangan3 / bilangan2);
console.log(bilangan3 % bilangan2);
console.log(bilangan4 ** bilangan1);

console.log(2 + bilangan4 * bilangan1);

// Logika Perbandingan :

let x = 10;
let y = "10";

console.log(x == y); //sama dengan nilai => true
console.log(x === y); //sama dengan nilai dan tipe data => false

console.log(x != y); //tidak sama dengan nilai => false
console.log(x !== y); //tidak sama dengan nilai dan tipe data => false

// Lebih dari dan Kurang dari
console.log(x >= y); //false

// operator penugasan
let awal = 20;
awal = 30;
awal += 10; //40
awal -= 50; //90

console.log(awal);

// Operator perbandingan (Logika)
let gajian = true;
let libur = false;
let hiling = false;

// and = keduanya bernilai true = true
console.log(gajian && libur); //false
console.log(libur && hiling); //false

// Or = jika salah satu true = True
console.log(gajian || hiling); // true
console.log(libur || hiling); //false

// operator ternerary

let tombol = "off";
let lampu =
  tombol === "on" ? console.log("Lampu Nyala") : console.log("Lampu Mati");

// Looping atau perulangan :
// break = berhenti paksa
// continue = Melewati

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break; //berhenti
  }

  console.log("ini adalah perulangan", i);
}

for (let i = 10; i >= 1; i--) {
  if (i === 6) {
    continue;
  }
  console.log("hitung mundur", i);
}

// coba buat syntax untuk :
// looping angka dari 1 - 20
// tampilkan = offline -> angka ganjil
// online == angka genap

// membuat looping angka Ganjil.
for (i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    continue; //angka genap akan dilewati
  }
  console.log("Angka ganjil 1 - 20 adalah ..", i);
}

for (i = 1; i <= 20; i++) {
  if (i % 2 != 0) {
    continue; //angka ganjil dilewati
  }
  console.log("Angka Genap 1 - 20 adalah ..", i);
}

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log("perulangan :" + i);
  }
}

// ngelooping data array
let mobil = ["byd", "avanza", "xenia", "pajero", "xpander"];
mobil.push("Jeep");

console.log("Mobil saya adalah : ");

for (let i = 0; i < mobil.length; i++) {
  console.log(mobil[i]);
}

// while loop

let password = "belajarjs";
// let input = prompt("Masukan Password");

//  jika password input tidak sesuai maka akan diulangi

// while (password != input) {
//   // nilai true = jika password salah
//   input = prompt("password salah, silakan coba lagi :) ");
// }
// console.log("Password benar!");

// while loop saat login :
// 1. user diminta untuk login sebanyak 3 kali percobaan,
// 2. jika sudah 3 kali, looping selesai dan akun di banned.

//  break, increment(++), aritmatik (percobaan - sisanya.)

let passwordBenar = "belajarjs";
let pass;
const batas = 3;
let percobaan = 0;

// izinkan user jika kesempatannya masih ada 3
// while (percobaan < batas) {
//   pass = prompt("Masukan password kamu.");
//   // saat kita nyoba 1 kali, nilai percobaan nambah 1
//   percobaan++;
//   // kondisi saat password benar
//   if (pass === passwordBenar) {
//     alert("Password yang kamu masukan sesuai!");
//     break;
//   }

//   // jika batas sudah habis

//   if (percobaan === batas) {
//     alert("Akun kamu diblokir, karena sudah melewati 3 kali percobaan");
//   } else {
//     alert(
//       `Password salah, Kamu bisa ulangi sebanyak ${batas - percobaan} kali lagi.`,
//     );
//   }
// }

// function biasa
function hallo() {
  let show = alert("Hallo ini adalah alert");
}

// funtion expression
let sapa = function () {
  // isi function.
};

// arrow function
let hello = () => {
  // isi code pada function
};

// parameter & argumen
function training(namaPeserta, namaKelas) {
  console.log(
    `Hallo Kak, ${namaPeserta}, Kamu terdaftar ikut kelas ${namaKelas}`,
  );
}

training("Asep", "Mikrotik");

// menghitung luas persegi panjang

let persegiPanjang = function (panjang, lebar) {
  let luas = panjang * lebar;
  return luas;
};
// console.log(luas)
console.log(persegiPanjang(10, 50));

let segitiga = (alas, tinggi) => {
  let luas = (alas * tinggi) / 2;
  return luas;
};

console.log(segitiga(10, 15));

// tentukan operatornya

function jumlah(bil1, bil2) {
  return bil1 + bil2;
}

function kurang(bil1, bil2) {
  return bil1 - bil2;
}

function kali(bil1, bil2) {
  return bil1 * bil2;
}

function bagi(bil1, bil2) {
  return bil1 / bil2;
}

// fungsi utama kalkulator :
function calculator() {
  let input1 = Number(prompt("masukan angka pertama : "));
  let input2 = Number(prompt("masukan angka kedua : "));
  let operator = prompt("masukan operator (+ , - , * , /) ");

  let result;

  // Logika Perhitungan
  if (operator === "+") {
    result = jumlah(input1, input2);
  } else if (operator === "-") {
    result = kurang(input1, input2);
  } else if (operator === "*") {
    result = kali(input1, input2);
  } else if (operator === "/") {
    result = bagi(input1, input2);
  } else {
    alert("input yang kamu masukan salah.");
  }

  alert(`hasil dari ${input1} ${operator} ${input2} adalah ${result}`);
}

// DOM => Document Object Model

const textTitle = document.getElementById("title");
const textSubtitle = document.querySelector(".sub-title");
const textKonten = document.querySelector("#content");
const listItem = document.querySelectorAll("li");

// DOM Manipulation
textTitle.textContent = "Elemen ini sudah diubah";
textKonten.innerHTML = `<a href="#">Masuk ke kelas</a>`;

// jika mau menambah langsung sebuah class :
// ubah style
textTitle.classList.add("text-title");
textSubtitle.classList.remove("font-kecil");

console.log(textTitle);
console.log(textSubtitle);
console.log(textKonten);
console.log(listItem);

//  menambah elemen baru :
const daftar = document.getElementById("list");

let listTraining = ["Laravel", "mtcna", "ccna", "linux", "cyber security"];

listTraining.forEach((kelas) => {
  const list = document.createElement("li");
  list.textContent = kelas;

  // agar bisa nampil di ul
  daftar.appendChild(list);
});

// Klik sederhana dengan button
const btnClick = document.getElementById("btn-click");

btnClick.addEventListener("click", () => {
  textTitle.textContent = "Button berhasil diklik";
  alert("Saya berhasil keluar!");
});

const counter = document.querySelector(".counter");
const btnTambah = document.getElementById("btn-tambah");
const btnKurang = document.getElementById("btn-kurang");
const btnReset = document.getElementById("btn-reset");
let hitung = 0;

btnTambah.addEventListener("click", () => {
  hitung++;
  counter.textContent = hitung;
  counter.style.color = "#378500";
  btnKurang.disabled = false;
});

btnKurang.addEventListener("click", () => {
  hitung--;
  counter.textContent = hitung;
  counter.style.color = "#ff0000";
});

btnReset.addEventListener("click", () => {
  hitung = 0;
  counter.textContent = hitung;
  counter.style.color = "#000000";
  btnKurang.disabled = true;
});

if (hitung === 0) {
  btnKurang.disabled = true;
} else {
  btnKurang.disabled = false;
}
// Chalenges event listener :

// buatkan counter dengan tombol : Tambah ++, Kurang --, reset.
// saat tambah, colornya berwarna hijau
// saat kurang, colornya berwarna merah
// saat direset, kembali ke 0, warnanya hitam

// const inputNama = document.getElementById("nama")
// const showNama = document.querySelector(".nama")

inputNama.addEventListener("input", (e) => {
    showNama.textContent = `Hallo mr/mrs. ${e.target.value}`
})


// listener = submit
// ambil form 
const form = document.getElementById("submitForm")

form.addEventListener("submit", (e) => {

})



