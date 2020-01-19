// level 1
// bandingin dari number1 ke number2
// outputnya [8,3,3] cari nilai yang tidak duplicate (unique)

// const number1 = [1, 5, 7, 8, 2, 3, 6, 4, 3] // [8,3,3]
// const number2 = [9, 2, 1, 6, 4, 2, 5, 7, 1] // [9]
// const res = [] // [8,3,3]

// const indexOf = (keyword, data) => {
//     for (j = 0; j < data.length; j++) {
//         if (keyword == data[j]) {
//             return i
//         }
//     }
//     return -1
// }

// for (i = 0; i < number1.length; i++) {
//     if (indexOf(number1[i], number2) < 0) {
//         res.push(number1[i])
//     }
// }
// console.log(res)

/////////////////////////////////////////////////////////////////////////////////////////

// level 1
// bandingin dari number1 ke number2
// outputnya [8,3,3] cari nilai yang tidak duplicate (unique)

// const number1 = [1, 5, 7, 8, 2, 3, 6, 4, 3] // [8,3,3]
// const number2 = [9, 2, 1, 6, 4, 2, 5, 7, 1] // [9]
// const number3 = [] // [8,3,3]

// for (i = 0; i < number1.length; i++) { // ini loop pertama
//     perluPushAapaEngga = true // ini buat penandanya //false
//     for (j = 0; j < number2.length; j++) { // i=0 j=0
//         if (number1[i] == number2[j]) { // 3 == 9, 2, 1, 6, 4, 2,5,7,1
//             perluPushAapaEngga = false
//         }
//     }
//     if (perluPushAapaEngga === true) {
//         number3.push(number1[i])
//     }
// }
// console.log(number3)

///////////////////////////////////////////////////////////////////////////////////////////

// level 2
// unique dari number 1 dan number 2
// outputnya [9,8,3,3] cari nilai yang tidak duplicate (unique) 

// const number1 = [1, 5, 7, 8, 2, 3, 6, 4, 3] // [8,3,3]
// const number2 = [9, 2, 1, 6, 4, 2, 5, 7, 1] // [9]
// const number3 = [] // [8,3,3]

// for (i = 0; i < number2.length; i++) {
//     perluPushAapaEngga = true
//     for (j = 0; j < number1.length; j++) {
//         if (number2[i] == number1[j]) {
//             perluPushAapaEngga = false
//         }
//     }
//     if (perluPushAapaEngga === true) {
//         number3.push(number2[i])
//     }
// }
// for (i = 0; i < number1.length; i++) {
//     perluPushAapaEngga = true
//     for (j = 0; j < number2.length; j++) {
//         if (number1[i] == number2[j]) {
//             perluPushAapaEngga = false
//         }
//     }
//     if (perluPushAapaEngga === true) {
//         number3.push(number1[i])
//     }
// }

// console.log(number3)

///////////////////////////////////////////////////////////////////////////////////////////

// level 3
// bikin sebuah function indexOf(keyword, data)
// outputnya jika ada munculin indexnya
// jika tidak ada munculin -1
// contoh indexOf('hyundai', ['toyota','honda','hyundai','mazda']) => 2
// contoh indexOf('BMW', soal2) => -1
// contoh indexOf(5, [1,2,3,4,5,6]) => 4

// const soal2 = ['toyota','honda','hyundai','mazda'] 
// ////////////// index 0, index 1, index 2, index 3 

// function indexOf(data, soal2){ // ini function unduk mencari (indexOf) const soal2
//     for(i=0; i < soal2.length; i++){ // untuk loop dari const coal2 dan mencari panjang soal1 (length)
//         if(soal2[i] === data){ // apakah soal1 index ke i ([i]) samadengan data
//             return i; /// return untuh index i 
//         }
//     }
//     return -1 // return untuk loop
// }
// console.log(indexOf('mazda' , soal2)) // mencampilkan hasil 


/////////////////////////////////////////////////////////////////////////////////////////////

// level 4
// bikin sebuah function includeAlphabet(string)
// includeAlphabet(password) // outputnya akan true
// includeAlphabet(pin) // outputnya akan false

const password = 'test123'
const pin = '1234567'

function includeAlphabet(string) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let output = false

    for (i = 0; i < string.length; i++) {
        for (j = 0; j < alphabet.length; j++) {
            if (string[i] === alphabet[j]) {
                output = true
            }
        }
        return output
    }
}
console.log(includeAlphabet(pin))