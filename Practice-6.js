// Finding Quartic Soltions

let a = parseInt(prompt("Enter Number A"));
let b = parseInt(prompt("Enter Number B"));
let c = parseInt(prompt("Enter Number C"));

let root1, root2

let discriminant = (b*b)-4*a*c;

if (discriminant>0) {
    root1 = (-b + Math.sqrt(discriminant))/(2*a)
    root2 = (-b - Math.sqrt(discriminant))/(2*a)

    console.log(`Root 1 is ${root1}, ${root2}`)
    
} else if (discriminant == 0) {
    root1 = (-b)/(2*a);
    console.log(`Here both roots are same Root 1 = ${root1}, Root 2 = ${root2}`)
} else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
}