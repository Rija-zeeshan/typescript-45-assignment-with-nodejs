
//18.. Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let countriesToVisit: string[] = ["China" , "Denmark" , "Brazil" , "Argentina"];
console.log("orignal order:", countriesToVisit);

console.log("Alphabetical Order:", [...countriesToVisit].sort());

console.log("Still in Orignal Order:", countriesToVisit)

console.log("Reverse Order:", [...countriesToVisit].reverse());

console.log("Still in Orignal Order:", countriesToVisit);

console.log("Orignal Array Reversed:" , countriesToVisit.reverse());

console.log("Back to Orignal Order:", countriesToVisit.reverse());

console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

console.log("Orignal Array Reversed:" , countriesToVisit.reverse());



