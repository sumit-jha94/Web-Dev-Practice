const number = parseInt(prompt("Enter a positive number: "));


// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            
            console.log("Not Prime")
            break;
        } else{ console.log(" Prime")}
    }

    
}

