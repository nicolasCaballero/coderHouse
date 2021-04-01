let arr1 = [6, '**', 2];
let arr2 = ['**'];
let arr3 = [4, '**', 5];

let x = arr => {
    if (arr.length == 3 && typeof arr[0] == 'number' && arr.includes('**') && typeof arr[2] == 'number') {
        return arr[0] ** arr[2];
    } else {
        return NaN;
    }
};
console.log(x(arr2));
console.log(x(arr3));