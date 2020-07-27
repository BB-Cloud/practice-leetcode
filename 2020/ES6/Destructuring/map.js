const map = new Map()
    .set('first', 1)
    .set('second', 2);
const globalObj = {
    first: 1,
    second: 2
}
const globalArr = [
    ['first', 1],
    ['second', 2],
]
const globalJsonObj = '{"yes": true, "no": false}';
const globalJsonArr = '[[true,7],[{"foo":3},["abc"]]]';

console.log('————————转数组————————');
const arr = [...map];
console.log(arr);


console.log('————————数组转map————————');
const newMap = new Map(globalArr);
console.log(newMap);


console.log('————————map转对象————————');
function mapToObj (mapToOb) {
    let obj = {};
    for (let [key, value] of mapToOb) {
        obj[key] = value;
    }
    return obj
}
console.log(mapToObj(map));


console.log('————————对象转map————————');
function objToMap (obj) {
    let objMap = new Map();
    for (let key of Object.keys(obj)) {
        objMap.set(key, obj[key]);
    }
    return objMap;
}
console.log(objToMap(globalObj));


console.log('————————map转json————————');
function mapToJson () {
    return JSON.stringify(mapToObj(map));
}
console.log(mapToJson());

function mapToJsonArr () {
    return JSON.stringify([...map]);
}
console.log(mapToJsonArr());


console.log('————————json转map————————');
function jsonToMap (scope) {
    return objToMap(JSON.parse(scope))
}
console.log(jsonToMap(globalJsonObj));
console.log(jsonToMap(globalJsonArr));



