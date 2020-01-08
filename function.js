// let keyword = 'adadadasdaskdjalsdkjalsdjasdlajsdklasjd'
// let word =  'naik pesawat'
// let num = 0

// function countWord(keyword, word){
//     for(i=0; i < keyword.length; i++){
//         num += keyword[i]
//     }

//     result num

// }

// let result = countWord('')
// console.log(keyword')


// function sum(num1,num2){
//     return num1 + num2
// }

// let multiplier = (multiplier, num1, num2) => {
//     return sum(num1) <== pengkalian >
// }

// let divideNum = function(divider, num1, num2, num3){
//     return  multiplier(num1, num2, num3)/divider <== pembagian >
// }


// divideNum(2, 5, 20, 10)) // => 5 * (20 + 10) / 2  = 75


var bali = [
	{ regency:'Jembrana', population:114863 },
	{ regency:'Tabanan', population:209308 },
	{ regency:'Badung', population:277536 },
	{ regency:'Gianyar', population:208443 },
	{ regency:'Klungkung', population:79233 },
	{ regency:'Bangli', population:106166 },
	{ regency:'Karangasem', population:193787 },
	{ regency:'Buleleng', population:294418 },
	{ regency:'Denpasar', population:403292 }
];

var sum = bali.reduce(function(val, element) {
	return val + element.population;
}, 0);

console.log(sum) // 1887046