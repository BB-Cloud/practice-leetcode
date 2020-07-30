function fibonacci(n) {
    let ori = [0, 1];
    if (n < 2) {
		return ori[n];
	};
    let temp1 = 1, temp2 = 0, tempSum = 0;
    for (let i = 2; i < n; i++) {
        tempSum = temp1 + temp2;
        temp2 = temp1;
        temp1 = tempSum;
    }
    return tempSum;
}

console.log(fibonacci(6));


function fibonacci1(n){
	if (n < 2) {
		return n;
	}
	return fibonacci1(n-1) + fibonacci1(n-2);
}
console.log(fibonacci1(3));