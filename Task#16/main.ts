
//16.. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// creating a guest list array
let guestlist =["zeeshan","zayan","zohan","eman"];

  //making variable for those guest who cant come
let dontCome = guestlist[0];

//print the name of guest who cant come
console.log(dontCome, "he will not come");

//add or remove values from guest list array

guestlist.splice(0,1, "haseeb");

//message print for bigger table
console.log("good news ! we have found a bigger table for dinner");

//addding a new guest at starting index of array

guestlist.unshift("rafay");

//adding a new value at ending index of array

guestlist.push("shehzeen");

//get a middle index of our guest list array

let middleindex: number =Math.floor(guestlist.length / 2);

//adding a new guest to middle index of array
guestlist.splice(middleindex, 0, "rameen")

//print message of updated list
console.log("updated list of our guest");

//sending a invitation message to our guest one by one with thier names
guestlist.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner at me`))