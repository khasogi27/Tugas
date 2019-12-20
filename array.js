//no.1
// var animals = ['Lion', 'Tiger', [5,3,2,4,1,6], 'Jaguar', 'Puma']

// animals.push('1,2,3')
// console.log(animals)
// animals.pop()
// console.log(animals)
// animals.sort[2]
// console.log(animals[2])
// animals.slice(3,5)
// console.log(animals)


// soal 2

// a = [1, 2]
// a[0] = 1
// a[a] = 2

// b = [[1,2,3]],[[3,4,5]]
//  b[0][0] = 1
//  b[0][1] = 2
//  b[0][2] = 3
//  b[0][0] = 3
//  b[0][1] = 4
//  b[0][2] = 5
//  b[0][3] = 6

// for (i<list.length)
//   for (j=0 list[i].length){
//     if ()
//     listp[i][j] [0][0]
//     listp[i][j] [0][1]
//     listp[i][j] [0][2]
//   }

var list = [[5,3,2,4,1,6], [1,2,2,3,4],[1,3,5,7,9]]
var num = 0

// pakai loop
// munculkan hasil penjumlahan dari array di dalam angka jika angka itu genap
// kalo contoh di atas outputnya 20
// dan di buat kedalam sebuah function//
// function hanya menerima 1 parameter array 

let countArray = () => {
    for(i = 0; i < list.length; i++){
        for(j = 0; j < list[i].length; j++){
            if(list[i][j]%2==0){
                num += list[i][j]
            }
        }
    }
    return num
}

console.log(countArray(list))





////////////////////////////////////////////////////

// var animals = ['Lion', 'Tiger', [1,2,3,4,5,6]]

// console.log('lintang',animals[2][4])


// munculuin angka 5

// animals[2][4]
// console.log("bheta",animals[2][4])   

// animals[2][4]
// console.log('khasougi' ,animals[2][4])

// animals[2][4]
// console.log("hamza",animals[2][4])


// console.log(animals[2][4],'mario')

// animals[2][4]
// console.log("firaz", animals[2][4])

// animals[2][4]
// console.log("russell",animals[2][4])

//soal 1

var animals = ['Lion', 'Tiger', [5,3,2,4,1,6], 'Jaguar', 'Puma']


//1. push nilai baru  // kalo console animals muncul sama nilai barunya
//2 . setelah push langsung pop // kalo d console balik lagi
//3. sort array yang angka // kalo di console animas array angkanya ubah ke sort
//4. munculin array, dan jaguar pakai slice // ini kalo di console muncul jaguar puma



// soal 2
var list = [[5,3,2,4,1,6], [1,2,2,3,4],[1,3,5,7,9],[1,3,5,7,9],[1,3,5,7,9],[1,3,5,7,2]]

// pakai loop
// munculkan hasil penjumlahan dari array di dalam angka jika angka itu genap
// kalo contoh di atas outputnya 20
// dan di buat kedalam sebuah function//
// function hanya menerima 1 parameter array 


//soal 3

let cars = 'toyota honda hyundai mercedes bmw kia mazda'
cars2 = 'toyota+honda+hyundai mercedes bmw kia mazda'


const split = (string, pemisah) => {
  let arr = []
  let str = ''
  
  for(i=0;i<string.length;i++){
    if(string[i] === pemisah){
     arr.push(str)
     str = '' 
    }else{
      str += string[i]
    }
  }
  arr.push(str)
  return arr
}

// buat sebuah function (string, pemisah) => (cars, ' ') => ['toyota', 'honda','hyundai', 'mercedes', 'bmw', 'kia', 'mazda']
// buat sebuah function (string, pemisah) => (cars2, '+') => ['toyota', 'honda', 'hyunda', 'mercedes bmw kia mazda']
//
console.log(split(cars2, '+'))
console.log(cars2.split('+'))

// soal 4
let num1 = 2
let num2 = 10

num1 = num1+num2
num2 = num1-num2
num1 = num1-num2



