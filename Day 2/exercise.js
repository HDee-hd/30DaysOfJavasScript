let challenge = "30 Days of JavaScript";
console.log(challenge);
let strlen = challenge.length;
console.log(strlen);
let upCase = challenge.toUpperCase();
console.log(upCase);
let lowCase = challenge.toLowerCase();
console.log(lowCase);
console.log(challenge.substr(0, 2));
console.log(challenge.substr(3, 20));
console.log(challenge.includes("Script"));
console.log(challenge.split(" "));
console.log(challenge.split());
let apps = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(apps.split(", "));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt([15]));
console.log(challenge.charCodeAt([11]));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
let word = "You cannot end a sentence with because because because is a conjunction";
console.log(word.indexOf("because"));
console.log(word.lastIndexOf("because"));
console.log(word.search("because"));
let news = " 30 Days of JavaScript ";
console.log(news.trim(" "));
console.log(challenge.startsWith("30 Days of JavaScript"));
console.log(challenge.endsWith("30 Days of JavaScript"));
console.log(challenge.match("a"));
let pattern = /a/gi
console.log(challenge.match(pattern));
let oneC = "30 Days Of"
let twoC = "JavaScript and Python"
let space = " "
let c = oneC + space + twoC;
console.log(c);
console.log(c.repeat(2));
let quo1 = "\'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes. It teaches us to help one another"
console.log(quo1);
let quo2 = "Here\'s a quote from Mother Teresa that goes thus: \"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead\""
console.log(quo2);
let quo3 = "10"
console.log(typeof(quo3) === 10);
console.log(Number(quo3) == 10);
