import {
  data,
  kelas
} from './database.js'
import {
  $,
  cetakTabel,
  $all
} from './../method_interaktif.js'

// import {
//   filterDataByClass
// } from './../method_sistem.js'

/* ---------------------------------------
========= halaman kelola kitab ===========
------------------------------------------ */
// console.log(kelas);
// menampilkan data perkelas kedalam tabel
$('figure#tabel-kelas div').innerHTML = `
  <div>
    <div class="flex">
      ${kelas.map(kls => {
        return `
          <div class"border-r-2 bg">
            <div class="bg-teal-600 text-white">
              <div class="font-bold text-center">${kls.kls}</div>
              <div class="flex justify-evenly">
                <div class="">lk</div>
                <div class="">pr</div>
              </div>
            </div>
 
            <div class="flex justify-around text-sm">
              <div>
                ${kls.lk.map(l => `<span class="block">${l.judul}</span>`).join('')}
              </div>
              <div>
                ${kls.prm.map(l => `<span class="block">${l.judul}</span>`).join('')}
              </div>
            </div>
          </div>`;
      }).join('')}
    </div>
  </div>
`;


// menampilkan data kitab ke tabel
cetakTabel($('#tbody-kitab'), 'kitab', data)

// menampilkan data nadom ke 3
cetakTabel($('#tbody-nadom'), 'nadom', data)

// menampilkan data diktat ke tabel
cetakTabel($('#tbody-diktat'), 'diktat', data)


