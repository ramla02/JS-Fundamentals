let arg = process.argv[2];
arg = Number(arg);

if (isNaN(arg)) {
   console.log("Missing number of occurrences");
} else if (arg < 0) {
} else {
	for (let x = 0; x < arg; x++) {
        console.log("C is fun");
}
}
