const assert = require('chai').assert;

const arrayHelper = require('../src/helpers/arrays');
const { selectionSortRecursive, selectionSort } = require('../src/sort/selection-sort');
const { mergeSort } = require('../src/sort/merge-sort');
const { insertionSort } = require('../src/sort/insertion-sort');

const sortTest = (sortFunction) => {
    for(let i = 0; i < 5; i++) {
        const exp = i + 1;
        const dataForSort = arrayHelper.mockArray(1000 * exp);
        const sortedData = sortFunction(dataForSort);
        it(`Sort test ${i + 1} ${1000 * exp} Length`, () => {
            assert.sameOrderedMembers(dataForSort.sort((a, b) => a - b), sortedData);
        })
    };
}


describe('Selection sort', () => {
    sortTest(selectionSort);
});
describe('Selection sort recursive', () => {
    sortTest(selectionSortRecursive);
});
describe('Merge sort', () => {
    sortTest(mergeSort);
});
describe('Insertion sort', () => {
    sortTest(insertionSort);
});

