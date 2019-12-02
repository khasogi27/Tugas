// 1. cari berapa kata huruf k, munculkan angkanya 

var abj = 'abcdefghijaosjdlkadjlaksdjlaksdjlasdj a;sjdalksdjaklsdj lasjdlkasdjklasdjaskldjalsdkjskdjkkkkkkkkklmnopqrs'
var num = (abj.match(/k/g) || []).length;
if(num == 0) {
    console.log('nothing k');
} 
else {
    console.log('Jumlah huruf k : ' + num);
}


// 2.  ubah huruf S menjadi spasi

// let words = 'hondaStoyotaSHyundaiSMitsubishi'
// let output = '' // 'honda toyota Mitsubishi'
