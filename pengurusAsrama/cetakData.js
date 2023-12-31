import {
 $,
 $all
} from '../method_interaktif.js'

import {
 kelas
} from '../database.js'

let user = 'lak'

// console.log(kelas)

const el = kelas.map(kls => {
 console.log(kls);
 return `
 <details>
  <summary>${kls.kls}</summary>
   <div class="flex flex-wrap gap-2 justify-end">
    ${ (user === 'laki'? 
      kls.lk.map(l => {
       return `
       <div class="flex justify-between w-[41%] bg-green-200 border-2 border-green-500 rounded-lg pl-2">
        <input type="checkbox">
        <span class="p-1">${l.judul}</span>
        <span class="p-1">${l.harga} </span>
        <input type="number" value="1" class="w-9 pl-2 pr-0 text-white outline-none bg-green-500 "/>
       </div>`
      }).join('')
      : 
      kls.prm.map(p => {
       return `
       <div class="flex justify-between w-[41%] bg-green-200 border-2 border-green-500 rounded-lg pl-2">

        <input type="checkbox">
        <span class="p-1">${p.judul}</span>
        <span class="p-1">${p.harga} </span>
        <input type="number" value="1" class="w-9 pl-2 pr-0 text-white outline-none bg-green-500 "/>
       </div>
       `
      }).join('')
     )}
  </div>
 </details>
`
}).join('')
$('#pesan-dari-asrama .cetak ').innerHTML = el
{/* <details>
            <summary>spa</summary>
            <div class="flex flex-wrap gap-2 justify-end">
              <div class="flex justify-between w-[41%] bg-green-200 border-2 border-green-500 rounded-lg pl-2">
                <input type="checkbox">
                <span class="p-1">kitab</span>
                <span class="p-1">12000 </span>
                <input type="number" value="1" class="w-9 pl-2 pr-0 text-white outline-none bg-green-500 "/>
              </div>
              <div class="flex justify-between w-[45%] bg-green-200 border-2 border-green-500 rounded-lg pl-2">
                <input type="checkbox">
                <span class="p-1">kitab</span>
                <span class="p-1">12000 </span>
                <input type="number" value="1" class="w-9 pl-2 pr-0 text-white outline-none bg-green-500 "/>
              </div>
              <div class="flex justify-between w-[45%] bg-green-200 border-2 border-green-500 rounded-lg pl-2">
                <input type="checkbox">
                <span class="p-1">kitab</span>
                <span class="p-1">12000 </span>
                <input type="number" value="1" class="w-9 pl-2 pr-0 text-white outline-none bg-green-500 "/>
              </div>
            </div>
          </details> */}