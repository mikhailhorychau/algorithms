const merge = (firstArray, secondArray) => {
    let tempArray = [];
    let i = 0;
    let j = 0;
    while (i < firstArray.length && j < secondArray.length) {
        if (firstArray[i] < secondArray[j]) {
            tempArray = [...tempArray, firstArray[i]];
            i++;
        } else {
            tempArray = [...tempArray, secondArray[j]];
            j++;
        }
    }
    return tempArray
        .concat(firstArray.slice(i))
        .concat(secondArray.slice(j));
}

const mergeSort = array => {
    let tempArray = [];
    if(array.length > 1) {
        const center = Math.round(array.length / 2);
        const leftArray = array.slice(0, center);
        const rightArray = array.slice(center);
        tempArray = merge(mergeSort(leftArray), mergeSort(rightArray));
    } else {
        return array;
    }
    return tempArray;
}

module.exports = {
    mergeSort
}