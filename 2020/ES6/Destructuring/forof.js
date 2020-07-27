console.log('—————————map正常—————————————');
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let item of map) {
  console.log(item);
}

map.forEach(function(value, key) {
    console.log(this);
    console.log("Key: %s, Value: %s", key, value);
});
  
const reporter = {
    report: function(key, value) {
      console.log("Key: %s, Value: %s", key, value);
    }
  };
  
map.forEach(function(value, key) {
    console.log(2, this);
    this.report(key, value);
}, reporter);

console.log('——————————obj报错————————————');

const obj = {
    w: 'q',
    r: 'e',
};

// for (let [key, value] of obj) {
//   console.log(key + " is " + value);
// }

console.log('——————————Array正常————————————');

const arr = [1,2,3,4];

for (let item of arr) {
  console.log(item);
}