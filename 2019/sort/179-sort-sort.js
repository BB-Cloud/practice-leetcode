/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = nums => {
    return nums
        .map(String)
        .sort((a, b) => b.concat(a) - a.concat(b))
        .join("")
        .replace(/^0+/, "") || "0";
}

console.log(largestNumber([3,30,34,5,9]));


// Unit Test
var largestNumber1 = nums => {
    let step1 = nums.map(String);
    let step2 = step1.sort((a, b) => b.concat(a) - a.concat(b))
    let step3 = step2.join("");
    let step4 = step3.replace(/^0+/, "") || "0";
    return step4;
}

console.log(largestNumber1([0,3,30,34,05,9]));

