const ARR = [[8,9], 1,2,3,[4,5,5,5,5,6]]

const sort = (a, b) => a - b;

const unique = (arr) => {
    return [...new Set(arr)];
}

const flat = (arr) => {
    return [].concat(...arr.map((item) => {
        return Array.isArray(item) ? flat(item) : [item];
    }))
}

console.log(unique(flat(ARR).sort(sort)));
