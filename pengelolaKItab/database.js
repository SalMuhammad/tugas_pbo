import {
  $,
  $all
} from '../method_interaktif.js'

import {
  buatIdAcak
} from './../method_sistem.js'
const storedData = localStorage.getItem('data');
const data = storedData ? JSON.parse(storedData) : [];

const storageKelas = localStorage.getItem('kelas');
const kelas = storageKelas ? JSON.parse(storageKelas) : []
// console.log(kelas);
// kelas[1] .prm.pop()
// kelas[1].prm.pop()

// localStorage.setItem('kelas', JSON.stringify(kelas))

function tambahKitabKelas(idKelas, data, kelamin) {
  console.log(kelas[idKelas])
  if(kelamin === 'lk') {
    kelas[idKelas].lk.push(data)
    // console.log(kelas[idKelas].lk)
  } else {
    kelas[idKelas].prm.push(data)
    // console.log(kelas[idKelas].prm)
  }
  localStorage.setItem('kelas', JSON.stringify(kelas))
}
//  tambahKitabKelas(1, {judul:'tilar dunya'}, 'lk')

$('#simpan').addEventListener('click', () => {
  data.push({
    id: buatIdAcak(),
    judul: $('#judul').value,
    harga: $('#harga').value,
    kategori: $('#kategori').value,
    stok: $('#stok').value,
  });

  localStorage.setItem('data', JSON.stringify(data));
});



export {data, kelas} 