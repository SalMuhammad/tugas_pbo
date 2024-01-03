import {
  $,
  $all
} from './method_interaktif.js'



import {
  tambahKelas,
  buatIdAcak
} from './method_sistem.js'
const storedData = localStorage.getItem('data');
const data = storedData ? JSON.parse(storedData) : [];

const storageKelas = localStorage.getItem('kelas');
const kelas = storageKelas ? JSON.parse(storageKelas) : []

const storangeDaftarPesanan = localStorage.getItem('daftar-pesanan');
const daftarPeanan = storangeDaftarPesanan ? JSON.parse(storangeDaftarPesanan) : []


// console.log(kelas);
// kelas[1] .prm.pop()
// kelas[1].prm.pop()

// localStorage.setItem('kelas', JSON.stringify(kelas))


//  tambahKitabKelas(4, {judul:'mauta'}, 'lk')
if($("#simpan")){
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
}

export {data, kelas, daftarPeanan}  






