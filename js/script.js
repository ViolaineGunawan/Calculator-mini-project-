let angka1="";
let angka2="";
let operasi='x';
const isii=document.getElementById('isi');
const opp=document.getElementById('op');
isii.value="";
op.value="";
function satu(){
isii.value+=1;
}
function dua(){
isii.value+=2;
}
function tiga(){
isii.value+=3;
}
function empat(){
isii.value+=4;
}
function lima(){
isii.value+=5;
}
function enam(){
isii.value+=6;
}
function tujuh(){
isii.value+=7;
}
function lapan(){
isii.value+=8;
}

function sembilan(){
isii.value+=9;
}
function nol(){
isii.value+=0;
}

function operasikan(){
    if(operasi==='+'){
        angka2=isii.value;
        angka1=Number(angka1)+Number(angka2);
        isii.value="";
    }
        else if(operasi==='-'){
        angka2=isii.value;
        angka1=Number(angka1)-Number(angka2);
        isii.value="";
    }
        else if(operasi==='*'){
        angka2=isii.value;
        angka1=Number(angka1)*Number(angka2);
        isii.value="";
    }
        else if(operasi==='/'){
        angka2=isii.value;
        angka1=Number(angka1)/Number(angka2);
        isii.value="";
    }
}

function tambah(){
    operasi='+';
    if(angka1===""){
    angka1=isii.value;
    }
    else{
        operasikan();
    }
    isii.value="";
}

function ac(){
    isii.value="";
    angka1="";
    angka2="";
    operasi="";
}
function samadgn(){
 operasikan();
 isii.value=angka1;
 operasi="x";
  }
