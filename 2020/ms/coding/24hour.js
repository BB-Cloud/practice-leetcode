/** * ## 问题3 * 将48位的时间位图格式化成字符串 * 要求：写一个函数timeBitmapToRanges，将下述规则描述的时间位图转换成一个选中时间区间的数组。 *  * 规则描述： * 将一天24小时按每半小划分成48段，我们用一个位图表示选中的时间区间，例如`110000000000000000000000000000000000000000000000`， * 表示第一个半小时和第二个半小时被选中了，其余时间段都没有被选中，也就是对应00:00~01:00这个时间区间。一个位图中可能有多个不连续的 * 时间区间被选中，例如`110010000000000000000000000000000000000000000000`，表示00:00-1:00和02:00-02:30这两个时间区间被选中了。 *  * 示例输入：`"110010000000000000000000000000000000000000000000"` * 示例输出：`["00:00~01:00", "02:00~02:30"]` */

function timeBitmapToRanges (str) {
  let startIndex = 0, endIndex = 0;
  let arr = []
  for (let i = 0 ; i < str.length ; i++) {
    if (str[i] > 0) {
      endIndex = endIndex + 1
    } else {
      if (startIndex < endIndex) {
        arr.push([startIndex, endIndex]);
      }
      startIndex = i + 1
      endIndex = startIndex
    }
  }
  let timArr = arr.map((itx) => {
    return itx.map((item) => {
      let hour = parseInt(item / 2) > 10 ? parseInt(item / 2) : `0${parseInt(item / 2)}`
      let min = item % 2 ? '30' : '00';
      return `${hour}:${min}`
    });
  });
  return timArr;
}

let strtime = '110010000000000000000000000000000000000000000000'
let res = timeBitmapToRanges(strtime)
console.log(res);
