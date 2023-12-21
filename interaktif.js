import {
  $,
  $all
} from './method_interaktif.js'
import { tambahKelas } from './method_sistem.js'
import { kelas } from './pengelolaKItab/database.js'


// ----------------------------------------------------------
// ==================   HALAMAN USER   =======================
// ----------------------------------------------------------

if($('#yg-di-tampilkan')){
  $('#yg-di-tampilkan').addEventListener('click', e => {
    if(e.target.className.split(' ').includes('fixed')) { //munculkan halaman rincian pesanan saat tombol selanjutnya di klik
      $('#rincian-pesanan').classList.remove('hidden') 
    } else if(e.target.className.split(' ').includes('fa-arrow-left')){
      $('#rincian-pesanan').classList.add('hidden')
    }
  })
}

// bagian footer
Array.from($all('footer nav i')).forEach(i => {
  i.addEventListener('click', e => {
    $all('footer nav i').forEach(i => i.classList.remove("text-red-600"))
    i.classList.add('text-red-600')
  })
})

/*----------------------------------------------------------------------
========================   HALAMAN KELOLA KITAB   ======================
----------------------------------------------------------------------*/

if($('#tambah-data')) {
  $('#tambah-data').addEventListener('click', function() {
    $('#layouting').classList.remove('hidden')
  })
  $('#close').addEventListener('click', function() {
    $('#layouting').classList.add('hidden')
  })
}

// tambahKelas('d1')
// tambahKelas('d2')
// tambahKelas('kls1')
// tambahKelas('kls2')
// tambahKelas('kls3')


// class BankAccount {
//   #balance = 0; // Private field

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// const account = new BankAccount();
// account.deposit(100);
// console.log(account.getBalance());






