// function transformStr3(str){
//     var re=/_(\w)/g;
//     return str.replace(re,function ($0,$1){
//         return $1.toUpperCase();
//     });
// }
// console.log(transformStr3(JSON.stringify({
//     a_bc_def: [{
//         foo_bar: 2
//     }, {
//         goo_zxy: 2
//     }]
// })))

// function intPart(str) {
//     const arr = str.split("").reverse();
//     const final = common(arr);
//     return final.reverse().join('');
// }

// function floatPart(str) {
//     const arr = str.split("");
//     const final = common(arr);
//     return final.join('');
// }

// function common(arr) {
//     let req = [];
//     for (let i = 0;i < arr.length; i++) {
//       req.push(arr[i]);
//       if ((i+1)%3 === 0) {
//         req.push(',');
//       }
//     }
//     return req;
// }

// function format(num) {
//     const str = String(num);
//     if (str.indexOf('.') > -1) {
//         const intNum = str.split('.')[0];
//         const floatNum = str.split('.')[1];
//         const front = intPart(intNum);
//         const end = floatPart(floatNum);
//         return `${front}.${end}`
//     } else {
//         const front = intPart(str);
//         return `${front}`
//     }
    
//   }

// console.log(format("1234567"))

const tree = [
    {
        id: 1001,
        parentId: 0,
        name: 'AA',
    },
    {
        id: 1002,
        parentId: 1001,
        name: 'BB',
    },
    {
        id: 1003,
        parentId: 1001,
        name: 'CC',
    },
    {
        id: 1004,
        parentId: 1003,
        name: 'DD',
    },
    {
        id: 1005,
        parentId: 1004,
        name: 'FF',
    }
]

function printTree (parentId,spaceTimes) {
    MAP[parentId] && MAP[parentId].forEach(item => {
        console.log(getSpace(spaceTimes)+item.name);
        printTree(item.id,spaceTimes+1);
    });
}

function transform () {
    const map = {};
    tree.forEach((item) => {
        if(item.parentId===0){
            map0 = item;
        }
        if (map[item.parentId]) {
            map[item.parentId].push(item)
        } else {
            map[item.parentId] = [item];
        }
    })
    return map;
}
function getSpace(spaceTimes){
    let spaces="";
    for(let i=0;i<spaceTimes;i++){
        spaces+=" ";
    }
    return spaces;
}

let map0 = null;
const MAP = transform();

printTree('0', 0);
