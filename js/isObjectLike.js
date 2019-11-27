// Checks if a value is object-like.

// Check if the provided value is not null and its typeof is equal to 'object'.

const isObjectLike = val => val !== null && typeof val === 'object';

let a = isObjectLike({}); // true
let b = isObjectLike([1, 2, 3]); // true
let c = isObjectLike(x => x); // false
let d = isObjectLike(null); // false

console.log(a,b,c,d);