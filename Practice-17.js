// JavaScript Program to Print the Fibonacci Sequence

const num = parseInt(prompt("Enter Number"));

let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= num; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    
    // const element = i + (i-1);
    // console.log(element)
}