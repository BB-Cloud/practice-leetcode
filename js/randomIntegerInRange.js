const randomIntegerInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(randomIntegerInRange(0, 5));