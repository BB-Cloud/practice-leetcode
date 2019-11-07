function countingSort(arr){
    var len = arr.length,
        Result = [],
        Count = [],
        min = arr[0],
        max = arr[0];
    /*查找最大最小值,并将arr数置入Count数组中,统计出现次数*/
    for(var i = 0;i<len;i++){
      Count[arr[i]] = Count[arr[i]] ? Count[arr[i]] + 1 : 1;
      min = min <= arr[i] ? min : arr[i];
      max = max >= arr[i] ? max : arr[i];
    }
    console.log(Count);
    /*从最小值->最大值,将计数逐项相加*/
    for(var j = min;j<max;j++){
      Count[j+1] = (Count[j+1]||0)+(Count[j]||0);
    }
    /*Count中,下标为arr数值,数据为arr数值出现次数;反向填充数据进入Result数据*/
    for(var k = len - 1;k>=0;k--){
      /*Result[位置] = arr数据*/
      Result[Count[arr[k]] - 1] = arr[k];
      /*减少Count数组中保存的计数*/
      Count[arr[k]]--;
      /*显示Result数组每一步详情*/
    }
    return Result;
  }
  var arr = [1,6,3,2,7];
  console.log(countingSort(arr));