let fs = require('fs');
let arg = process.argv
let mem = new Array()

let text = fs.readFileSync('nod.jss')
text = text.toString()

mem = text.split(/\r\n| /);
mem.push('exit')
for (let i = 0; i < mem.length; i++)
  console.log(i, mem[i])

ip = 0

let readlineSync = require('readline-sync');

let equal_flag = 0
let less_flag = 0
while (mem[ip]!='exit'){
	switch(mem[ip]){
		case 'input':
		  var number = readlineSync.question('');
		  mem[mem[ip + 1]] = Number.parseInt(number);
		  ip += 2;
		  break;
		case 'set':
		  mem[mem[ip + 1]] = Number.parseInt(mem[ip + 2]);
		  ip += 3;
		  break;
		case 'out':
		  console.log(mem[mem[ip+1]])
		  ip += 2;
		  break;
		case 'add':
			mem[mem[ip + 3]] = mem[mem[ip + 1]] + mem[mem[ip + 2]];
			ip += 4;
			break;
		case 'mul':
			mem[mem[ip + 3]] = mem[mem[ip + 1]] * mem[mem[ip + 2]];
			ip += 4;
			break;
		case 'cmp':
			if (mem[mem[ip + 1]] == mem[mem[ip + 2]])
				equal_flag = 1
			if (mem[mem[ip + 1]] < mem[mem[ip + 2]])
				less_flag = 1
			ip += 3
			break;
		case 'div':
			if (mem[mem[ip + 2]] != 0)
				mem[mem[ip + 3]] = mem[mem[ip + 1]] % mem[mem[ip + 2]]
			ip += 4;
			break;
		case 'jl':
			if (less_flag == 1)
				ip += Number.parseInt(mem[ip + 1])
			else 
				ip += Number.parseInt(mem[ip + 2])
			less_flag = 0
			equal_flag = 0
			break;
		case 'je':
			if (equal_flag == 1)
				ip += Number.parseInt(mem[ip + 1])
			else
				ip += Number.parseInt(mem[ip + 2])
			less_flag = 0
			equal_flag = 0
			break;
		case 'outerr1':
			console.log('Error: n < 0')
			ip += Number.parseInt(mem[ip + 1]) 
			break
		case 'goto':
			ip += Number.parseInt(mem[ip + 1])
			break
  }
}
