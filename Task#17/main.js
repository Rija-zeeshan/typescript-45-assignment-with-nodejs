// creating a guest list array
var guestlist = ["zeeshan", "zayan", "zohan", "eman"];
//making variable for those guest who cant come
var dontCome = guestlist[0];
//print the name of guest who cant come
console.log(dontCome, "he will not come");
//add or remove values from guest list array
guestlist.splice(0, 1, "haseeb");
//message print for bigger table
console.log("good news ! we have found a bigger table for dinner");
//addding a new guest at starting index of array
guestlist.unshift("rafay");
//adding a new value at ending index of array
guestlist.push("shehzeen");
//get a middle index of our guest list array
var middleindex = Math.floor(guestlist.length / 2);
//adding a new guest to middle index of array
guestlist.splice(middleindex, 0, "rameen");
//print message of updated list
console.log("updated list of our guest");
//sending a invitation message to our guest one by one with thier names
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like to dinner at me")); });
console.log("unfortunately, the new dinner table wont arrive on time, so i can invite two guest to dinner with me");
//using while-loop to remove guest from the array until only two names remain
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    console.log("sorry, ".concat(removedGuest, " i cant invite you to dinner"));
}
console.log("invitation to the last 2 guest");
guestlist.forEach(function (lasttwo) { return console.log("lucky ".concat(lasttwo, ", you are still invited to the dinner")); });
//removing last two guest from the list
guestlist.pop();
guestlist.pop();
console.log("Empty List:", guestlist);
