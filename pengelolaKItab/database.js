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




//  tambahKitabKelas(4, {judul:'mauta'}, 'lk')

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
