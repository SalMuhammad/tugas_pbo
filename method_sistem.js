import {
  kelas
} from './pengelolaKItab/database.js'

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





