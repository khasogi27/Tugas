function numberIterator(num) {
  if (num === 0) {
    return num
  }
  return numberIterator(num - 1) + '' + num
}

// TEST CASES
console.log(numberIterator(5)); // '012345'
console.log(numberIterator(7)); // '01234567'
console.log(numberIterator(3)); // '0123'
console.log(numberIterator(1)); // '01'
console.log(numberIterator(0)); // '0'


// function countLetters(word, letter) {  
//   if (word.length === 0) {
//     return 0
//     if (letter === word[0])
//       return +1 countLetters(letter - 1)
//   }
//   return {
    
//   }
// }

// TEST CASES
// console.log(countLetters('12104123', '1')); // 3
// console.log(countLetters('the quick brown fox', 'o')); // 2
// console.log(countLetters('lorem ipsum', 'a')); // 0
// console.log(countLetters('hahaha', 'h')); // 3


// function palindrome(keyword) {
//   if (typeof keyword == 'number') {
//     keyword = keyword.toString()
//   }
//   if (keyword.length === 1) {
//     return keyword
//     // return true
//   }
//   // if (keyword[0] === keyword[keyword.length - 1]) {
//   //   return palindrome(keyword.slice(1, -1))
//   // }
//   // return false
//   return keyword.slice(-1) + palindrome(keyword.slice(0, -1))
// }

function palindrome(keyword) {
  if (typeof keyword == 'number') {
    keyword = keyword.toString()
  }
  if (keyword.length === 1) {
    return true
  }
  if (keyword[0] === keyword[keyword.length - 1]) {
    return palindrome(keyword.slice(1, -1))
  }
  return false
}

console.log(palindrome('malam')) // 'malam'
console.log(palindrome('mamlam')) // 'malmam'
console.log(palindrome(212)) // 212
console.log(palindrome(214)) // 412
