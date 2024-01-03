import {
 $,
 $all
} from '../method_interaktif.js'

import {
 kelas,
 daftarPeanan
} from '../database.js'

let pemilikLogin = JSON.parse(localStorage.getItem("pemilikLogin"))
// console.log()


// export const   = $('#yg-di-tampilkan')

const el = kelas.map(kls => {
//  console.log(kls);
 return `
 <details>
  <summary>${kls.kls}</summary>
   <div class="flex flex-wrap gap-2 justify-end">
    ${ (pemilikLogin.jenisKelamin === 'laki-laki'? 
      kls.lk.map(l => {
       return `
       <div class="flex justify-between w-[41%] bg-green-200 border-2 border-green-500 rounded-lg pl-2">
        <input data-id="${l.id}" type="checkbox" class="checkbox">
        <span id="judul" class="p-1">${l.judul}</span>
        <span id="harga" class="p-1">${l.harga} </span>
        <input id="jumlah" type="number" value="0" class="jumlah w-9 pl-2 pr-0 text-white outline-none bg-green-500 "/>
       </div>`
      }).join('')
      : 
      kls.prm.map(p => {
       return `
       <div class="flex justify-between w-[41%] bg-green-200 border-2 border-green-500 rounded-lg pl-2">
       <input data-id="${p.id}" type="checkbox" class="checkbox">
        <span id="judul" class="p-1">${p.judul}</span>
        <span id="harga" class="p-1">${p.harga} </span>
        <input id="jumlah" type="number" value="0" class="jumlah w-9 pl-2 pr-0 text-white outline-none bg-green-500 "/>
       </div>
       `
      }).join('')
     )}
  </div>
 </details>
`
}).join('')
$('#pesan-dari-asrama .cetak ').innerHTML = el














const kitab = JSON.parse(localStorage.getItem('data'))
let objekTerpilih = []

// Array untuk menyimpan objek yang berisi nilai input yang dicentang

// Mendapatkan semua elemen checkbox dan input
var checkboxes = document.querySelectorAll('.checkbox');
var inputNumbers = document.querySelectorAll('.jumlah');

checkboxes.forEach(function (checkbox, index) {
  checkbox.addEventListener('change', function () {
    handleCheckboxChange(index);
  });
});

inputNumbers.forEach(function (inputNumber, index) {
  inputNumber.addEventListener('input', function () {
    updateObjekTerpilih(index);
  });
});

// Fungsi untuk menangani perubahan keadaan checkbox
function handleCheckboxChange(index) {
  var inputNumber = inputNumbers[index];
  var checkbox = checkboxes[index];

  if (checkbox.checked) {
    inputNumber.value = 1;
  } else {
    inputNumber.value = 0;
    hapusObjek(index);
  }

  // 
}

function updateObjekTerpilih(index) {
  var inputNumber = inputNumbers[index];
  var checkbox = checkboxes[index];

  if (parseInt(inputNumber.value) >= 1) {
    checkbox.checked = true;
    let kitabTerpilih = kitab.find(kitab => kitab.id === checkbox.getAttribute('data-id'));
    objekTerpilih[index] = {
      id: kitabTerpilih.id,
      judul: kitabTerpilih.judul,
      harga: kitabTerpilih.harga,
      jumlah: parseInt(inputNumber.value) || 0,
      total: 0 // Hitung total berdasarkan harga dan jumlah
    };
    objekTerpilih[index].total = objekTerpilih[index].harga * objekTerpilih[index].jumlah;
  } else {
    checkbox.checked = false;
    hapusObjek(index);
  }
}

// Fungsi untuk menghapus objek dari array objekTerpilih
function hapusObjek(index) {
  objekTerpilih[index] = null;
  // Hapus objek yang bernilai null dari array objekTerpilih
  objekTerpilih = objekTerpilih.filter(objek => objek !== null);
}







function lihatPesanan() {
  const ttl = {
    kitab: "",
    harga: "",
    jumlah:objekTerpilih.reduce((a,b) => a+=b.jumlah, 0),
    total: objekTerpilih.reduce((a,b) => a+=b.total, 0)
  }
  objekTerpilih.push(ttl)
  $('#lihat-pesanan').innerHTML = `
    ${objekTerpilih.map(dt => {
      return `
        <tr>
          <td>${dt.judul}</td>
          <td>${dt.harga}</td>
          <td>${dt.jumlah}</td>
          <td>${dt.total}</td>
        </tr>
      `
    }).join('')}
  `
}




function simpanPesanan() {
  let ktb = []
  for (const ot of objekTerpilih) {
    if (ot) {
      ktb.push({
        id: ot.id,
        judul: ot.judul,
        jumlah: ot.jumlah,
        total: ot.total
      })
    }
  }
  daftarPeanan.push({
      namaAsrama: JSON.parse(localStorage.getItem("pemilikLogin")).username,
      dataPesanan: ktb
    })
}

$('#pesan-sekarang').addEventListener('click', () => {
  simpanPesanan()
  $('#rincian-pesanan').classList.add('hidden')
  localStorage.setItem("daftar-pesanan", JSON.stringify(daftarPeanan))
  alert('data berhasil di pesankan')
}); 


$('#selanjutnya').addEventListener('click', () => {
  $('#rincian-pesanan').classList.remove('hidden')
  lihatPesanan()
})

$('.fa-arrow-left').addEventListener('click', ()=> {
  objekTerpilih.pop()
  $('#rincian-pesanan').classList.add('hidden')
})

