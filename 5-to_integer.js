let number = process.argv[2];
number = Number(number);
if (!number) {
	console.log("Not a number");
} else {
	console.log("My number:", number);
}
