//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var friendsName = ["shehzeen", "rameen", "eman", "zayan"];
friendsName.forEach(function (friendname) { return console.log("hello ".concat(friendname, ", how are you?")); });
