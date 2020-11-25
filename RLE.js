let fs = require('fs');
let arg = process.argv;
let inText;
let i = 0, n = 1;
let testString = '';
let resStr = '';

inText = fs.readFileSync('input.txt');
inText = inText.toString();
console.log(inText.length);

while (i < inText.length){
	while(inText.charAt(i) == inText.charAt(i+n))
		n++;
	console.log(inText.charAt(i)," - ", n);
	nJump = n;
	while( n >= 127){
		resStr += '#' + String.fromCharCode(127) + inText.charAt(i);
		n -= 127;
	}
	if ((n > 3) || (inText.charAt(i) == '#'))
		resStr += '#' + String.fromCharCode(n) + inText.charAt(i)
	else
		for(k = 0; k < n; k++)
			resStr += inText.charAt(i);
	i += nJump;
	n = 1;
}
console.log(resStr);
console.log(resStr.length);
fs.writeFileSync('code.txt', resStr);
console.log('коэффициент сжатия');
console.log(inText.length/resStr.length);


let j = 0;
let cdStr;
cdStr = fs.readFileSync('code.txt');
cdStr = cdStr.toString();
let decdStr = '';

while (j < cdStr.length){
if (cdStr.charAt(j) == '#'){
	let count;
	count = inText.charAt(j+1);
	 for (k = 0; k < count.charCodeAt(0); k++)
		 decdStr += cdStr.charAt(j+2);
	 j += 3;
} else {
	decdStr += cdStr.charAt(j)
	j += 1;
}
}
console.log(decdStr);
fs.writeFileSync('decode.txt', decdStr);
