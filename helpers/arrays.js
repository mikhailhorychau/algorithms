const mockArray = (count = 100) => Array(count).fill(0).map(el => el = Math.round(Math.random() * 100));

const findMaxNumberInArray = (array) => {
    let max = {
        index: 0,
        value: array[0]
    }
    if(array.length == 1) return max;
    for(let i = 1; i < array.length; i++)
        if(array[i] > max.value)
            max = {
                index: i,
                value: array[i]
            }
    return max;
}

const findMinNumberInArray = (array) => {
    let min = {
        index: 0,
        value: array[0]
    }
    if(array.length == 1) return min;
    for(let i = 1; i < array.length; i++)
        if(array[i] < min.value)
            min = {
                index: i,
                value: array[i]
            }
    return min;
}

const findMaxNumberInArrayTest = () => {
    const tempArray = mockArray();
    console.log("findMaxNumberInArray Test: ")
    console.log(tempArray);
    console.log(findMaxNumberInArray(tempArray));
}

module.exports = {
    mockArray,
    findMaxNumberInArray,
    findMinNumberInArray
}