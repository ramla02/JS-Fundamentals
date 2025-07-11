let arg = process.argv[2];
arg = Number(arg);
function factorial(n) {
	if (isNaN(n) || n == 0) {
	    return 1;
}         else {
	    return n * factorial(n - 1);
}
}
console.log(factorial(arg));
