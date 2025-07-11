let arg = process.argv[2];
arg = Number(arg);
if (isNaN(arg)) {
	console.log("Missing size");
} else if (arg < 0) {
} else {
	for (let i = 0; i < arg; i++) {
		console.log("X".repeat(arg));
}
}
