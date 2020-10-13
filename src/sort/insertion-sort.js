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

module.exports = {
    insertionSort
}