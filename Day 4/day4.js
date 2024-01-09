// Get user input using prompt(“Enter your age:”).
//  If user is 18 or older , give feedback:'You are old enough to drive'
//   but if not 18 give another feedback stating to wait for the number of 
//   years he needs to turn 18.

let myAge = 25;
let age = parseInt(prompt("Enter your age"));
switch (true) {
    case age < 18:
       let newAge = 18 - age;
    console.log(`Enter your age: ${age}
    You are left with ${newAge} years to drive`);
        break;
    case age >= 18:
    console.log(`
    Enter your age: ${age}
    You are old enough to drive.`);
        break;
    default:console.log("My friend, drop the car!!");
}
let yourAge = parseInt(prompt("Enter your age"));
    if (myAge < yourAge) {
        let newAge = yourAge - myAge
        console.log(`
        Enter your age: ${age}
        You are ${newAge} years older than me!
        `);
    } else if (yourAge < myAge) {
        let newAge = myAge - yourAge;
        console.log(`
        Enter your age: ${age}
        I am ${newAge} older than you!
        `);
    }   else{
        console.log("We are age mates!!!");
    }

let a = parseInt(prompt("Enter first number"));
let b = parseInt(prompt("Enter second number"));

if (a>b) {
    console.log(`${a} is greater than ${b}`);
}


