// Diberikan sebuah function yang menerima satu parameter berupa string. Function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false.

// function threeStepsAB (string) { 
//     let selisih = 'a' + [3]
//     let output = true

//     for (i = 0; i < string.length; i++){
//         if (string[i] !== 'a' + [3]){
//             output = false
//         }
//     }
//     return output
// }

//   // TEST CASES
//   console.log(threeStepsAB('lane borrowed')); // true
//   console.log(threeStepsAB('i am sick')); // false
//   console.log(threeStepsAB('you are boring')); // true
//   console.log(threeStepsAB('barbarian')); // true
//   console.log(threeStepsAB('bacon and meat')); // false3

// Diberikan sebuah function yang menerima dua parameter angka. Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.


// function gcd(firstNumber, secondNumber) {
//     var num = ""

//     if (secondNumber % firstNumber) {
//         num += secondNumber % firstNumber
//     }
//     return num
// }

// // TEST CASES
// console.log(gcd(12, 16)); // 4
// console.log(gcd(50, 40)); // 10
// console.log(gcd(22, 99)); // 11
// console.log(gcd(24, 36)); // 12
// console.log(gcd(17, 23)); // 1

// Diberikan sebuah function yang menerima satu parameter berupa angka. Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.

// function isPrime(number) {
//     output = true

//     for (i=2;i<number;i++){
//         if(number%i==0)
//         output = false
//     }
//     return output
// }

// // TEST CASES
// console.log(isPrime(3)); // true
// console.log(isPrime(7)); // true
// console.log(isPrime(6)); // false
// console.log(isPrime(23)); // true
// console.log(isPrime(33)); // false

// 'makan' ==> false
// malam ==> true
// makam ==> true

// katak ==> true
// 101 ==> true
// 5125 ==> false
// 5115 ==> true
// m ==> true



// function isPalindromeString(string){
//     var num1 = ""
//     for (j = string.length - 1; j > -1; j--) {
//         if (string[j] !== " ") {
//             num1 += string[j]
//         }
//     }
//     return num1
// }

// function isPalindromeNumber()

// console.log(isPalindromeNumber('makan')) // false
// console.log(isPalindromeNumber('malam')) // true
// console.log(isPalindromeNumber('makam')) // true
// console.log(isPalindromeNumber('katak')) // true
// console.log(isPalindromeNumber('101')) // true
// console.log(isPalindromeNumber('5125')) // false
// console.log(isPalindromeNumber('5115')) // true
// console.log(isPalindromeNumber('m')) // true

// function pow(base, power) {
//     if (power < 0) return 1 / pow(base, -power);
//     var b = base,
//         result = 1;
//     while (power > 0) {
//         if ((power & 1) != 0) {
//             result *= b;
//         }
//         power >= 1;
//         b *= b;
//     }
//     return result;
// }

// console.log(pow(5, -2))