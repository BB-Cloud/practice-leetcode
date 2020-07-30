function greatestCommonDivisor(n, v) {
    let num = 2, res = 1;
    if (n < 2 || v < 2) {
        res = 1;
    }
    if (n >= num && v>=num) {
        while(n%num === 0 && v%num === 0) {
            res = num;
        }
        num++
    }
    return res
}