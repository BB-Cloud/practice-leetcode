function copy(obj) {
    let newObj = {};
    for (let key in obj) {
        newObj[key] = obj[key];
    }
    return newObj;
}

const firstObj = {
    question: 1,
    answer: {
        page: 3
    },
}

const secondObj = copy(firstObj);

const thirdObj = {...firstObj}

firstObj.answer.page = 4

console.log(thirdObj.answer);