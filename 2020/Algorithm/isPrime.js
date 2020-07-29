// 验证素数

function isPrime(num){
	if (num === 2 || num === 3) {
		return true;
	}
	if (num % 2 === 0) {
		return false;
	}
	let divisor = 3,limit = Math.sqrt(num);
	while(limit >= divisor){
		if (num % divisor === 0) {
			return false;
		}
		else {
			divisor += 2;
		}
	}
	return true;
}
console.log(isPrime(30));  // false