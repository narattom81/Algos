// let str='fooabar\n' +
//     'fooaaabar\n' +
//     'fooabar\n' +
//     'foobar\n' +
//     'fooxbar\n' +
//     'fooxxbar'
// let res=str.replace(/foo[a]*bar/mgi,'z')
// console.log(res)


//anagram
// function cleanString(str){
//     return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('')
// }
//
// console.log(cleanString('Hello 766There!!!'))
//
// console.log(cleanString('Ther    Hello 676e!!!'))


function capitalize(str) {
    let arr = str.split(/[^\w]/)
    let arr1 = arr.filter(e => e.length > 1)
    let finalString = ''
    let index = 0
    let i = 0
    for (let s of arr1) {
        let n = str.indexOf(s, index)
        let n1 = str.indexOf(arr1[i + 1], index)
        index = n + s.length
        finalString += capitalizeWord(s) + str.slice(index, n1)
        if (i == arr1.length - 1) {
            break
        }
        i++
    }
    console.log(finalString)

}


function capitalizeWord(str) {
    if (str != undefined && str != null && str.length > 0) {
        return str[0].toUpperCase() + str.slice(1)
    } else {
        return ''
    }
}

// capitalize('hi there, how  are you???\n ' +
//     'hope you are fine today.')
//
// capitalize('hi there,how  are you???\n ' +
//     'hope you are fine today.')


function capitalize1(str) {
    let result = str[0].toUpperCase()
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1].match(/[^\w]/)) {
            result += str[i].toUpperCase()
        } else {
            result += str[i]
        }
    }

    console.log(result)
}

capitalize1("hi there, how  are you???\n hope you are fine today.")
capitalize("hi there, how  are you???\n hope you are fine today.")