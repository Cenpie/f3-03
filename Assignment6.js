// Create a variable called "num" and assign it a value
let num = 25;

// Calculate the square root of "num" and display the result
let squareRoot = Math.sqrt(num);
console.log(`The square root of ${num} is ${squareRoot}`);

// Generate a random number between 0 and 10 and display the result
let randomNum = Math.round(Math.random() * 10);
console.log(`A random number between 0 and 10 is ${randomNum}`);

// Create a new date object and display the current date and time
let today = new Date();
console.log(`The current date and time is ${today}`);

// Extract various information from the date object and display it
console.log(`The current year is ${today.getFullYear()}`);
console.log(`The current month (in numeric format) is ${today.getMonth()}`);
console.log(`The current day of the month is ${today.getDate()}`);
console.log(`The current day of the week (in numeric format) is ${today.getDay()}`);

// Update the date object and display the new values
today.setFullYear(2022);
today.setMonth(11);
today.setDate(31);
console.log(`The updated date and time is ${today}`);
console.log(`The updated year is ${today.getFullYear()}`);
console.log(`The updated month (in numeric format) is ${today.getMonth()}`);
console.log(`The updated day of the month is ${today.getDate()}`);

// Create a new date object for your birthday and calculate the time difference with today's date
let birthday = new Date(1999, 1, 4);
let timeDiff = today.getTime() - birthday.getTime();
console.log(`The number of milliseconds between your birthday and today is ${timeDiff}`);

// Calculate the number of days between your birthday and today
let dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
console.log(`The number of days between your birthday and today is ${dayDiff}`);