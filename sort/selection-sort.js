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

const test = () => {
    const tempArray = arrayHelper.mockArray(100);
    console.log(tempArray);
    console.log(selectionSort(tempArray));
}

test();

module.exports = {
    selectionSort
};