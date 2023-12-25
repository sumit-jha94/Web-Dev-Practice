let a = parseInt(prompt("Enter 1st Number"));
let b = parseInt(prompt("Enter 2nd Number"));
let c = parseInt(prompt("Enter 3rd Number"));

if (a>b && a > c) {
    console.log(`Number 1 is greatest and number is ${a}`)
} else if (b>a && b>c) {
    console.log(`Number 2 is greatest and number is ${b}`)
}else {
    console.log(`Number 3 is greatest and number is ${c}`)
}