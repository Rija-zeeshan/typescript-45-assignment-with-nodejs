
//41.. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


//define a function to print each magician name from an array

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

//define an array containing magicians name
let magician_names = ["harry poter" , "hamza" , "usman"]

//call the function to print each magician name
show_magicians(magician_names)