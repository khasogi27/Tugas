var orang = {
  nama: "udin",
  tinggi: 170,
  usia: 21,
  bb: 71,
  kendaraan: [{
      merk: 'honda',
      buildedBy: 'japan'
    },
    {
      merk: 'toyota',
      buildedBy: 'japan'
    },
    {
      merk: 'tata',
      buildedBy: 'india'
    }
  ],
  laptop: {
    merk: 'macbook',
    warna: 'dark grey',
    size: '15in'
  }
}
console.log(orang.laptop.size, "<========= size laptopnya udin")

// munculin list kendaraanya
// honda
// toyota
// becak

// console.log( '<=================== 1 ==================>');
// for (i = 0; i < orang.kendaraan.length; i++) {
//   console.log(orang.kendaraan[i], "<==== kendaraan udin")
// }

// console.log( '<=================== 1 ==================>');


// orang.nama // => outputnya udin
// orang['nama'] // => outputnya udin

//cara loop object
// munculin value-value dari object orang
// udin
// 170
// 21
// 71
// console.log('<=================== 2 ==================>');
// for (key in orang) {
//   console.log(orang[key])
// }
// console.log('<=================== 2 ==================>');




// no.3 munculin mobil udin buatan jepang
// for (i=0; i < orang.kendaraan.length[i]; i++){
//     console.log(orang.kendaraan[i].merk)
// }


// no4. munculin mobil SIAPA yang paling mahal, dan MOBILNYA APA 
var udin = {
  nama: "udin",
  tinggi: 170,
  usia: 21,
  bb: 71,
  kendaraan: [{
      merk: 'honda',
      buildedBy: 'japan',
      price: 500000000,
      type: 'civic'
    },
    {
      merk: 'toyota',
      buildedBy: 'japan',
      price: 550000000,
      type: 'fortuner'
    }
  ],
  laptop: {
    merk: 'macbook',
    warna: 'dark grey',
    size: '15in'
  }
}

var ujang = {
  nama: "ujang",
  tinggi: 170,
  usia: 21,
  bb: 71,
  kendaraan: [{
      merk: 'honda',
      buildedBy: 'japan',
      price: 500000000,
      type: 'civic'
    },
    {
      merk: 'toyota',
      buildedBy: 'japan',
      price: 120000000,
      type: 'agya'
    }
  ],
  laptop: {
    merk: 'macbook',
    warna: 'dark grey',
    size: '15in'
  }
}

var dadang = {
  nama: "dadang",
  tinggi: 170,
  usia: 21,
  bb: 71,
  kendaraan: [{
      merk: 'honda',
      buildedBy: 'japan',
      price: 400000000,
      type: 'civic'
    },
    {
      merk: 'toyota',
      buildedBy: 'japan',
      price: 140000000,
      type: 'agya'
    }
  ],
  laptop: {
    merk: 'macbook',
    warna: 'dark grey',
    size: '15in'
  }
}

listOrang = [udin, ujang, dadang]
var number = '0'
var key = ""

// for (i = 0; i < listOrang[i].length; i++) {
//   for (j = 0; j < listOrang[i].kendaraan[j].length; j++) {
//     if (listOrang[i].kendaraan[j].price > numbers) {
//       number = listOrang[i].kendaraan[j].price
//       type = listOrang[i].kendaraan[j].price
//     }
//   }
// }
// console.log(key)


// soal no 5  (Gagal jika score < 75)
// function grouping(scores) {
//   let output = {
//     pass: [],
//     fail: [],
//   }
//   for (let i = 0; i < scores.length; i++) {
//     if (scores[i] < 75) {
//       output.fail.push(scores[i])
//     } else {
//       output.pass.push(scores[i])
//     }
//   }
//   return output
// }

// console.log(grouping([80, 45, 90, 65, 74, 100, 85, 30]));
// // { pass: [ 80, 90, 100, 85 ], fail: [ 45, 65, 74, 30 ] }

// console.log(grouping([]));
// { pass: [], fail: [] }



// soal no 6
function convert(data) {
  // Your code here
}

// TEST CASES
console.log(convert([
  [1, 'Dimitri', 'Wahyudiputra', 'dimitri@mail.com'],
  [2, 'Sergei', 'Dragunov', 'sergei@mail.com']
]));

/*
[ { id: 1,
    firstName: 'Dimitri',
    lastName: 'Wahyudiputra',
    email: 'dimitri@mail.com' },
  { id: 2,
    firstName: 'Sergei',
    lastName: 'Dragunov',
    email: 'sergei@mail.com' } ]
*/