// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array1, size) {
    let counter=0,i = 0
    const result = []
    let ele = array1
    while (i < array1.length) {
        i++
        if (counter < size+1) {
            counter++
            continue
        }
        ele = array1.slice(counter - size,counter)
        result.push(ele)
        counter=0

    }
    ele = array1.slice(counter,counter+size)
    result.push(ele)
    return result

}

r = chunk([1, 2, 3, 4, 5], 2)
console.log(r)

module.exports = chunk;
