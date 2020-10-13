const arrayHelper = require('../helpers/arrays.js');

const selectionSort = (array) => {
    let tempArray = [...array];
    let min = {
        index: 0,
        value: tempArray[0]
    };
    for(let i = 0; i < tempArray.length - 1; i++) {
        min = arrayHelper.findMinNumberInArray(tempArray.slice(i, tempArray.length));
        tempArray[min.index + i] = tempArray[i];
        tempArray[i] = min.value;
    }
    return tempArray;
}

const selectionSortRecursive = array => {
    let tempArray = [...array];
    return findMinValueInArrayAndSwap(tempArray, 0);
}

const findMinValueInArrayAndSwap = (array, index) => {
    if(array.length == index + 1) return array;
    let min = arrayHelper.findMinNumberInArray(array.slice(index));
    array[min.index + index] = array[index];
    array[index] = min.value;
    return findMinValueInArrayAndSwap(array, index + 1);
}

module.exports = {
    selectionSort,
    selectionSortRecursive
};