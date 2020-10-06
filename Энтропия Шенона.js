let fs = require('fs');

function existsSecondArgument() {
	let isArgumentTwo = true;
	if (process.argv < 2) 
		isArgumentTwo = false;
	
    if (!isArgumentTwo) {
        console.error('ОШИБКА!\nНе передан путь до файла со строкой');
        process.exit(-1);
}

function countEntropyInFile(pathToFile) {
	fs.readFile(pathToFile, (err, data) => {
		if (err) {
			console.error(err);
			process.exit(-1);
			
		countEntropyOfString(data.toString());
		}
}

function countEntropyOfString(string) {
	let alphabet = new Array();
	for (let i = 0; i < string.length; i++)
		alphabet[string.charAt(i)] = 0;
	for(let i = 0; i < string.length; i++)
		alphabet[string.charAt(i)]++;
	
	let powerAlpabet = 0;
	for (let i in alphabet) {
		alphabet[i] /= string.length;
		powerAlphabet++;
	}
	
	let entropy = 0;
	if (powerAlphabet > 1) {
	for (let i in alphabet)
		entropy -= alphabet[i] * Math.log2(alphabet[i]);
	entropy /= Math.log2(powerAlpabet);
	}	
	console.log('Энтропия - ' + entropy.toString());
}

existsSecondArgument();
countEntropyInFile(process.argv[2]);












