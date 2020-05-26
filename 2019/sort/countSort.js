function countingSort(iArr, max) {
    var n = iArr.length;
    var oArr = [];
    // 创建长度max的数组，填充0
    var C = [];
    for(var i = 0; i <= max; i++){
        C[i] = 0;
    }
    // 遍历输入数组，填充C
    for(var j = 0; j < n; j++){
        C[iArr[j]]++;
    }
    // 遍历C，输出数组
    for(var k = 0; k <= max; k++){
        // 按顺序将值推入输出数组，并将对应标志位减1
        while(C[k]-- > 0){
            oArr.push(k);
        }
    }
    return oArr;
}
let res = countingSort([10, 2, 4, 6, 1, 3], 10)
console.log(res);
