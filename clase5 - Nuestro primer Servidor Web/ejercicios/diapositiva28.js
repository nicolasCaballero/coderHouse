/* Ejercicio A) */
let nums = new Array(10000);

let generateRandomNumbers = () => {
    let i;
    for (let i = 0; i < nums.length; i++) {
        nums[i] = Math.floor((Math.random() * 20) + 1);
    };
};

generateRandomNumbers();

/* Ejercicio B) */
let objFromArrs = {};

nums.forEach(function (numbers) {
    objFromArrs[numbers] = (objFromArrs[numbers] || 0) + 1;
});

console.log(objFromArrs);