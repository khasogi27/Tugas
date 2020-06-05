var name = "kha sou gi"

function removeSpace(name) {
    var str = ""
    for (i = 0; i < name.length; i++) {
        if (name[i] != " ") {
            str += name[i]
        }
    }
    return str
}
console.log(removeSpace(name))

var name2 = "khasougi"

function reverseText(name2) {
    var str2 = ""
    for (j = name2.length - 1; j > -1; j--) {
        str2 += name2[j]
    }
    return str2
}
console.log(reverseText(name2))


var name3 = "khasougi"

function updateVowel(name3) {
    var str3 = ""
    var vowel = "aiueo"
    for (k = 0; k < name3.length; k++) {
        flag = false
        for (l = 0; l < vowel.length; l++) {
            if (name3[k] === vowel[l]) {
                flag = true
                if (vowel[l] === 'a') {
                    str3 += '4'
                }
                if (vowel[l] === 'i') {
                    str3 += '1'
                }
                if (vowel[l] === 'u') {
                    str3 += 'u'
                }
                if (vowel[l] === 'e') {
                    str3 += '3'
                }
                if (vowel[l] === 'o') {
                    str3 += '0'
                }
            }
        }
        if (flag == false) {
            str3 += name3[k]
        }
    }
    return str3
}
console.log(updateVowel(name3))