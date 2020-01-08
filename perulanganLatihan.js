var name = 'ogi'
var age = 18
var money = 500000
var jus = 50000
var anggur = 300000

if (!name) {
    console.log('Anda tidak boleh masuk!');
} else {
    console.log('Anda boleh masuk')
    if (age < 17) {
        if (money - jus > 0) {
            money = money - jus
            console.log('Anda bisa pesan minuman jus dan Sisa uang anda ' + money);
        } else {
            console.log('Uang tidak cukup. Anda harus pulang');
        }
    } else if (age > 17) {
        if (money - anggur > 0) {
            money = money - anggur
            console.log('Anda bisa pesan minuman anggur dan Sisa uang anda ' + money);
        } else {
            console.log('Uang tidak cukup. Anda harus pulang');
        }
    }
}