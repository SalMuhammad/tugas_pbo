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
          <td>
            <i class="fa fa-ellipsis-v cursor-pointer relative z-10"></i>
            <l class="w-[0px] inline-block overflow-hidden">${dt.id}</l>
            <div class="layer-pilihan bg-indigo-400/75 absolute z-0 top-0 right-0 bottom-0 left-0 hidden">
              <div id="box" class="box">
                <a class="hover:bg-gray-300 block px-2 cursor-pointer group/satu">tambahkan ke > 
                  <div id="pilihan-kelas"></div>
                </a>
                <a class="hover:bg-gray-300 block px-2 cursor-pointer">edit</a>
                <a class="hover:bg-gray-300 block px-2 cursor-pointer">hapus</a>
              </div>
            </div>
          </td>
        </tr>
      `
    }
  }).join('')
}
