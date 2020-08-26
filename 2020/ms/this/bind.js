function wzx () {
    var i = 0;
    return function lyq() {
        console.log(++i);
    }
};

var f1 = wzx();

f1();

f1();

console.log(i);