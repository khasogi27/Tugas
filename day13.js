// Buatlah sebuah program untuk membuat enkripsi password yang di-input user agar tidak bisa dimengerti oleh orang lain dengan aturan sebagai berikut:
// 1.Hilangkan semua spasi yang ada di dalam input
// 2.Reverse input
// 3.Ganti huruf vokal menjadi satu huruf setelahnya (A menjadi B, I menjadi H dan seterusnya)

var password = 'test w';
var noSpaces = removeSpaces(password); // testw
var reversed = reverseText(noSpaces); // wtset
var encryptedPassword = updateVowels(reversed); // wtsft

function removeSpaces(password) {
    var num = ""
    for (i = 0; i < password.length; i++) {
        if (password[i] !== " ") {
            num += password[i]
        }
    }
    return num
}
console.log(noSpaces); // testw

function reverseText(noSpaces) {
    var num1 = ""
    for (j = noSpaces.length - 1; j > -1; j--) {
        if (noSpaces[j] !== " ") {
            num1 += noSpaces[j]
        }
    }
    return num1
}
console.log(reversed); // wtset

function updateVowels(reversed) {
    var num2 = ""
    var reff = "aiueo"
    for (k = 0; k < reversed.length; k++) {
        flag = false
        for (l = 0; l < reversed.length; l++) {
            if (reversed[k] === reff[l]) {
                flag = true
                if (reff[l] === 'a') {
                    num2 += 'c'
                }
                if (reff[l] === 'i') {
                    num2 += 'o'
                }
                if (reff[l] === 'u') {
                    num2 += 'n'
                }
                if (reff[l] === 'e') { // kata yg akan di rubah dari "e" menjadi "f"
                    num2 += 'f'
                }
                if (reff[l] === 'o') {
                    num2 += 'i'
                }
            }
        }
        if (flag == false) {
            num2 += reversed[k]
        }
    }
    return num2
}
console.log(encryptedPassword); // wtsft