// JavaScript Program to Print All Prime Numbers in an Interval

let lowerNumber = parseInt(prompt(`Enter Lower Number`));
let higherNumber = parseInt(prompt(`Enter Higher Number`));

for (let i = lowerNumber; i <= higherNumber; i++) {
    if (lowerNumber % i == 0) {
        console.log(`${i}`)
    }
    
}