//31.. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var arr = ["rija", "zeeshan", "eman", "admin", "zayan"];
arr = [];
if (arr.length === 0) {
    console.log("your array is empty, print the message We need to find some users!");
}
else {
    arr.forEach(function (username) {
        if (username === "admin") {
            console.log("hello ".concat(username, ", would you like to see a status report?\n        "));
        }
        else {
            console.log("hello ".concat(username, ", thank you for logging in again. "));
        }
    });
}
