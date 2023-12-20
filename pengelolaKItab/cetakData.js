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



// ketika tombol titik 3 vertikal di klik
$all('table .fa-ellipsis-v').forEach(el => {
  el.addEventListener('click', e => {
    let id = e.target.nextElementSibling.innerHTML
    // console.log(id);
    const elemenYgAkanDiSimpan = data.filter(dt => dt.id === id)
    $('.layer-pilihan').classList.remove('hidden')
    $('#box').className = ''
    $('#box').classList.add(`box`)
    $('#box').classList.add(`left-[${e.pageX}px]`)
    $('#box').classList.add(`top-[${e.pageY}px]`)
    $('#pilihan-kelas').innerHTML = `
      <ul class="absolute z-50 border-[1px] border-teal-800/30 shadow-md rounded-lg -top-7 -right-[50px] bg-slate-100 p-1 hidden group-hover/satu:block">
        <li class="lk px-1 hover:bg-slate-300 group/dua">laki-laki >
          <ul data-ht class="absolute z-50 border-[1px] border-teal-800/30 shadow-md rounded-lg -top-[100px] -right-[50px] bg-slate-100 p-1 hidden group-hover/dua:block">
          ${kelas.map(kela => {
            return `<li class=" kelas-yg-dipilih px-2 hover:bg-slate-300">${kela.kls}</li>`
          }).join('')}
          </ul>
        </li>
        <li class="prm px-1 hover:bg-slate-300 group/dua">perempuan >
          <ul class="absolute z-50 border-[1px] border-teal-800/30 shadow-md rounded-lg top-7 -right-[50px] bg-slate-100 p-1 hidden group-hover/dua:block">
          ${kelas.map(kela => {
            return `<li class=" kelas-yg-dipilih px-2 hover:bg-slate-300">${kela.kls}</li>`
          }).join('')}
          </ul>
        </li>
      </ul>
    `
  Array.from($all('.kelas-yg-dipilih')).forEach(klsPilihan => {
      klsPilihan.addEventListener('click', ev => {
        const genderPilihan = ev.target.parentElement.parentElement
        if(genderPilihan.classList.contains('lk')){

          const kelasPenerima = kelas.filter(kls =>    kls.kls === ev.target.innerHTML)
          const kelasLk = kelasPenerima[0].lk
          kelasLk.push(elemenYgAkanDiSimpan[0])
          localStorage.setItem('kelas', JSON.stringify(kelas))
          alert('data berhasil di tambahkan ke kelas')
          window.location = 'kelolaKitab.html'
          // console.log(elemenYgAkanDiSimpan);
        } else {
          console.log('bukan')
        }
      })
    })
  })
})

// console.log(kelas);
// function tambahkanDataKeKelas(elTarget, klm) {
//   const kelasPenerima = kelas.filter(kls => kls.kls === elTarget)
//   const kelamin = (klm === 'kl'? kelasPenerima.lk: kelasPenerima.prm)
//   console.log(kelasPenerima)
//   console.log(kelamin)
// }

$('body').addEventListener('click', e => {
  if(e.target.classList.contains('layer-pilihan')) {
    e.target.classList.add('hidden')
    // console.log(e.target);
  }
})

  //<ul class="hidden z-50 group-hover:border-[1px] group-hover:border-teal-800/30 group-hover:shadow-md group-hover:rounded-sm group-hover:-top-7 group-hover:-right-[50px] group-hover:inline-block">
