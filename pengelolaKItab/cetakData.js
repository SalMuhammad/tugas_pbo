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
          </div>
        `
      }).join('')}
    </div>
  </div>
`

// menampilkan data kitab ke tabel
cetakTabel($('#tbody-kitab'), 'kitab', data)

// menampilkan data nadom ke 3
cetakTabel($('#tbody-nadom'), 'nadom', data)

// menampilkan data diktat ke tabel
cetakTabel($('#tbody-diktat'), 'diktat', data)

$all('table .fa-ellipsis-v').forEach(el => {
  el.addEventListener('click', e => {
    $('.layer-pilihan').classList.remove('hidden')
    $('#box').classList.add(`left-[${e.pageX}px]`)
    $('#box').classList.add(`top-[${e.pageY}px]`)
    // $('.pilihan-kelas').innerHTML = e.pageX
    $('.pilihan-kelas').innerHTML = `
      <ul class="hidden bg-white absolute z-50 group-hover:py-2 group-hover:border-[1px] group-hover:border-teal-800/30 group-hover:shadow-md group-hover:rounded-sm group-hover:-top-7 group-hover:-right-[50px] group-hover:inline-block">
        ${kelas.map(kl => {
          return `<li class="hover:bg-gray-300 px-2">${kl.kls}</li>`
        }).join('')}
      </ul>
    `
  })
})

$('#form-tambah-kitab-kelas').addEventListener('click', e => {
  if(e.target.classList.contains('layer-pilihan')) {
    e.target.classList.add('hidden')
  }
  // $('.layer-pilihan').classList.add('hidden')
})

