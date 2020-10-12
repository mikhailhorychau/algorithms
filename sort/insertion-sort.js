const arrayHelper = require('../helpers/arrays.js');

const insertionSort = (array) => {
    let tempArray = [...array];
    for(let j = 1; j < tempArray.length; j++) {
        key = tempArray[j];
        let i = j - 1;
        while (i >= 0 && tempArray[i] > key) {
            tempArray[i + 1] = tempArray[i];
            i = i - 1;
        }
        tempArray[i + 1] = key;
    };
    return tempArray;
};

const test = () => {
    const testArray = arrayHelper.mockArray();
    console.log(testArray);
    console.log(insertionSort(testArray));
}

test();

module.exports = {
    insertionSort
}