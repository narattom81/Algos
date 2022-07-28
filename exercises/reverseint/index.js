// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    if (n===0){
        return 0
    }
    let str = n.toString()
    let sign = Math.sign(n)
    if (sign === 1) {
        return parseInt(str.split('').reverse().join(''))
    }else{
        return  -1*parseInt(str.slice(1,str.length).split('').reverse().join(''))
    }
}

reverseInt(-50)
module.exports = reverseInt;
