// Returns the minimum/maximum value of an array, after applying the provided function to set comparing rule.

// Use Array.prototype.reduce() in combination with the comparator function to get the appropriate element in the array. You can omit the second parameter, comparator, to use the default one that returns the minimum element in the array.

const reduceWhich = (arr, comparator = (a, b) => a - b) =>
    arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));

let a = reduceWhich([1, 3, 2]); // 1
let b = reduceWhich([1, 3, 2], (a, b) => b - a); // 3
let c = reduceWhich(
    [{ name: 'Tom', age: 12 }, { name: 'Jack', age: 18 }, { name: 'Lucy', age: 9 }],
    (a, b) => a.age - b.age
); // {name: "Lucy", age: 9}

console.log(a);
console.log(b);
console.log(c);