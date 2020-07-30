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