let angka1 = "";
// let angka2="";
// let operasi="";
let tanda = false;
const isii = document.getElementById("isi");
const opp = document.getElementById("op");
isii.value = "";
op.value = "";

function geserkanan() {
  isii.scrollLeft = isii.scrollWidth;
}

function satu() {
  if (tanda) {
    isii.value = 1;
    tanda = false;
  } else {
    isii.value += 1;
  }
  geserkanan();
}
function dua() { 
  if (tanda) {
    isii.value = 2;
    tanda = false;
  } else {
    isii.value += 2;
  }
  geserkanan();
}
function tiga() {
  if (tanda) {
    isii.value = 3;
    tanda = false;
  } else {
    isii.value += 3;
  }geserkanan();
}
function empat() {
  if (tanda) {
    isii.value = 4;
    tanda = false;
  } else {
    isii.value += 4;
  }geserkanan();
}
function lima() {
  if (tanda) {
    isii.value = 5;
    tanda = false;
  } else {
    isii.value += 5;
  }
  geserkanan();
}
function enam() {
  if (tanda) {
    isii.value = 6;
    tanda = false;
  } else {
    isii.value += 6;
  }
  geserkanan();
}
function tujuh() {
  if (tanda) {
    isii.value = 7;
    tanda = false;
  } else {
    isii.value += 7;
  }
  geserkanan();
}
function lapan() {
  if (tanda) {
    isii.value = 8;
    tanda = false;
  } else {
    isii.value += 8;
  }
  geserkanan();
}

function sembilan() {
  if (tanda) {
    isii.value = 9;
    tanda = false;
  } else {
    isii.value += 9;
  }
  geserkanan();
}
function nol() {
  if (tanda) {
    isii.value = 0;
    tanda = false;
  } else {
    isii.value += 0;
  }
  geserkanan();
}
function koma(){
    if(!(isii.value==="")){
        isii.value+='.';
    }
}
//MASIH EOROROROOROR

function operasikan() {
  if ((opp.value === '+')) {
    isii.value = Number(angka1) + Number(isii.value);
    angka1 = isii.value;
  } else if ((opp.value === '-')) {
    isii.value = Number(angka1) - Number(isii.value);
    angka1 = isii.value;
  } else if ((opp.value === '*')) {
    isii.value = Number(angka1) * Number(isii.value);
    angka1 = isii.value;
  } else if ((opp.value === ':')) {
    isii.value = Number(angka1) / Number(isii.value);
    angka1 = isii.value;
  }
}

function tambah() {
  if (angka1 === "") {
    angka1 = isii.value;
  } else {
    if (!(opp.value === '=')) {
      operasikan();
    }
  }
  opp.value = '+';
  tanda = true;
}

function kali() {
  if (angka1 === "") {
    angka1 = isii.value;
  } else {
    if (!(opp.value === '=')) {
      operasikan();
    }
  }
  opp.value = '*';
  tanda = true;
}

function bagi() {
  if (angka1 === "") {
    angka1 = isii.value;
  } else {
    if (!(opp.value === '=')) {
      operasikan();
    }
  }
  opp.value = ':';
  tanda = true;
}

function samadgn() {
  operasikan();
  opp.value = '=';
}

function krg() {
  if (angka1 === "") {
    angka1 = isii.value;
  } else {
    if (!(opp.value === '=')) {
      operasikan();
    }
  }
  opp.value = '-';
  tanda = true;
}

function ac(){
    angka1="";
    opp.value="";
    isii.value = "";
    tanda = false;
}
