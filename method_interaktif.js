// import {
//   $
// } from './method-interaktif'

export function $(n) {
  return document.querySelector(n)
}

export function $all(n){
  return document.querySelectorAll(n)
}

export function cetakTabel(ell, jenis, datas) {
  ell.innerHTML = datas.map(dt => {
    if(dt.kategori === jenis){
      return ` 
      <tr>
      <td>${dt.judul}</td>
      <td>${dt.harga}</td>
      <td><i class="fa fa-ellipsis-v cursor-pointer"></i></td>
      </tr>`
    }
  }).join('')
}
// console.log($('#selanjutnya'))