var kata = "kamu segalanya tak terpisah oleh waktu"
var alay = updateVowels(kata);

function updateVowels(kata) {
    var num = ""
    var reff = "aiueok"
    for (k = 0; k < kata.length; k++) {
        flag = false
        for (l = 0; l < kata.length; l++) {
            if (kata[k] === reff[l]) {
                flag = true
                if (reff[l] === 'a') {
                    num += '4'
                }
                if (reff[l] === 'i') {
                    num += '1'
                }
                if (reff[l] === 'u') {
                    num += 'Oe'
                }
                if (reff[l] === 'e') {
                    num += '3'
                }
                if (reff[l] === 'o') {
                    num += '0'
                }
                if (reff[l] === 'k') {
                    num += 'q'
                }
            }
        }
        if (flag == false) {
            num += kata[k]
        }
    }
    return num
}
console.log(alay);