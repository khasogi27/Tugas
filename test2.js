// Merubah huruf vokal dari 'a','i','u','e','o' menjadi 'i'
// contoh : sebuah contoh belaka = siniih cintih biliki

var kata = 'kamu segalanya tak terpisah oleh waktu'
var hilih = (kata.replace(/a|i|u|e\o/g, 'i'));
console.log(hilih)