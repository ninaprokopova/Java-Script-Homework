let fs = require('fs');
S = fs.readFileSync('inp.txt');
S = S.toString();
console.log('Input string: ', S);
let T = 'abracad';
console.log('Template: ', T)
let n = new Array() //плохой суффикс
for (let j = 0; j < T.length; j++)
	n[T.charAt(j)] = j+1
// for (j in n)
	// console.log(j, n[j])

let mes = new Array() //массив с вхождениями

let rpr = new Array()
let m = T.length
let Tr = ''
for (let i = 0; i < m; i++)
	Tr += '*'
Tr += T
function compare(t1, t2){
	for (let i = 0; i < t1.length; i++)
	{
		if (t1[i] == '*' || t2[i] == '*' || t1[i] == t2[i])
			continue
		else
			return false
	}
	return true
}

for (let l = 0; l < T.length; l++){
	rpr[l] = m
	k = m
	while (true){
		if ((k <= m - l )
		&& compare(Tr.substring(k+m-1, k+m+l-2+1), T.substring(m-l, m-1+1)) 
		&& ( k>1 && T[k-2]!=T[m-l-1] || k<=1 ))
			break
		k -= 1
	}
	rpr[l] = k
}

// for (j in rpr)
		// console.log(j, rpr[j])

let shift2 = new Array()

for (let l = 0; l < T.length; l++){
	shift2[l] = m - rpr[l] - l + 1
}

console.log('Table Shift2')
for (j in shift2)
		console.log(j, shift2[j])
	
for (let i = 0; i < S.length - m; i++){
	k = T.length - 1 //отвечает за индекс шаблона и подстроки
	l = 0 //показывает, сколько символов удачно сравнилось
	while (k >= 0){
		if  (S[i+k] != T[k])
			break
		l += 1
		k -= 1	
	} 
	if (k == -1){
		mes.push(i)
		shift1 = 1
		l -= 1
	}
	else{
		let ch = T[k]
		shift1 = m - n[ch] - l
	}
	shift = Math.max(shift1, shift2[l])
	i += shift - 1
	
}
console.log('Enties: ', mes)
