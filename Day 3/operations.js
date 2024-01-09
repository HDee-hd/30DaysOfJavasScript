
// Declare firstName, lastName, country, city, age, isMarried, year
// variable and assign value to it and use the typeof operator to check
// different data types
let firstName = "Ahmad";
let lastName = "AbdulSamad";
let country = "Dubai";
let age = 30;
let isMarried = true
const now = new Date()
let year = now.getFullYear()
let month = now.getMonth() + 1
if (month<10) {
  month = '0'+month
}
let date = now.getDate()
if (date<10) {
  date = '0'+date
}
let hours = now.getHours()
let min = (now.getMinutes())
if (min<10) {
  min = '0'+min
}
let today = `${year}-${month}-${date}  (${hours}:${min})`
console.log(typeof age);
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof isMarried);
console.log(typeof now);
console.log(typeof year);
console.log( typeof today);

// Check if typeof '10' is equal to 10
console.log(typeof '10' == 10);

// Check if parseInt('9.8') is equal to 10
console.log(typeof parseInt('9.8') == 10);

// Three Javascript Truthy value
console.log(10*10 == 100);
console.log(isMarried);
console.log(5 > 3);

// Three JavaScript falsy value
 console.log(!isMarried);
 console.log(NaN == NaN);
 console.log(5 == 4.99999);

// Figure out the result of the following comparison expression
// first without using console.log().
// After you decide your result, confirm it using console.log().
console.log(4>3);
console.log(4>=3);
console.log(4<3);
console.log(4<=3);
console.log(4==4);
console.log(4===4);
console.log(4!=4);
console.log(4!==4);
console.log(4!='4');
console.log(4=='4');
console.log(4==='4');
let a = 'python'
let b = 'jargon'
console.log(a.length !== b.length);

// Figure out the result of the following expression
// first without using the console.log().
// After you decide the result, confirm it using console.log()
console.log(4>3 && 10<12);
console.log(4>3 && 10>12);
console.log(4>3 || 10<12);
console.log(4>3 || 10>12);
console.log(!(4>3));
console.log(!(false));
console.log(!(4>3 && 10<12));
console.log(!(4>3 && 10>12));
console.log(!(4==='4'));
let ab = 'python'
let bc = 'jargon'
console.log(!(ab.includes("on") && bc.includes("on")));
console.log(today);
// The year today
console.log(year);
// Month today as a Number
console.log(now.getMonth());
// date today
console.log(date);
// Day today as a Number
console.log(now.getDate());
// Hours now
console.log(hours);
//minutes now
console.log(min);
//Seconds from Jan 1 1970 till now
console.log(Date.now());

// Calculate area of a triangle from user prompt.
alert("Calculate area of a Triangle")
let base = prompt("Enter Base Length")
let height = prompt("Enter Height")
const areaOfATriangle = 0.5 * base * height

console.log(`Base: ${base} \nHeight: ${height}`);
console.log(`The area of the Triangle is: ${areaOfATriangle}`);

//Calculate the perimeter of a Triangle
alert("Calculate the perimeter of a Triangle")
let sideA = parseInt(prompt("Enter side a"))
let sideB = parseInt(prompt("Enter side b"))
let sideC = parseInt(prompt("Enter side c"))
const pOTriangle = sideA + sideB + sideC
console.log(`Side a is: ${sideA} \nSide b is: ${sideB} \nSide c is: ${sideC} \nThe perimeter of the triangle is: ${pOTriangle}`);


// Calculate the are and perimeter of a rectangle
alert("Calculate area and perimeter of a Rectangle")
let sideARect = parseInt(prompt("Enter length of Rectangle"))
let sideBRect = parseInt(prompt("Enter width of Rectangle"))
const pORect = (2 * sideARect) + (2*sideBRect)
const areaOfARect = sideARect * sideBRect
console.log(
  `Lenght is: ${sideARect} \nWidth is: ${sideBRect}
  \nThe perimeter of the Rectangle is: ${pORect} \nThe area of the Rectangle is ${areaOfARect}`);

//Calculate the area and circumference of a circle
alert("Calculate the area and perimeter of a circle")
let radius = parseInt(prompt("Enter Radius"))
const pi = 3.14
const pOfCircle = 2 * pi * radius
const areaOfACircle = pi * radius * radius
console.log(`Area of the Circle is: ${areaOfACircle} \nPerimeter of the Circle is: ${pOfCircle}`);

//Slope is m= (y2 -y1)/(x2-x1). Find the slope btw point (2,2) and point (6,10)
let xAxis1 = 2
let xAxis2 = 6
let yAxis1 = 2
let yAxis2 = 10
let m = (yAxis2 - yAxis1)/(xAxis2 - xAxis1)
console.log(`The slope is: ${m}`);

let x = parseInt(prompt("Enter x value"))
let y = x**2 + (6 * x) + 9
console.log(y);
// y = 0 when x = -3

//Calculte the pay of a user in rate per hours
let uHour = parseInt(prompt("Enter hours"))
let uRate = parseInt(prompt("Enter rate amount"))
let uEarn = uHour * uRate

console.log(`

  `);
