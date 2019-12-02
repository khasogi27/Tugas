//var angkaKedua  //undefined

// angkaKedua = 10 // angkaKedua = 10
// console.log("no 1.", angkaKedua !== "10" ) 
  // angkaKedua = "angkaKedua"

// angkaKedua = 11
// console.log("no 2.", angkaKedua === "angkaKedua" )
// console.log((angkaKedua < 10 || angkaKedua >= 10) || (angkaKedua === 'angkaKedua' && angkaKedua>=10), '<=================== no 3  =================='); //true
// (false || false) || (true && false) ---> false || false
// console.log("angkaKedua: ",angkaKedua) // angkaKedua: angkaKedua 10 , angkaKedua: angkaKedua


// if(angkaKedua == "AngkaKedua"){
//   console.log('no 1')
// }else if(angkaKedua == 10){
//   console.log( '<=================== no 3 ==================');
// }else if(angkaKedua >= 10){
//   console.log('no 5') 
//   if(angkaKedua > 0){ 
//     console.log( '<=================== no 6 ==================');
//   }
//   if(angkaKedua < 100){ 
//     console.log( '<=================== no 7 ==================');
//   }
// }else{
//   console.log('no 2')
// }

// switch(angkaKedua){
//   case 11: {
//     console.log('switch 1')
//     break;
//   }
//   case 'angkaKedua': {
//     console.log('switch 2')
//     break;
//   }
//   default: {
//     console.log('else')
//   }
// }


// var angka1 = 1
// let angka2 = 2
// const angka3 = 3

// var angka1 = 2
// console.log(angka1, '<=================== 2 ==================');

// angka2 = 5
// console.log(angka2, '<=================== angka2 ==================');

// const angka3 = 20

// tugasDay5 //

let day = 31; //1-31
let month = 12; //1-12
let years = 1997; //unlimited

// code

if(day > 31 || day < 0){
  console.log("input tanggal salah harus antara 1 sampai 31");
  return
}
switch(month){
  case 1:{(month='januari');
  break;}
  case 2:{(month='February');
  break;}
  case 3:{(month='maret');
  break;}
  case 4:{(month='april');
  break;}
  case 5:{(month='mei');
  break;}
  case 6:{(month='juni');
  break;}
  case 7:{(month='july');
  break;}
  case 8:{(month='agustus');
  break;}
  case 9:{(month='september');
  break;}
  case 10:{(month='oktober');
  break;}
  case 11:{(month='november');
  break;}
  case 12:{(month='desember');
  break;}
  default:{console.log(month='Input bulan Salah, harus antara 1 sampai 12'); return}
}
console.log(day+'-'+month+'-'+years)
