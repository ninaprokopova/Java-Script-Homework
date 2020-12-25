set 100 1
set 101 2
set 102 0
input 100
input 101
cmp 100 101
jl 3 9
div 101 100 101
goto 6
div 100 101 100
cmp 100 102
je 9 3
cmp 101 102
je 3 -25
add 100 101 100
out 100
