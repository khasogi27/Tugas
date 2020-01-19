////////////////////////////////latihan////////////////////////////////////////

// //  masukan sebuah password
// //  jika huruf pertama capital(password) return true
// //  jika huruf pertamanya bukan capital(password2) return false

// var password = 'Abc' // true
// var password2 = 'abc' // false

// function isFirstCharCapital(string) { // true false
//     let capital = 'ABCDEFGH'
//     let output = false

//     for (i = 0; i < string.length; i++) {
//         for (j = 0; j < capital.length; j++) {
//             if (string[i] === capital[j]) {
//                 output = true
//             }
//         }
//     }
//     return output
// }
// console.log(isFirstCharCapital(password2))

////////////////////////////////no.1/////////////////////////////////////////

// Diberikan sebuah function yang menerima dua parameter angka. Function akan me-return nilai true jika secondNumber lebih besar dari firstNumber, dan false jika sebaliknya. Jika kedua angka bernilai sama, function akan me-return -1.

// function compareNumbers(firstNumber, secondNumber) {
//     let output
//     if (firstNumber < secondNumber) {
//         output = true
//     }
//     if (firstNumber > secondNumber) {
//         output = false
//     }
//     if (firstNumber == secondNumber) {
//         output = -1
//     }
//     return output
// }

// // TEST CASES
// console.log(compareNumbers(5, 8)); // true
// console.log(compareNumbers(5, 3)); // false
// console.log(compareNumbers(4, 4)); // -1
// console.log(compareNumbers(3, 3)); // -1
// console.log(compareNumbers(17, 2)); // false

////////////////////////////////no.2/////////////////////////////////////////

// Buatlah function reverseString melakukan proses pembalikan string!

// function reverseString(string) {
//     var num2 = ""
//     for (i = string.length - 1; i > -1; i--) {
//         if (string[i] !== "") {
//             num2 += string[i]
//         }
//     }
//     return num2
// }

// // TEST CASES
// console.log(reverseString('Hello World and Coders')); // sredoC dna dlroW olleH
// console.log(reverseString('John Doe')); // eoD nhoJ
// console.log(reverseString('I am a bookworm')); // mrowkoob a ma I
// console.log(reverseString('Coding is my hobby')); // ybboh ym si gnidoC
// console.log(reverseString('Super')); // repuS

////////////////////////////////no.3/////////////////////////////////////////

// Buatlah function yang bisa mengurutkan huruf yang ada pada sebuah text, dari A-Z (Ascending).

// Note: Jika sudah berhasil menyelesaikan masalah ini menggunakan built-in function .sort(), coba juga menggunakan algoritma sortingmu sendiri

// function sortByCharacter(string) {
//     var num3 = ""
//     for (j = string.length - 1; j > -1; j--) {
//         if (string[j] !== "") {
//             num3 += string[j]
//         }
//     }
//     return num3
// }

// // TEST CASES
// console.log(sortByCharacter('hello')); // 'ehllo'
// console.log(sortByCharacter('truncate')); // 'acenrttu'
// console.log(sortByCharacter('developer')); // 'deeeloprv'
// console.log(sortByCharacter('software')); // 'aeforstw'
// console.log(sortByCharacter('aegis')); // 'aegis'

////////////////////////////////no.4/////////////////////////////////////////

// Diberikan sebuah function yang menerima satu parameter berupa array yang terdiri dari angka. Function tersebut akan mengembalikan true jika array dari parameter tersebut merupakan deret aritmatika dan false jika sebaliknya. Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten. Contoh, 2, 4, 6, 8 adalah deret aritmatika dengan pertambahan nilai sebesar 2, dan 2, 4, 6, 9 bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten.

function isArithmeticProgression(numbers) {
    let selisih = numbers[1] - numbers[0]

    let isArithmetic = true

    for (i = 0; i < numbers.length - 1; i++) { // i =0 sampai i < 6-1   i = 0 sampai 5
        if (numbers[i + 1] - numbers[i] !== selisih) { // 4
            isArithmetic = false
        }
    }

    return isArithmetic
}


// TEST CASES
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false