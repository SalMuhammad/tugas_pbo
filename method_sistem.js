import {
  kelas
} from './database.js'

// method membuat id
export function cekKeberadaanId(id) {
  const dataIDs = JSON.parse(localStorage.getItem('dataIDs')) || [];
  return dataIDs.includes(id);
}
export function buatIdAcak() {
  const characters = 'abcdefghijklmnopqrstuvwxyz~!@#$%^&*0123456789';
  const idLength = 4;
  let uniqueID;

  do {
    uniqueID = '';
    for (let i = 0; i < idLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      uniqueID += characters[randomIndex];
    }
  } while (cekKeberadaanId(uniqueID));
  return uniqueID;
}

// fungsi menambah kelas
export function tambahKelas(namaKelas) {
  kelas.push({
    kls: namaKelas,
    lk: [],
    prm: []
  });
  localStorage.setItem('kelas', JSON.stringify(kelas));
}

export function adakahString(username) {
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  for (const user of storedUsers) {
    if (user.username === username) {
      alert('Username sudah ada!');
      return true; // Username exists
    }
  }
  return false; // Username does not exist
}

export function buatDataLogin () {
  return (localStorage.pemilikLogin)? localStorage.getItem("pemilikLogin"): localStorage.setItem('pemilikLogin', 'Null')
}

export function cekLogin() {
  document.addEventListener("DOMContentLoaded", function () {
    var pemilikLoginData = localStorage.getItem("pemilikLogin");

    // Memeriksa apakah data pemilikLogin atau adapemilikLogin berisi "Null"
    if (!pemilikLoginData || pemilikLoginData === "Null") {
      alert('Anda belum login!!')

      // Redirect atau lakukan tindakan lain seperti menampilkan pesan dan mengarahkan ke halaman login
      window.location.href = "../login.html";
    }
  // }
});
}

export function logOut() {
  alert('anda dudah log out')
  localStorage.setItem('pemilikLogin', "Null")
  window.location.href = "../login.html"
}