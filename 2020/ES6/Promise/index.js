const test = () => {
    return new Promise((resolve, reject) => {
        resolve(1);
        console.log(2);
        reject(3);
    });
}

test().then((res) => {
    console.log(res);
    // console.log(error);
}).catch((error) => {
    console.log(error);
});
