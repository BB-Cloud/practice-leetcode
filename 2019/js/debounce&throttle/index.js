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
    console.log('debounce', Math.random()); 
}
// 滚动事件
console.log(1, document.querySelector('#debounce'));
console.log(2, document.getElementById('debounce'));
document.querySelector('#debounce').addEventListener('scroll', debounce(handle, 500));



/** 
 * 节流：高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
 * 思路：每次触发事件时都判断当前是否有等待执行的延时函数
*/

// 节流函数 时间戳写法
let throttle = function(func, delay) {
    let prev = Date.now();
    return function() {
        let context = this;
        let args = arguments;
        let now = Date.now();
        if (now - prev >= delay) {
            func.apply(context, args);
            prev = Date.now();
        }
    }
}
function handle1() {
    console.log('throttle', Math.random());
}
document.querySelector('#throttle').addEventListener('scroll', throttle(handle1, 3000));

// 节流函数 定时器写法
let throttle1 = function(func, delay) {
    let timer = null;
    return function() {
        let context = this;
        let args = arguments;
        if (!timer) {
            timer = setTimeout(function() {
                func.apply(context, args);
                timer = null;
            }, delay);
        }
    }
}
function handle2() {
    console.log('throttle1', Math.random());
}
document.querySelector('#throttle1').addEventListener('scroll', throttle(handle2, 2000));

// 节流函数 时间戳+定时器  写法
let throttle2 = function(func, delay) {
    let timer = null;
    let startTime = Date.now();
    return function() {
        let curTime = Date.now();
        let remaining = delay - (curTime - startTime);
        let context = this;
        let args = arguments;
        clearTimeout(timer);
            if (remaining <= 0) {
                func.apply(context, args);
                startTime = Date.now();
            } else {
                timer = setTimeout(func, remaining);
            }
     }
}
function handle3() {
     console.log(Math.random());
}
document.querySelector('#throttle2').addEventListener('scroll', throttle(handle3, 1000));





