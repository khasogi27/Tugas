// No.1

// var array = []

// function perkalianUnik(arr) {
//     for (i = 0; i < arr.length; i++) {
//         var num = 1
//         for (j = 0; j < arr.length; j++) {
//             if (i !== j) {
//                 num = num * arr[j]
//             }
//         }
//         array.push(num)
//     }
//     return array
// }
// // // TEST CASES
// console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
// console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
// console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
// console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
// console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]

// No.3


function numberProcessing(numberArr) {
    let terkecil = [0];
    let terbesar = [10]; 
    let ganjil = []
    let genap = []
    
    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr[i] < terkecil) { // mencari nilai terkecil
            terkecil.push(numberArr[i]);
        }
        if (numberArr[i] > terbesar) { // mencari nilai terbesar
            terbesar.push(numberArr[i]);
        }
        if (numberArr[i] % 2 != 0) { // mencari nilai ganjil
            ganjil.push(numberArr[i]);
        }
        if (numberArr[i] % 2 == 0) { // mencari nilai genap
            genap.push(numberArr[i]);
        }
    }
    let rata = numberArr.reduce((j, k) => { // mencari nilai rata-rata
        return j + k
    }, 0) / numberArr.length
    return {terkecil,terbesar,ganjil,genap,rata}
}
console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
// "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0"