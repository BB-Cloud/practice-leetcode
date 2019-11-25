var x = 1;
if (function f(){var c = 2; return false}) {
	x += typeof f;
}
console.log(x);
console.log(f);
console.log(c);