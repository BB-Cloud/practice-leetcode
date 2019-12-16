/** 
 * 防抖：触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
 * 思路：每次触发事件时都取消之前的延时调用方法
*/

// 防抖函数
function debounce(fn, delay) {
    let timeout = null;
    return () => {
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(fn, delay);
    }
}

// 处理函数
function handle() {
    console.log(Math.random()); 
}
// 滚动事件
window.addEventListener('scroll', debounce(handle, 1000));






/** 
 * 节流：高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
 * 思路：每次触发事件时都判断当前是否有等待执行的延时函数
*/

// 防抖函数
function throttle(fn, delay) {
    
}


