const arrayHelper = require('../helpers/arrays.js');

const merge = (firstArray, secondArray) => {
    let tempArray = [];
    let i = 0;
    let j = 0;
    console.log('left array: \n' + firstArray);
    console.log('right array: \n' + secondArray);
    while (tempArray.length < firstArray.length + secondArray.length) {
        if (firstArray[i] < secondArray[j]) {
            tempArray = [...tempArray, firstArray[i]];
            console.log('left!' + i)
            i++;
        } else {
            tempArray = [...tempArray, secondArray[j]];
            console.log('right! ' + j)
            j++;
        }
        if (i = firstArray.length) {
            tempArray = [...tempArray, ...secondArray.slice(j, secondArray.length)];
        } else if (j = secondArray.length) {
            tempArray = [...tempArray, ...firstArray.slice(i, firstArray.length)];
        }
    }
    console.log('temp array: \n' + tempArray);
    return tempArray;
}

const mergeSort = array => {
    let tempArray = [];
    if(array.length > 1) {
        const center = Math.round(array.length / 2);
        const leftArray = array.slice(0, center)
        const rightArray = array.slice(center, array.length)
        // console.log(leftArray)
        // console.log(rightArray)
        tempArray = merge(mergeSort(leftArray), mergeSort(rightArray));
    } else {
        tempArray = array;
    }
    return tempArray;
}

const test = () => {
    const tempArray = arrayHelper.mockArray(10);
    console.log(tempArray);
    console.log(mergeSort(tempArray));
}

test();