

// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
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


console.log("unfortunately, the new dinner table wont arrive on time, so i can invite two guest to dinner with me");
//using while-loop to remove guest from the array until only two names remain

 while(guestlist.length > 2){
    let removedGuest = guestlist.pop();
    console.log(`sorry, ${removedGuest} i cant invite you to dinner`);
 }

 console.log("invitation to the last 2 guest");

 guestlist.forEach(lasttwo => console.log(`lucky ${lasttwo}, you are still invited to the dinner`));
//removing last two guest from the list
 guestlist.pop();
 guestlist.pop();

 console.log("Empty List:" , guestlist);