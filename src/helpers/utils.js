const { mergeSort } = require('../sort/merge-sort');


const hasSumElements = (array, value) => {
    const tempArray = mergeSort(array);
    let first = 0;
    let last = tempArray.length - 1;
    let founded = false;
    while (first < last && !founded) {
        if(tempArray[first] + tempArray[last] == value) founded = true;
        else if (tempArray[first] + tempArray[last] < value) first++;
        else last --;
    }
    return founded;
}

const test = () => {
    const testArray = [0, 1, 3, 5, 7, 9];
    const testValue = 10;
    console.log('Test array: ');
    console.log(testArray);
    console.log(`Test value: ${testValue}`);
    console.log(`Result: ${hasSumElements(testArray, testValue)}`);
};

test();