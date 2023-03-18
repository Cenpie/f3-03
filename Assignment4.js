const shoppingList = ["bread", "butter", "milk", "jam", "ice"];
console.log("Original List");
shoppingList.forEach(element => {
    console.log(element + " ");
});
shoppingList.push("soap");
shoppingList.pop();
shoppingList.shift();
shoppingList.unshift("veg");
console.log("Short List");
const shortList = shoppingList.filter(len => len.length < 6);
shortList.forEach(element => {
    console.log(element + " ");
});
console.log("Capital List");
const capitalList = shoppingList.map(item => item.charAt(0).toUpperCase() + item.slice(1));
capitalList.forEach(element => {
    console.log(element + " ");
});
console.log("Partial List");
const partialList = shoppingList.slice(0,4);
partialList.forEach(element => {
    console.log(element + " ");
});
shoppingList.splice(1,2);
shoppingList.sort();
console.log("Sorted List");
shoppingList.forEach(element => {
    console.log(element + " ");
});