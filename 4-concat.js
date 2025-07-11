const arg = process.argv[2];
const arg2 = process.argv[3];
if (arg && arg2) {
	console.log(arg + " is " + arg2);
} else if (arg && !arg2) {
	console.log(arg + " is  undefined");
} else {
	console.log("undefined is undefined");
}
