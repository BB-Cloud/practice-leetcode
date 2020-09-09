function deepCopy(obj) {
    let newObj = obj instanceof Array ? [] : {};
    for (let key in obj) {
        if (obj[key] instanceof Object) {
            newObj[key] = deepCopy(obj[key])
        } else {
            newObj[key] = obj[key]
        }
    }
    return newObj
}


const firstObj = {
    question: 1,
    answer: {
        page: 3,
        arr: [1,2,3]
    },
}

const thirdObj = deepCopy(firstObj);

firstObj.answer.arr.push(6);

console.log(thirdObj.answer);
console.log(thirdObj.answer.arr);