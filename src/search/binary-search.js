const search = (array, leftIndex, rightIndex, value) => {
    console.log(leftIndex, rightIndex);
    if(rightIndex - leftIndex == 1) {
        return array[leftIndex] == value ? leftIndex : rightIndex;
    }
    const index = Math.round((rightIndex - leftIndex) / 2);
    if(value > array[index]) return search(array, index + 1, rightIndex, value);
    else if (value < array[index]) return search(array, leftIndex, index - 1, value);
    else return index;
}

const binarySearch = (array, value) => {
    return search(array, 0, array.length, value);
}

const test = () => {
    const tempArray = [11, 20, 50, 66, 79, 111, 144];
    console.log('Test array:');
    console.log(tempArray);
    console.log('Test value: 20 (index 1)');
    console.log('Function result: ' + binarySearch(tempArray, tempArray[1]));
}

test();