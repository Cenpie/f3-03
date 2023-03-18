let sentence = "JavaScript is a popular programming language used for web development.";

// Display the length of the sentence
console.log(`The length of the sentence is ${sentence.length}`);

// Find the index of the first occurrence of the letter "e"
let firstEIndex = sentence.indexOf("e");
console.log(`The index of the first occurrence of "e" is ${firstEIndex}`);

// Extract the first word from the sentence
let firstSpaceIndex = sentence.indexOf(" ");
let firstWord = sentence.slice(0, firstSpaceIndex);
console.log(`The first word is "${firstWord}"`);

// Extract the last word from the sentence
let lastSpaceIndex = sentence.lastIndexOf(" ");
let lastWord = sentence.substring(lastSpaceIndex + 1);
console.log(`The last word is "${lastWord}"`);

// Check if the sentence contains the word "JavaScript"
let containsJavaScript = sentence.includes("JavaScript");
console.log(`The sentence ${containsJavaScript ? "contains" : "does not contain"} "JavaScript"`);

// Replace "JavaScript" with "Python" in the sentence
let newSentence = sentence.replace("JavaScript", "Python");
console.log(`The new sentence is "${newSentence}"`);

// Split the sentence into an array of words
let words = sentence.split(" ");
console.log(`The sentence contains ${words.length} words`);

// Capitalise each word in the sentence
let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
let newCapitalizedSentence = capitalizedWords.join(" ");
console.log(`The new capitalized sentence is "${newCapitalizedSentence}"`);

// Construct a message that includes information about the sentence
let message = `The sentence "${sentence}" has ${sentence.length} characters, the index of the first "e" is ${firstEIndex}, and the last word is "${lastWord}".`;
console.log(message);