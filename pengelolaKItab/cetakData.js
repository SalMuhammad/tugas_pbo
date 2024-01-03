import {$} from './../method_interaktif.js'
import { daftarPeanan, data } from '../database.js'
const dataId = []
daftarPeanan.forEach(elemen => {
  elemen.dataPesanan.forEach(dp => {
    if(dp.id != undefined) dataId.push(dp.id)
  })
})
// const dataId = daftarPeanan.flatMap(elemen => elemen.dataPesanan.map(dp => dp.id));

const dataIdNoDuplikat = Array.from(new Set(dataId)); // menghilangkan duplikasi 
const dataAcuan = data.filter(obj => [...dataIdNoDuplikat].includes(obj.id));

// console.log(JSON.stringify(dataAcuan));
// console.log(JSON.stringify(daftarPeanan));


$('#anu-pesen').innerHTML= `
  ${dataAcuan.map(hf => {
    return `
      <tr>
        <td>${hf.stok}</td>
        <td>${hf.judul}</td>
        <td>${hf.harga}</td>
      </tr>
    `
  }).join('')}
`





function urutkan() {
  const dataOlah = [...daftarPeanan];

  dataOlah.forEach((dO) => {
    const newDataPesanan = [];
    
    dataAcuan.forEach((da) => {
      const pesanan = dO.dataPesanan.find((pes) => pes.id === da.id);
      newDataPesanan.push(pesanan ? { ...pesanan } : undefined);
    });

    dO.dataPesanan = newDataPesanan;
  });

  return dataOlah;
}



console.log(daftarPeanan);



let sortedData = urutkan();
console.log(sortedData)






$("#tabel-pesanan").innerHTML = `
<div>
  <div class="flex">
    ${sortedData.map(sd => {
      return `
        <div class=" bg">
          <div class="bg-teal-600 text-white">
            <div class="font-bold text-center">${sd.namaAsrama} <i class="fa-solid fa-ellipsis"></i></div>
            <div class="flex justify-evenly">
              <div>jumlah <br> pesanan</div>
              <div>total <br> harga</div>
            </div>
          </div>
          <div class="flex justify-around text-sm">
            <div>
              ${sd.dataPesanan.map(pesanan => {
                return `
                  <div class="flex gap-2 justify-between item-center p-2 border-r-[1px] border-gray-700">
                    <span class="block">${pesanan ? pesanan.jumlah || '' : ''}</span> 
                  </div>
                `;
              }).join('')}
            </div>
            <div>
              ${sd.dataPesanan.map(pesanan => {
                return `
                  <div class="flex gap-2 justify-between item-center p-2 border-r-[1px] border-gray-700">
                    <span class="block">${pesanan ? pesanan.total || '' : ''}</span> 
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      `;
    }).join('')}
  </div>
</div>`;











